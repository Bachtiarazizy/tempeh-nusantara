// app/api/admin/products/route.js

import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET - List all products with pagination and filters
export async function GET(request) {
  try {
    const session = await auth();

    // Check authentication and admin role
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized. Admin access required" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const category = searchParams.get("category") || "";
    const sortBy = searchParams.get("sortBy") || "createdAt";
    const sortOrder = searchParams.get("sortOrder") || "desc";

    const skip = (page - 1) * limit;

    // Build filter conditions
    const where = {
      ...(search && {
        OR: [{ name: { contains: search, mode: "insensitive" } }, { sku: { contains: search, mode: "insensitive" } }, { description: { contains: search, mode: "insensitive" } }],
      }),
      ...(status && { status }),
      ...(category && { category }),
    };

    // Get total count
    const total = await prisma.product.count({ where });

    // Get products
    const products = await prisma.product.findMany({
      where,
      skip,
      take: limit,
      orderBy: { [sortBy]: sortOrder },
      include: {
        _count: {
          select: {
            orderItems: true,
            cartItems: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products", details: error.message }, { status: 500 });
  }
}

// POST - Create new product
export async function POST(request) {
  try {
    const session = await auth();

    // Check authentication and admin role
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized. Admin access required" }, { status: 401 });
    }

    const body = await request.json();
    const { sku, name, slug, description, price, comparePrice, stock, weight, status, category, images, featured } = body;

    // Validation
    if (!sku || !name || !slug || !price || !category) {
      return NextResponse.json({ error: "SKU, name, slug, price, and category are required" }, { status: 400 });
    }

    // Check if SKU already exists
    const existingSku = await prisma.product.findUnique({
      where: { sku },
    });

    if (existingSku) {
      return NextResponse.json({ error: "Product with this SKU already exists" }, { status: 400 });
    }

    // Check if slug already exists
    const existingSlug = await prisma.product.findUnique({
      where: { slug },
    });

    if (existingSlug) {
      return NextResponse.json({ error: "Product with this slug already exists" }, { status: 400 });
    }

    // Create product
    const product = await prisma.product.create({
      data: {
        sku,
        name,
        slug,
        description: description || null,
        price: parseFloat(price),
        comparePrice: comparePrice ? parseFloat(comparePrice) : null,
        stock: stock ? parseInt(stock) : 0,
        weight: weight ? parseFloat(weight) : null,
        status: status || "ACTIVE",
        category,
        images: images || [],
        featured: featured || false,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Product created successfully",
        data: product,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Failed to create product", details: error.message }, { status: 500 });
  }
}
