// ============================================
// FILE: app/api/wishlist/check/[productId]/route.js
// ============================================
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
// GET - Check if product is in wishlist
export async function GET(request, { params }) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ inWishlist: false });
    }

    const { productId } = params;
    const userId = session.user.id;

    const wishlist = await prisma.wishlist.findUnique({
      where: { userId },
      include: {
        items: {
          where: { productId },
        },
      },
    });

    const inWishlist = wishlist && wishlist.items.length > 0;
    const wishlistItemId = inWishlist ? wishlist.items[0].id : null;

    return NextResponse.json({
      inWishlist,
      wishlistItemId,
    });
  } catch (error) {
    console.error("Error checking wishlist:", error);
    return NextResponse.json({ inWishlist: false });
  }
}
