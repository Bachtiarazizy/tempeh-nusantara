"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/shared/AuthContext";

const mockMaterials = {
  banners: [
    {
      id: 1,
      name: "Banner Hero - Premium Tempe",
      size: "1200x628",
      format: "JPG",
      url: "/materials/banner-hero.jpg",
      description: "Banner utama untuk promosi di social media",
      downloads: 45,
    },
    {
      id: 2,
      name: "Banner Instagram Story",
      size: "1080x1920",
      format: "PNG",
      url: "/materials/banner-story.png",
      description: "Desain khusus untuk Instagram Story",
      downloads: 67,
    },
    {
      id: 3,
      name: "Banner Facebook Post",
      size: "1200x630",
      format: "JPG",
      url: "/materials/banner-fb.jpg",
      description: "Optimal untuk Facebook feed",
      downloads: 32,
    },
  ],
  productPhotos: [
    {
      id: 1,
      name: "Premium Tempe Original",
      images: 5,
      format: "JPG, PNG",
      url: "/products/premium-original/",
      description: "Foto produk high-quality dengan berbagai angle",
    },
    {
      id: 2,
      name: "Organic Tempe Special",
      images: 4,
      format: "JPG, PNG",
      url: "/products/organic-special/",
      description: "Foto produk organik dengan packaging",
    },
    {
      id: 3,
      name: "Tempe Export Quality",
      images: 6,
      format: "JPG, PNG",
      url: "/products/export-quality/",
      description: "Foto produk export grade",
    },
  ],
  copywriting: [
    {
      id: 1,
      title: "Template WhatsApp Story",
      category: "Social Media",
      content: `🌾 TEMPE PREMIUM NUSANTARA 🌾

Tempe berkualitas ekspor dengan bahan pilihan!
✅ 100% Kedelai Premium
✅ Proses Higienis
✅ Kaya Protein & Nutrisi

Order sekarang via link di bio!
💰 Harga spesial untuk reseller

#TempePremium #TempeSehat #MakananSehat`,
      downloads: 89,
    },
    {
      id: 2,
      title: "Email Marketing - Bulk Order",
      category: "Email",
      content: `Subject: Penawaran Spesial Tempe Premium untuk Bisnis Anda

Halo [Nama Customer],

Kami dari Tempe Nusantara menawarkan produk tempe premium dengan kualitas ekspor untuk kebutuhan bisnis Anda.

Keunggulan Produk:
- Bahan baku kedelai pilihan
- Proses produksi higienis dan modern
- Sertifikat halal & BPOM
- Packaging menarik siap jual

Harga Spesial untuk Pembelian Grosir!
Hubungi kami untuk penawaran terbaik.

Salam,
Tim Tempe Nusantara`,
      downloads: 34,
    },
    {
      id: 3,
      title: "Caption Instagram - Edukasi Manfaat",
      category: "Social Media",
      content: `Tahukah kamu? 🤔

Tempe adalah superfood asli Indonesia yang kaya manfaat:
🌟 Tinggi protein nabati
🌟 Mengandung probiotik alami
🌟 Baik untuk pencernaan
🌟 Cocok untuk diet sehat

Tempe Nusantara hadir dengan kualitas terbaik untuk kesehatan keluarga Indonesia! 💪

Order: [link]

#TempeSehat #SuperfoodIndonesia #HidupSehat #TempeNusantara`,
      downloads: 56,
    },
  ],
  videos: [
    {
      id: 1,
      name: "Product Showcase - 30 detik",
      duration: "0:30",
      size: "25 MB",
      format: "MP4",
      description: "Video singkat showcase produk untuk social media",
      url: "/materials/video-showcase.mp4",
    },
    {
      id: 2,
      name: "Tutorial Masak Tempe",
      duration: "2:15",
      size: "120 MB",
      format: "MP4",
      description: "Tutorial memasak tempe untuk content marketing",
      url: "/materials/video-tutorial.mp4",
    },
  ],
  guidelines: [
    {
      id: 1,
      title: "Panduan Brand Identity",
      description: "Logo, warna, dan guideline penggunaan brand",
      type: "PDF",
      pages: 12,
      url: "/guidelines/brand-identity.pdf",
    },
    {
      id: 2,
      title: "Cara Efektif Promosi di Social Media",
      description: "Tips dan trik promosi produk di berbagai platform",
      type: "PDF",
      pages: 8,
      url: "/guidelines/social-media-tips.pdf",
    },
    {
      id: 3,
      title: "FAQ Produk Tempe Nusantara",
      description: "Daftar pertanyaan umum dan jawabannya",
      type: "PDF",
      pages: 5,
      url: "/guidelines/faq-produk.pdf",
    },
  ],
};

