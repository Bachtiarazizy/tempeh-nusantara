"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockOrders = [
  {
    id: 1,
    orderNumber: "ORD-2025-001",
    orderDate: "2025-01-15",
    products: [
      { name: "Premium Tempe Original", quantity: 5, price: 25000, image: "🥡" },
      { name: "Organic Tempe Special", quantity: 3, price: 35000, image: "🍱" },
    ],
    subtotal: 230000,
    shipping: 50000,
    total: 280000,
    status: "shipped",
    paymentStatus: "paid",
    paymentMethod: "Transfer Bank",
    shippingAddress: "Jl. Sudirman No. 123, Jakarta Selatan",
    trackingNumber: "JNE123456789",
    estimatedDelivery: "2025-01-17",
  },
  {
    id: 2,
    orderNumber: "ORD-2025-002",
    orderDate: "2025-01-14",
    products: [{ name: "Tempe Export Quality", quantity: 10, price: 45000, image: "📦" }],
    subtotal: 450000,
    shipping: 75000,
    total: 525000,
    status: "processing",
    paymentStatus: "paid",
    paymentMethod: "Transfer Bank",
    shippingAddress: "Jl. Thamrin No. 456, Jakarta Pusat",
    trackingNumber: null,
    estimatedDelivery: "2025-01-18",
  },
  {
    id: 3,
    orderNumber: "ORD-2025-003",
    orderDate: "2025-01-10",
    products: [{ name: "Premium Tempe Original", quantity: 8, price: 25000, image: "🥡" }],
    subtotal: 200000,
    shipping: 45000,
    total: 245000,
    status: "delivered",
    paymentStatus: "paid",
    paymentMethod: "COD",
    shippingAddress: "Jl. Gatot Subroto No. 789, Jakarta Selatan",
    trackingNumber: "JNE987654321",
    estimatedDelivery: "2025-01-12",
    deliveredDate: "2025-01-12",
  },
  {
    id: 4,
    orderNumber: "ORD-2025-004",
    orderDate: "2025-01-16",
    products: [{ name: "Organic Tempe Special", quantity: 6, price: 35000, image: "🍱" }],
    subtotal: 210000,
    shipping: 40000,
    total: 250000,
    status: "pending",
    paymentStatus: "unpaid",
    paymentMethod: "Transfer Bank",
    shippingAddress: "Jl. Kuningan No. 321, Jakarta Selatan",
    trackingNumber: null,
    estimatedDelivery: null,
  },
];

const statusConfig = {
  pending: { label: "Menunggu Pembayaran", color: "bg-yellow-100 text-yellow-800", icon: "⏳" },
  processing: { label: "Diproses", color: "bg-blue-100 text-blue-800", icon: "📦" },
  shipped: { label: "Dalam Pengiriman", color: "bg-purple-100 text-purple-800", icon: "🚚" },
  delivered: { label: "Selesai", color: "bg-green-100 text-green-800", icon: "✅" },
  cancelled: { label: "Dibatalkan", color: "bg-red-100 text-red-800", icon: "❌" },
};

