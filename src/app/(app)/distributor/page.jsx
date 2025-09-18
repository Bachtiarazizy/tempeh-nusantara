"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const DistributorProgramPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("asia-pacific");
  const [selectedTier, setSelectedTier] = useState("regional");

  const distributorTiers = [
    {
      id: "city",
      name: "City Distributor",
      territory: "Single city/metropolitan area",
      minOrder: "500 kg/month",
      margin: "25-30%",
      investment: "$10,000 - $25,000",
      support: "Basic",
      exclusivity: "City-level",
      features: ["Exclusive city distribution rights", "Monthly minimum order: 500kg", "25-30% distributor margin", "Basic marketing support package", "Quarterly business reviews", "Standard payment terms (Net 30)"],
    },
    {
      id: "regional",
      name: "Regional Distributor",
      territory: "State/province/region",
      minOrder: "2,000 kg/month",
      margin: "30-35%",
      investment: "$25,000 - $75,000",
      support: "Advanced",
      exclusivity: "Regional",
      popular: true,
      features: [
        "Exclusive regional distribution rights",
        "Monthly minimum order: 2,000kg",
        "30-35% distributor margin",
        "Comprehensive marketing support",
        "Dedicated account manager",
        "Extended payment terms (Net 45)",
        "Co-marketing fund allocation",
        "Territory protection guarantee",
      ],
    },
    {
      id: "national",
      name: "National Distributor",
      territory: "Entire country",
      minOrder: "5,000 kg/month",
      margin: "35-40%",
      investment: "$75,000 - $200,000",
      support: "Premium",
      exclusivity: "Country-wide",
      features: [
        "Exclusive national distribution rights",
        "Monthly minimum order: 5,000kg",
        "35-40% distributor margin",
        "Full marketing and branding support",
        "On-site training and support visits",
        "Extended payment terms (Net 60)",
        "Significant co-marketing budget",
        "Product customization options",
        "Priority access to new products",
      ],
    },
  ];

  const regions = [
    {
      id: "asia-pacific",
      name: "Asia Pacific",
      flag: "🌏",
      countries: ["Singapore", "Malaysia", "Australia", "Japan", "South Korea", "Philippines"],
      opportunities: "High demand for healthy, plant-based foods",
      marketSize: "$2.8B fermented foods market",
      growthRate: "8.5% annually",
      keyMarkets: ["Health food stores", "Asian restaurants", "Supermarket chains"],
    },
    {
      id: "north-america",
      name: "North America",
      flag: "🇺🇸",
      countries: ["United States", "Canada"],
      opportunities: "Growing plant-based protein trend",
      marketSize: "$1.4B plant protein market",
      growthRate: "12% annually",
      keyMarkets: ["Whole Foods", "Health stores", "Vegan restaurants", "Online retail"],
    },
    {
      id: "europe",
      name: "Europe",
      flag: "🇪🇺",
      countries: ["Netherlands", "Germany", "UK", "France", "Sweden", "Denmark"],
      opportunities: "Strong organic and sustainable food movement",
      marketSize: "$890M organic protein market",
      growthRate: "10% annually",
      keyMarkets: ["Organic stores", "Premium supermarkets", "Health food chains"],
    },
    {
      id: "middle-east",
      name: "Middle East",
      flag: "🕌",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
      opportunities: "Halal-certified protein alternatives",
      marketSize: "$320M halal foods market",
      growthRate: "15% annually",
      keyMarkets: ["Halal supermarkets", "Premium hotels", "Health stores"],
    },
  ];

  const requirements = [
    {
      category: "Financial Requirements",
      items: [
        "Minimum initial investment as per tier level",
        "Proof of financial stability and creditworthiness",
        "Bank guarantee for minimum order commitments",
        "Working capital for 3-6 months operations",
        "Insurance coverage for inventory and operations",
      ],
    },
    {
      category: "Infrastructure Requirements",
      items: ["Cold storage facilities (-18°C for frozen products)", "Refrigerated transportation network", "Warehouse space for 2-month inventory", "Order management and tracking systems", "Quality control and food safety protocols"],
    },
    {
      category: "Market Requirements",
      items: ["Proven track record in food distribution", "Established relationships with retailers/restaurants", "Understanding of local market and regulations", "Marketing and sales team capabilities", "Customer service infrastructure"],
    },
    {
      category: "Legal & Compliance",
      items: ["Valid business license and import permits", "Food safety certifications (HACCP, etc.)", "Compliance with local food regulations", "Product liability insurance coverage", "Agreement to brand guidelines and standards"],
    },
  ];

  const benefits = [
    {
      title: "Exclusive Territory Rights",
      description: "Protected distribution territory with no competing distributors",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Comprehensive Training",
      description: "Product knowledge, sales techniques, and operational training",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Marketing Support",
      description: "Marketing materials, campaigns, and co-op advertising funds",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        </svg>
      ),
    },
    {
      title: "Operational Support",
      description: "Logistics coordination, inventory management, and technical assistance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
        </svg>
      ),
    },
    {
      title: "Product Innovation",
      description: "First access to new products and seasonal variations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Performance Incentives",
      description: "Volume bonuses, achievement rewards, and growth incentives",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Initial Application",
      description: "Submit distributor application with company profile and business plan",
      timeline: "Week 1",
      requirements: ["Company profile", "Business plan", "Financial statements", "Market analysis"],
    },
    {
      step: 2,
      title: "Qualification Review",
      description: "Our team evaluates your application and conducts due diligence",
      timeline: "Week 2-3",
      requirements: ["Credit check", "Reference verification", "Infrastructure assessment", "Market evaluation"],
    },
    {
      step: 3,
      title: "Market Visit & Presentation",
      description: "Present your distribution strategy and conduct market visit",
      timeline: "Week 4",
      requirements: ["Strategy presentation", "Facility tour", "Team introduction", "Market demonstration"],
    },
    {
      step: 4,
      title: "Contract Negotiation",
      description: "Finalize terms, territory, and distributor agreement",
      timeline: "Week 5-6",
      requirements: ["Territory mapping", "Contract terms", "Investment commitment", "Legal documentation"],
    },
    {
      step: 5,
      title: "Onboarding & Launch",
      description: "Complete training, setup systems, and launch distribution",
      timeline: "Week 7-10",
      requirements: ["Training completion", "System setup", "Initial inventory", "Launch campaign"],
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-sm text-primary font-medium">Strategic Partnership</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Distributor Program</h1>
            <p className="text-lg md:text-xl text-secondary-70 max-w-3xl mx-auto leading-relaxed mb-8">
              Join our global network of premium tempe distributors. Build a profitable business while bringing authentic Indonesian superfood to your market with exclusive territory rights and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
                Apply as Distributor
              </Button>
              <Button size="lg" className=" border border-secondary text-secondary hover:bg-secondary hover:text-primary">
                Download Program Guide
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Distributor Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Distributor Partnership Tiers</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Choose the distribution tier that matches your market size and investment capacity</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {distributorTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                  tier.popular ? "border-primary bg-gradient-to-br from-primary/5 to-primary/10 ring-2 ring-primary transform scale-105" : "border-gray-200 bg-white hover:border-primary/50"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-secondary px-4 py-2 rounded-full text-sm font-bold shadow-lg">Most Popular</div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-3">{tier.name}</h3>
                  <p className="text-primary/70 mb-4">{tier.territory}</p>

                  <div className="space-y-2 mb-6">
                    <div className="text-3xl font-bold text-primary">{tier.margin}</div>
                    <div className="text-sm text-primary/70">Distributor Margin</div>
                    <div className="text-lg font-medium text-primary">{tier.investment}</div>
                    <div className="text-xs text-primary/60">Investment Range</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-primary">{tier.minOrder}</div>
                      <div className="text-primary/70">Min Order</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-primary">{tier.exclusivity}</div>
                      <div className="text-primary/70">Exclusivity</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-primary mb-4">Features & Benefits:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 mr-3 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-primary/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" variant={tier.popular ? "default" : "outline"} onClick={() => setSelectedTier(tier.id)}>
                  Apply for {tier.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Global Market Opportunities</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Explore distribution opportunities in growing markets worldwide with strong demand for plant-based proteins</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {regions.map((region) => (
              <div
                key={region.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${selectedRegion === region.id ? "border-primary bg-white shadow-lg" : "border-gray-200 bg-white hover:border-primary/50 hover:shadow-md"}`}
                onClick={() => setSelectedRegion(region.id)}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{region.flag}</span>
                  <h3 className="text-xl font-bold text-primary">{region.name}</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-primary">Key Countries:</span>
                    <p className="text-sm text-primary/70">{region.countries.join(", ")}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-primary">Market Size:</span>
                      <p className="text-primary/70">{region.marketSize}</p>
                    </div>
                    <div>
                      <span className="font-medium text-primary">Growth Rate:</span>
                      <p className="text-green-600 font-medium">{region.growthRate}</p>
                    </div>
                  </div>

                  {selectedRegion === region.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="mb-3">
                        <span className="text-sm font-medium text-primary">Market Opportunity:</span>
                        <p className="text-sm text-primary/70 mt-1">{region.opportunities}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary">Key Distribution Channels:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {region.keyMarkets.map((market, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                              {market}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Distributor Requirements</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">We partner with qualified distributors who meet our standards for quality, service, and market coverage</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  {req.category}
                </h3>

                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-primary/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Distributor Benefits & Support</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Comprehensive support system to ensure your success as our distribution partner</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-green-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 mx-auto">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-3 text-center">{benefit.title}</h3>
                <p className="text-sm text-primary/70 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Application Process</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Our structured 5-step process ensures we find the right distribution partners for mutual success</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-primary/20 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {applicationProcess.map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary font-bold mr-4">{phase.step}</div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">{phase.title}</h3>
                          <p className="text-sm text-primary/70">{phase.timeline}</p>
                        </div>
                      </div>

                      <p className="text-primary/70 mb-4">{phase.description}</p>

                      <div>
                        <span className="text-sm font-medium text-primary">Required:</span>
                        <ul className="mt-2 grid grid-cols-2 gap-2">
                          {phase.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center text-xs text-primary/70">
                              <svg className="w-3 h-3 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-secondary font-bold text-sm">{phase.step}</span>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Distribution ROI Calculator</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">Calculate your potential return on investment as a Tempe Nusantara distributor</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-primary">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Distribution Parameters</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Distributor Tier</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" value={selectedTier} onChange={(e) => setSelectedTier(e.target.value)}>
                      {distributorTiers.map((tier) => (
                        <option key={tier.id} value={tier.id}>
                          {tier.name} - {tier.margin}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Sales Volume (kg)</label>
                    <input type="number" min="500" defaultValue="2000" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Average Selling Price ($/kg)</label>
                    <input type="number" min="10" defaultValue="15" step="0.5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Operating Expenses ($/month)</label>
                    <input type="number" min="1000" defaultValue="8000" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Financial Projections</h3>

                {(() => {
                  const selectedTierData = distributorTiers.find((t) => t.id === selectedTier);
                  const monthlyVolume = 2000; // kg
                  const avgSellingPrice = 15; // $/kg
                  const marginPercent = parseInt(selectedTierData?.margin?.split("-")[1] || "30");
                  const operatingExpenses = 8000;

                  const monthlyRevenue = monthlyVolume * avgSellingPrice;
                  const monthlyMargin = (monthlyRevenue * marginPercent) / 100;
                  const monthlyProfit = monthlyMargin - operatingExpenses;
                  const annualProfit = monthlyProfit * 12;
                  const initialInvestment = parseInt(selectedTierData?.investment?.split(")")[1]?.split(",").join("").split(" -")[0] || "25000");
                  const roi = (annualProfit / initialInvestment) * 100;

                  return (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span>Monthly Revenue:</span>
                        <span className="font-bold">${monthlyRevenue.toLocaleString()}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                        <span>Monthly Margin ({marginPercent}%):</span>
                        <span className="font-bold text-blue-600">${monthlyMargin.toLocaleString()}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                        <span>Operating Expenses:</span>
                        <span className="font-bold text-red-600">-${operatingExpenses.toLocaleString()}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <span>Monthly Net Profit:</span>
                        <span className="font-bold text-green-600">${monthlyProfit.toLocaleString()}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                        <span>Annual Net Profit:</span>
                        <span className="font-bold text-amber-600">${annualProfit.toLocaleString()}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border-t-2 border-primary">
                        <span className="font-bold">ROI (Annual):</span>
                        <span className="font-bold text-primary text-xl">{roi.toFixed(1)}%</span>
                      </div>

                      <div className="text-center text-sm text-primary/70 mb-4">Payback period: {(initialInvestment / monthlyProfit).toFixed(1)} months</div>

                      <Button className="w-full">Apply for {selectedTierData?.name}</Button>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Distributor Success Stories</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Learn from our successful distribution partners around the world</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-orange-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">AS</div>
                <div>
                  <h3 className="font-bold text-primary">Asian Superfoods</h3>
                  <p className="text-sm text-primary/70">Singapore National Distributor</p>
                </div>
              </div>
              <blockquote className="text-primary/70 italic mb-4">"Partnership with Tempe Nusantara transformed our business. We've grown 300% in 18 months and now supply 50+ stores across Singapore."</blockquote>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <div className="font-bold text-green-600">300%</div>
                  <div className="text-primary/70">Growth</div>
                </div>
                <div>
                  <div className="font-bold text-blue-600">50+</div>
                  <div className="text-primary/70">Stores</div>
                </div>
                <div>
                  <div className="font-bold text-purple-600">18</div>
                  <div className="text-primary/70">Months</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-orange-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">HF</div>
                <div>
                  <h3 className="font-bold text-primary">Healthy Foods Co.</h3>
                  <p className="text-sm text-primary/70">California Regional Distributor</p>
                </div>
              </div>
              <blockquote className="text-primary/70 italic mb-4">"Tempe Nusantara's premium quality and support helped us establish the leading tempe brand in California's health food market."</blockquote>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <div className="font-bold text-green-600">250%</div>
                  <div className="text-primary/70">ROI</div>
                </div>
                <div>
                  <div className="font-bold text-blue-600">120+</div>
                  <div className="text-primary/70">Outlets</div>
                </div>
                <div>
                  <div className="font-bold text-purple-600">24</div>
                  <div className="text-primary/70">Months</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-orange-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">OF</div>
                <div>
                  <h3 className="font-bold text-primary">Organic First</h3>
                  <p className="text-sm text-primary/70">Netherlands Regional Distributor</p>
                </div>
              </div>
              <blockquote className="text-primary/70 italic mb-4">"The organic certification and authenticity of Tempe Nusantara resonates perfectly with European consumers. Excellent partnership!"</blockquote>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <div className="font-bold text-green-600">180%</div>
                  <div className="text-primary/70">Growth</div>
                </div>
                <div>
                  <div className="font-bold text-blue-600">80+</div>
                  <div className="text-primary/70">Stores</div>
                </div>
                <div>
                  <div className="font-bold text-purple-600">15</div>
                  <div className="text-primary/70">Months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Build Your Distribution Empire?</h2>
          <p className="text-lg mb-8 opacity-90">Join our exclusive network of international distributors and build a profitable business with premium Indonesian tempe. Apply today and secure your exclusive territory.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Submit Application
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
              Schedule Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Exclusive territories</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>High-margin products</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Comprehensive support</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Proven success model</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">Contact Our Distribution Team</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <h3 className="text-lg font-bold text-primary mb-4">Partnership Inquiries</h3>
              <div className="space-y-3 text-primary/70">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>distributors@tempenusantara.com</span>
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
              <h3 className="text-lg font-bold text-primary mb-4">Application Support</h3>
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

export default DistributorProgramPage;
