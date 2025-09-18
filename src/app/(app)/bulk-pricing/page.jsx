"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const BulkPricingPage = () => {
  const [selectedQuantity, setSelectedQuantity] = useState("25kg");
  const [productType, setProductType] = useState("fresh");

  const bulkTiers = [
    {
      id: "5kg",
      quantity: "5-10 kg",
      discount: "5%",
      price: "$9.50",
      originalPrice: "$10.00",
      savings: "$2.50",
      minOrder: "5 kg",
      description: "Perfect for small restaurants and food enthusiasts",
    },
    {
      id: "15kg",
      quantity: "15-24 kg",
      discount: "8%",
      price: "$9.20",
      originalPrice: "$10.00",
      savings: "$12.00",
      minOrder: "15 kg",
      description: "Great for medium-sized establishments",
    },
    {
      id: "25kg",
      quantity: "25-49 kg",
      discount: "12%",
      price: "$8.80",
      originalPrice: "$10.00",
      savings: "$30.00",
      minOrder: "25 kg",
      description: "Ideal for large restaurants and food services",
      popular: true,
    },
    {
      id: "50kg",
      quantity: "50-99 kg",
      discount: "18%",
      price: "$8.20",
      originalPrice: "$10.00",
      savings: "$90.00",
      minOrder: "50 kg",
      description: "Perfect for food distributors and catering companies",
    },
    {
      id: "100kg",
      quantity: "100+ kg",
      discount: "25%",
      price: "$7.50",
      originalPrice: "$10.00",
      savings: "$250.00",
      minOrder: "100 kg",
      description: "Maximum savings for large volume orders",
    },
  ];

  const productTypes = [
    {
      id: "fresh",
      name: "Fresh Tempe",
      basePrice: 10.0,
      shelfLife: "5-7 days",
      storage: "Refrigerated 2-4°C",
      packaging: "Banana leaf wrap",
    },
    {
      id: "frozen",
      name: "Frozen Tempe",
      basePrice: 10.5,
      shelfLife: "6 months",
      storage: "Frozen -18°C",
      packaging: "Vacuum sealed",
    },
    {
      id: "dried",
      name: "Dried Tempe",
      basePrice: 12.0,
      shelfLife: "12 months",
      storage: "Room temperature",
      packaging: "Sealed pouches",
    },
  ];

  const shippingTiers = [
    {
      range: "5-24 kg",
      domestic: "$15",
      international: "$45",
      express: "$75",
    },
    {
      range: "25-49 kg",
      domestic: "$25",
      international: "$65",
      express: "$95",
    },
    {
      range: "50-99 kg",
      domestic: "$35",
      international: "$85",
      express: "$125",
    },
    {
      range: "100+ kg",
      domestic: "Free",
      international: "$120",
      express: "$180",
    },
  ];

  const calculatePrice = (tier) => {
    const selectedProduct = productTypes.find((p) => p.id === productType);
    const discountAmount = (selectedProduct.basePrice * parseInt(tier.discount)) / 100;
    return (selectedProduct.basePrice - discountAmount).toFixed(2);
  };

  const calculateSavings = (tier) => {
    const selectedProduct = productTypes.find((p) => p.id === productType);
    const discountAmount = (selectedProduct.basePrice * parseInt(tier.discount)) / 100;
    const minOrderQuantity = parseInt(tier.minOrder);
    return (discountAmount * minOrderQuantity).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-secondary text-primary">
      {/* Header with Background Image */}
      <header
        className="relative bg-primary text-secondary"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-secondary bg-opacity-20 rounded-full backdrop-blur-sm mb-6">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              <span className="text-sm text-primary font-medium">Volume Discounts</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">Bulk Pricing</h1>
            <p className="text-base md:text-medium text-secondary-70 max-w-3xl mx-auto leading-relaxed mb-8">
              Save more when you buy more! Our bulk pricing tiers offer significant discounts for larger orders. Perfect for restaurants, food services, and distributors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
                Calculate Your Savings
              </Button>
              <Button size="lg" className="border border-secondary text-secondary hover:bg-secondary hover:text-primary">
                Contact for Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Product Type Selector */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Choose Your Product Type</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Select the type of tempe that best fits your needs. Each type has different base pricing and storage requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {productTypes.map((product) => (
              <div
                key={product.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${productType === product.id ? "border-primary bg-primary/5 shadow-lg" : "border-gray-200 hover:border-primary/50 hover:shadow-md"}`}
                onClick={() => setProductType(product.id)}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                  <div className="text-2xl font-bold text-primary">
                    ${product.basePrice.toFixed(2)}
                    <span className="text-sm font-normal text-primary/70">/kg</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-primary/70">
                  <div className="flex justify-between">
                    <span>Shelf Life:</span>
                    <span className="font-medium">{product.shelfLife}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage:</span>
                    <span className="font-medium">{product.storage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging:</span>
                    <span className="font-medium">{product.packaging}</span>
                  </div>
                </div>

                {productType === product.id && (
                  <div className="mt-4 text-center">
                    <div className="bg-primary text-secondary px-3 py-1 rounded-full text-sm font-medium">Selected</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Pricing Tiers */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Volume Discount Tiers</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">The more you order, the more you save. Our tiered pricing structure rewards larger orders with significant discounts.</p>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {bulkTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-xl ${
                  tier.popular ? "border-primary bg-gradient-to-br from-primary/5 to-primary/10 ring-2 ring-primary" : "border-gray-200 bg-white hover:border-primary/50"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-secondary px-3 py-1 rounded-full text-sm font-medium">Most Popular</div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{tier.quantity}</h3>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-primary">${calculatePrice(tier)}</span>
                    <span className="text-sm text-primary/70 block">per kg</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium inline-block mb-2">Save {tier.discount}</div>
                  <div className="text-xs text-primary/60 line-through">Was ${productTypes.find((p) => p.id === productType)?.basePrice.toFixed(2)}/kg</div>
                </div>

                <div className="mb-6">
                  <div className="text-center mb-4">
                    <div className="text-sm font-bold text-primary">Min. Order: {tier.minOrder}</div>
                    <div className="text-xs text-green-600 font-medium">Save ${calculateSavings(tier)} on minimum order</div>
                  </div>

                  <p className="text-sm text-primary/70 text-center">{tier.description}</p>
                </div>

                <Button className="w-full" variant={tier.popular ? "default" : "outline"} onClick={() => setSelectedQuantity(tier.id)}>
                  Select {tier.quantity}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Costs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Shipping Costs by Volume</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Transparent shipping costs based on order size. Free domestic shipping on orders 100kg and above!</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden bg-white rounded-xl border border-gray-200 shadow-lg">
              <div className="grid grid-cols-4 bg-primary text-secondary p-4 font-bold text-center">
                <div>Order Size</div>
                <div>Domestic Shipping</div>
                <div>International</div>
                <div>Express</div>
              </div>
              {shippingTiers.map((tier, index) => (
                <div key={index} className={`grid grid-cols-4 p-4 text-center border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <div className="font-medium text-primary">{tier.range}</div>
                  <div className={`font-bold ${tier.domestic === "Free" ? "text-green-600" : "text-primary"}`}>{tier.domestic}</div>
                  <div className="text-primary">{tier.international}</div>
                  <div className="text-primary">{tier.express}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <h3 className="text-lg font-bold text-green-800">Free Shipping Benefit</h3>
              </div>
              <p className="text-green-700 text-center">Orders of 100kg or more qualify for FREE domestic shipping! This can save you up to $35 per order compared to smaller shipments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Order Benefits */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Additional Bulk Order Benefits</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Beyond price savings, bulk orders come with exclusive benefits and priority services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-white border border-orange-200 shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Priority Processing</h3>
              <p className="text-sm text-primary/70">Bulk orders get priority in our production queue for faster delivery</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white border border-blue-200 shadow-md">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Quality Guarantee</h3>
              <p className="text-sm text-primary/70">100% satisfaction guarantee with replacement policy for bulk orders</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white border border-green-200 shadow-md">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Dedicated Support</h3>
              <p className="text-sm text-primary/70">Personal account manager for orders above 50kg per month</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white border border-purple-200 shadow-md">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Flexible Payment</h3>
              <p className="text-sm text-primary/70">Extended payment terms and credit options for qualified bulk buyers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Calculator */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Calculate Your Bulk Savings</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">Use our calculator to see exactly how much you can save with bulk ordering</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-primary">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Order Details</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Product Type</label>
                    <div className="flex gap-2">
                      {productTypes.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => setProductType(product.id)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${productType === product.id ? "bg-primary text-secondary" : "bg-gray-100 text-primary hover:bg-gray-200"}`}
                        >
                          {product.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Order Quantity</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" value={selectedQuantity} onChange={(e) => setSelectedQuantity(e.target.value)}>
                      {bulkTiers.map((tier) => (
                        <option key={tier.id} value={tier.id}>
                          {tier.quantity}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Price Breakdown</h3>

                {(() => {
                  const selectedTier = bulkTiers.find((t) => t.id === selectedQuantity);
                  const selectedProduct = productTypes.find((p) => p.id === productType);
                  const discountedPrice = calculatePrice(selectedTier);
                  const savings = calculateSavings(selectedTier);

                  return (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span>Base Price:</span>
                        <span>${selectedProduct.basePrice.toFixed(2)}/kg</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <span>Bulk Price:</span>
                        <span className="font-bold text-green-600">${discountedPrice}/kg</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                        <span>Discount:</span>
                        <span className="font-bold text-blue-600">{selectedTier.discount}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                        <span>Min. Order Savings:</span>
                        <span className="font-bold text-amber-600">${savings}</span>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <Button className="w-full">Request Quote for {selectedTier.quantity}</Button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Bulk Pricing FAQ</h2>
            <p className="text-lg text-primary/70">Common questions about our bulk pricing and volume discounts</p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <h3 className="text-lg font-bold text-primary mb-2">How are bulk discounts applied?</h3>
              <p className="text-primary/70">Bulk discounts are automatically applied based on your order quantity. The discount applies to your entire order when you meet the minimum threshold for each tier.</p>
            </div>

            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
              <h3 className="text-lg font-bold text-primary mb-2">Can I mix different product types?</h3>
              <p className="text-primary/70">Yes! You can mix fresh, frozen, and dried tempe in a single order. The bulk discount applies to the total weight across all product types.</p>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
              <h3 className="text-lg font-bold text-primary mb-2">What payment terms are available for bulk orders?</h3>
              <p className="text-primary/70">We offer flexible payment terms for bulk orders: Net 15 for orders under 50kg, Net 30 for 50-99kg, and Net 45 for orders above 100kg. Credit applications required for extended terms.</p>
            </div>

            <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
              <h3 className="text-lg font-bold text-primary mb-2">Is there a delivery schedule for bulk orders?</h3>
              <p className="text-primary/70">Bulk orders typically require 3-5 business days for processing. We can accommodate recurring delivery schedules for regular bulk customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Save with Bulk Ordering?</h2>
          <p className="text-lg mb-8 opacity-90">Start saving today with our volume discounts. The more you order, the more you save. Contact us for a personalized quote based on your specific needs.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Get Bulk Quote
            </Button>
            <Button size="lg" className="border border-secondary text-secondary hover:bg-secondary hover:text-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Chat with Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulkPricingPage;
