"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function ProductFormModal({ isOpen, onClose, onSuccess, product = null }) {
  const isEdit = !!product;

  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    slug: "",
    description: "",
    price: "",
    comparePrice: "",
    stock: "",
    weight: "",
    status: "ACTIVE",
    category: "",
    featured: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Load product data when editing
  useEffect(() => {
    if (product) {
      setFormData({
        sku: product.sku || "",
        name: product.name || "",
        slug: product.slug || "",
        description: product.description || "",
        price: product.price?.toString() || "",
        comparePrice: product.comparePrice?.toString() || "",
        stock: product.stock?.toString() || "",
        weight: product.weight?.toString() || "",
        status: product.status || "ACTIVE",
        category: product.category || "",
        featured: product.featured || false,
      });
    } else {
      // Reset form for new product
      setFormData({
        sku: "",
        name: "",
        slug: "",
        description: "",
        price: "",
        comparePrice: "",
        stock: "",
        weight: "",
        status: "ACTIVE",
        category: "",
        featured: false,
      });
    }
    setErrors({});
  }, [product, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Auto-generate slug from name
  const generateSlug = () => {
    if (formData.name && !formData.slug) {
      const slug = formData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.sku.trim()) newErrors.sku = "SKU wajib diisi";
    if (!formData.name.trim()) newErrors.name = "Nama produk wajib diisi";
    if (!formData.slug.trim()) newErrors.slug = "Slug wajib diisi";
    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = "Harga harus lebih dari 0";
    }
    if (!formData.category.trim()) newErrors.category = "Kategori wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const url = isEdit ? `/api/admin/products/${product.id}` : "/api/admin/products";

      const method = isEdit ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          comparePrice: formData.comparePrice ? parseFloat(formData.comparePrice) : null,
          stock: formData.stock ? parseInt(formData.stock) : 0,
          weight: formData.weight ? parseFloat(formData.weight) : null,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Gagal menyimpan produk");
      }

      if (result.success) {
        onSuccess();
        onClose();
      }
    } catch (error) {
      console.error("Error saving product:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Produk" : "Tambah Produk Baru"}</DialogTitle>
          <DialogDescription>{isEdit ? "Perbarui informasi produk" : "Isi form di bawah untuk menambah produk baru"}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="sku">SKU *</Label>
              <Input id="sku" name="sku" value={formData.sku} onChange={handleChange} placeholder="TEMP-001" disabled={isEdit} />
              {errors.sku && <p className="text-sm text-red-600 mt-1">{errors.sku}</p>}
            </div>

            <div>
              <Label htmlFor="category">Kategori *</Label>
              <Input id="category" name="category" value={formData.category} onChange={handleChange} placeholder="Tempe Fresh" />
              {errors.category && <p className="text-sm text-red-600 mt-1">{errors.category}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="name">Nama Produk *</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} onBlur={generateSlug} placeholder="Tempe Segar Premium" />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="slug">Slug *</Label>
            <Input id="slug" name="slug" value={formData.slug} onChange={handleChange} placeholder="tempe-segar-premium" />
            {errors.slug && <p className="text-sm text-red-600 mt-1">{errors.slug}</p>}
          </div>

          <div>
            <Label htmlFor="description">Deskripsi</Label>
            <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Deskripsi produk..." rows={3} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Harga *</Label>
              <Input id="price" name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} placeholder="15000" />
              {errors.price && <p className="text-sm text-red-600 mt-1">{errors.price}</p>}
            </div>

            <div>
              <Label htmlFor="comparePrice">Harga Coret</Label>
              <Input id="comparePrice" name="comparePrice" type="number" step="0.01" value={formData.comparePrice} onChange={handleChange} placeholder="20000" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="stock">Stok</Label>
              <Input id="stock" name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="100" />
            </div>

            <div>
              <Label htmlFor="weight">Berat (gram)</Label>
              <Input id="weight" name="weight" type="number" step="0.01" value={formData.weight} onChange={handleChange} placeholder="500" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ACTIVE">Aktif</SelectItem>
                  <SelectItem value="INACTIVE">Tidak Aktif</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2 pt-8">
              <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
              <Label htmlFor="featured" className="cursor-pointer">
                Produk Unggulan
              </Label>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Batal
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Menyimpan..." : isEdit ? "Update Produk" : "Tambah Produk"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
