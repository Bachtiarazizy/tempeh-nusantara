"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const PaymentMethodsPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("indonesia");
  const [selectedCurrency, setSelectedCurrency] = useState("idr");

  const paymentRegions = [
    {
      id: "indonesia",
      name: "Indonesia",
      flag: "🇮🇩",
      currency: "IDR",
      description: "Comprehensive local payment options for Indonesian customers",
    },
    {
      id: "international",
      name: "International",
      flag: "🌍",
      currency: "USD",
      description: "Global payment solutions for international customers",
    },
  ];

  const indonesianMethods = [
    {
      category: "Digital Wallets",
      methods: [
        {
          name: "GoPay",
          icon: "📱",
          fees: "Free",
          processing: "Instant",
          limits: "Rp 20,000,000/day",
          description: "Indonesia's leading digital wallet",
          features: ["QR code payment", "Instant confirmation", "Cashback eligible", "24/7 availability"],
        },
        {
          name: "OVO",
          icon: "💳",
          fees: "Free",
          processing: "Instant",
          limits: "Rp 20,000,000/day",
          description: "Popular e-wallet with wide acceptance",
          features: ["One-tap payment", "Points rewards", "Balance top-up", "Transaction history"],
        },
        {
          name: "DANA",
          icon: "💰",
          fees: "Free",
          processing: "Instant",
          limits: "Rp 20,000,000/day",
          description: "Fast and secure digital payments",
          features: ["QR payment", "Split bill", "Investment options", "Money transfer"],
        },
        {
          name: "ShopeePay",
          icon: "🛍️",
          fees: "Free",
          processing: "Instant",
          limits: "Rp 20,000,000/day",
          description: "Shopee's integrated payment solution",
          features: ["Shopee ecosystem", "Coin rewards", "Easy refunds", "Installment options"],
        },
      ],
    },
    {
      category: "Bank Transfers",
      methods: [
        {
          name: "BCA Virtual Account",
          icon: "🏦",
          fees: "Rp 4,000",
          processing: "Real-time",
          limits: "Rp 500,000,000/day",
          description: "Bank Central Asia virtual account",
          features: ["ATM payment", "Internet banking", "Mobile banking", "Auto-confirmation"],
        },
        {
          name: "Mandiri Virtual Account",
          icon: "🏛️",
          fees: "Rp 4,000",
          processing: "Real-time",
          limits: "Rp 500,000,000/day",
          description: "Bank Mandiri virtual account system",
          features: ["Multi-channel payment", "24/7 availability", "SMS notification", "Receipt printing"],
        },
        {
          name: "BNI Virtual Account",
          icon: "🏦",
          fees: "Rp 4,000",
          processing: "Real-time",
          limits: "Rp 500,000,000/day",
          description: "Bank Negara Indonesia virtual account",
          features: ["Online banking", "ATM payment", "Mobile app", "Transaction tracking"],
        },
        {
          name: "BRI Virtual Account",
          icon: "🏪",
          fees: "Rp 4,000",
          processing: "Real-time",
          limits: "Rp 500,000,000/day",
          description: "Bank Rakyat Indonesia virtual account",
          features: ["Rural coverage", "Agent banking", "BRIZZI integration", "Mass payment"],
        },
      ],
    },
    {
      category: "Credit Cards",
      methods: [
        {
          name: "Visa",
          icon: "💳",
          fees: "2.9% + Rp 2,200",
          processing: "Instant",
          limits: "Based on credit limit",
          description: "International Visa credit and debit cards",
          features: ["Global acceptance", "Fraud protection", "Rewards program", "Installment plans"],
        },
        {
          name: "Mastercard",
          icon: "💳",
          fees: "2.9% + Rp 2,200",
          processing: "Instant",
          limits: "Based on credit limit",
          description: "Mastercard credit and debit cards",
          features: ["Worldwide coverage", "Security features", "Cashback offers", "Contactless payment"],
        },
        {
          name: "JCB",
          icon: "💳",
          fees: "2.9% + Rp 2,200",
          processing: "Instant",
          limits: "Based on credit limit",
          description: "Japan Credit Bureau cards",
          features: ["Asia-Pacific focus", "Travel benefits", "Merchant offers", "Premium services"],
        },
      ],
    },
    {
      category: "Alternative Methods",
      methods: [
        {
          name: "Alfamart",
          icon: "🏪",
          fees: "Rp 2,500",
          processing: "Real-time",
          limits: "Rp 5,000,000",
          description: "Pay at Alfamart convenience stores",
          features: ["16,000+ locations", "Cash payment", "Receipt confirmation", "Extended hours"],
        },
        {
          name: "Indomaret",
          icon: "🏬",
          fees: "Rp 2,500",
          processing: "Real-time",
          limits: "Rp 5,000,000",
          description: "Payment at Indomaret stores nationwide",
          features: ["18,000+ outlets", "24/7 availability", "Multiple services", "Easy verification"],
        },
        {
          name: "Pos Indonesia",
          icon: "📮",
          fees: "Rp 3,000",
          processing: "Same day",
          limits: "Rp 10,000,000",
          description: "Indonesian postal service payment",
          features: ["Rural reach", "Government backed", "Reliable service", "Multiple locations"],
        },
      ],
    },
  ];

  const internationalMethods = [
    {
      category: "Credit Cards",
      methods: [
        {
          name: "Visa",
          icon: "💳",
          fees: "2.9% + $0.30",
          processing: "Instant",
          limits: "Based on credit limit",
          description: "Global Visa credit and debit cards",
          features: ["Worldwide acceptance", "Fraud protection", "Multi-currency", "Secure processing"],
        },
        {
          name: "Mastercard",
          icon: "💳",
          fees: "2.9% + $0.30",
          processing: "Instant",
          limits: "Based on credit limit",
          description: "International Mastercard payments",
          features: ["Global network", "Advanced security", "Contactless payments", "Digital wallets"],
        },
        {
          name: "American Express",
          icon: "💳",
          fees: "3.4% + $0.30",
          processing: "Instant",
          limits: "Based on credit limit",
          description: "Premium American Express cards",
          features: ["Premium service", "Travel benefits", "Rewards program", "Purchase protection"],
        },
        {
          name: "Discover",
          icon: "💳",
          fees: "2.9% + $0.30",
          processing: "Instant",
          limits: "Based on credit limit",
          description: "Discover card payments",
          features: ["Cashback rewards", "No foreign transaction fees", "Fraud protection", "Customer service"],
        },
      ],
    },
    {
      category: "Digital Wallets",
      methods: [
        {
          name: "PayPal",
          icon: "💙",
          fees: "3.49% + $0.49",
          processing: "Instant",
          limits: "$10,000/transaction",
          description: "Global digital payment platform",
          features: ["Buyer protection", "Multi-currency", "Easy checkout", "Mobile payments"],
        },
        {
          name: "Apple Pay",
          icon: "📱",
          fees: "2.9% + $0.30",
          processing: "Instant",
          limits: "Device dependent",
          description: "Secure mobile payments for iOS",
          features: ["Touch/Face ID", "Secure element", "In-app payments", "Privacy focused"],
        },
        {
          name: "Google Pay",
          icon: "📱",
          fees: "2.9% + $0.30",
          processing: "Instant",
          limits: "Device dependent",
          description: "Google's mobile payment service",
          features: ["NFC payments", "Loyalty cards", "Send money", "Online checkout"],
        },
      ],
    },
    {
      category: "Bank Transfers",
      methods: [
        {
          name: "SEPA (Europe)",
          icon: "🏦",
          fees: "$5.00",
          processing: "1-3 days",
          limits: "€999,999",
          description: "Single Euro Payments Area transfers",
          features: ["Euro zone coverage", "Low cost", "Standardized", "Batch processing"],
        },
        {
          name: "ACH (US)",
          icon: "🏛️",
          fees: "$5.00",
          processing: "2-5 days",
          limits: "$25,000/day",
          description: "Automated Clearing House transfers",
          features: ["US banking network", "Cost effective", "Batch processing", "Direct debit"],
        },
        {
          name: "Wire Transfer",
          icon: "🌐",
          fees: "$15-45",
          processing: "Same day",
          limits: "No limit",
          description: "International wire transfers",
          features: ["Global reach", "Fast processing", "High security", "Large amounts"],
        },
      ],
    },
    {
      category: "Cryptocurrency",
      methods: [
        {
          name: "Bitcoin (BTC)",
          icon: "₿",
          fees: "1%",
          processing: "10-60 minutes",
          limits: "No limit",
          description: "Leading cryptocurrency payments",
          features: ["Decentralized", "Global access", "Low fees", "Irreversible"],
        },
        {
          name: "Ethereum (ETH)",
          icon: "Ξ",
          fees: "1%",
          processing: "2-15 minutes",
          limits: "No limit",
          description: "Smart contract cryptocurrency",
          features: ["Smart contracts", "Fast transactions", "DeFi integration", "Programmable"],
        },
        {
          name: "USDT (Tether)",
          icon: "₮",
          fees: "1%",
          processing: "5-30 minutes",
          limits: "No limit",
          description: "USD-pegged stablecoin",
          features: ["Price stability", "USD backed", "Multiple blockchains", "Trading pairs"],
        },
      ],
    },
  ];

  const currencies = [
    { code: "IDR", symbol: "Rp", name: "Indonesian Rupiah", flag: "🇮🇩" },
    { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸" },
    { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺" },
    { code: "GBP", symbol: "£", name: "British Pound", flag: "🇬🇧" },
    { code: "AUD", symbol: "A$", name: "Australian Dollar", flag: "🇦🇺" },
    { code: "SGD", symbol: "S$", name: "Singapore Dollar", flag: "🇸🇬" },
  ];

  const securityFeatures = [
    {
      title: "SSL Encryption",
      description: "256-bit SSL encryption protects all payment data",
      icon: "🔒",
    },
    {
      title: "PCI Compliance",
      description: "PCI DSS Level 1 certified payment processing",
      icon: "🛡️",
    },
    {
      title: "Fraud Detection",
      description: "Advanced AI-powered fraud prevention systems",
      icon: "🕵️",
    },
    {
      title: "3D Secure",
      description: "Additional authentication for card payments",
      icon: "🔐",
    },
    {
      title: "Tokenization",
      description: "Card details replaced with secure tokens",
      icon: "🎫",
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 transaction monitoring and alerts",
      icon: "👁️",
    },
  ];

  const paymentProcess = [
    {
      step: 1,
      title: "Select Items",
      description: "Add your favorite tempe products to cart",
      icon: "🛒",
    },
    {
      step: 2,
      title: "Choose Payment",
      description: "Select your preferred payment method",
      icon: "💳",
    },
    {
      step: 3,
      title: "Secure Checkout",
      description: "Complete payment with bank-level security",
      icon: "🔒",
    },
    {
      step: 4,
      title: "Instant Confirmation",
      description: "Receive immediate payment confirmation",
      icon: "✅",
    },
    {
      step: 5,
      title: "Order Processing",
      description: "Your order begins preparation immediately",
      icon: "📦",
    },
  ];

  const faqItems = [
    {
      question: "Are my payment details secure?",
      answer: "Yes, we use bank-level 256-bit SSL encryption and are PCI DSS Level 1 compliant. Your payment information is never stored on our servers and is processed through certified payment processors.",
    },
    {
      question: "What currencies do you accept?",
      answer: "We accept Indonesian Rupiah (IDR) for domestic customers and major international currencies including USD, EUR, GBP, AUD, and SGD for international orders.",
    },
    {
      question: "Are there any payment fees?",
      answer: "Digital wallet payments in Indonesia are free. Credit cards have a small processing fee (2.9-3.4%). Bank transfers have minimal fees (Rp 2,500-4,000). International payments may have currency conversion fees.",
    },
    {
      question: "How long does payment processing take?",
      answer: "Digital wallets and credit cards are processed instantly. Bank transfers are confirmed in real-time. International wire transfers may take 1-5 business days depending on the method.",
    },
    {
      question: "Can I pay with cryptocurrency?",
      answer: "Yes, we accept Bitcoin (BTC), Ethereum (ETH), and USDT for international orders. Cryptocurrency payments have a 1% processing fee and confirmation times vary by network congestion.",
    },
    {
      question: "What if my payment fails?",
      answer: "If a payment fails, you'll be notified immediately with the reason. You can retry with the same method or choose an alternative. Our support team is available 24/7 to help resolve payment issues.",
    },
  ];

  const getCurrentMethods = () => {
    return selectedRegion === "indonesia" ? indonesianMethods : internationalMethods;
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="text-sm text-primary font-medium">Secure & Convenient</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Payment Methods</h1>
            <p className="text-lg md:text-xl text-secondary-70 max-w-3xl mx-auto leading-relaxed mb-8">
              Safe, fast, and convenient payment options for customers worldwide. From local Indonesian wallets to international credit cards and cryptocurrency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
                View All Methods
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                Payment Security
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Region Selection */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Choose Your Region</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Select your location to see available payment methods and currencies</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-xl p-2 inline-flex">
              {paymentRegions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-8 py-4 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${
                    selectedRegion === region.id ? "bg-primary text-secondary shadow-lg transform scale-105" : "text-primary hover:text-primary/70"
                  }`}
                >
                  <span className="text-2xl mr-3">{region.flag}</span>
                  <div className="text-left">
                    <div className="font-bold">{region.name}</div>
                    <div className="text-xs opacity-70">Currency: {region.currency}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-primary/70">{paymentRegions.find((r) => r.id === selectedRegion)?.description}</p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Available Payment Methods</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Wide range of secure payment options tailored to your region</p>
          </div>

          <div className="space-y-12">
            {getCurrentMethods().map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-primary mb-8 text-center">{category.category}</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.methods.map((method, methodIndex) => (
                    <div key={methodIndex} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                      <div className="text-center mb-4">
                        <span className="text-4xl mb-3 block">{method.icon}</span>
                        <h4 className="text-lg font-bold text-primary">{method.name}</h4>
                        <p className="text-sm text-primary/70">{method.description}</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-sm text-primary/70">Fees:</span>
                          <span className={`text-sm font-medium ${method.fees === "Free" ? "text-green-600" : "text-primary"}`}>{method.fees}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-primary/70">Processing:</span>
                          <span className="text-sm font-medium text-primary">{method.processing}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-primary/70">Limits:</span>
                          <span className="text-sm font-medium text-primary">{method.limits}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-primary mb-2">Features:</h5>
                        <ul className="space-y-1">
                          {method.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-xs text-primary/70">
                              <svg className="w-3 h-3 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="outline" className="w-full text-sm">
                        Select {method.name}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Currencies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Supported Currencies</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">We accept payments in multiple currencies with competitive exchange rates</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currencies.map((currency, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedCurrency === currency.code.toLowerCase() ? "border-primary bg-primary/5 shadow-lg" : "border-gray-200 hover:border-primary/50 hover:shadow-md"
                }`}
                onClick={() => setSelectedCurrency(currency.code.toLowerCase())}
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{currency.flag}</span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{currency.code}</h3>
                    <p className="text-sm text-primary/70">{currency.name}</p>
                    <p className="text-lg font-bold text-primary">{currency.symbol}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-primary/70 mb-4">Exchange rates updated in real-time • Zero hidden currency conversion fees</p>
            <Button variant="outline">View Current Exchange Rates</Button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Payment Security</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Bank-level security protecting every transaction with multiple layers of protection</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-green-200 shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-primary/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full">
              <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-green-800 font-medium">PCI DSS Level 1 Certified • SOC 2 Type II Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">How Payment Works</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Simple 5-step checkout process for fast and secure payments</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Process Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 hidden lg:block"></div>

            <div className="grid lg:grid-cols-5 gap-8">
              {paymentProcess.map((step, index) => (
                <div key={index} className="text-center relative">
                  {/* Step Circle */}
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                    <span className="text-3xl">{step.icon}</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold text-sm">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-primary/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Payment FAQ</h2>
            <p className="text-lg text-primary/70">Common questions about our payment methods and security</p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-orange-200 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-2">{faq.question}</h3>
                <p className="text-sm text-primary/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentMethodsPage;
