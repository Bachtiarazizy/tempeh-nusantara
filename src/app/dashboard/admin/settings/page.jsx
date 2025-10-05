"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    // Business Info
    businessName: "Tempe Nusantara",
    businessEmail: "info@tempenusantara.com",
    businessPhone: "+62 812-3456-7890",
    businessAddress: "Jl. Tempe Raya No. 123, Jakarta",

    // Commission Settings
    affiliateCommissionRate: 5,
    minimumPayout: 100000,
    payoutSchedule: "bi-weekly",

    // Shipping Settings
    freeShippingThreshold: 500000,
    domesticShippingRate: 50000,
    internationalShippingRate: 150000,

    // Payment Settings
    bankName: "Bank Mandiri",
    accountNumber: "1234567890",
    accountName: "PT Tempe Nusantara",

    // Notification Settings
    emailNotifications: true,
    whatsappNotifications: true,
    orderNotifications: true,
    affiliateNotifications: true,

    // WhatsApp Settings
    whatsappNumber: "+6281234567890",
    whatsappMessage: "Halo, saya tertarik dengan produk tempe Anda",
  });

  const [activeTab, setActiveTab] = useState("business");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Simulate save
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  const tabs = [
    { id: "business", label: "Informasi Bisnis", icon: "🏢" },
    { id: "commission", label: "Komisi Affiliate", icon: "💰" },
    { id: "shipping", label: "Pengiriman", icon: "🚚" },
    { id: "payment", label: "Pembayaran", icon: "💳" },
    { id: "notifications", label: "Notifikasi", icon: "🔔" },
    { id: "whatsapp", label: "WhatsApp", icon: "📱" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-primary">Pengaturan Sistem</h2>
          <p className="text-gray-600">Kelola konfigurasi aplikasi dan preferensi</p>
        </div>
        {saved && <Badge className="bg-green-500">✓ Perubahan tersimpan</Badge>}
      </div>

      {/* Tabs */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <Button key={tab.id} variant={activeTab === tab.id ? "default" : "outline"} onClick={() => setActiveTab(tab.id)} className="whitespace-nowrap">
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Business Info Tab */}
      {activeTab === "business" && (
        <Card>
          <CardHeader>
            <CardTitle>Informasi Bisnis</CardTitle>
            <CardDescription>Informasi dasar tentang bisnis Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nama Bisnis</label>
              <Input value={settings.businessName} onChange={(e) => handleChange("businessName", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Bisnis</label>
              <Input type="email" value={settings.businessEmail} onChange={(e) => handleChange("businessEmail", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
              <Input value={settings.businessPhone} onChange={(e) => handleChange("businessPhone", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Alamat</label>
              <Input value={settings.businessAddress} onChange={(e) => handleChange("businessAddress", e.target.value)} />
            </div>
            <Button onClick={handleSave}>Simpan Perubahan</Button>
          </CardContent>
        </Card>
      )}

      {/* Commission Tab */}
      {activeTab === "commission" && (
        <Card>
          <CardHeader>
            <CardTitle>Pengaturan Komisi Affiliate</CardTitle>
            <CardDescription>Atur persentase komisi dan ketentuan pembayaran</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Persentase Komisi (%)</label>
              <Input type="number" value={settings.affiliateCommissionRate} onChange={(e) => handleChange("affiliateCommissionRate", e.target.value)} />
              <p className="text-sm text-gray-600 mt-1">Affiliate akan mendapat {settings.affiliateCommissionRate}% dari setiap penjualan</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Minimum Payout (Rp)</label>
              <Input type="number" value={settings.minimumPayout} onChange={(e) => handleChange("minimumPayout", e.target.value)} />
              <p className="text-sm text-gray-600 mt-1">Komisi minimal Rp {parseInt(settings.minimumPayout).toLocaleString()} untuk bisa ditarik</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Jadwal Pembayaran</label>
              <select value={settings.payoutSchedule} onChange={(e) => handleChange("payoutSchedule", e.target.value)} className="w-full border rounded px-3 py-2">
                <option value="weekly">Mingguan</option>
                <option value="bi-weekly">Dua Minggu Sekali</option>
                <option value="monthly">Bulanan</option>
              </select>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-medium mb-2">Simulasi Komisi</h4>
              <p className="text-sm">Jika affiliate berhasil menjual produk senilai Rp 1.000.000, maka komisi yang diterima:</p>
              <p className="text-lg font-bold text-primary mt-2">Rp {((1000000 * settings.affiliateCommissionRate) / 100).toLocaleString()}</p>
            </div>
            <Button onClick={handleSave}>Simpan Perubahan</Button>
          </CardContent>
        </Card>
      )}

      {/* Shipping Tab */}
      {activeTab === "shipping" && (
        <Card>
          <CardHeader>
            <CardTitle>Pengaturan Pengiriman</CardTitle>
            <CardDescription>Atur biaya dan ketentuan pengiriman</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Gratis Ongkir Minimal (Rp)</label>
              <Input type="number" value={settings.freeShippingThreshold} onChange={(e) => handleChange("freeShippingThreshold", e.target.value)} />
              <p className="text-sm text-gray-600 mt-1">Gratis ongkir untuk pembelian diatas Rp {parseInt(settings.freeShippingThreshold).toLocaleString()}</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tarif Domestik (Rp)</label>
              <Input type="number" value={settings.domesticShippingRate} onChange={(e) => handleChange("domesticShippingRate", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tarif International (Rp)</label>
              <Input type="number" value={settings.internationalShippingRate} onChange={(e) => handleChange("internationalShippingRate", e.target.value)} />
            </div>
            <Button onClick={handleSave}>Simpan Perubahan</Button>
          </CardContent>
        </Card>
      )}

      {/* Payment Tab */}
      {activeTab === "payment" && (
        <Card>
          <CardHeader>
            <CardTitle>Informasi Pembayaran</CardTitle>
            <CardDescription>Rekening untuk menerima pembayaran</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nama Bank</label>
              <Input value={settings.bankName} onChange={(e) => handleChange("bankName", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nomor Rekening</label>
              <Input value={settings.accountNumber} onChange={(e) => handleChange("accountNumber", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nama Pemilik Rekening</label>
              <Input value={settings.accountName} onChange={(e) => handleChange("accountName", e.target.value)} />
            </div>
            <div className="bg-amber-50 p-4 rounded">
              <p className="text-sm text-amber-800">
                <strong>Info:</strong> Informasi ini akan ditampilkan ke customer saat melakukan pembayaran transfer bank.
              </p>
            </div>
            <Button onClick={handleSave}>Simpan Perubahan</Button>
          </CardContent>
        </Card>
      )}

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <Card>
          <CardHeader>
            <CardTitle>Pengaturan Notifikasi</CardTitle>
            <CardDescription>Atur jenis notifikasi yang ingin Anda terima</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-600">Terima notifikasi melalui email</p>
              </div>
              <input type="checkbox" checked={settings.emailNotifications} onChange={(e) => handleChange("emailNotifications", e.target.checked)} className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between p-4 border rounded">
              <div>
                <p className="font-medium">WhatsApp Notifications</p>
                <p className="text-sm text-gray-600">Terima notifikasi melalui WhatsApp</p>
              </div>
              <input type="checkbox" checked={settings.whatsappNotifications} onChange={(e) => handleChange("whatsappNotifications", e.target.checked)} className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between p-4 border rounded">
              <div>
                <p className="font-medium">Notifikasi Pesanan Baru</p>
                <p className="text-sm text-gray-600">Dapatkan pemberitahuan saat ada pesanan baru</p>
              </div>
              <input type="checkbox" checked={settings.orderNotifications} onChange={(e) => handleChange("orderNotifications", e.target.checked)} className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between p-4 border rounded">
              <div>
                <p className="font-medium">Notifikasi Affiliate Baru</p>
                <p className="text-sm text-gray-600">Dapatkan pemberitahuan saat ada pendaftaran affiliate</p>
              </div>
              <input type="checkbox" checked={settings.affiliateNotifications} onChange={(e) => handleChange("affiliateNotifications", e.target.checked)} className="w-5 h-5" />
            </div>
            <Button onClick={handleSave}>Simpan Perubahan</Button>
          </CardContent>
        </Card>
      )}

      {/* WhatsApp Tab */}
      {activeTab === "whatsapp" && (
        <Card>
          <CardHeader>
            <CardTitle>Integrasi WhatsApp</CardTitle>
            <CardDescription>Atur kontak WhatsApp untuk bulk order</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nomor WhatsApp</label>
              <Input value={settings.whatsappNumber} onChange={(e) => handleChange("whatsappNumber", e.target.value)} placeholder="+62812345678" />
              <p className="text-sm text-gray-600 mt-1">Format: +62XXXXXXXXXX (tanpa spasi atau tanda hubung)</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pesan Default</label>
              <textarea value={settings.whatsappMessage} onChange={(e) => handleChange("whatsappMessage", e.target.value)} className="w-full border rounded px-3 py-2 h-24" />
              <p className="text-sm text-gray-600 mt-1">Pesan yang akan muncul saat customer klik tombol WhatsApp</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-medium mb-2">Preview Link</h4>
              <p className="text-sm break-all text-green-800">
                https://wa.me/{settings.whatsappNumber.replace(/[^0-9]/g, "")}?text={encodeURIComponent(settings.whatsappMessage)}
              </p>
            </div>
            <Button onClick={handleSave}>Simpan Perubahan</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
