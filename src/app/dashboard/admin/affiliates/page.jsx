"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const mockAffiliates = [
  {
    id: 1,
    name: "Sarah Wilson",
    email: "sarah@affiliate.com",
    phone: "+62 812-3456-7890",
    referralCode: "SARAH2024",
    status: "active",
    joinDate: "2024-12-01",
    stats: {
      totalClicks: 1245,
      totalOrders: 15,
      totalSales: 7500000,
      totalCommission: 750000,
      paidCommission: 625000,
      pendingCommission: 125000,
    },
    monthlyGoal: 20,
    rank: 1,
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike@affiliate.com",
    phone: "+62 813-9876-5432",
    referralCode: "MIKE2024",
    status: "active",
    joinDate: "2024-11-15",
    stats: {
      totalClicks: 890,
      totalOrders: 12,
      totalSales: 6000000,
      totalCommission: 600000,
      paidCommission: 500000,
      pendingCommission: 100000,
    },
    monthlyGoal: 15,
    rank: 2,
  },
  {
    id: 3,
    name: "Lisa Park",
    email: "lisa@affiliate.com",
    phone: "+62 821-1234-5678",
    referralCode: "LISA2024",
    status: "pending",
    joinDate: "2025-01-10",
    stats: {
      totalClicks: 0,
      totalOrders: 0,
      totalSales: 0,
      totalCommission: 0,
      paidCommission: 0,
      pendingCommission: 0,
    },
    monthlyGoal: 10,
    rank: null,
  },
  {
    id: 4,
    name: "David Kim",
    email: "david@affiliate.com",
    phone: "+62 822-9876-5432",
    referralCode: "DAVID2024",
    status: "active",
    joinDate: "2024-10-20",
    stats: {
      totalClicks: 456,
      totalOrders: 8,
      totalSales: 4000000,
      totalCommission: 400000,
      paidCommission: 350000,
      pendingCommission: 50000,
    },
    monthlyGoal: 12,
    rank: 3,
  },
];

