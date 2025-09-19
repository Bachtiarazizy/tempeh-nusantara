"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ShippingInfoPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("domestic");
  const [selectedShippingType, setSelectedShippingType] = useState("standard");

  const shippingZones = [
    {
      id: "domestic",
      name: "Domestic (Indonesia)",
      flag: "🇮🇩",
      description: "Fast and reliable delivery across Indonesia",
      coverage: "All major cities and remote areas",
      timeframe: "1-7 days",
      methods: [
        {
          name: "Same Day",
          time: "4-8 hours",
          cost: "$15-25",
          areas: "Jakarta, Surabaya, Medan",
          description: "Ultra-fast delivery for urgent orders",
        },
        {
          name: "Next Day",
          time: "1 day",
          cost: "$8-15",
          areas: "Major cities (20+ locations)",
          description: "Express delivery to main metropolitan areas",
        },
        {
          name: "Standard",
          time: "2-4 days",
          cost: "$5-12",
          areas: "All Indonesia",
          description: "Reliable delivery nationwide",
        },
        {
          name: "Economy",
          time: "4-7 days",
          cost: "$3-8",
          areas: "All Indonesia",
          description: "Cost-effective option for non-urgent orders",
        },
      ],
    },
    {
      id: "regional",
      name: "Regional (ASEAN)",
      flag: "🌏",
      description: "Regional shipping across Southeast Asia",
      coverage: "Singapore, Malaysia, Thailand, Philippines, Vietnam, Brunei",
      timeframe: "3-10 days",
      methods: [
        {
          name: "Express Air",
          time: "3-5 days",
          cost: "$45-85",
          areas: "Major cities",
          description: "Fast air freight for premium delivery",
        },
        {
          name: "Standard Air",
          time: "5-8 days",
          cost: "$25-55",
          areas: "All covered countries",
          description: "Reliable air shipping with customs handling",
        },
        {
          name: "Sea Freight",
          time: "7-10 days",
          cost: "$15-35",
          areas: "Port cities",
          description: "Economical option for large orders",
        },
      ],
    },
    {
      id: "international",
      name: "International",
      flag: "🌍",
      description: "Worldwide shipping to major markets",
      coverage: "50+ countries across all continents",
      timeframe: "5-25 days",
      methods: [
        {
          name: "Express International",
          time: "5-10 days",
          cost: "$75-150",
          areas: "Major global cities",
          description: "Premium international express service",
        },
        {
          name: "Air Freight",
          time: "8-15 days",
          cost: "$45-95",
          areas: "All destination countries",
          description: "Standard international air shipping",
        },
        {
          name: "Sea Freight",
          time: "15-25 days",
          cost: "$25-65",
          areas: "Port destinations",
          description: "Cost-effective for bulk orders",
        },
      ],
    },
  ];

  const shippingRequirements = [
    {
      type: "Fresh Tempe",
      icon: "🌿",
      requirements: ["Refrigerated transport (2-4°C)", "Insulated packaging with ice packs", "Maximum 5-day transit time", "Priority handling at all points", "Temperature monitoring throughout journey"],
      restrictions: ["Not available for sea freight", "Limited to express shipping only", "Requires cold chain certification"],
    },
    {
      type: "Frozen Tempe",
      icon: "❄️",
      requirements: ["Frozen transport (-18°C)", "Dry ice packaging for international", "Insulated containers", "Cold storage at transit points", "Temperature logging devices"],
      restrictions: ["Additional fees for dry ice", "Restricted on some airlines", "Requires dangerous goods certification for air"],
    },
    {
      type: "Dried Tempe",
      icon: "📦",
      requirements: ["Standard ambient packaging", "Moisture-resistant containers", "Vacuum sealed packages", "Normal handling procedures", "Room temperature transport"],
      restrictions: ["None - most flexible option", "Available on all shipping methods", "Longest shelf life"],
    },
  ];

  const packagingOptions = [
    {
      name: "Standard Packaging",
      description: "Basic protective packaging for regular orders",
      features: ["Cardboard boxes", "Bubble wrap protection", "Basic labeling", "Standard handling"],
      suitableFor: "Individual orders, dried products",
      additionalCost: "Free",
      icon: "📦",
    },
    {
      name: "Premium Packaging",
      description: "Enhanced protection with branded packaging",
      features: ["Reinforced boxes", "Custom foam inserts", "Premium labeling", "Gift wrapping option"],
      suitableFor: "Gifts, premium orders",
      additionalCost: "$5-15",
      icon: "🎁",
    },
    {
      name: "Cold Chain Packaging",
      description: "Specialized packaging for fresh and frozen products",
      features: ["Insulated containers", "Ice packs/dry ice", "Temperature monitors", "Priority labeling"],
      suitableFor: "Fresh and frozen tempe",
      additionalCost: "$15-35",
      icon: "🧊",
    },
    {
      name: "Bulk Packaging",
      description: "Industrial packaging for wholesale orders",
      features: ["Pallet packaging", "Stretch wrap", "Industrial labeling", "Fork-lift accessible"],
      suitableFor: "Wholesale, distributor orders",
      additionalCost: "$25-75",
      icon: "📋",
    },
  ];

  const shippingPolicies = [
    {
      title: "Order Processing Time",
      content: "Orders are processed within 1-2 business days. Custom orders may require 2-5 days depending on specifications. Weekend orders are processed on the next business day.",
    },
    {
      title: "Shipping Cutoff Times",
      content: "Same-day delivery: Order by 10 AM. Next-day delivery: Order by 3 PM. Standard shipping: Order by 5 PM. International orders: Order by 12 PM for same-day processing.",
    },
    {
      title: "Delivery Attempts",
      content: "We make up to 3 delivery attempts. If unsuccessful, packages are held at local facility for 5 days. Additional storage fees may apply after this period.",
    },
    {
      title: "Address Changes",
      content: "Address changes are possible before shipping. Once shipped, address changes incur additional fees and may cause delays. Contact support immediately for changes.",
    },
    {
      title: "Delivery Confirmation",
      content: "All deliveries require signature confirmation. Alternative arrangements can be made for unattended delivery with proper authorization and insurance coverage.",
    },
    {
      title: "Damaged or Lost Packages",
      content: "Report damaged or lost packages within 48 hours. We provide full replacement or refund for shipping-related damages. All packages are fully insured.",
    },
  ];

  const restrictedAreas = [
    {
      region: "Indonesia",
      restrictions: ["Remote islands may require additional transit time", "Some areas accessible only via sea transport", "Weather-dependent delivery to certain regions"],
    },
    {
      region: "International",
      restrictions: ["Fresh products not available to all countries", "Some countries restrict soy-based imports", "Additional documentation required for certain regions"],
    },
  ];

  const calculateShipping = (zone, method) => {
    const selectedZone = shippingZones.find((z) => z.id === zone);
    const selectedMethod = selectedZone?.methods.find((m) => m.name === method);
    return selectedMethod || selectedZone?.methods[0];
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="text-sm text-primary font-medium">Global Delivery Network</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Shipping Information</h1>
            <p className="text-lg md:text-xl text-secondary-70 max-w-3xl mx-auto leading-relaxed mb-8">
              Fast, reliable, and secure delivery of premium Indonesian tempe worldwide. From same-day local delivery to international shipping with temperature-controlled logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
                Calculate Shipping Cost
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                Track Your Order
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Shipping Coverage Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Global Shipping Coverage</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">We deliver premium Indonesian tempe across Indonesia, Southeast Asia, and 50+ countries worldwide</p>
          </div>

          {/* Zone Selection */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              {shippingZones.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedRegion(zone.id)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${selectedRegion === zone.id ? "bg-primary text-secondary shadow-md" : "text-primary hover:text-primary/70"}`}
                >
                  {zone.flag} {zone.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Zone Details */}
          {(() => {
            const zone = shippingZones.find((z) => z.id === selectedRegion);
            return (
              <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
                  <div className="text-center mb-6">
                    <span className="text-4xl mb-4 block">{zone.flag}</span>
                    <h3 className="text-2xl font-bold text-primary mb-2">{zone.name}</h3>
                    <p className="text-primary/70">{zone.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary mb-1">Coverage Area</div>
                      <div className="text-primary/70">{zone.coverage}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary mb-1">Delivery Timeframe</div>
                      <div className="text-primary/70">{zone.timeframe}</div>
                    </div>
                  </div>
                </div>

                {/* Shipping Methods for Selected Zone */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {zone.methods.map((method, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-primary mb-2">{method.name}</h4>
                        <div className="text-2xl font-bold text-blue-600">{method.time}</div>
                        <div className="text-sm text-primary/70">Delivery Time</div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-sm text-primary/70">Cost Range:</span>
                          <span className="text-sm font-medium text-primary">{method.cost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-primary/70">Coverage:</span>
                          <span className="text-sm font-medium text-primary">{method.areas}</span>
                        </div>
                      </div>

                      <p className="text-sm text-primary/70 mb-4">{method.description}</p>

                      <Button variant="outline" className="w-full">
                        Select {method.name}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Product Shipping Requirements */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Product Shipping Requirements</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Different tempe products require specific shipping conditions to maintain quality and freshness</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {shippingRequirements.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-3 block">{product.icon}</span>
                  <h3 className="text-xl font-bold text-primary">{product.type}</h3>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-3">Shipping Requirements:</h4>
                  <ul className="space-y-2">
                    {product.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <svg className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-primary/70">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-3">Restrictions:</h4>
                  <ul className="space-y-2">
                    {product.restrictions.map((restriction, restrictionIndex) => (
                      <li key={restrictionIndex} className="flex items-start">
                        <svg className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <span className="text-sm text-primary/70">{restriction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Packaging Options</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Choose the right packaging solution for your order type and shipping requirements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packagingOptions.map((packaging, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-6 border border-gray-200 shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{packaging.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{packaging.name}</h3>
                    <p className="text-sm text-primary/70">{packaging.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-primary mb-2">Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {packaging.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs text-primary/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-primary">Suitable for:</span>
                    <p className="text-primary/70">{packaging.suitableFor}</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Additional cost:</span>
                    <p className={`font-bold ${packaging.additionalCost === "Free" ? "text-green-600" : "text-primary"}`}>{packaging.additionalCost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Calculator */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Shipping Cost Calculator</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">Get an instant estimate of shipping costs based on your destination and order details</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-primary">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Shipping Details</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Destination</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
                      {shippingZones.map((zone) => (
                        <option key={zone.id} value={zone.id}>
                          {zone.flag} {zone.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Shipping Method</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" value={selectedShippingType} onChange={(e) => setSelectedShippingType(e.target.value)}>
                      {shippingZones
                        .find((z) => z.id === selectedRegion)
                        ?.methods.map((method, index) => (
                          <option key={index} value={method.name.toLowerCase()}>
                            {method.name} - {method.time}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Product Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Fresh Tempe</option>
                      <option>Frozen Tempe</option>
                      <option>Dried Tempe</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Order Weight (kg)</label>
                    <input type="number" min="1" defaultValue="2" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Cost Breakdown</h3>

                {(() => {
                  const selectedZone = shippingZones.find((z) => z.id === selectedRegion);
                  const selectedMethod = selectedZone?.methods[0]; // Using first method as default

                  return (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span>Base Shipping Cost:</span>
                        <span className="font-bold">{selectedMethod?.cost || "$25-45"}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                        <span>Packaging Fee:</span>
                        <span className="font-bold">$5.00</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <span>Insurance:</span>
                        <span className="font-bold">$3.00</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                        <span>Handling Fee:</span>
                        <span className="font-bold">$2.00</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border-t-2 border-primary">
                        <span className="font-bold text-lg">Estimated Total:</span>
                        <span className="font-bold text-primary text-xl">$35.00</span>
                      </div>

                      <div className="text-center text-sm text-primary/70 mb-4">Delivery time: {selectedMethod?.time || "3-7 days"}</div>

                      <Button className="w-full">Place Order with This Shipping</Button>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Policies */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Shipping Policies & Guidelines</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Important information about our shipping processes, policies, and customer responsibilities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {shippingPolicies.map((policy, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-green-200 shadow-md">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  {policy.title}
                </h3>
                <p className="text-primary/70 leading-relaxed">{policy.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restricted Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Shipping Restrictions & Limitations</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Areas with special shipping considerations or restrictions</p>
          </div>

          <div className="space-y-6">
            {restrictedAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  {area.region} - Special Considerations
                </h3>
                <ul className="space-y-2">
                  {area.restrictions.map((restriction, restrictionIndex) => (
                    <li key={restrictionIndex} className="flex items-start">
                      <svg className="w-4 h-4 mr-3 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-primary/70">{restriction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency & Special Services */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Special Shipping Services</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Additional services for urgent deliveries and special requirements</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Emergency Delivery</h3>
              <p className="text-primary/70 text-sm mb-4">Ultra-urgent delivery for critical orders within 2-4 hours in major cities</p>
              <div className="text-2xl font-bold text-red-600 mb-2">2-4 hours</div>
              <div className="text-sm text-primary/70 mb-4">Additional $50-100 fee</div>
              <Button variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-50">
                Request Emergency
              </Button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">White Glove Service</h3>
              <p className="text-primary/70 text-sm mb-4">Premium handling with appointment scheduling and special care instructions</p>
              <div className="text-2xl font-bold text-blue-600 mb-2">Premium</div>
              <div className="text-sm text-primary/70 mb-4">Additional $25-75 fee</div>
              <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                Add White Glove
              </Button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4M5 7h14l-1 8H6L5 7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Gift Delivery</h3>
              <p className="text-primary/70 text-sm mb-4">Special gift packaging with personalized message and delivery confirmation</p>
              <div className="text-2xl font-bold text-green-600 mb-2">Standard +</div>
              <div className="text-sm text-primary/70 mb-4">Additional $15-35 fee</div>
              <Button variant="outline" className="w-full border-green-200 text-green-600 hover:bg-green-50">
                Add Gift Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Place Your Order?</h2>
          <p className="text-lg mb-8 opacity-90">Choose from our flexible shipping options and get your premium Indonesian tempe delivered fresh to your doorstep anywhere in the world.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5.3A2 2 0 007.83 20H16m0-7a2 2 0 11-4 0 2 2 0 014 0zM9 20a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
              Start Shopping
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Get Custom Quote
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free shipping on $100+</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Real-time tracking</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Temperature controlled</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100% quality guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">Shipping Support & Inquiries</h2>
            <p className="text-primary/70">Need help with shipping options or have special requirements? Contact our logistics team.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">WhatsApp</h3>
              <p className="text-sm text-primary/70 mb-3">Instant shipping quotes</p>
              <Button variant="outline" size="sm" className="text-xs">
                Chat Now
              </Button>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">Email</h3>
              <p className="text-sm text-primary/70 mb-3">shipping@tempenusantara.com</p>
              <Button variant="outline" size="sm" className="text-xs">
                Send Email
              </Button>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">Phone</h3>
              <p className="text-sm text-primary/70 mb-3">+62-xxx-xxxx-xxxx</p>
              <Button variant="outline" size="sm" className="text-xs">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-primary hover:bg-secondary text-secondary p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 hover:shadow-xl"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default ShippingInfoPage;
