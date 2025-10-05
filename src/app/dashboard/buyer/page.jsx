"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockBuyerData = {
  stats: {
    totalOrders: 12,
    activeOrders: 2,
    completedOrders: 10,
    totalSpent: 1500000,
  },
  recentOrders: [
    { id: 1, product: "Premium Tempe Original", quantity: 5, total: 125000, status: "Dikirim", date: "2025-01-15" },
    { id: 2, product: "Organic Tempe Special", quantity: 3, total: 105000, status: "Diproses", date: "2025-01-14" },
    { id: 3, product: "Tempe Export Quality", quantity: 2, total: 90000, status: "Selesai", date: "2025-01-10" },
  ],
  featuredProducts: [
    { id: 1, name: "Premium Tempe Original", price: 25000, image: "🥡", stock: 150 },
    { id: 2, name: "Organic Tempe Special", price: 35000, image: "🍱", stock: 80 },
    { id: 3, name: "Tempe Export Quality", price: 45000, image: "📦", stock: 50 },
  ],
};

export default function BuyerDashboard() {
  const data = mockBuyerData;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Selamat Datang di Tempe Nusantara!</h2>
        <p className="opacity-90">Belanja tempe berkualitas untuk kebutuhan Anda</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📦</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{data.stats.totalOrders}</p>
                <p className="text-sm text-gray-600">Total Pesanan</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🚚</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{data.stats.activeOrders}</p>
                <p className="text-sm text-gray-600">Sedang Diproses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">✅</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{data.stats.completedOrders}</p>
                <p className="text-sm text-gray-600">Selesai</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">Rp {data.stats.totalSpent.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Belanja</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Pesanan Terbaru</CardTitle>
            <CardDescription>Riwayat pesanan Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{order.product}</p>
                    <p className="text-sm text-gray-600">
                      {order.quantity} pcs • {order.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rp {order.total.toLocaleString()}</p>
                    <Badge variant={order.status === "Selesai" ? "default" : order.status === "Dikirim" ? "secondary" : "outline"} className="text-xs">
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" size="sm">
                Lihat Semua Pesanan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Featured Products */}
        <Card>
          <CardHeader>
            <CardTitle>Produk Pilihan</CardTitle>
            <CardDescription>Produk terbaik kami untuk Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.featuredProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center flex-1">
                    <span className="text-3xl mr-3">{product.image}</span>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">Stok: {product.stock} pcs</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">Rp {product.price.toLocaleString()}</p>
                    <Button size="sm" className="mt-1">
                      Beli
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
