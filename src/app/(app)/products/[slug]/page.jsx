"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight, Star, Minus, Plus, ChevronDown, Heart, Share2, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/components/shared/cart-context";
import ProductCard from "@/components/shared/product-card";

// Import data produk
import { getProductById, getRelatedProducts, calculatePrice } from "@/lib/product";

const ProductDetailsPage = ({ productId = 1, productSlug = null }) => {
  const [mounted, setMounted] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);

  const { addToCart } = useCart();

  // Get product data dari file products.js
  const product = getProductById(productId);
  const relatedProducts = getRelatedProducts(productId, 4);

  // Set default values ketika product loaded
  useEffect(() => {
    setMounted(true);
    if (product) {
      // Set default variant (first available)
      if (product.variants && product.variants.length > 0) {
        setSelectedVariant(product.variants[0]);
      }

      // Set default weight (yang selected: true atau yang pertama)
      const defaultWeight = product.weights?.find((w) => w.selected) || product.weights?.[0];
      if (defaultWeight) {
        setSelectedWeight(defaultWeight.label);
        setCurrentPrice(defaultWeight.price || product.price);
      } else {
        setCurrentPrice(product.price);
      }
    }
  }, [product]);

  // Update price ketika weight berubah
  useEffect(() => {
    if (product && selectedWeight) {
      const weightOption = product.weights?.find((w) => w.label === selectedWeight);
      const newPrice = calculatePrice(product.id, weightOption?.value || "500g", quantity);
      setCurrentPrice(newPrice);
    }
  }, [product, selectedWeight, quantity]);

  // Jika product tidak ditemukan
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  // Generate breadcrumbs dari data produk
  const breadcrumbs = [
    { label: "Shop All", href: "/products" },
    { label: product.category, href: `/products?category=${product.category}` },
    { label: product.name, href: `/products/${product.slug}` },
  ];

  const handleAddToCart = async () => {
    setIsAddingToCart(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const weightOption = product.weights?.find((w) => w.label === selectedWeight);

      addToCart(
        {
          id: product.id,
          name: product.name,
          price: weightOption?.price || product.price,
          originalPrice: product.originalPrice,
          weight: selectedWeight,
          variant: selectedVariant,
          image: product.image,
          category: product.category,
          slug: product.slug,
        },
        quantity
      );
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleBuyNow = async () => {
    await handleAddToCart();
    // Navigate to checkout
    if (typeof window !== "undefined") {
      window.location.href = "/checkout";
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : i < rating ? "text-yellow-400 fill-current opacity-50" : "text-gray-300"}`} />);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          {breadcrumbs.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <a href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </a>
              {index < breadcrumbs.length - 1 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
            </div>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative">
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.isNew && <Badge className="bg-green-500 text-white">New</Badge>}
                {product.isOnSale && product.discount > 0 && (
                  <Badge variant="destructive" className="bg-red-500 text-white">
                    -{product.discount}%
                  </Badge>
                )}
              </div>

              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <ShoppingCart className="w-16 h-16 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-sm">{product.name}</p>
                </div>
              )}
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((thumb) => (
                <div key={thumb} className="aspect-square bg-gray-100 rounded border-2 border-transparent hover:border-gray-300 cursor-pointer">
                  <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-400 text-xs">{thumb}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                {product.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl font-bold text-gray-900">${currentPrice}</div>
                {product.originalPrice && product.originalPrice > currentPrice && <div className="text-lg text-gray-500 line-through">${product.originalPrice}</div>}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-sm text-gray-600">
                  ({product.rating} stars) • {product.reviewCount} reviews
                </span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-4">{product.inStock ? <Badge className="bg-green-100 text-green-800">In Stock ({product.stockQuantity} available)</Badge> : <Badge variant="destructive">Out of Stock</Badge>}</div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Variant Selection */}
            <div className="space-y-4">
              {/* Variant Dropdown */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Variant</label>
                  <Select value={selectedVariant} onValueChange={setSelectedVariant}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Variant" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.variants.map((variant) => (
                        <SelectItem key={variant} value={variant}>
                          {variant}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Weight Selection */}
              {product.weights && product.weights.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Weight</label>
                  <div className="flex flex-wrap gap-2">
                    {product.weights.map((weight) => (
                      <Button
                        key={weight.value}
                        variant={selectedWeight === weight.label ? "default" : "outline"}
                        size="sm"
                        disabled={weight.disabled}
                        onClick={() => setSelectedWeight(weight.label)}
                        className={`${selectedWeight === weight.label ? "bg-green-600 text-white hover:bg-green-700" : "border-gray-300 text-gray-700 hover:bg-gray-50"} ${weight.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {weight.label}
                        {weight.price && <span className="ml-1 text-xs">(${weight.price})</span>}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Quantity</label>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1}>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))} disabled={quantity >= product.stockQuantity}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base font-medium" onClick={handleAddToCart} disabled={isAddingToCart || !product.inStock}>
                {isAddingToCart ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Adding...
                  </div>
                ) : (
                  `Add to Cart - $${(currentPrice * quantity).toFixed(2)}`
                )}
              </Button>

              <Button variant="outline" className="w-full border-gray-300 text-gray-900 hover:bg-gray-50 py-3 text-base font-medium" onClick={handleBuyNow} disabled={!product.inStock}>
                Buy Now
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">Free shipping over $50</p>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center justify-center space-x-6 pt-4">
              <Button variant="ghost" size="sm" onClick={() => setIsFavorited(!isFavorited)} className={`flex items-center space-x-2 ${isFavorited ? "text-red-500" : "text-gray-600"}`}>
                <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
                <span className="text-sm">Favorite</span>
              </Button>

              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </Button>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-1 pt-6">
              <Separator />

              {/* Product Details */}
              <Collapsible open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-left">
                  <span className="font-medium text-gray-900">Product Details</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transform transition-transform ${isDetailsOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="pb-4 space-y-4">
                    <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Weight:</span> {product.weight}
                      </div>
                      <div>
                        <span className="font-medium">Category:</span> {product.category}
                      </div>
                      <div>
                        <span className="font-medium">Storage:</span> {product.storageInstructions}
                      </div>
                      <div>
                        <span className="font-medium">Cooking:</span> {product.cookingInstructions}
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Separator />

              {/* Nutrition Information */}
              {product.nutritionPer100g && (
                <>
                  <Collapsible open={isNutritionOpen} onOpenChange={setIsNutritionOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-left">
                      <span className="font-medium text-gray-900">Nutrition Information</span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transform transition-transform ${isNutritionOpen ? "rotate-180" : ""}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="pb-4">
                        <p className="text-sm text-gray-600 mb-3">Per 100g:</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex justify-between">
                            <span>Calories:</span>
                            <span>{product.nutritionPer100g.calories} kcal</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Protein:</span>
                            <span>{product.nutritionPer100g.protein}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Carbs:</span>
                            <span>{product.nutritionPer100g.carbs}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fat:</span>
                            <span>{product.nutritionPer100g.fat}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fiber:</span>
                            <span>{product.nutritionPer100g.fiber}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sodium:</span>
                            <span>{product.nutritionPer100g.sodium}mg</span>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  <Separator />
                </>
              )}

              {/* Ingredients */}
              {product.ingredients && (
                <Collapsible open={isIngredientsOpen} onOpenChange={setIsIngredientsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-left">
                    <span className="font-medium text-gray-900">Ingredients & Allergens</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transform transition-transform ${isIngredientsOpen ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="pb-4 space-y-3">
                      <div>
                        <p className="font-medium text-sm mb-2">Ingredients:</p>
                        <p className="text-sm text-gray-600">{product.ingredients.join(", ")}</p>
                      </div>
                      {product.allergens && (
                        <div>
                          <p className="font-medium text-sm mb-2">Allergens:</p>
                          <p className="text-sm text-gray-600">{product.allergens.join(", ")}</p>
                        </div>
                      )}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              )}
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  {...relatedProduct}
                  onToggleFavorite={(id, isFavorited) => {
                    console.log(`Related product ${id} favorite: ${isFavorited}`);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
