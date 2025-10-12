"use client";

import { useWishlist } from "@/components/shared/wishlist-context";
import { useCart } from "@/components/shared/cart-context";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, X, ArrowLeft, Package } from "lucide-react";
import Image from "next/image";

export default function WishlistPage() {
  const { items, totalItems, removeFromWishlist, clearWishlist, isLoading } = useWishlist();
  const { addToCart } = useCart();
  const router = useRouter();

  const formatPrice = (price) => {
    return `${price.toFixed(2)}`;
  };

  const handleAddToCart = async (item) => {
    const success = await addToCart({
      id: item.productId,
      name: item.productName,
      price: item.price,
      image: item.image,
    });

    if (success) {
      await removeFromWishlist(item.wishlistItemId);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Heart className="w-8 h-8 mr-3 text-red-500" />
                My Wishlist
              </h1>
              <p className="text-gray-600 mt-2">
                {totalItems} {totalItems === 1 ? "item" : "items"} saved
              </p>
            </div>
            {items.length > 0 && (
              <Button variant="outline" onClick={clearWishlist} className="text-red-600 hover:text-red-700">
                <X className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>
        </div>

        {items.length === 0 ? (
          <Card className="p-12">
            <div className="flex flex-col items-center justify-center">
              <Heart className="w-24 h-24 text-gray-300 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-6">Save items you love for later</p>
              <Button className="bg-green-600 hover:bg-green-700" onClick={() => router.push("/products")}>
                Browse Products
              </Button>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <Card key={item.wishlistItemId} className="overflow-hidden hover:shadow-lg transition-shadow">
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100">
                  {item.image ? (
                    <img src={item.image} alt={item.productName} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package className="w-16 h-16 text-gray-400" />
                    </div>
                  )}

                  {/* Remove Button */}
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white hover:bg-red-50 text-red-500 rounded-full shadow-md" onClick={() => removeFromWishlist(item.wishlistItemId)}>
                    <X className="w-4 h-4" />
                  </Button>

                  {/* Stock Badge */}
                  {item.status === "OUT_OF_STOCK" && (
                    <Badge variant="destructive" className="absolute top-2 left-2">
                      Out of Stock
                    </Badge>
                  )}
                  {item.status === "ACTIVE" && item.stock < 5 && item.stock > 0 && (
                    <Badge variant="secondary" className="absolute top-2 left-2 bg-orange-500 text-white">
                      Only {item.stock} left
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2">{item.productName}</h3>

                  {item.category && <p className="text-xs text-gray-500 mb-2">{item.category}</p>}

                  <p className="text-xl font-bold text-green-600 mb-4">{formatPrice(item.price)}</p>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => handleAddToCart(item)} disabled={item.status !== "ACTIVE" || item.stock === 0}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {item.status !== "ACTIVE" || item.stock === 0 ? "Unavailable" : "Add to Cart"}
                    </Button>

                    <Button variant="outline" className="w-full" onClick={() => router.push(`/products/${item.slug}`)}>
                      View Details
                    </Button>
                  </div>

                  {/* Added Date */}
                  <p className="text-xs text-gray-400 mt-3 text-center">Added {new Date(item.addedAt).toLocaleDateString()}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
