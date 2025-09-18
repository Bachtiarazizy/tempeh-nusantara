"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const WholesalePage = () => {
  const [selectedTier, setSelectedTier] = useState("silver");

  const pricingTiers = [
    {
      id: "bronze",
      name: "Bronze Tier",
      minOrder: "50 kg",
      discount: "15%",
      price: "$8.50",
      originalPrice: "$10.00",
      features: ["Minimum order: 50 kg per shipment", "15% discount on retail prices", "Standard packaging included", "Monthly payment terms available", "Basic product training materials"],
      color: "from-amber-50 to-orange-100",
      borderColor: "border-amber-200",
    },
    {
      id: "silver",
      name: "Silver Tier",
      minOrder: "100 kg",
      discount: "20%",
      price: "$8.00",
      originalPrice: "$10.00",
      features: ["Minimum order: 100 kg per shipment", "20% discount on retail prices", "Premium packaging included", "45-day payment terms available", "Comprehensive product training", "Marketing materials provided"],
      color: "from-gray-50 to-slate-100",
      borderColor: "border-gray-300",
      popular: true,
    },
    {
      id: "gold",
      name: "Gold Tier",
      minOrder: "250 kg",
      discount: "25%",
      price: "$7.50",
      originalPrice: "$10.00",
      features: [
        "Minimum order: 250 kg per shipment",
        "25% discount on retail prices",
        "Custom packaging options available",
        "60-day payment terms available",
        "Advanced product training & certification",
        "Co-marketing opportunities",
        "Dedicated account manager",
      ],
      color: "from-yellow-50 to-amber-100",
      borderColor: "border-yellow-300",
    },
    {
      id: "platinum",
      name: "Platinum Tier",
      minOrder: "500 kg",
      discount: "30%",
      price: "$7.00",
      originalPrice: "$10.00",
      features: [
        "Minimum order: 500 kg per shipment",
        "30% discount on retail prices",
        "Full custom packaging & branding",
        "90-day payment terms available",
        "White-label product options",
        "Exclusive territory rights",
        "Priority production scheduling",
        "Joint marketing campaigns",
      ],
      color: "from-purple-50 to-indigo-100",
      borderColor: "border-purple-300",
    },
  ];

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm text-primary font-medium">B2B Partnership</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">Wholesale Program</h1>
            <p className="text-base md:text-medium text-secondary-70 max-w-3xl mx-auto leading-relaxed mb-8">
              Partner with us to bring premium Indonesian tempe to your market. Exclusive wholesale pricing, bulk orders, and dedicated support for international distributors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="">
                Request Quote
              </Button>
              <Button size="lg" className="border border-secondary text-secondary hover:bg-secondary hover:text-primary">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Why Choose Our Wholesale Program?</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">We provide everything you need to successfully distribute premium tempe in your market</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Competitive Pricing</h3>
              <p className="text-sm text-primary/70">Up to 30% wholesale discounts based on volume commitment</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Premium Quality</h3>
              <p className="text-sm text-primary/70">Export-grade tempe with international certifications</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Global Shipping</h3>
              <p className="text-sm text-primary/70">Reliable international logistics and cold chain management</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Marketing Support</h3>
              <p className="text-sm text-primary/70">Complete marketing materials and co-op advertising programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Wholesale Pricing Tiers</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Choose the tier that matches your volume requirements and get exclusive wholesale pricing</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div key={tier.id} className={`relative p-6 rounded-xl bg-gradient-to-br ${tier.color} border-2 ${tier.borderColor} transition-all duration-300 hover:shadow-xl ${tier.popular ? "ring-2 ring-primary" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-secondary px-3 py-1 rounded-full text-sm font-medium">Most Popular</div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary">{tier.price}</span>
                    <span className="text-lg line-through text-primary/50 ml-2">{tier.originalPrice}</span>
                    <span className="text-sm text-primary/70 block">per kg</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium inline-block">Save {tier.discount}</div>
                </div>

                <div className="mb-6">
                  <div className="text-center mb-4">
                    <div className="text-lg font-bold text-primary">Min. Order: {tier.minOrder}</div>
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-primary">
                        <svg className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" variant={tier.popular ? "default" : "outline"} onClick={() => setSelectedTier(tier.id)}>
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Premium Indonesian Tempe</h2>
              <p className="text-lg text-primary/70 mb-8">Our wholesale tempe is made from the finest non-GMO soybeans using traditional Indonesian fermentation methods, ensuring authentic taste and premium quality for your customers.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2">Product Specifications</h3>
                  <ul className="text-sm text-primary/70 space-y-1">
                    <li>• Weight: 200g, 400g, 1kg packages</li>
                    <li>• Shelf life: 6 months frozen</li>
                    <li>• Packaging: Vacuum sealed</li>
                    <li>• Temperature: -18°C storage</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2">Certifications</h3>
                  <ul className="text-sm text-primary/70 space-y-1">
                    <li>• Halal certified</li>
                    <li>• Organic certification</li>
                    <li>• ISO 22000 food safety</li>
                    <li>• Export license</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="mr-4">
                  Request Sample
                </Button>
                <Button size="lg" variant="outline">
                  Download Spec Sheet
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl p-8">
                <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Premium Tempe</h3>
                    <p className="text-sm text-primary/70">Export Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Simple Ordering Process</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">From inquiry to delivery, we make wholesale ordering straightforward and reliable</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Submit Inquiry</h3>
              <p className="text-sm text-primary/70">Send us your volume requirements and preferred delivery schedule</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Get Quote</h3>
              <p className="text-sm text-primary/70">Receive customized pricing and terms within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Confirm Order</h3>
              <p className="text-sm text-primary/70">Approve the quote and we'll begin production scheduling</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Receive Delivery</h3>
              <p className="text-sm text-primary/70">Get your order delivered with full traceability and documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Start Your Wholesale Partnership?</h2>
          <p className="text-lg mb-8 opacity-90">Join our network of international distributors and bring authentic Indonesian tempe to your market. Contact us today for a customized quote.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Request Wholesale Quote
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
              Chat on WhatsApp
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>24-hour quote response</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Flexible payment terms</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Global shipping available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">Contact Our Wholesale Team</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <h3 className="text-lg font-bold text-primary mb-4">Sales Inquiries</h3>
              <div className="space-y-3 text-primary/70">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>wholesale@tempenusantara.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+62-xxx-xxxx-xxxx</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <h3 className="text-lg font-bold text-primary mb-4">Order Support</h3>
              <div className="space-y-3 text-primary/70">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span>WhatsApp: +62-xxx-xxxx-xxxx</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon-Fri: 9 AM - 6 PM WIB</span>
                </div>
              </div>
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

export default WholesalePage;