export default function AffiliateMaterials() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("banners");
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard?.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadMaterial = (materialName) => {
    alert(`Downloading: ${materialName}`);
  };

  const tabs = [
    { id: "banners", label: "Banner & Poster", icon: "🖼️", count: mockMaterials.banners.length },
    { id: "photos", label: "Foto Produk", icon: "📸", count: mockMaterials.productPhotos.length },
    { id: "copywriting", label: "Copywriting", icon: "✍️", count: mockMaterials.copywriting.length },
    { id: "videos", label: "Video", icon: "🎥", count: mockMaterials.videos.length },
    { id: "guidelines", label: "Guidelines", icon: "📋", count: mockMaterials.guidelines.length },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Marketing Materials</h2>
        <p className="opacity-90">Download materi promosi untuk meningkatkan penjualan Anda</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">{mockMaterials.banners.length + mockMaterials.productPhotos.length}</p>
              <p className="text-sm text-gray-600">Visual Assets</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">{mockMaterials.copywriting.length}</p>
              <p className="text-sm text-gray-600">Copy Templates</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">{mockMaterials.videos.length}</p>
              <p className="text-sm text-gray-600">Video Content</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">{mockMaterials.guidelines.length}</p>
              <p className="text-sm text-gray-600">Guidelines</p>
            </div>
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
                <Badge variant="secondary" className="ml-2">
                  {tab.count}
                </Badge>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <Input placeholder="Cari material..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full" />
        </CardContent>
      </Card>

      {/* Banners Tab */}
      {activeTab === "banners" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMaterials.banners.map((banner) => (
            <Card key={banner.id}>
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-4xl">🖼️</span>
                </div>
                <CardTitle className="text-lg">{banner.name}</CardTitle>
                <CardDescription>{banner.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-medium">{banner.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{banner.format}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Downloads:</span>
                    <span className="font-medium">{banner.downloads}x</span>
                  </div>
                </div>
                <Button className="w-full" onClick={() => downloadMaterial(banner.name)}>
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Product Photos Tab */}
      {activeTab === "photos" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMaterials.productPhotos.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-5xl">📸</span>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Images:</span>
                    <span className="font-medium">{product.images} files</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{product.format}</span>
                  </div>
                </div>
                <Button className="w-full" onClick={() => downloadMaterial(product.name)}>
                  Download All
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Copywriting Tab */}
      {activeTab === "copywriting" && (
        <div className="space-y-4">
          {mockMaterials.copywriting.map((copy) => (
            <Card key={copy.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{copy.title}</CardTitle>
                    <CardDescription>
                      <Badge variant="secondary" className="mt-1">
                        {copy.category}
                      </Badge>
                    </CardDescription>
                  </div>
                  <div className="text-sm text-gray-600">{copy.downloads} downloads</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <pre className="text-sm whitespace-pre-wrap font-sans">{copy.content}</pre>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1" onClick={() => copyToClipboard(copy.content, copy.id)} variant={copied === copy.id ? "default" : "outline"}>
                    {copied === copy.id ? "✓ Copied!" : "Copy Text"}
                  </Button>
                  <Button variant="outline" onClick={() => downloadMaterial(copy.title)}>
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Videos Tab */}
      {activeTab === "videos" && (
        <div className="grid md:grid-cols-2 gap-6">
          {mockMaterials.videos.map((video) => (
            <Card key={video.id}>
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-5xl">🎥</span>
                </div>
                <CardTitle className="text-lg">{video.name}</CardTitle>
                <CardDescription>{video.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{video.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-medium">{video.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{video.format}</span>
                  </div>
                </div>
                <Button className="w-full" onClick={() => downloadMaterial(video.name)}>
                  Download Video
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Guidelines Tab */}
      {activeTab === "guidelines" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMaterials.guidelines.map((guide) => (
            <Card key={guide.id}>
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-5xl">📋</span>
                </div>
                <CardTitle className="text-lg">{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">{guide.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pages:</span>
                    <span className="font-medium">{guide.pages} pages</span>
                  </div>
                </div>
                <Button className="w-full" onClick={() => downloadMaterial(guide.title)}>
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Tips Card */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-900 mb-2">💡 Tips Menggunakan Materials</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>✓ Sesuaikan copywriting dengan tone & style audience Anda</li>
            <li>✓ Gunakan banner sesuai ukuran platform (IG Story, FB Post, dll)</li>
            <li>✓ Jangan lupa sertakan referral link Anda di setiap promosi</li>
            <li>✓ Konsisten posting untuk hasil maksimal</li>
            <li>✓ Baca guidelines brand untuk memastikan promosi sesuai standar</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