export default function AffiliateManagement() {
  const [affiliates, setAffiliates] = useState(mockAffiliates);
  const [selectedAffiliate, setSelectedAffiliate] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAffiliates = affiliates.filter((aff) => {
    const matchesStatus = filterStatus === "all" || aff.status === filterStatus;
    const matchesSearch = aff.name.toLowerCase().includes(searchQuery.toLowerCase()) || aff.email.toLowerCase().includes(searchQuery.toLowerCase()) || aff.referralCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const updateAffiliateStatus = (id, newStatus) => {
    setAffiliates(affiliates.map((aff) => (aff.id === id ? { ...aff, status: newStatus } : aff)));
    setSelectedAffiliate(null);
  };

  const updateMonthlyGoal = (id, newGoal) => {
    setAffiliates(affiliates.map((aff) => (aff.id === id ? { ...aff, monthlyGoal: parseInt(newGoal) } : aff)));
  };

  const stats = {
    total: affiliates.length,
    active: affiliates.filter((a) => a.status === "active").length,
    pending: affiliates.filter((a) => a.status === "pending").length,
    totalCommission: affiliates.reduce((sum, a) => sum + a.stats.totalCommission, 0),
    pendingPayout: affiliates.reduce((sum, a) => sum + a.stats.pendingCommission, 0),
    totalOrders: affiliates.reduce((sum, a) => sum + a.stats.totalOrders, 0),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-primary">Manajemen Affiliate</h2>
        <p className="text-gray-600">Kelola affiliate, set goals, dan pantau performa</p>
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
            <p className="text-sm text-gray-600">Active</p>
            <p className="text-2xl font-bold text-green-600">{stats.active}</p>
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
            <p className="text-xl font-bold text-primary">Rp {(stats.totalCommission / 1000000).toFixed(1)}M</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-xl font-bold text-amber-600">Rp {(stats.pendingPayout / 1000000).toFixed(1)}M</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Cari nama, email, atau kode referral..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1" />
            <div className="flex gap-2">
              <Button variant={filterStatus === "all" ? "default" : "outline"} onClick={() => setFilterStatus("all")}>
                Semua
              </Button>
              <Button variant={filterStatus === "active" ? "default" : "outline"} onClick={() => setFilterStatus("active")}>
                Active
              </Button>
              <Button variant={filterStatus === "pending" ? "default" : "outline"} onClick={() => setFilterStatus("pending")}>
                Pending
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Ranking Leaderboard</CardTitle>
          <CardDescription>Top performer bulan ini</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {affiliates
              .filter((a) => a.rank)
              .sort((a, b) => a.rank - b.rank)
              .slice(0, 5)
              .map((aff, index) => (
                <div key={aff.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 text-white font-bold ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : index === 2 ? "bg-amber-600" : "bg-gray-300"}`}>
                      {aff.rank}
                    </div>
                    <div>
                      <p className="font-medium">{aff.name}</p>
                      <p className="text-sm text-gray-600">{aff.stats.totalOrders} pesanan</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rp {aff.stats.totalCommission.toLocaleString()}</p>
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

      {/* Affiliates Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Affiliate</CardTitle>
          <CardDescription>Menampilkan {filteredAffiliates.length} affiliate</CardDescription>
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
                {filteredAffiliates.map((aff) => (
                  <tr key={aff.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{aff.rank ? <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">{aff.rank}</div> : <span className="text-gray-400">-</span>}</td>
                    <td className="py-3 px-4">
                      <p className="font-medium">{aff.name}</p>
                      <p className="text-xs text-gray-600">{aff.email}</p>
                    </td>
                    <td className="py-3 px-4 font-mono text-sm">{aff.referralCode}</td>
                    <td className="py-3 px-4 font-medium">{aff.stats.totalOrders}</td>
                    <td className="py-3 px-4">
                      <p className="font-medium">Rp {aff.stats.totalCommission.toLocaleString()}</p>
                      {aff.stats.pendingCommission > 0 && <p className="text-xs text-amber-600">Pending: Rp {aff.stats.pendingCommission.toLocaleString()}</p>}
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-32">
                        <p className="text-sm mb-1">
                          {aff.stats.totalOrders}/{aff.monthlyGoal}
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${Math.min((aff.stats.totalOrders / aff.monthlyGoal) * 100, 100)}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={aff.status === "active" ? "default" : "secondary"}>{aff.status}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button size="sm" variant="outline" onClick={() => setSelectedAffiliate(aff)}>
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

      {/* Affiliate Detail Modal */}
      {selectedAffiliate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Detail Affiliate - {selectedAffiliate.name}</CardTitle>
                  <CardDescription>Bergabung: {selectedAffiliate.joinDate}</CardDescription>
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
                    <strong>Email:</strong> {selectedAffiliate.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedAffiliate.phone}
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
                    <p className="text-2xl font-bold text-blue-900">{selectedAffiliate.stats.totalClicks}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="text-sm text-green-700">Total Orders</p>
                    <p className="text-2xl font-bold text-green-900">{selectedAffiliate.stats.totalOrders}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded">
                    <p className="text-sm text-purple-700">Total Penjualan</p>
                    <p className="text-xl font-bold text-purple-900">Rp {selectedAffiliate.stats.totalSales.toLocaleString()}</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded">
                    <p className="text-sm text-amber-700">Total Komisi</p>
                    <p className="text-xl font-bold text-amber-900">Rp {selectedAffiliate.stats.totalCommission.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Commission Status */}
              <div>
                <h3 className="font-semibold mb-2">Status Komisi</h3>
                <div className="bg-gray-50 p-4 rounded space-y-2">
                  <div className="flex justify-between">
                    <span>Terbayar:</span>
                    <span className="font-medium text-green-600">Rp {selectedAffiliate.stats.paidCommission.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pending:</span>
                    <span className="font-medium text-amber-600">Rp {selectedAffiliate.stats.pendingCommission.toLocaleString()}</span>
                  </div>
                  {selectedAffiliate.stats.pendingCommission > 0 && (
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
                    <Input type="number" value={selectedAffiliate.monthlyGoal} onChange={(e) => updateMonthlyGoal(selectedAffiliate.id, e.target.value)} className="w-20" />
                    <Button size="sm">Update</Button>
                  </div>
                  <div>
                    <p className="text-sm mb-2">
                      Progress: {selectedAffiliate.stats.totalOrders}/{selectedAffiliate.monthlyGoal} ({Math.round((selectedAffiliate.stats.totalOrders / selectedAffiliate.monthlyGoal) * 100)}%)
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full"
                        style={{
                          width: `${Math.min((selectedAffiliate.stats.totalOrders / selectedAffiliate.monthlyGoal) * 100, 100)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div>
                <h3 className="font-semibold mb-2">Aksi</h3>
                <div className="flex gap-2 flex-wrap">
                  {selectedAffiliate.status === "pending" && <Button onClick={() => updateAffiliateStatus(selectedAffiliate.id, "active")}>Approve Affiliate</Button>}
                  {selectedAffiliate.status === "active" && (
                    <Button variant="outline" onClick={() => updateAffiliateStatus(selectedAffiliate.id, "inactive")}>
                      Nonaktifkan
                    </Button>
                  )}
                  <Button variant="outline">Kirim Email</Button>
                  <Button variant="outline">Lihat Detail Orders</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
