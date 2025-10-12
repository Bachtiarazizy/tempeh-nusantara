"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { mockData } from "@/lib/mockData";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Dashboard Admin</h2>
        <p className="text-gray-600">Selamat datang di dashboard admin Tempe Nusantara</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Icon name="package" className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{mockData.products.length}</p>
                <p className="text-sm text-gray-600">Total Produk</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Icon name="shopping-bag" className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{mockData.orders.length}</p>
                <p className="text-sm text-gray-600">Total Pesanan</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Icon name="users" className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{mockData.affiliates.length}</p>
                <p className="text-sm text-gray-600">Total Affiliate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">Rp {mockData.affiliates.reduce((sum, a) => sum + a.commission, 0).toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Komisi</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pesanan Terbaru</CardTitle>
            <CardDescription>5 pesanan terakhir yang masuk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.orders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">#{order.id.toString().padStart(4, "0")}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rp {order.total.toLocaleString()}</p>
                    <Badge variant={order.status === "done" ? "success" : "secondary"}>{order.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Affiliate</CardTitle>
            <CardDescription>Performa affiliate terbaik</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.affiliates.slice(0, 3).map((affiliate, index) => (
                <div key={affiliate.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-amber-600"}`}>{affiliate.rank}</div>
                    <div>
                      <p className="font-medium">{affiliate.name}</p>
                      <p className="text-sm text-gray-600">{affiliate.orders} pesanan</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rp {affiliate.commission.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Komisi</p>
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
