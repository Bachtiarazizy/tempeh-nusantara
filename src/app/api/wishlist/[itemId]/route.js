// ============================================
// FILE: app/api/wishlist/[itemId]/route.js
// ============================================
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// DELETE - Remove item from wishlist
export async function DELETE(request, { params }) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { itemId } = params;

    // Verify wishlist item belongs to user
    const wishlistItem = await prisma.wishlistItem.findUnique({
      where: { id: itemId },
      include: { wishlist: true },
    });

    if (!wishlistItem || wishlistItem.wishlist.userId !== session.user.id) {
      return NextResponse.json({ error: "Wishlist item not found" }, { status: 404 });
    }

    await prisma.wishlistItem.delete({
      where: { id: itemId },
    });

    return NextResponse.json({ message: "Item removed from wishlist" });
  } catch (error) {
    console.error("Error removing wishlist item:", error);
    return NextResponse.json({ error: "Failed to remove wishlist item" }, { status: 500 });
  }
}
