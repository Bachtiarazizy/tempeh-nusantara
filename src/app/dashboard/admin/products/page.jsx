"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { mockData } from "@/lib/mockData";

export default function AdminProducts() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-primary">Manajemen Produk</h2>
          <p className="text-gray-600">Kelola semua produk tempe Anda</p>
        </div>
        <Button>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tambah Produk
        </Button>
      </div>

      {/* Stats Cards */}
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
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{mockData.products.filter((p) => p.status === "active").length}</p>
                <p className="text-sm text-gray-600">Produk Aktif</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{mockData.products.reduce((sum, p) => sum + p.stock, 0)}</p>
                <p className="text-sm text-gray-600">Total Stok</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">Rp {Math.round(mockData.products.reduce((sum, p) => sum + p.price, 0) / mockData.products.length).toLocaleString()}</p>
                <p className="text-sm text-gray-600">Rata-rata Harga</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Produk</CardTitle>
          <CardDescription>Kelola semua produk dalam satu tempat</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">SKU</th>
                  <th className="text-left py-3 px-4">Nama Produk</th>
                  <th className="text-left py-3 px-4">Kategori</th>
                  <th className="text-left py-3 px-4">Harga</th>
                  <th className="text-left py-3 px-4">Stok</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {mockData.products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">{product.sku}</td>
                    <td className="py-3 px-4 font-medium">{product.name}</td>
                    <td className="py-3 px-4">{product.category}</td>
                    <td className="py-3 px-4">Rp {product.price.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${product.stock > 100 ? "bg-green-100 text-green-800" : product.stock > 50 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>{product.stock} pcs</span>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={product.status === "active" ? "default" : "secondary"}>{product.status}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          {product.status === "active" ? "Nonaktifkan" : "Aktifkan"}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
