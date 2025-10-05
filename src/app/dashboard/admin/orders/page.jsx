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
    customer: "John Doe",
    email: "john@example.com",
    phone: "+62 812-3456-7890",
    products: [
      { name: "Premium Tempe Original", quantity: 10, price: 25000 },
      { name: "Organic Tempe Special", quantity: 5, price: 35000 },
    ],
    subtotal: 425000,
    shipping: 50000,
    total: 475000,
    status: "pending",
    paymentStatus: "unpaid",
    paymentMethod: "Transfer Bank",
    shippingAddress: "Jl. Sudirman No. 123, Jakarta Selatan",
    affiliate: "Sarah Wilson",
    affiliateCommission: 23750,
    createdAt: "2025-01-15 10:30",
    updatedAt: "2025-01-15 10:30",
  },
  {
    id: 2,
    orderNumber: "ORD-2025-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    phone: "+62 813-9876-5432",
    products: [{ name: "Tempe Export Quality", quantity: 20, price: 45000 }],
    subtotal: 900000,
    shipping: 75000,
    total: 975000,
    status: "paid",
    paymentStatus: "paid",
    paymentMethod: "Transfer Bank",
    shippingAddress: "Jl. Gatot Subroto No. 456, Jakarta Pusat",
    affiliate: null,
    affiliateCommission: 0,
    createdAt: "2025-01-14 15:20",
    updatedAt: "2025-01-15 09:15",
  },
  {
    id: 3,
    orderNumber: "ORD-2025-003",
    customer: "Bob Johnson",
    email: "bob@example.com",
    phone: "+62 821-1234-5678",
    products: [{ name: "Premium Tempe Original", quantity: 15, price: 25000 }],
    subtotal: 375000,
    shipping: 45000,
    total: 420000,
    status: "shipped",
    paymentStatus: "paid",
    paymentMethod: "COD",
    shippingAddress: "Jl. Thamrin No. 789, Jakarta Pusat",
    affiliate: "Mike Chen",
    affiliateCommission: 21000,
    createdAt: "2025-01-13 14:10",
    updatedAt: "2025-01-14 16:30",
  },
  {
    id: 4,
    orderNumber: "ORD-2025-004",
    customer: "Alice Brown",
    email: "alice@example.com",
    phone: "+62 822-9876-5432",
    products: [{ name: "Organic Tempe Special", quantity: 8, price: 35000 }],
    subtotal: 280000,
    shipping: 40000,
    total: 320000,
    status: "done",
    paymentStatus: "paid",
    paymentMethod: "Transfer Bank",
    shippingAddress: "Jl. Kuningan No. 321, Jakarta Selatan",
    affiliate: "Sarah Wilson",
    affiliateCommission: 16000,
    createdAt: "2025-01-10 09:45",
    updatedAt: "2025-01-12 11:20",
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  paid: "bg-blue-100 text-blue-800",
  shipped: "bg-purple-100 text-purple-800",
  done: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function OrderManagement() {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = orders.filter((order) => {
    const matchesStatus = filterStatus === "all" || order.status === filterStatus;
    const matchesSearch = order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) || order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus, updatedAt: new Date().toLocaleString() } : order)));
    setSelectedOrder(null);
  };

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    paid: orders.filter((o) => o.status === "paid").length,
    shipped: orders.filter((o) => o.status === "shipped").length,
    done: orders.filter((o) => o.status === "done").length,
    totalRevenue: orders.filter((o) => o.paymentStatus === "paid").reduce((sum, o) => sum + o.total, 0),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-primary">Manajemen Pesanan</h2>
        <p className="text-gray-600">Kelola semua pesanan dan update status pengiriman</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-2xl font-bold text-primary">{stats.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Paid</p>
            <p className="text-2xl font-bold text-blue-600">{stats.paid}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Shipped</p>
            <p className="text-2xl font-bold text-purple-600">{stats.shipped}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Done</p>
            <p className="text-2xl font-bold text-green-600">{stats.done}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Revenue</p>
            <p className="text-xl font-bold text-primary">Rp {(stats.totalRevenue / 1000000).toFixed(1)}M</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Cari nomor order atau nama customer..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1" />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="done">Done</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Pesanan</CardTitle>
          <CardDescription>Menampilkan {filteredOrders.length} pesanan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Order ID</th>
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Total</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Payment</th>
                  <th className="text-left py-3 px-4">Affiliate</th>
                  <th className="text-left py-3 px-4">Tanggal</th>
                  <th className="text-left py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">{order.orderNumber}</td>
                    <td className="py-3 px-4">
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-xs text-gray-600">{order.phone}</p>
                    </td>
                    <td className="py-3 px-4 font-medium">Rp {order.total.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <Badge className={statusColors[order.status]}>{order.status}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={order.paymentStatus === "paid" ? "default" : "secondary"}>{order.paymentStatus}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      {order.affiliate ? (
                        <div>
                          <p className="text-sm">{order.affiliate}</p>
                          <p className="text-xs text-green-600">+Rp {order.affiliateCommission.toLocaleString()}</p>
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{order.createdAt}</td>
                    <td className="py-3 px-4">
                      <Button size="sm" variant="outline" onClick={() => setSelectedOrder(order)}>
                        Detail
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Detail Pesanan {selectedOrder.orderNumber}</CardTitle>
                  <CardDescription>Dibuat: {selectedOrder.createdAt}</CardDescription>
                </div>
                <button onClick={() => setSelectedOrder(null)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Customer Info */}
              <div>
                <h3 className="font-semibold mb-2">Informasi Customer</h3>
                <div className="bg-gray-50 p-4 rounded space-y-2">
                  <p>
                    <strong>Nama:</strong> {selectedOrder.customer}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedOrder.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedOrder.phone}
                  </p>
                  <p>
                    <strong>Alamat:</strong> {selectedOrder.shippingAddress}
                  </p>
                </div>
              </div>

              {/* Products */}
              <div>
                <h3 className="font-semibold mb-2">Produk</h3>
                <div className="space-y-2">
                  {selectedOrder.products.map((product, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
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

              {/* Summary */}
              <div>
                <h3 className="font-semibold mb-2">Ringkasan</h3>
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
                    <span>Rp {selectedOrder.total.toLocaleString()}</span>
                  </div>
                  {selectedOrder.affiliate && (
                    <div className="flex justify-between text-green-600 pt-2 border-t">
                      <span>Komisi Affiliate ({selectedOrder.affiliate}):</span>
                      <span>Rp {selectedOrder.affiliateCommission.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Update Status */}
              <div>
                <h3 className="font-semibold mb-2">Update Status</h3>
                <div className="flex gap-2 flex-wrap">
                  <Button size="sm" variant="outline" onClick={() => updateOrderStatus(selectedOrder.id, "paid")}>
                    Set Paid
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => updateOrderStatus(selectedOrder.id, "shipped")}>
                    Set Shipped
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => updateOrderStatus(selectedOrder.id, "done")}>
                    Set Done
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => updateOrderStatus(selectedOrder.id, "cancelled")}>
                    Cancel Order
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
