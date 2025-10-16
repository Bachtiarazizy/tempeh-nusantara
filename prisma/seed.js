const { PrismaClient } = require("../src/generated/prisma");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function seedBuyerData() {
  console.log("🌱 Seeding buyer data...");

  // Hash password
  const hashedPassword = await bcrypt.hash("buyer123", 10);

  // 1. Create Buyer User
  const buyer = await prisma.user.upsert({
    where: { email: "buyer@example.com" },
    update: {
      password: hashedPassword,
      name: "Ahmad Fauzi",
      phone: "08123456789",
      role: "BUYER",
      status: "ACTIVE",
      emailVerified: true,
    },
    create: {
      email: "buyer@example.com",
      password: hashedPassword,
      name: "Ahmad Fauzi",
      phone: "08123456789",
      role: "BUYER",
      status: "ACTIVE",
      emailVerified: true,
    },
  });

  console.log(`✅ Created buyer: ${buyer.email}`);

  // 2. Create Addresses for Buyer
  // Delete existing addresses first to avoid duplicates
  await prisma.address.deleteMany({
    where: { userId: buyer.id },
  });

  const addresses = [
    {
      userId: buyer.id,
      label: "Rumah",
      name: "Ahmad Fauzi",
      phone: "08123456789",
      address: "Jl. Merdeka No. 123, RT 01/RW 05",
      city: "Jakarta Selatan",
      province: "DKI Jakarta",
      postalCode: "12345",
      isDefault: true,
    },
    {
      userId: buyer.id,
      label: "Kantor",
      name: "Ahmad Fauzi",
      phone: "08123456789",
      address: "Jl. Sudirman No. 456, Gedung ABC Lt. 5",
      city: "Jakarta Pusat",
      province: "DKI Jakarta",
      postalCode: "10220",
      isDefault: false,
    },
  ];

  for (const address of addresses) {
    await prisma.address.create({
      data: address,
    });
  }

  console.log(`✅ Created ${addresses.length} addresses`);

  // 3. Get or Create Products
  let products = await prisma.product.findMany({
    where: { status: "ACTIVE" },
    take: 10,
  });

  if (products.length < 5) {
    console.log("⚠️ Not enough products. Creating sample products...");

    // Create sample products
    const sampleProducts = [
      {
        sku: "TMP-001",
        name: "Tempe Mendoan Original",
        slug: "tempe-mendoan-original",
        description: "Tempe mendoan khas Purwokerto dengan bumbu rahasia yang gurih dan renyah. Cocok untuk camilan atau lauk.",
        price: 15000,
        comparePrice: 20000,
        stock: 100,
        weight: 250,
        status: "ACTIVE",
        category: "Tempe Goreng",
        images: ["https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=500"],
        featured: true,
      },
      {
        sku: "TMP-002",
        name: "Tempe Bacem Manis",
        slug: "tempe-bacem-manis",
        description: "Tempe bacem dengan bumbu manis khas Jawa Tengah. Dimasak dengan air kelapa dan rempah pilihan.",
        price: 18000,
        comparePrice: 25000,
        stock: 80,
        weight: 300,
        status: "ACTIVE",
        category: "Tempe Bumbu",
        images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500"],
        featured: true,
      },
      {
        sku: "TMP-003",
        name: "Tempe Kering Balado",
        slug: "tempe-kering-balado",
        description: "Tempe kering dengan balado pedas yang tahan lama. Perfect untuk stok makanan atau bekal.",
        price: 25000,
        comparePrice: 30000,
        stock: 150,
        weight: 200,
        status: "ACTIVE",
        category: "Tempe Kering",
        images: ["https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500"],
        featured: false,
      },
      {
        sku: "TMP-004",
        name: "Tempe Segar Premium",
        slug: "tempe-segar-premium",
        description: "Tempe segar berkualitas premium dari kedelai pilihan. Ideal untuk diolah sesuai selera Anda.",
        price: 12000,
        comparePrice: 15000,
        stock: 200,
        weight: 500,
        status: "ACTIVE",
        category: "Tempe Segar",
        images: ["https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500"],
        featured: false,
      },
      {
        sku: "TMP-005",
        name: "Tempe Orek Kacang",
        slug: "tempe-orek-kacang",
        description: "Tempe orek dengan kacang tanah, manis gurih dan renyah. Camilan favorit keluarga Indonesia.",
        price: 22000,
        comparePrice: 28000,
        stock: 60,
        weight: 250,
        status: "ACTIVE",
        category: "Tempe Kering",
        images: ["https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500"],
        featured: true,
      },
    ];

    for (const product of sampleProducts) {
      await prisma.product.upsert({
        where: { sku: product.sku },
        update: product,
        create: product,
      });
    }

    // Refresh products list
    products = await prisma.product.findMany({
      where: { status: "ACTIVE" },
      take: 10,
    });
  }

  console.log(`✅ Found ${products.length} products`);

  // 4. Create Orders with different statuses and dates
  // Delete existing orders for this buyer first
  await prisma.order.deleteMany({
    where: { userId: buyer.id },
  });

  // Make sure we have at least 5 products
  if (products.length < 5) {
    console.log("⚠️ Not enough products. Skipping order creation.");
    return;
  }

  const now = new Date();
  const orders = [
    // Delivered order from 3 months ago
    {
      orderNumber: `ORD-${Date.now()}-001`,
      userId: buyer.id,
      status: "DELIVERED",
      paymentStatus: "PAID",
      paymentMethod: "BANK_TRANSFER",
      subtotal: 330000,
      shippingCost: 20000,
      discount: 0,
      total: 350000,
      shippingName: "Ahmad Fauzi",
      shippingPhone: "08123456789",
      shippingAddress: "Jl. Merdeka No. 123, RT 01/RW 05",
      shippingCity: "Jakarta Selatan",
      shippingProvince: "DKI Jakarta",
      shippingPostalCode: "12345",
      trackingNumber: "JNE123456789",
      createdAt: new Date(now.getFullYear(), now.getMonth() - 3, 15),
      paidAt: new Date(now.getFullYear(), now.getMonth() - 3, 15),
      shippedAt: new Date(now.getFullYear(), now.getMonth() - 3, 16),
      deliveredAt: new Date(now.getFullYear(), now.getMonth() - 3, 18),
      items: [
        { productIndex: 0, quantity: 1, price: 150000 },
        { productIndex: 1, quantity: 1, price: 180000 },
      ],
    },
    // Delivered order from last month
    {
      orderNumber: `ORD-${Date.now()}-002`,
      userId: buyer.id,
      status: "DELIVERED",
      paymentStatus: "PAID",
      paymentMethod: "EWALLET",
      subtotal: 380000,
      shippingCost: 15000,
      discount: 20000,
      total: 375000,
      shippingName: "Ahmad Fauzi",
      shippingPhone: "08123456789",
      shippingAddress: "Jl. Merdeka No. 123, RT 01/RW 05",
      shippingCity: "Jakarta Selatan",
      shippingProvince: "DKI Jakarta",
      shippingPostalCode: "12345",
      trackingNumber: "JNE987654321",
      createdAt: new Date(now.getFullYear(), now.getMonth() - 1, 20),
      paidAt: new Date(now.getFullYear(), now.getMonth() - 1, 20),
      shippedAt: new Date(now.getFullYear(), now.getMonth() - 1, 21),
      deliveredAt: new Date(now.getFullYear(), now.getMonth() - 1, 23),
      items: [
        { productIndex: 1, quantity: 1, price: 180000 },
        { productIndex: 2, quantity: 1, price: 120000 },
        { productIndex: 3, quantity: 1, price: 80000 },
      ],
    },
    // Shipped order from this month
    {
      orderNumber: `ORD-${Date.now()}-003`,
      userId: buyer.id,
      status: "SHIPPED",
      paymentStatus: "PAID",
      paymentMethod: "BANK_TRANSFER",
      subtotal: 220000,
      shippingCost: 18000,
      discount: 0,
      total: 238000,
      shippingName: "Ahmad Fauzi",
      shippingPhone: "08123456789",
      shippingAddress: "Jl. Sudirman No. 456, Gedung ABC Lt. 5",
      shippingCity: "Jakarta Pusat",
      shippingProvince: "DKI Jakarta",
      shippingPostalCode: "10220",
      trackingNumber: "JNE456789123",
      createdAt: new Date(now.getFullYear(), now.getMonth(), 5),
      paidAt: new Date(now.getFullYear(), now.getMonth(), 5),
      shippedAt: new Date(now.getFullYear(), now.getMonth(), 6),
      items: [{ productIndex: 4, quantity: 1, price: 220000 }],
    },
    // Processing order from this month
    {
      orderNumber: `ORD-${Date.now()}-004`,
      userId: buyer.id,
      status: "PROCESSING",
      paymentStatus: "PAID",
      paymentMethod: "CREDIT_CARD",
      subtotal: 300000,
      shippingCost: 20000,
      discount: 30000,
      total: 290000,
      shippingName: "Ahmad Fauzi",
      shippingPhone: "08123456789",
      shippingAddress: "Jl. Merdeka No. 123, RT 01/RW 05",
      shippingCity: "Jakarta Selatan",
      shippingProvince: "DKI Jakarta",
      shippingPostalCode: "12345",
      createdAt: new Date(now.getFullYear(), now.getMonth(), 10),
      paidAt: new Date(now.getFullYear(), now.getMonth(), 10),
      items: [{ productIndex: 0, quantity: 2, price: 150000 }],
    },
    // Pending order from this month
    {
      orderNumber: `ORD-${Date.now()}-005`,
      userId: buyer.id,
      status: "PENDING",
      paymentStatus: "UNPAID",
      paymentMethod: "BANK_TRANSFER",
      subtotal: 400000,
      shippingCost: 25000,
      discount: 0,
      total: 425000,
      shippingName: "Ahmad Fauzi",
      shippingPhone: "08123456789",
      shippingAddress: "Jl. Merdeka No. 123, RT 01/RW 05",
      shippingCity: "Jakarta Selatan",
      shippingProvince: "DKI Jakarta",
      shippingPostalCode: "12345",
      createdAt: new Date(now.getFullYear(), now.getMonth(), 14),
      items: [
        { productIndex: 1, quantity: 1, price: 180000 },
        { productIndex: 4, quantity: 1, price: 220000 },
      ],
    },
  ];

  for (const orderData of orders) {
    const { items, ...orderInfo } = orderData;

    // Map product indices to actual products
    const orderItems = items.map((item) => {
      const product = products[item.productIndex];
      if (!product) {
        throw new Error(`Product at index ${item.productIndex} not found`);
      }
      return {
        productId: product.id,
        productName: product.name,
        productSku: product.sku,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.price * item.quantity,
      };
    });

    const order = await prisma.order.create({
      data: {
        ...orderInfo,
        items: {
          create: orderItems,
        },
      },
    });

    console.log(`✅ Created order: ${order.orderNumber} - ${order.status}`);
  }

  // 5. Create Cart with items
  // Delete existing cart first
  const existingCart = await prisma.cart.findUnique({
    where: { userId: buyer.id },
  });

  if (existingCart) {
    await prisma.cartItem.deleteMany({
      where: { cartId: existingCart.id },
    });
    await prisma.cart.delete({
      where: { userId: buyer.id },
    });
  }

  const cart = await prisma.cart.create({
    data: {
      userId: buyer.id,
    },
  });

  const cartItems = [
    {
      cartId: cart.id,
      productId: products[2] ? products[2].id : products[0].id,
      productSku: products[2] ? products[2].sku : products[0].sku,
      quantity: 2,
      productName: products[2] ? products[2].name : products[0].name,
      price: products[2] ? products[2].price : products[0].price,
      image: products[2] ? products[2].images[0] : products[0].images[0],
    },
    {
      cartId: cart.id,
      productId: products[3] ? products[3].id : products[1].id,
      productSku: products[3] ? products[3].sku : products[1].sku,
      quantity: 1,
      productName: products[3] ? products[3].name : products[1].name,
      price: products[3] ? products[3].price : products[1].price,
      image: products[3] ? products[3].images[0] : products[1].images[0],
    },
  ];

  for (const item of cartItems) {
    await prisma.cartItem.create({
      data: item,
    });
  }

  console.log(`✅ Created cart with ${cartItems.length} items`);

  // 6. Create Wishlist with items
  // Delete existing wishlist first
  const existingWishlist = await prisma.wishlist.findUnique({
    where: { userId: buyer.id },
  });

  if (existingWishlist) {
    await prisma.wishlistItem.deleteMany({
      where: { wishlistId: existingWishlist.id },
    });
    await prisma.wishlist.delete({
      where: { userId: buyer.id },
    });
  }

  const wishlist = await prisma.wishlist.create({
    data: {
      userId: buyer.id,
    },
  });

  const wishlistItems = [
    {
      wishlistId: wishlist.id,
      productId: products[4] ? products[4].id : products[0].id,
      productSku: products[4] ? products[4].sku : products[0].sku,
      productName: products[4] ? products[4].name : products[0].name,
      price: products[4] ? products[4].price : products[0].price,
      image: products[4] ? products[4].images[0] : products[0].images[0],
    },
  ];

  for (const item of wishlistItems) {
    await prisma.wishlistItem.create({
      data: item,
    });
  }

  console.log(`✅ Created wishlist with ${wishlistItems.length} items`);

  // 7. Create Notifications
  // Delete existing notifications first
  await prisma.notification.deleteMany({
    where: { userId: buyer.id },
  });

  const notifications = [
    {
      userId: buyer.id,
      type: "ORDER_CREATED",
      title: "Pesanan Berhasil Dibuat",
      message: "Pesanan Anda dengan nomor ORD-001 berhasil dibuat. Silakan lakukan pembayaran.",
      read: true,
      delivered: true,
      readAt: new Date(now.getFullYear(), now.getMonth(), 14),
      createdAt: new Date(now.getFullYear(), now.getMonth(), 14),
    },
    {
      userId: buyer.id,
      type: "ORDER_SHIPPED",
      title: "Pesanan Sedang Dikirim",
      message: "Pesanan Anda sedang dalam perjalanan. Nomor resi: JNE456789123",
      read: false,
      delivered: true,
      createdAt: new Date(now.getFullYear(), now.getMonth(), 6),
    },
    {
      userId: buyer.id,
      type: "ORDER_DELIVERED",
      title: "Pesanan Telah Diterima",
      message: "Pesanan Anda telah berhasil diterima. Terima kasih telah berbelanja!",
      read: false,
      delivered: true,
      createdAt: new Date(now.getFullYear(), now.getMonth() - 1, 23),
    },
  ];

  for (const notification of notifications) {
    await prisma.notification.create({
      data: notification,
    });
  }

  console.log(`✅ Created ${notifications.length} notifications`);

  console.log("\n📊 Summary:");
  console.log(`- Email: buyer@example.com`);
  console.log(`- Password: buyer123`);
  console.log(`- Role: BUYER`);
  console.log(`- Total Orders: ${orders.length}`);
  console.log(`- Total Spending: Rp ${orders.reduce((sum, o) => sum + parseFloat(o.total), 0).toLocaleString("id-ID")}`);
}

async function main() {
  try {
    await seedBuyerData();
    console.log("\n🎉 Buyer seed completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding buyer data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
