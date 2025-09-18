"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingCart, Search, Filter, Grid3x3, List, SlidersHorizontal } from "lucide-react";
import { useState, useEffect } from "react";
import ProductCard from "@/components/shared/product-card";
import { categories, products } from "@/lib/product";

const ProductsShop = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fix hydration by ensuring component only renders after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter and sort products
  useEffect(() => {
    if (!mounted) return;

    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [mounted, searchQuery, selectedCategory, sortBy, priceRange]);

  const handleToggleFavorite = (productId, isFavorited) => {
    console.log(`Product ${productId} favorite status: ${isFavorited}`);
  };

  const handleBackToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Show loading state during hydration
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className="relative bg-primary text-secondary"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex text-primary items-center px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm mb-6">
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Premium Indonesian Tempeh</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-base md:text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">Discover our range of authentic Indonesian tempeh products, made with traditional methods and premium ingredients</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 bg-white" />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              {/* View Toggle */}
              <div className="flex rounded-lg border bg-white">
                <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")} className="rounded-r-none">
                  <Grid3x3 className="w-4 h-4" />
                </Button>
                <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")} className="rounded-l-none">
                  <List className="w-4 h-4" />
                </Button>
              </div>

              {/* Filter Toggle */}
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="bg-white">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <Card className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Price Range</label>
                  <Slider value={priceRange} onValueChange={setPriceRange} max={100} min={0} step={5} className="mb-2" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Features</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="new" />
                      <label htmlFor="new" className="text-sm">
                        New Products
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sale" />
                      <label htmlFor="sale" className="text-sm">
                        On Sale
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="organic" />
                      <label htmlFor="organic" className="text-sm">
                        Organic
                      </label>
                    </div>
                  </div>
                </div>

                {/* Weight Range */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Weight</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select weight range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Under 300g</SelectItem>
                      <SelectItem value="medium">300g - 500g</SelectItem>
                      <SelectItem value="large">Over 500g</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredProducts.length}</span> of <span className="font-semibold">{products.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} onToggleFavorite={handleToggleFavorite} className={viewMode === "list" ? "flex flex-row max-w-none" : ""} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="bg-white">
              Load More Products
            </Button>
          </div>
        )}
      </div>

      {/* Back to Top */}
      <button onClick={handleBackToTop} className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 hover:shadow-xl" aria-label="Back to top">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default ProductsShop;
