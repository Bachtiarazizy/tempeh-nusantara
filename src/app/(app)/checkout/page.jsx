"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, CreditCard, Truck, Lock, Plus, Minus, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/components/shared/cart-context";

const CheckoutPage = () => {
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [sameAsShipping, setSameAsShipping] = useState(true);

  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, getCartSummary, clearCart } = useCart();
  const cartSummary = getCartSummary();

  const [formData, setFormData] = useState({
    // Shipping Information
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    state: "",
    zipCode: "",
    phone: "",

    // Billing Information
    billingFirstName: "",
    billingLastName: "",
    billingCompany: "",
    billingAddress: "",
    billingApartment: "",
    billingCity: "",
    billingCountry: "",
    billingState: "",
    billingZipCode: "",

    // Payment Information
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",

    // Special Instructions
    notes: "",
  });

  const shippingOptions = [
    { id: "standard", name: "Standard Shipping", price: 10, time: "5-7 business days" },
    { id: "express", name: "Express Shipping", price: 25, time: "2-3 business days" },
    { id: "overnight", name: "Overnight Shipping", price: 45, time: "1 business day" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleShippingMethodChange = (method) => {
    setShippingMethod(method);
  };

  const calculateShipping = () => {
    if (totalPrice > 50 && shippingMethod === "standard") return 0;
    const option = shippingOptions.find((opt) => opt.id === shippingMethod);
    return option ? option.price : 10;
  };

  const calculateTotal = () => {
    const shipping = calculateShipping();
    const tax = totalPrice * 0.1;
    return totalPrice + shipping + tax;
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Clear cart after successful order
      clearCart();

      // Redirect to success page or show success message
      alert("Order placed successfully! You will receive a confirmation email shortly.");

      if (typeof window !== "undefined") {
        window.location.href = "/order-success";
      }
    } catch (error) {
      console.error("Order processing failed:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading checkout...</p>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Add some products to proceed with checkout</p>
          <Button onClick={() => (window.location.href = "/products")}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => window.history.back()} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cart
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your order below</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-6">
            <form onSubmit={handleSubmitOrder}>
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="w-5 h-5 mr-2" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="your@email.com" />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="w-5 h-5 mr-2" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required value={formData.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required value={formData.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} />
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" required value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} />
                  </div>

                  <div>
                    <Label htmlFor="apartment">Apartment, suite, etc. (Optional)</Label>
                    <Input id="apartment" value={formData.apartment} onChange={(e) => handleInputChange("apartment", e.target.value)} />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                          {/* Add more states as needed */}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input id="zipCode" required value={formData.zipCode} onChange={(e) => handleInputChange("zipCode", e.target.value)} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={shippingMethod} onValueChange={handleShippingMethodChange}>
                    {shippingOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value={option.id} id={option.id} />
                        <div className="flex-1">
                          <Label htmlFor={option.id} className="flex justify-between items-center cursor-pointer">
                            <div>
                              <p className="font-medium">{option.name}</p>
                              <p className="text-sm text-gray-500">{option.time}</p>
                            </div>
                            <span className="font-semibold">{totalPrice > 50 && option.id === "standard" ? "FREE" : formatPrice(option.price)}</span>
                          </Label>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="cursor-pointer">
                        Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="cursor-pointer">
                        PayPal
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="apple" id="apple" />
                      <Label htmlFor="apple" className="cursor-pointer">
                        Apple Pay
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required value={formData.cardNumber} onChange={(e) => handleInputChange("cardNumber", e.target.value)} />
                      </div>

                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" required value={formData.cardName} onChange={(e) => handleInputChange("cardName", e.target.value)} />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input id="expiryDate" placeholder="MM/YY" required value={formData.expiryDate} onChange={(e) => handleInputChange("expiryDate", e.target.value)} />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required value={formData.cvv} onChange={(e) => handleInputChange("cvv", e.target.value)} />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Billing Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Billing Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox id="sameAsShipping" checked={sameAsShipping} onCheckedChange={setSameAsShipping} />
                    <Label htmlFor="sameAsShipping">Same as shipping address</Label>
                  </div>

                  {!sameAsShipping && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="billingFirstName">First Name</Label>
                          <Input id="billingFirstName" value={formData.billingFirstName} onChange={(e) => handleInputChange("billingFirstName", e.target.value)} />
                        </div>
                        <div>
                          <Label htmlFor="billingLastName">Last Name</Label>
                          <Input id="billingLastName" value={formData.billingLastName} onChange={(e) => handleInputChange("billingLastName", e.target.value)} />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="billingAddress">Address</Label>
                        <Input id="billingAddress" value={formData.billingAddress} onChange={(e) => handleInputChange("billingAddress", e.target.value)} />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="billingCity">City</Label>
                          <Input id="billingCity" value={formData.billingCity} onChange={(e) => handleInputChange("billingCity", e.target.value)} />
                        </div>
                        <div>
                          <Label htmlFor="billingState">State</Label>
                          <Select value={formData.billingState} onValueChange={(value) => handleInputChange("billingState", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="State" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="CA">California</SelectItem>
                              <SelectItem value="NY">New York</SelectItem>
                              <SelectItem value="TX">Texas</SelectItem>
                              <SelectItem value="FL">Florida</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="billingZipCode">ZIP Code</Label>
                          <Input id="billingZipCode" value={formData.billingZipCode} onChange={(e) => handleInputChange("billingZipCode", e.target.value)} />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Special Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle>Special Instructions (Optional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea placeholder="Any special delivery instructions or notes..." value={formData.notes} onChange={(e) => handleInputChange("notes", e.target.value)} />
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="max-h-96 overflow-y-auto space-y-4">
                  {items.map((item) => (
                    <div key={item.cartItemId} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        {item.image ? <img src={item.image} alt={item.productName} className="w-full h-full object-cover rounded-lg" /> : <Package className="w-8 h-8 text-gray-400" />}
                        <Badge className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">{item.quantity}</Badge>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{item.productName || item.name}</h4>

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

                        <div className="mt-2 flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            {formatPrice(item.price)} × {item.quantity}
                          </span>
                          <span className="text-sm font-semibold">{formatPrice(item.price * item.quantity)}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}>
                          <Minus className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}>
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500 hover:text-red-700" onClick={() => removeFromCart(item.cartItemId)}>
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Pricing Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal ({totalItems} items):</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className={calculateShipping() === 0 ? "text-green-600" : ""}>{calculateShipping() === 0 ? "FREE" : formatPrice(calculateShipping())}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>{formatPrice(totalPrice * 0.1)}</span>
                  </div>

                  {totalPrice <= 50 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-800">Add {formatPrice(50.01 - totalPrice)} more for free standard shipping!</p>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Total */}
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span>{formatPrice(calculateTotal())}</span>
                </div>

                {/* Place Order Button */}
                <Button className="w-full bg-green-600 hover:bg-green-700 mt-6" size="lg" disabled={isProcessing} onClick={handleSubmitOrder}>
                  {isProcessing ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      Place Order - {formatPrice(calculateTotal())}
                    </div>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-2">By placing this order, you agree to our Terms of Service and Privacy Policy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
