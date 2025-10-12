"use client";

import { useCart } from "@/components/shared/cart-context";
import { useWishlist } from "@/components/shared/wishlist-context";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Plus, Minus, X, Heart, ArrowLeft, Package } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart, isLoading } = useCart();
  const { addToWishlist } = useWishlist();
  const router = useRouter();

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const shippingCost = totalPrice > 50 ? 0 : 10;
  const tax = totalPrice * 0.1;
  const finalTotal = totalPrice + shippingCost + tax;

  const handleMoveToWishlist = async (item) => {
    const success = await addToWishlist({
      id: item.productId,
      name: item.productName,
    });

    if (success) {
      await removeFromCart(item.cartItemId);
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
            Continue Shopping
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {items.length === 0 ? (
          <Card className="p-12">
            <div className="flex flex-col items-center justify-center">
              <ShoppingCart className="w-24 h-24 text-gray-300 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add some products to get started</p>
              <Button className="bg-green-600 hover:bg-green-700" onClick={() => router.push("/products")}>
                Browse Products
              </Button>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Cart Items</h2>
                  <Button variant="ghost" size="sm" onClick={clearCart} className="text-red-600 hover:text-red-700">
                    Clear Cart
                  </Button>
                </div>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.cartItemId} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        {item.image ? <img src={item.image} alt={item.productName} className="w-full h-full object-cover rounded-lg" /> : <Package className="w-12 h-12 text-gray-400" />}
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{item.productName}</h3>

                        {/* Variant Details */}
                        <div className="flex flex-wrap gap-2 mb-2">
                          {item.variant && <span className="text-xs bg-gray-100 px-2 py-1 rounded">Variant: {item.variant}</span>}
                          {item.weight && <span className="text-xs bg-gray-100 px-2 py-1 rounded">Size: {item.weight}</span>}
                        </div>

                        <p className="text-lg font-semibold text-green-600">{formatPrice(item.price)}</p>

                        {/* Stock Status */}
                        {item.stock < 5 && item.stock > 0 && <p className="text-xs text-orange-500 mt-1">Only {item.stock} left in stock</p>}
                        {item.stock === 0 && <p className="text-xs text-red-500 mt-1">Out of stock</p>}
                      </div>

                      {/* Quantity Controls & Actions */}
                      <div className="flex flex-col items-end space-y-3">
                        {/* Quantity */}
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}>
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="text-base font-medium w-12 text-center">{item.quantity}</span>
                          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)} disabled={item.quantity >= item.stock}>
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Total Price */}
                        <p className="text-sm font-semibold text-gray-900">Total: {formatPrice(item.price * item.quantity)}</p>

                        {/* Actions */}
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => handleMoveToWishlist(item)} className="text-gray-600 hover:text-green-600">
                            <Heart className="w-4 h-4 mr-1" />
                            Save
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.cartItemId)} className="text-red-600 hover:text-red-700">
                            <X className="w-4 h-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                <div className="space-y-4">
                  {/* Subtotal */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"}):
                    </span>
                    <span className="font-medium">{formatPrice(totalPrice)}</span>
                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping:</span>
                    <span className={shippingCost === 0 ? "text-green-600 font-medium" : "font-medium"}>{shippingCost === 0 ? "FREE" : formatPrice(shippingCost)}</span>
                  </div>

                  {totalPrice < 50 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-xs text-blue-700">Add {formatPrice(50 - totalPrice)} more for free shipping!</p>
                    </div>
                  )}

                  {/* Tax */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (10%):</span>
                    <span className="font-medium">{formatPrice(tax)}</span>
                  </div>

                  <div className="border-t border-gray-200 my-4"></div>

                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total:</span>
                    <span className="text-2xl font-bold text-green-600">{formatPrice(finalTotal)}</span>
                  </div>

                  {/* Checkout Button */}
                  <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-base" onClick={() => router.push("/checkout")}>
                    Proceed to Checkout
                  </Button>

                  <Button variant="outline" className="w-full" onClick={() => router.push("/products")}>
                    Continue Shopping
                  </Button>

                  {/* Security Badge */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Secure Checkout</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
