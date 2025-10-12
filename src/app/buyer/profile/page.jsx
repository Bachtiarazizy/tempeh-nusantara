"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function BuyerProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+62 812-3456-7890",
    joinDate: "2024-10-15",
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Rumah",
      name: "John Doe",
      phone: "+62 812-3456-7890",
      address: "Jl. Sudirman No. 123, RT 01/RW 02",
      city: "Jakarta Selatan",
      province: "DKI Jakarta",
      postalCode: "12190",
      isDefault: true,
    },
    {
      id: 2,
      label: "Kantor",
      name: "John Doe",
      phone: "+62 812-3456-7890",
      address: "Gedung Plaza Indonesia, Lt. 5",
      city: "Jakarta Pusat",
      province: "DKI Jakarta",
      postalCode: "10350",
      isDefault: false,
    },
  ]);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const stats = {
    totalOrders: 12,
    completedOrders: 10,
    totalSpent: 1500000,
    memberSince: "2024-10-15",
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Password baru tidak cocok!");
      return;
    }
    alert("Password berhasil diubah!");
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const setDefaultAddress = (id) => {
    setAddresses(addresses.map((addr) => ({ ...addr, isDefault: addr.id === id })));
  };

  const deleteAddress = (id) => {
    if (confirm("Hapus alamat ini?")) {
      setAddresses(addresses.filter((addr) => addr.id !== id));
    }
  };

  const tabs = [
    { id: "profile", label: "Profil Saya", icon: "👤" },
    { id: "addresses", label: "Alamat", icon: "📍" },
    { id: "password", label: "Keamanan", icon: "🔒" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{profileData.name}</h2>
            <p className="opacity-90">Member sejak {new Date(stats.memberSince).toLocaleDateString("id-ID")}</p>
          </div>
          {saved && <Badge className="bg-white text-green-600">✓ Tersimpan</Badge>}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">{stats.totalOrders}</p>
            <p className="text-sm text-gray-600">Total Pesanan</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{stats.completedOrders}</p>
            <p className="text-sm text-gray-600">Selesai</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-primary">Rp {(stats.totalSpent / 1000).toLocaleString()}K</p>
            <p className="text-sm text-gray-600">Total Belanja</p>
          </CardContent>
        </Card>
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

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <Card>
          <CardHeader>
            <CardTitle>Informasi Profil</CardTitle>
            <CardDescription>Update informasi pribadi Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
              <Input value={profileData.name} onChange={(e) => setProfileData({ ...profileData, name: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" value={profileData.email} onChange={(e) => setProfileData({ ...profileData, email: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
              <Input value={profileData.phone} onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })} />
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm text-blue-800">
                <strong>Member sejak:</strong>{" "}
                {new Date(profileData.joinDate).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <Button onClick={handleSave}>Simpan Perubahan</Button>
          </CardContent>
        </Card>
      )}

      {/* Addresses Tab */}
      {activeTab === "addresses" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Alamat Pengiriman</CardTitle>
                  <CardDescription>Kelola alamat pengiriman Anda</CardDescription>
                </div>
                <Button>+ Tambah Alamat</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {addresses.map((address) => (
                <Card key={address.id} className={address.isDefault ? "border-2 border-primary" : ""}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{address.label}</Badge>
                        {address.isDefault && <Badge>Utama</Badge>}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        {!address.isDefault && (
                          <Button size="sm" variant="outline" onClick={() => deleteAddress(address.id)}>
                            Hapus
                          </Button>
                        )}
                      </div>
                    </div>
                    <p className="font-medium">{address.name}</p>
                    <p className="text-sm text-gray-600">{address.phone}</p>
                    <p className="text-sm text-gray-600 mt-2">{address.address}</p>
                    <p className="text-sm text-gray-600">
                      {address.city}, {address.province} {address.postalCode}
                    </p>
                    {!address.isDefault && (
                      <Button size="sm" variant="outline" className="mt-3" onClick={() => setDefaultAddress(address.id)}>
                        Jadikan Alamat Utama
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Password Tab */}
      {activeTab === "password" && (
        <Card>
          <CardHeader>
            <CardTitle>Keamanan Akun</CardTitle>
            <CardDescription>Ubah password untuk keamanan akun Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Password Saat Ini</label>
              <Input type="password" value={passwordData.currentPassword} onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })} placeholder="Masukkan password saat ini" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password Baru</label>
              <Input type="password" value={passwordData.newPassword} onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })} placeholder="Minimal 8 karakter" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Konfirmasi Password Baru</label>
              <Input type="password" value={passwordData.confirmPassword} onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })} placeholder="Ketik ulang password baru" />
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-medium text-blue-900 mb-2">Tips Password Aman:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>✓ Minimal 8 karakter</li>
                <li>✓ Kombinasi huruf besar dan kecil</li>
                <li>✓ Gunakan angka dan simbol</li>
                <li>✓ Jangan gunakan informasi pribadi</li>
              </ul>
            </div>
            <Button onClick={handleChangePassword}>Ubah Password</Button>
          </CardContent>
        </Card>
      )}

      {/* Help Card */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Butuh Bantuan?</h3>
          <p className="text-sm text-blue-800 mb-4">Hubungi customer service kami untuk bantuan terkait akun atau pesanan Anda.</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => window.open("https://wa.me/6281234567890?text=Halo, saya butuh bantuan", "_blank")}>
              WhatsApp CS
            </Button>
            <Button variant="outline" size="sm">
              Email Support
            </Button>
            <Button variant="outline" size="sm">
              FAQ
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
