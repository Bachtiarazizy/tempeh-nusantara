// app/api/admin/dashboard/route.js
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
  try {
    const session = await auth();

    // Check authentication and admin role
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized. Admin access required" }, { status: 401 });
    }

    // Get date range for this month
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const firstDayOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

    // Parallel queries for better performance
    const [
      // Products stats
      productsCount,
      activeProductsCount,
      lowStockProducts,
      totalStock,

      // Orders stats
      ordersCount,
      ordersThisMonth,
      ordersLastMonth,
      ordersByStatus,
      totalRevenue,
      revenueThisMonth,
      recentOrders,

      // Affiliates stats
      affiliatesCount,
      activeAffiliatesCount,
      pendingAffiliatesCount,
      totalCommission,
      pendingCommission,
      topAffiliates,

      // Users stats
      usersCount,
      newUsersThisMonth,
    ] = await Promise.all([
      // Products
      prisma.product.count(),
      prisma.product.count({ where: { status: "ACTIVE" } }),
      prisma.product.count({ where: { stock: { lte: 50 } } }),
      prisma.product.aggregate({ _sum: { stock: true } }),

      // Orders
      prisma.order.count(),
      prisma.order.count({
        where: { createdAt: { gte: firstDayOfMonth } },
      }),
      prisma.order.count({
        where: {
          createdAt: {
            gte: firstDayOfLastMonth,
            lt: firstDayOfMonth,
          },
        },
      }),
      prisma.order.groupBy({
        by: ["status"],
        _count: { id: true },
      }),
      prisma.order.aggregate({
        where: { paymentStatus: "PAID" },
        _sum: { total: true },
      }),
      prisma.order.aggregate({
        where: {
          paymentStatus: "PAID",
          createdAt: { gte: firstDayOfMonth },
        },
        _sum: { total: true },
      }),
      prisma.order.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }),

      // Affiliates
      prisma.affiliate.count(),
      prisma.affiliate.count({ where: { status: "ACTIVE" } }),
      prisma.affiliate.count({ where: { status: "PENDING" } }),
      prisma.affiliate.aggregate({
        _sum: { totalCommission: true },
      }),
      prisma.affiliate.aggregate({
        _sum: { pendingCommission: true },
      }),
      prisma.affiliate.findMany({
        take: 5,
        where: { status: "ACTIVE" },
        orderBy: { totalSales: "desc" },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }),

      // Users
      prisma.user.count(),
      prisma.user.count({
        where: { createdAt: { gte: firstDayOfMonth } },
      }),
    ]);

    // Calculate order growth percentage
    const orderGrowth = ordersLastMonth > 0 ? ((ordersThisMonth - ordersLastMonth) / ordersLastMonth) * 100 : 0;

    // Format orders by status
    const orderStatusMap = ordersByStatus.reduce((acc, status) => {
      acc[status.status.toLowerCase()] = status._count.id;
      return acc;
    }, {});

    // Calculate revenue growth (simplified - compare current month with total average)
    const avgMonthlyRevenue = (totalRevenue._sum.total || 0) / 12; // Simplified
    const revenueGrowth = avgMonthlyRevenue > 0 ? (((revenueThisMonth._sum.total || 0) - avgMonthlyRevenue) / avgMonthlyRevenue) * 100 : 0;

    // Get low stock products
    const lowStockProductsList = await prisma.product.findMany({
      where: { stock: { lte: 50 } },
      take: 5,
      orderBy: { stock: "asc" },
      select: {
        id: true,
        name: true,
        sku: true,
        stock: true,
        status: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        // Products summary
        products: {
          total: productsCount,
          active: activeProductsCount,
          lowStock: lowStockProducts,
          totalStock: totalStock._sum.stock || 0,
          lowStockList: lowStockProductsList,
        },

        // Orders summary
        orders: {
          total: ordersCount,
          thisMonth: ordersThisMonth,
          lastMonth: ordersLastMonth,
          growth: Math.round(orderGrowth),
          byStatus: {
            pending: orderStatusMap.pending || 0,
            paid: orderStatusMap.paid || 0,
            processing: orderStatusMap.processing || 0,
            shipped: orderStatusMap.shipped || 0,
            delivered: orderStatusMap.delivered || 0,
            cancelled: orderStatusMap.cancelled || 0,
          },
          recent: recentOrders,
        },

        // Revenue summary
        revenue: {
          total: totalRevenue._sum.total || 0,
          thisMonth: revenueThisMonth._sum.total || 0,
          growth: Math.round(revenueGrowth),
        },

        // Affiliates summary
        affiliates: {
          total: affiliatesCount,
          active: activeAffiliatesCount,
          pending: pendingAffiliatesCount,
          totalCommission: totalCommission._sum.totalCommission || 0,
          pendingCommission: pendingCommission._sum.pendingCommission || 0,
          topPerformers: topAffiliates.map((aff, index) => ({
            ...aff,
            rank: index + 1,
          })),
        },

        // Users summary
        users: {
          total: usersCount,
          newThisMonth: newUsersThisMonth,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return NextResponse.json({ error: "Failed to fetch dashboard stats", details: error.message }, { status: 500 });
  }
}
