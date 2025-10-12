"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductFormModal from "@/components/shared/product-modal-form";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    totalStock: 0,
    avgPrice: 0,
  });

  // Pagination & Filters
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(search && { search }),
        ...(status !== "all" && { status }),
        ...(category !== "all" && { category }),
      });

      const response = await fetch(`/api/admin/products?${queryParams}`);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const result = await response.json();

      if (result.success) {
        setProducts(result.data);
        setPagination(result.pagination);
        calculateStats(result.data);
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  // Calculate statistics
  const calculateStats = (productsData) => {
    const activeProducts = productsData.filter((p) => p.status === "ACTIVE");
    const totalStock = productsData.reduce((sum, p) => sum + (p.stock || 0), 0);
    const avgPrice = productsData.length > 0 ? Math.round(productsData.reduce((sum, p) => sum + p.price, 0) / productsData.length) : 0;

    setStats({
      total: productsData.length,
      active: activeProducts.length,
      totalStock,
      avgPrice,
    });
  };

  // Fetch products on component mount and when filters change
  useEffect(() => {
    fetchProducts();
  }, [page, limit, search, status, category]);

  // Handle search with debounce
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setPage(1); // Reset to first page
  };

  // Handle toggle status
  const handleToggleStatus = async (productId, currentStatus) => {
    try {
      const newStatus = currentStatus === "ACTIVE" ? "INACTIVE" : "ACTIVE";
      const response = await fetch(`/api/admin/products/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchProducts(); // Refresh data
      }
    } catch (err) {
      console.error("Error toggling status:", err);
    }
  };

  // Handle create product
  const handleCreateProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  // Handle edit product
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle product saved
  const handleProductSaved = () => {
    fetchProducts(); // Refresh data
    handleModalClose();
  };

  if (loading && products.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat data produk...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <Button onClick={fetchProducts}>Coba Lagi</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-primary">Manajemen Produk</h2>
          <p className="text-gray-600">Kelola semua produk tempe Anda</p>
        </div>
        <Button onClick={handleCreateProduct}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tambah Produk
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Icon name="package" className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{pagination.total}</p>
                <p className="text-sm text-gray-600">Total Produk</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{stats.active}</p>
                <p className="text-sm text-gray-600">Produk Aktif</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{stats.totalStock}</p>
                <p className="text-sm text-gray-600">Total Stok</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">Rp {stats.avgPrice.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Rata-rata Harga</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="Cari produk (nama, SKU, deskripsi)..." value={search} onChange={handleSearchChange} className="md:col-span-2" />
            <Select
              value={status}
              onValueChange={(value) => {
                setStatus(value);
                setPage(1);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="ACTIVE">Aktif</SelectItem>
                <SelectItem value="INACTIVE">Tidak Aktif</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={limit.toString()}
              onValueChange={(value) => {
                setLimit(parseInt(value));
                setPage(1);
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 per halaman</SelectItem>
                <SelectItem value="10">10 per halaman</SelectItem>
                <SelectItem value="25">25 per halaman</SelectItem>
                <SelectItem value="50">50 per halaman</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Produk</CardTitle>
          <CardDescription>
            Menampilkan {products.length} dari {pagination.total} produk
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">SKU</th>
                  <th className="text-left py-3 px-4">Nama Produk</th>
                  <th className="text-left py-3 px-4">Kategori</th>
                  <th className="text-left py-3 px-4">Harga</th>
                  <th className="text-left py-3 px-4">Stok</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">{product.sku}</td>
                    <td className="py-3 px-4 font-medium">{product.name}</td>
                    <td className="py-3 px-4">{product.category}</td>
                    <td className="py-3 px-4">Rp {product.price.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${product.stock > 100 ? "bg-green-100 text-green-800" : product.stock > 50 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>{product.stock} pcs</span>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={product.status === "ACTIVE" ? "default" : "secondary"}>{product.status}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleEditProduct(product)}>
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleToggleStatus(product.id, product.status)}>
                          {product.status === "ACTIVE" ? "Nonaktifkan" : "Aktifkan"}
                        </Button>
                      </div>
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

      {/* Product Form Modal */}
      <ProductFormModal isOpen={isModalOpen} onClose={handleModalClose} product={selectedProduct} onSuccess={handleProductSaved} />
    </div>
  );
}
