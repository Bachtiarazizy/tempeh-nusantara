"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/shared/AuthContext";
import { Icon } from "@/components/ui/icon";

// Mock data untuk affiliate yang sedang login
const mockAffiliateData = {
  user: {
    id: 1,
    name: "Sarah Wilson",
    email: "sarah@affiliate.com",
    joinDate: "2024-12-01",
    referralCode: "SARAH2024",
  },
  stats: {
    totalClicks: 1245,
    totalOrders: 15,
    totalCommission: 750000,
    currentRank: 1,
    monthlyGoal: 20,
    conversionRate: 1.2,
    pendingCommission: 125000,
    paidCommission: 625000,
  },
  recentOrders: [
    { id: 1, customer: "John Doe", total: 125000, commission: 6250, date: "2025-01-15", status: "confirmed" },
    { id: 2, customer: "Jane Smith", total: 85000, commission: 4250, date: "2025-01-14", status: "pending" },
    { id: 3, customer: "Bob Johnson", total: 150000, commission: 7500, date: "2025-01-13", status: "confirmed" },
    { id: 4, customer: "Alice Brown", total: 95000, commission: 4750, date: "2025-01-12", status: "confirmed" },
  ],
  rankings: [
    { rank: 1, name: "Sarah Wilson", orders: 15, commission: 750000, isCurrentUser: true },
    { rank: 2, name: "Mike Chen", orders: 12, commission: 600000, isCurrentUser: false },
    { rank: 3, name: "Lisa Park", orders: 8, commission: 400000, isCurrentUser: false },
    { rank: 4, name: "David Kim", orders: 5, commission: 250000, isCurrentUser: false },
  ],
};

export default function AffiliateDashboard() {
  const { user } = useAuth();
  const affiliateData = mockAffiliateData;
  const progressPercentage = (affiliateData.stats.totalOrders / affiliateData.stats.monthlyGoal) * 100;

  const copyReferralLink = () => {
    const link = `https://tempenusantara.com/?ref=${affiliateData.user.referralCode}`;
    navigator.clipboard?.writeText(link);
    alert("Link referral berhasil disalin!");
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Selamat datang, {user?.name}!</h2>
            <p className="opacity-90">
              Bergabung sejak{" "}
              {new Date(affiliateData.user.joinDate).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="mt-2 flex items-center">
              <div className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-primary text-sm font-medium">Ranking #{affiliateData.stats.currentRank}</div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-primary text-center">
              <p className="text-sm opacity-90">Komisi Bulan Ini</p>
              <p className="text-2xl font-bold">Rp {affiliateData.stats.totalCommission.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{affiliateData.stats.totalClicks.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Klik</p>
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
                <p className="text-2xl font-bold text-primary">{affiliateData.stats.totalOrders}</p>
                <p className="text-sm text-gray-600">Total Pesanan</p>
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
                <p className="text-2xl font-bold text-primary">Rp {affiliateData.stats.totalCommission.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Komisi</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{affiliateData.stats.conversionRate}%</p>
                <p className="text-sm text-gray-600">Conversion Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Goal Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Progress Goal Bulanan</CardTitle>
            <CardDescription>Target: {affiliateData.stats.monthlyGoal} pesanan per bulan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Progress Bulan Ini</span>
                <span className="text-sm text-gray-600">
                  {affiliateData.stats.totalOrders}/{affiliateData.stats.monthlyGoal} pesanan
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-primary h-3 rounded-full transition-all duration-500" style={{ width: `${Math.min(progressPercentage, 100)}%` }}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{Math.round(progressPercentage)}% tercapai</span>
                <span className="text-gray-600">{affiliateData.stats.monthlyGoal - affiliateData.stats.totalOrders} lagi untuk target</span>
              </div>
              {progressPercentage >= 100 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 font-medium">🎉 Selamat! Target bulan ini sudah tercapai!</p>
                  <p className="text-green-700 text-sm mt-1">Anda berhak mendapat bonus pencapaian target!</p>
                </div>
              )}
              {progressPercentage >= 80 && progressPercentage < 100 && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-amber-800 font-medium">🔥 Hampir tercapai! Sedikit lagi untuk bonus target!</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Referral Link */}
        <Card>
          <CardHeader>
            <CardTitle>Link Referral Anda</CardTitle>
            <CardDescription>Bagikan link ini untuk mendapatkan komisi 5% dari setiap pembelian</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input value={`https://tempenusantara.com/?ref=${affiliateData.user.referralCode}`} readOnly className="flex-1 font-mono text-sm" />
                <Button onClick={copyReferralLink}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-800 text-sm font-medium">💡 Tips Promosi</p>
                  <p className="text-blue-700 text-xs mt-1">Bagikan di WhatsApp, Instagram Story, atau website pribadi untuk hasil maksimal!</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-medium">📱 Kode Referral</p>
                  <p className="text-green-700 text-xs mt-1 font-mono">{affiliateData.user.referralCode}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Commission Overview & Recent Orders */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Komisi Overview</CardTitle>
            <CardDescription>Ringkasan pendapatan komisi Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm text-green-700">Komisi Terbayar</p>
                  <p className="font-bold text-green-800">Rp {affiliateData.stats.paidCommission.toLocaleString()}</p>
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                <div>
                  <p className="text-sm text-amber-700">Komisi Pending</p>
                  <p className="font-bold text-amber-800">Rp {affiliateData.stats.pendingCommission.toLocaleString()}</p>
                </div>
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
                <p>
                  <strong>Info:</strong> Komisi dibayar setiap tanggal 1 dan 15 setiap bulannya setelah pesanan dikonfirmasi.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Pesanan Terbaru</CardTitle>
            <CardDescription>Pesanan dari referral Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {affiliateData.recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">#{order.id.toString().padStart(4, "0")}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-center mx-4">
                    <p className="font-medium">Rp {order.total.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Total</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+Rp {order.commission.toLocaleString()}</p>
                    <Badge variant={order.status === "confirmed" ? "default" : "secondary"} className="text-xs">
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
      </div>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Ranking Leaderboard</CardTitle>
          <CardDescription>Top performer affiliate bulan ini</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {affiliateData.rankings.map((affiliate, index) => (
              <div key={affiliate.rank} className={`flex items-center justify-between p-4 rounded-lg border ${affiliate.isCurrentUser ? "bg-blue-50 border-blue-200" : "bg-white"}`}>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 text-white font-bold ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : index === 2 ? "bg-amber-600" : "bg-gray-300"}`}>
                    {affiliate.rank}
                  </div>
                  <div>
                    <p className={`font-medium ${affiliate.isCurrentUser ? "text-blue-800" : ""}`}>
                      {affiliate.name} {affiliate.isCurrentUser && "(Anda)"}
                    </p>
                    <p className="text-sm text-gray-600">{affiliate.orders} pesanan berhasil</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">Rp {affiliate.commission.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total komisi</p>
                </div>
                {index < 3 && (
                  <div className="ml-4">
                    {index === 0 && <span className="text-2xl">👑</span>}
                    {index === 1 && <span className="text-xl">🥈</span>}
                    {index === 2 && <span className="text-xl">🥉</span>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
