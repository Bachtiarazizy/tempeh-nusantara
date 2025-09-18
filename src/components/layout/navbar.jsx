"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ShoppingCart, Heart, User, Menu, Search, Home, Package, Info, Mail, X, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useCart } from "../shared/cart-context";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, totalItems, uniqueProducts, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    // Navigate to checkout page
    if (typeof window !== "undefined") {
      window.location.href = "/checkout";
    }
  };

  const CartItem = ({ item }) => (
    <div className="flex items-start space-x-4 py-4 border-b border-gray-100">
      <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
        {item.image ? <img src={item.image} alt={item.productName} className="w-full h-full object-cover rounded-lg" /> : <Package className="w-8 h-8 text-gray-400" />}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">{item.productName || item.name}</h4>

        {/* Variant Details */}
        <div className="mt-1 space-y-1">
          {item.variant && (
            <p className="text-xs text-gray-600">
              <span className="font-medium">Variant:</span> {item.variant}
            </p>
          )}
          {item.weight && (
            <p className="text-xs text-gray-600">
              <span className="font-medium">Size:</span> {item.weight}
            </p>
          )}
        </div>

        {/* Price per unit */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-semibold text-green-600">{formatPrice(item.price)}</p>
          <p className="text-xs text-gray-500">each</p>
        </div>

        {/* Total price for this item */}
        {item.quantity > 1 && <p className="text-xs text-gray-500 mt-1">Total: {formatPrice(item.price * item.quantity)}</p>}
      </div>

      <div className="flex flex-col items-center space-y-2">
        {/* Quantity Controls */}
        <div className="flex items-center space-x-1">
          <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}>
            <Minus className="w-3 h-3" />
          </Button>

          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>

          <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}>
            <Plus className="w-3 h-3" />
          </Button>
        </div>

        {/* Remove Button */}
        <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => removeFromCart(item.cartItemId)}>
          <X className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image src="/logo.png" width={80} height={80} alt="Logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="w-5 h-5" />
            </Button>

            {/* Favorites */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {totalItems > 0 && (
                    <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {totalItems > 99 ? "99+" : totalItems}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg flex flex-col">
                <SheetHeader>
                  <SheetTitle className="flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Shopping Cart
                  </SheetTitle>
                  <SheetDescription>
                    {uniqueProducts} {uniqueProducts === 1 ? "product" : "products"} • {totalItems} total {totalItems === 1 ? "item" : "items"}
                  </SheetDescription>
                </SheetHeader>

                <div className="flex-1 flex flex-col mt-6">
                  {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center py-12">
                      <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                      <p className="text-gray-500 text-center">Your cart is empty</p>
                      <p className="text-sm text-gray-400 text-center mt-1">Add some products to get started</p>
                    </div>
                  ) : (
                    <>
                      {/* Cart Items */}
                      <div className="flex-1 overflow-y-auto">
                        {items.map((item) => (
                          <CartItem key={item.cartItemId} item={item} />
                        ))}
                      </div>

                      {/* Cart Summary */}
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        {/* Summary Details */}
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>
                              Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"}):
                            </span>
                            <span>{formatPrice(totalPrice)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Shipping:</span>
                            <span className={totalPrice > 50 ? "text-green-600" : ""}>{totalPrice > 50 ? "FREE" : formatPrice(10)}</span>
                          </div>
                          {totalPrice <= 50 && <p className="text-xs text-gray-500">Add {formatPrice(50.01 - totalPrice)} more for free shipping</p>}
                        </div>

                        <div className="flex justify-between items-center mb-4 pt-2 border-t">
                          <span className="text-lg font-semibold text-gray-900">Total:</span>
                          <span className="text-lg font-bold text-green-600">{formatPrice(totalPrice + (totalPrice > 50 ? 0 : 10))}</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                          <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleProceedToCheckout}>
                            Proceed to Checkout
                          </Button>
                          <Button variant="outline" className="w-full" onClick={() => setIsCartOpen(false)}>
                            Continue Shopping
                          </Button>
                          {items.length > 0 && (
                            <Button variant="ghost" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50" onClick={clearCart}>
                              Clear Cart
                            </Button>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Package className="w-4 h-4 mr-2" />
                  Orders
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="flex items-center">
                      <Image src="/logo.png" width={50} height={50} alt="Logo" />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="mt-6">
                    <nav className="space-y-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="space-y-2">
                        <Button variant="ghost" className="w-full justify-start">
                          <Search className="w-5 h-5 mr-3" />
                          Search
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <Heart className="w-5 h-5 mr-3" />
                          Wishlist
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                          <User className="w-5 h-5 mr-3" />
                          Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
