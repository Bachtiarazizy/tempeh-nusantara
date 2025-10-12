"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const statusColors = {
  ACTIVE: "bg-green-100 text-green-800",
  INACTIVE: "bg-gray-100 text-gray-800",
  PENDING: "bg-yellow-100 text-yellow-800",
};

const statusLabels = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  PENDING: "Pending",
};

export default function AffiliateManagement() {
  const [affiliates, setAffiliates] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAffiliate, setSelectedAffiliate] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0,
    pending: 0,
    totalOrders: 0,
    totalCommission: 0,
    pendingPayout: 0,
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

  // Fetch affiliates from API
  const fetchAffiliates = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(filterStatus !== "all" && { status: filterStatus }),
        ...(searchQuery && { search: searchQuery }),
      });

      const response = await fetch(`/api/admin/affiliates?${queryParams}`);

      if (!response.ok) {
        throw new Error("Failed to fetch affiliates");
      }

      const result = await response.json();

      if (result.success) {
        setAffiliates(result.data);
        setPagination(result.pagination);
        setStats(result.stats);
        setLeaderboard(result.leaderboard || []);
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching affiliates:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch affiliates on mount and when filters change
  useEffect(() => {
    fetchAffiliates();
  }, [page, limit, filterStatus, searchQuery]);

  // Update affiliate status
  const updateAffiliateStatus = async (affiliateId, newStatus) => {
    try {
      const response = await fetch(`/api/admin/affiliates/${affiliateId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update affiliate status");
      }

      await fetchAffiliates();
      setSelectedAffiliate(null);
      toast.success("Status berhasil diupdate!");
    } catch (err) {
      console.error("Error updating affiliate:", err);
      toast.error("Gagal mengupdate status affiliate");
    }
  };

  // Update monthly goal
  const updateMonthlyGoal = async (affiliateId, newGoal) => {
    try {
      const response = await fetch(`/api/admin/affiliates/${affiliateId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ monthlyGoal: parseInt(newGoal) }),
      });

      if (!response.ok) {
        throw new Error("Failed to update monthly goal");
      }

      await fetchAffiliates();
      toast.success("Target bulanan berhasil diupdate!");
    } catch (err) {
      console.error("Error updating goal:", err);
      toast.error("Gagal mengupdate target bulanan");
    }
  };

  // Fetch single affiliate detail
  const fetchAffiliateDetail = async (affiliateId) => {
    try {
      const response = await fetch(`/api/admin/affiliates/${affiliateId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch affiliate detail");
      }

      const result = await response.json();

      if (result.success) {
        setSelectedAffiliate(result.data);
      }
    } catch (err) {
      console.error("Error fetching affiliate detail:", err);
      toast.error("Gagal memuat detail affiliate");
    }
  };

  if (loading && affiliates.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat data affiliate...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <Button onClick={fetchAffiliates}>Coba Lagi</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-primary">Manajemen Affiliate</h2>
        <p className="text-gray-600">Kelola affiliate, set goals, dan pantau performa</p>
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
            <p className="text-sm text-gray-600">Active</p>
            <p className="text-2xl font-bold text-green-600">{stats.active}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Inactive</p>
            <p className="text-2xl font-bold text-gray-600">{stats.inactive}</p>
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
            <p className="text-sm text-gray-600">Orders</p>
            <p className="text-2xl font-bold text-blue-600">{stats.totalOrders}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Komisi</p>
            <p className="text-lg font-bold text-primary">Rp {(stats.totalCommission / 1000000).toFixed(1)}M</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-lg font-bold text-amber-600">Rp {(stats.pendingPayout / 1000000).toFixed(1)}M</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Cari nama, email, atau kode referral..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              className="flex-1"
            />
            <div className="flex gap-2">
              <Button
                variant={filterStatus === "all" ? "default" : "outline"}
                onClick={() => {
                  setFilterStatus("all");
                  setPage(1);
                }}
              >
                Semua
              </Button>
              <Button
                variant={filterStatus === "active" ? "default" : "outline"}
                onClick={() => {
                  setFilterStatus("active");
                  setPage(1);
                }}
              >
                Active
              </Button>
              <Button
                variant={filterStatus === "pending" ? "default" : "outline"}
                onClick={() => {
                  setFilterStatus("pending");
                  setPage(1);
                }}
              >
                Pending
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const url = `/api/admin/affiliates/export?${new URLSearchParams({
                    ...(filterStatus !== "all" && { status: filterStatus }),
                  })}`;
                  window.open(url, "_blank");
                }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      {leaderboard.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Ranking Leaderboard</CardTitle>
            <CardDescription>Top performer bulan ini</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboard.slice(0, 5).map((aff, index) => (
                <div key={aff.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 text-white font-bold ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : index === 2 ? "bg-amber-600" : "bg-gray-300"}`}>
                      {aff.rank}
                    </div>
                    <div>
                      <p className="font-medium">{aff.user?.name || "N/A"}</p>
                      <p className="text-sm text-gray-600">{aff.totalOrders} pesanan</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rp {aff.totalCommission.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Total komisi</p>
                  </div>
                  {index < 3 && (
                    <div className="ml-4 text-2xl">
                      {index === 0 && "👑"}
                      {index === 1 && "🥈"}
                      {index === 2 && "🥉"}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Affiliates Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Affiliate</CardTitle>
          <CardDescription>
            Menampilkan {affiliates.length} dari {pagination.total} affiliate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Rank</th>
                  <th className="text-left py-3 px-4">Nama</th>
                  <th className="text-left py-3 px-4">Kode Referral</th>
                  <th className="text-left py-3 px-4">Orders</th>
                  <th className="text-left py-3 px-4">Komisi</th>
                  <th className="text-left py-3 px-4">Goal</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {affiliates.map((aff) => (
                  <tr key={aff.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{aff.rank ? <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">{aff.rank}</div> : <span className="text-gray-400">-</span>}</td>
                    <td className="py-3 px-4">
                      <p className="font-medium">{aff.user?.name || "N/A"}</p>
                      <p className="text-xs text-gray-600">{aff.user?.email || "N/A"}</p>
                    </td>
                    <td className="py-3 px-4 font-mono text-sm">{aff.referralCode}</td>
                    <td className="py-3 px-4 font-medium">{aff.totalOrders || 0}</td>
                    <td className="py-3 px-4">
                      <p className="font-medium">Rp {(aff.totalCommission || 0).toLocaleString()}</p>
                      {aff.pendingCommission > 0 && <p className="text-xs text-amber-600">Pending: Rp {aff.pendingCommission.toLocaleString()}</p>}
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-32">
                        <p className="text-sm mb-1">
                          {aff.totalOrders || 0}/{aff.monthlyGoal || 0}
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{
                              width: `${Math.min(((aff.totalOrders || 0) / (aff.monthlyGoal || 1)) * 100, 100)}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={statusColors[aff.status]}>{statusLabels[aff.status]}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button size="sm" variant="outline" onClick={() => fetchAffiliateDetail(aff.id)}>
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

      {/* Affiliate Detail Modal */}
      {selectedAffiliate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Detail Affiliate - {selectedAffiliate.user?.name || "N/A"}</CardTitle>
                  <CardDescription>Bergabung: {new Date(selectedAffiliate.createdAt).toLocaleDateString("id-ID")}</CardDescription>
                </div>
                <button onClick={() => setSelectedAffiliate(null)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contact Info */}
              <div>
                <h3 className="font-semibold mb-2">Informasi Kontak</h3>
                <div className="bg-gray-50 p-4 rounded space-y-2">
                  <p>
                    <strong>Email:</strong> {selectedAffiliate.user?.email || "N/A"}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedAffiliate.user?.phone || "N/A"}
                  </p>
                  <p>
                    <strong>Referral Code:</strong> <span className="font-mono bg-blue-100 px-2 py-1 rounded">{selectedAffiliate.referralCode}</span>
                  </p>
                  <p>
                    <strong>Referral Link:</strong> <span className="text-sm text-blue-600">https://tempenusantara.com/?ref={selectedAffiliate.referralCode}</span>
                  </p>
                </div>
              </div>

              {/* Performance Stats */}
              <div>
                <h3 className="font-semibold mb-2">Statistik Performa</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-sm text-blue-700">Total Klik</p>
                    <p className="text-2xl font-bold text-blue-900">{selectedAffiliate.totalClicks || 0}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="text-sm text-green-700">Total Orders</p>
                    <p className="text-2xl font-bold text-green-900">{selectedAffiliate.totalOrders || 0}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded">
                    <p className="text-sm text-purple-700">Total Penjualan</p>
                    <p className="text-xl font-bold text-purple-900">Rp {(selectedAffiliate.totalSales || 0).toLocaleString()}</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded">
                    <p className="text-sm text-amber-700">Total Komisi</p>
                    <p className="text-xl font-bold text-amber-900">Rp {(selectedAffiliate.totalCommission || 0).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Commission Status */}
              <div>
                <h3 className="font-semibold mb-2">Status Komisi</h3>
                <div className="bg-gray-50 p-4 rounded space-y-2">
                  <div className="flex justify-between">
                    <span>Terbayar:</span>
                    <span className="font-medium text-green-600">Rp {(selectedAffiliate.paidCommission || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pending:</span>
                    <span className="font-medium text-amber-600">Rp {(selectedAffiliate.pendingCommission || 0).toLocaleString()}</span>
                  </div>
                  {selectedAffiliate.pendingCommission > 0 && (
                    <Button size="sm" className="w-full mt-2">
                      Proses Pembayaran
                    </Button>
                  )}
                </div>
              </div>

              {/* Monthly Goal */}
              <div>
                <h3 className="font-semibold mb-2">Target Bulanan</h3>
                <div className="bg-gray-50 p-4 rounded space-y-3">
                  <div className="flex items-center gap-2">
                    <label className="text-sm">Target order per bulan:</label>
                    <Input type="number" defaultValue={selectedAffiliate.monthlyGoal || 0} className="w-20" id={`goal-${selectedAffiliate.id}`} />
                    <Button
                      size="sm"
                      onClick={() => {
                        const input = document.getElementById(`goal-${selectedAffiliate.id}`);
                        updateMonthlyGoal(selectedAffiliate.id, input.value);
                      }}
                    >
                      Update
                    </Button>
                  </div>
                  <div>
                    <p className="text-sm mb-2">
                      Progress: {selectedAffiliate.totalOrders || 0}/{selectedAffiliate.monthlyGoal || 0} ({Math.round(((selectedAffiliate.totalOrders || 0) / (selectedAffiliate.monthlyGoal || 1)) * 100)}
                      %)
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full"
                        style={{
                          width: `${Math.min(((selectedAffiliate.totalOrders || 0) / (selectedAffiliate.monthlyGoal || 1)) * 100, 100)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              {selectedAffiliate.orders && selectedAffiliate.orders.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Order Terbaru</h3>
                  <div className="bg-gray-50 p-4 rounded space-y-2">
                    {selectedAffiliate.orders.slice(0, 5).map((order) => (
                      <div key={order.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <div>
                          <p className="font-mono text-sm">{order.orderNumber}</p>
                          <p className="text-xs text-gray-600">{order.user?.name || "N/A"}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">Rp {order.total.toLocaleString()}</p>
                          <p className="text-xs text-gray-600">{new Date(order.createdAt).toLocaleDateString("id-ID")}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div>
                <h3 className="font-semibold mb-2">Aksi</h3>
                <div className="flex gap-2 flex-wrap">
                  {selectedAffiliate.status === "PENDING" && <Button onClick={() => updateAffiliateStatus(selectedAffiliate.id, "ACTIVE")}>Approve Affiliate</Button>}
                  {selectedAffiliate.status === "ACTIVE" && (
                    <Button variant="outline" onClick={() => updateAffiliateStatus(selectedAffiliate.id, "INACTIVE")}>
                      Nonaktifkan
                    </Button>
                  )}
                  {selectedAffiliate.status === "INACTIVE" && <Button onClick={() => updateAffiliateStatus(selectedAffiliate.id, "ACTIVE")}>Aktifkan Kembali</Button>}
                  <Button variant="outline">Kirim Email</Button>
                  <Button variant="outline">Lihat Semua Orders</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
