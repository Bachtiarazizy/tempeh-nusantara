import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

// PATCH - Update cart item quantity
export async function PATCH(request, { params }) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { itemId } = params;
    const body = await request.json();
    const { quantity } = body;

    if (!quantity || quantity < 0) {
      return NextResponse.json({ error: "Invalid quantity" }, { status: 400 });
    }

    // Verify cart item belongs to user
    const cartItem = await prisma.cartItem.findUnique({
      where: { id: itemId },
      include: {
        cart: true,
        product: true,
      },
    });

    if (!cartItem || cartItem.cart.userId !== session.user.id) {
      return NextResponse.json({ error: "Cart item not found" }, { status: 404 });
    }

    // Check stock
    if (quantity > cartItem.product.stock) {
      return NextResponse.json({ error: "Insufficient stock" }, { status: 400 });
    }

    // If quantity is 0, delete the item
    if (quantity === 0) {
      await prisma.cartItem.delete({
        where: { id: itemId },
      });
      return NextResponse.json({ message: "Item removed from cart" });
    }

    // Update quantity
    const updatedItem = await prisma.cartItem.update({
      where: { id: itemId },
      data: { quantity },
      include: { product: true },
    });

    return NextResponse.json({
      message: "Cart item updated",
      item: {
        cartItemId: updatedItem.id,
        productId: updatedItem.productId,
        productName: updatedItem.productName,
        price: updatedItem.price,
        quantity: updatedItem.quantity,
        image: updatedItem.image,
        variant: updatedItem.variant,
        weight: updatedItem.weight,
      },
    });
  } catch (error) {
    console.error("Error updating cart item:", error);
    return NextResponse.json({ error: "Failed to update cart item" }, { status: 500 });
  }
}

// DELETE - Remove item from cart
export async function DELETE(request, { params }) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { itemId } = params;

    // Verify cart item belongs to user
    const cartItem = await prisma.cartItem.findUnique({
      where: { id: itemId },
      include: { cart: true },
    });

    if (!cartItem || cartItem.cart.userId !== session.user.id) {
      return NextResponse.json({ error: "Cart item not found" }, { status: 404 });
    }

    await prisma.cartItem.delete({
      where: { id: itemId },
    });

    return NextResponse.json({ message: "Item removed from cart" });
  } catch (error) {
    console.error("Error removing cart item:", error);
    return NextResponse.json({ error: "Failed to remove cart item" }, { status: 500 });
  }
}
