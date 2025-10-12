// ============================================
// FILE: app/api/wishlist/route.js
// ============================================
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth"; // Changed from getServerSession
import { prisma } from "@/lib/prisma";

// GET - Get user's wishlist
export async function GET(request) {
  try {
    const session = await auth(); // Changed from getServerSession(authConfig)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    // Get or create wishlist
    let wishlist = await prisma.wishlist.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!wishlist) {
      wishlist = await prisma.wishlist.create({
        data: {
          userId,
          items: {
            create: [],
          },
        },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      });
    }

    // Format response
    const formattedWishlist = {
      id: wishlist.id,
      items: wishlist.items.map((item) => ({
        wishlistItemId: item.id,
        productId: item.productId,
        productName: item.productName,
        price: item.price,
        image: item.image,
        slug: item.product.slug,
        stock: item.product.stock,
        status: item.product.status,
        category: item.product.category,
        addedAt: item.createdAt,
      })),
      totalItems: wishlist.items.length,
    };

    return NextResponse.json(formattedWishlist);
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    return NextResponse.json({ error: "Failed to fetch wishlist" }, { status: 500 });
  }
}

// POST - Add item to wishlist
export async function POST(request) {
  try {
    const session = await auth(); // Changed from getServerSession(authConfig)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await request.json();
    const { productId } = body;

    // Validate product exists
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Get or create wishlist
    let wishlist = await prisma.wishlist.findUnique({
      where: { userId },
    });

    if (!wishlist) {
      wishlist = await prisma.wishlist.create({
        data: { userId },
      });
    }

    // Check if item already exists in wishlist
    const existingItem = await prisma.wishlistItem.findFirst({
      where: {
        wishlistId: wishlist.id,
        productId,
      },
    });

    if (existingItem) {
      return NextResponse.json(
        {
          message: "Product already in wishlist",
          item: {
            wishlistItemId: existingItem.id,
            productId: existingItem.productId,
          },
        },
        { status: 200 }
      );
    }

    // Create new wishlist item
    const wishlistItem = await prisma.wishlistItem.create({
      data: {
        wishlistId: wishlist.id,
        productId,
        productName: product.name,
        price: product.price,
        image: product.images[0] || null,
      },
      include: { product: true },
    });

    return NextResponse.json({
      message: "Item added to wishlist",
      item: {
        wishlistItemId: wishlistItem.id,
        productId: wishlistItem.productId,
        productName: wishlistItem.productName,
        price: wishlistItem.price,
        image: wishlistItem.image,
      },
    });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    return NextResponse.json({ error: "Failed to add to wishlist" }, { status: 500 });
  }
}

// DELETE - Clear wishlist
export async function DELETE(request) {
  try {
    const session = await auth(); // Changed from getServerSession(authConfig)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const wishlist = await prisma.wishlist.findUnique({
      where: { userId },
    });

    if (wishlist) {
      await prisma.wishlistItem.deleteMany({
        where: { wishlistId: wishlist.id },
      });
    }

    return NextResponse.json({ message: "Wishlist cleared" });
  } catch (error) {
    console.error("Error clearing wishlist:", error);
    return NextResponse.json({ error: "Failed to clear wishlist" }, { status: 500 });
  }
}