export default function BuyerOrders() {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = orders.filter((order) => {
    const matchesStatus = filterStatus === "all" || order.status === filterStatus;
    const matchesSearch = order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    processing: orders.filter((o) => o.status === "processing").length,
    shipped: orders.filter((o) => o.status === "shipped").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
  };

  const handlePayment = (orderId) => {
    alert("Redirect ke halaman pembayaran untuk order: " + orderId);
  };

  const handleContactWhatsApp = () => {
    window.open("https://wa.me/6281234567890?text=Halo, saya ingin bertanya tentang pesanan saya", "_blank");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-primary">Pesanan Saya</h2>
        <p className="text-gray-600">Lihat dan lacak semua pesanan Anda</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">{stats.total}</p>
            <p className="text-sm text-gray-600">Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{stats.processing}</p>
            <p className="text-sm text-gray-600">Diproses</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{stats.shipped}</p>
            <p className="text-sm text-gray-600">Dikirim</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{stats.delivered}</p>
            <p className="text-sm text-gray-600">Selesai</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Cari nomor pesanan..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1" />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Diproses</SelectItem>
                <SelectItem value="shipped">Dikirim</SelectItem>
                <SelectItem value="delivered">Selesai</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => {
          const statusInfo = statusConfig[order.status];
          return (
            <Card key={order.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <p className="font-mono font-bold text-lg">{order.orderNumber}</p>
                    <p className="text-sm text-gray-600">Dipesan: {order.orderDate}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center gap-2">
                    <Badge className={statusInfo.color}>
                      {statusInfo.icon} {statusInfo.label}
                    </Badge>
                    {order.paymentStatus === "unpaid" && <Badge className="bg-red-100 text-red-800">Belum Bayar</Badge>}
                  </div>
                </div>

                {/* Products */}
                <div className="space-y-2 mb-4">
                  {order.products.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                      <span className="text-3xl">{product.image}</span>
                      <div className="flex-1">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">
                          {product.quantity} x Rp {product.price.toLocaleString()}
                        </p>
                      </div>
                      <p className="font-bold">Rp {(product.quantity * product.price).toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Subtotal:</span>
                    <span>Rp {order.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Ongkir:</span>
                    <span>Rp {order.shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-primary">Rp {order.total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" onClick={() => setSelectedOrder(order)}>
                    Lihat Detail
                  </Button>
                  {order.status === "pending" && order.paymentStatus === "unpaid" && (
                    <Button size="sm" onClick={() => handlePayment(order.orderNumber)}>
                      Bayar Sekarang
                    </Button>
                  )}
                  {order.status === "shipped" && order.trackingNumber && (
                    <Button size="sm" variant="outline">
                      Lacak Paket
                    </Button>
                  )}
                  {order.status === "delivered" && (
                    <Button size="sm" variant="outline">
                      Beli Lagi
                    </Button>
                  )}
                  <Button size="sm" variant="outline" onClick={handleContactWhatsApp}>
                    Hubungi Penjual
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-4xl mb-4">📦</p>
            <p className="text-lg font-medium mb-2">Tidak ada pesanan</p>
            <p className="text-gray-600 mb-4">Belum ada pesanan dengan status yang dipilih</p>
            <Button onClick={() => (window.location.href = "/buyer/products")}>Belanja Sekarang</Button>
          </CardContent>
        </Card>
      )}

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Detail Pesanan {selectedOrder.orderNumber}</CardTitle>
                  <CardDescription>Dipesan pada {selectedOrder.orderDate}</CardDescription>
                </div>
                <button onClick={() => setSelectedOrder(null)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Status Timeline */}
              <div>
                <h3 className="font-semibold mb-3">Status Pesanan</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${["pending", "processing", "shipped", "delivered"].includes(selectedOrder.status) ? "bg-green-500 text-white" : "bg-gray-200"}`}>✓</div>
                    <div>
                      <p className="font-medium">Pesanan Dibuat</p>
                      <p className="text-sm text-gray-600">{selectedOrder.orderDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${["processing", "shipped", "delivered"].includes(selectedOrder.status) ? "bg-green-500 text-white" : "bg-gray-200"}`}>
                      {["processing", "shipped", "delivered"].includes(selectedOrder.status) ? "✓" : "2"}
                    </div>
                    <div>
                      <p className="font-medium">Pembayaran Dikonfirmasi</p>
                      <p className="text-sm text-gray-600">{selectedOrder.paymentStatus === "paid" ? "Lunas" : "Menunggu pembayaran"}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${["shipped", "delivered"].includes(selectedOrder.status) ? "bg-green-500 text-white" : "bg-gray-200"}`}>
                      {["shipped", "delivered"].includes(selectedOrder.status) ? "✓" : "3"}
                    </div>
                    <div>
                      <p className="font-medium">Pesanan Dikirim</p>
                      <p className="text-sm text-gray-600">{selectedOrder.trackingNumber ? `Resi: ${selectedOrder.trackingNumber}` : "Belum dikirim"}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${selectedOrder.status === "delivered" ? "bg-green-500 text-white" : "bg-gray-200"}`}>{selectedOrder.status === "delivered" ? "✓" : "4"}</div>
                    <div>
                      <p className="font-medium">Pesanan Diterima</p>
                      <p className="text-sm text-gray-600">{selectedOrder.deliveredDate || `Est. ${selectedOrder.estimatedDelivery || "-"}`}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div>
                <h3 className="font-semibold mb-2">Produk</h3>
                <div className="space-y-2">
                  {selectedOrder.products.map((product, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                      <span className="text-3xl">{product.image}</span>
                      <div className="flex-1">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">
                          {product.quantity} x Rp {product.price.toLocaleString()}
                        </p>
                      </div>
                      <p className="font-medium">Rp {(product.quantity * product.price).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Info */}
              <div>
                <h3 className="font-semibold mb-2">Informasi Pengiriman</h3>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-sm">
                    <strong>Alamat:</strong> {selectedOrder.shippingAddress}
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Metode Pembayaran:</strong> {selectedOrder.paymentMethod}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h3 className="font-semibold mb-2">Ringkasan Pembayaran</h3>
                <div className="bg-gray-50 p-4 rounded space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>Rp {selectedOrder.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ongkir:</span>
                    <span>Rp {selectedOrder.shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total:</span>
                    <span className="text-primary">Rp {selectedOrder.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
