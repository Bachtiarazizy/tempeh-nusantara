"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockPerformanceData = {
  overview: {
    thisMonth: {
      clicks: 1245,
      orders: 15,
      commission: 750000,
      conversionRate: 1.2,
    },
    lastMonth: {
      clicks: 890,
      orders: 11,
      commission: 550000,
      conversionRate: 1.24,
    },
    growth: {
      clicks: 39.9,
      orders: 36.4,
      commission: 36.4,
      conversionRate: -3.2,
    },
  },
  monthlyData: [
    { month: "Jan 2025", clicks: 1245, orders: 15, commission: 750000 },
    { month: "Dec 2024", clicks: 890, orders: 11, commission: 550000 },
    { month: "Nov 2024", clicks: 756, orders: 9, commission: 450000 },
    { month: "Oct 2024", clicks: 623, orders: 8, commission: 400000 },
    { month: "Sep 2024", clicks: 445, orders: 6, commission: 300000 },
    { month: "Aug 2024", clicks: 334, orders: 4, commission: 200000 },
  ],
  topProducts: [
    { name: "Premium Tempe Original", orders: 8, commission: 200000, conversionRate: 2.1 },
    { name: "Organic Tempe Special", orders: 5, commission: 175000, conversionRate: 1.8 },
    { name: "Tempe Export Quality", orders: 2, commission: 90000, conversionRate: 0.9 },
  ],
  trafficSources: [
    { source: "WhatsApp", clicks: 456, orders: 7, percentage: 36.6 },
    { source: "Instagram", clicks: 334, orders: 4, percentage: 26.8 },
    { source: "Facebook", clicks: 278, orders: 3, percentage: 22.3 },
    { source: "Direct Link", clicks: 177, orders: 1, percentage: 14.2 },
  ],
};

export default function AffiliatePerformance() {
  const [selectedPeriod, setSelectedPeriod] = useState("thisMonth");
  const data = mockPerformanceData;

  const formatGrowth = (value) => {
    const isPositive = value > 0;
    return (
      <span className={`text-sm ${isPositive ? "text-green-600" : "text-red-600"}`}>
        {isPositive ? "↗" : "↘"} {Math.abs(value)}%
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-primary">Analisis Performa</h2>
          <p className="text-gray-600">Pantau detail performa affiliate Anda</p>
        </div>
        <div className="flex space-x-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="thisMonth">Bulan Ini</SelectItem>
              <SelectItem value="lastMonth">Bulan Lalu</SelectItem>
              <SelectItem value="last3Months">3 Bulan Terakhir</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export Report
          </Button>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Klik</p>
                <p className="text-2xl font-bold text-primary">{data.overview.thisMonth.clicks.toLocaleString()}</p>
                {formatGrowth(data.overview.growth.clicks)}
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Pesanan</p>
                <p className="text-2xl font-bold text-primary">{data.overview.thisMonth.orders}</p>
                {formatGrowth(data.overview.growth.orders)}
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Komisi</p>
                <p className="text-2xl font-bold text-primary">Rp {data.overview.thisMonth.commission.toLocaleString()}</p>
                {formatGrowth(data.overview.growth.commission)}
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-primary">{data.overview.thisMonth.conversionRate}%</p>
                {formatGrowth(data.overview.growth.conversionRate)}
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Monthly Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Trend Performa Bulanan</CardTitle>
            <CardDescription>Perkembangan performa 6 bulan terakhir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.monthlyData.map((month, index) => (
                <div key={month.month} className={`p-4 rounded-lg border ${index === 0 ? "bg-blue-50 border-blue-200" : "bg-gray-50"}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{month.month}</span>
                    <Badge variant="secondary" className="text-xs">
                      {month.clicks} Klik
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-gray-600">
                        Pesanan: <span className="font-medium">{month.orders}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        Komisi: <span className="font-medium">Rp {month.commission.toLocaleString()}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Produk Terlaris</CardTitle>
            <CardDescription>Produk dengan penjualan terbaik dari referral Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center flex-1">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold text-sm">{index + 1}</div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.orders} pesanan</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">Rp {product.commission.toLocaleString()}</p>
                    <p className="text-xs text-gray-600">Conv: {product.conversionRate}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Sumber Traffic</CardTitle>
          <CardDescription>Asal klik dari berbagai platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.trafficSources.map((source) => (
              <div key={source.source} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="font-medium">{source.source}</span>
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {source.orders} pesanan
                    </Badge>
                  </div>
                  <div className="text-right">
                    <span className="font-medium">{source.clicks} klik</span>
                    <span className="text-sm text-gray-600 ml-2">({source.percentage}%)</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${source.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
