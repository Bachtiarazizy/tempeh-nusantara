"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const statusColors = {
  PENDING: "bg-yellow-100 text-yellow-800",
  PAID: "bg-blue-100 text-blue-800",
  PROCESSING: "bg-indigo-100 text-indigo-800",
  SHIPPED: "bg-purple-100 text-purple-800",
  DELIVERED: "bg-green-100 text-green-800",
  CANCELLED: "bg-red-100 text-red-800",
};

const statusLabels = {
  PENDING: "Pending",
  PAID: "Paid",
  PROCESSING: "Processing",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    paid: 0,
    processing: 0,
    shipped: 0,
    delivered: 0,
    cancelled: 0,
    totalRevenue: 0,
  });

  // Filters and pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });

  // Fetch orders from API
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(filterStatus !== "all" && { status: filterStatus }),
        ...(searchQuery && { search: searchQuery }),
      });

      const response = await fetch(`/api/admin/orders?${queryParams}`);

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const result = await response.json();

      if (result.success) {
        setOrders(result.data);
        setPagination(result.pagination);
        setStats(result.stats);
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch orders on mount and when filters change
  useEffect(() => {
    fetchOrders();
  }, [page, limit, filterStatus, searchQuery]);

  // Update order status
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch(`/api/admin/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update order status");
      }

      // Refresh orders
      await fetchOrders();
      setSelectedOrder(null);
    } catch (err) {
      console.error("Error updating order:", err);
      alert("Gagal mengupdate status pesanan");
    }
  };

  // Update tracking and notes
  const updateTrackingAndNotes = async (orderId) => {
    try {
      const response = await fetch(`/api/admin/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trackingNumber: trackingNumber || undefined,
          notes: orderNotes || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update order");
      }

      alert("Data berhasil diupdate!");
      await fetchOrderDetail(orderId);
    } catch (err) {
      console.error("Error updating order:", err);
      alert("Gagal mengupdate data pesanan");
    }
  };

  // Fetch single order detail
  const fetchOrderDetail = async (orderId) => {
    try {
      const response = await fetch(`/api/admin/orders/${orderId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch order detail");
      }

      const result = await response.json();

      if (result.success) {
        setSelectedOrder(result.data);
        setTrackingNumber(result.data.trackingNumber || "");
        setOrderNotes(result.data.notes || "");
      }
    } catch (err) {
      console.error("Error fetching order detail:", err);
      alert("Gagal memuat detail pesanan");
    }
  };

  if (loading && orders.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat data pesanan...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <Button onClick={fetchOrders}>Coba Lagi</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-primary">Manajemen Pesanan</h2>
        <p className="text-gray-600">Kelola semua pesanan dan update status pengiriman</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
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
            <p className="text-sm text-gray-600">Processing</p>
            <p className="text-2xl font-bold text-indigo-600">{stats.processing}</p>
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
            <p className="text-sm text-gray-600">Delivered</p>
            <p className="text-2xl font-bold text-green-600">{stats.delivered}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Revenue</p>
            <p className="text-lg font-bold text-primary">Rp {(stats.totalRevenue / 1000000).toFixed(1)}M</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Cari nomor order atau nama customer..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              className="flex-1"
            />
            <Select
              value={filterStatus}
              onValueChange={(value) => {
                setFilterStatus(value);
                setPage(1);
              }}
            >
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="PAID">Paid</SelectItem>
                <SelectItem value="PROCESSING">Processing</SelectItem>
                <SelectItem value="SHIPPED">Shipped</SelectItem>
                <SelectItem value="DELIVERED">Delivered</SelectItem>
                <SelectItem value="CANCELLED">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={limit.toString()}
              onValueChange={(value) => {
                setLimit(parseInt(value));
                setPage(1);
              }}
            >
              <SelectTrigger className="w-full md:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 per halaman</SelectItem>
                <SelectItem value="25">25 per halaman</SelectItem>
                <SelectItem value="50">50 per halaman</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Pesanan</CardTitle>
          <CardDescription>
            Menampilkan {orders.length} dari {pagination.total} pesanan
          </CardDescription>
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
                {orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">{order.orderNumber}</td>
                    <td className="py-3 px-4">
                      <p className="font-medium">{order.user?.name || "N/A"}</p>
                      <p className="text-xs text-gray-600">{order.user?.phone || "N/A"}</p>
                    </td>
                    <td className="py-3 px-4 font-medium">Rp {order.total.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <Badge className={statusColors[order.status]}>{statusLabels[order.status]}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={order.paymentStatus === "PAID" ? "default" : "secondary"}>{order.paymentStatus}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      {order.affiliate ? (
                        <div>
                          <p className="text-sm">{order.affiliate.user?.name || "N/A"}</p>
                          <p className="text-xs text-green-600">+Rp {order.affiliateCommission?.toLocaleString() || 0}</p>
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="py-3 px-4">
                      <Button size="sm" variant="outline" onClick={() => fetchOrderDetail(order.id)}>
                        Detail
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600">
              Halaman {pagination.page} dari {pagination.totalPages}
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
                Sebelumnya
              </Button>
              <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))} disabled={page === pagination.totalPages}>
                Selanjutnya
              </Button>
            </div>
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
                  <CardDescription>Dibuat: {new Date(selectedOrder.createdAt).toLocaleString("id-ID")}</CardDescription>
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
                    <strong>Nama:</strong> {selectedOrder.user?.name || "N/A"}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedOrder.user?.email || "N/A"}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedOrder.user?.phone || "N/A"}
                  </p>
                  <p>
                    <strong>Alamat:</strong> {selectedOrder.shippingAddress || "N/A"}
                  </p>
                </div>
              </div>

              {/* Products */}
              <div>
                <h3 className="font-semibold mb-2">Produk</h3>
                <div className="space-y-2">
                  {selectedOrder.items?.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">{item.product?.name || "N/A"}</p>
                        <p className="text-sm text-gray-600">
                          {item.quantity} x Rp {item.price.toLocaleString()}
                        </p>
                      </div>
                      <p className="font-medium">Rp {(item.quantity * item.price).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tracking & Notes */}
              <div>
                <h3 className="font-semibold mb-2">Informasi Pengiriman & Catatan</h3>
                <div className="bg-gray-50 p-4 rounded space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nomor Resi</label>
                    <Input placeholder="Masukkan nomor resi pengiriman..." value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Catatan</label>
                    <Input placeholder="Tambahkan catatan order..." value={orderNotes} onChange={(e) => setOrderNotes(e.target.value)} />
                  </div>
                  <Button size="sm" onClick={() => updateTrackingAndNotes(selectedOrder.id)}>
                    Simpan Info Pengiriman
                  </Button>
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
                    <span>Rp {selectedOrder.shippingCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total:</span>
                    <span>Rp {selectedOrder.total.toLocaleString()}</span>
                  </div>
                  {selectedOrder.affiliate && (
                    <div className="flex justify-between text-green-600 pt-2 border-t">
                      <span>Komisi Affiliate ({selectedOrder.affiliate.name}):</span>
                      <span>Rp {selectedOrder.affiliateCommission?.toLocaleString() || 0}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Update Status */}
              <div>
                <h3 className="font-semibold mb-2">Update Status</h3>
                <div className="flex gap-2 flex-wrap">
                  <Button size="sm" variant="outline" onClick={() => updateOrderStatus(selectedOrder.id, "PAID")} disabled={selectedOrder.status === "PAID"}>
                    Set Paid
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => updateOrderStatus(selectedOrder.id, "PROCESSING")} disabled={selectedOrder.status === "PROCESSING"}>
                    Set Processing
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => updateOrderStatus(selectedOrder.id, "SHIPPED")} disabled={selectedOrder.status === "SHIPPED"}>
                    Set Shipped
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => updateOrderStatus(selectedOrder.id, "DELIVERED")} disabled={selectedOrder.status === "DELIVERED"}>
                    Set Delivered
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => updateOrderStatus(selectedOrder.id, "CANCELLED")} disabled={selectedOrder.status === "CANCELLED"}>
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
