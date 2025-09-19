"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ReturnRefundsPage = () => {
  const [selectedReturnType, setSelectedReturnType] = useState("quality");

  const returnReasons = [
    {
      id: "quality",
      title: "Quality Issues",
      description: "Product doesn't meet quality standards or arrived damaged",
      timeLimit: "48 hours",
      eligibility: "All products",
      refundType: "Full refund or replacement",
      process: "Immediate processing upon verification",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      )
    },
    {
      id: "shipping",
      title: "Shipping Damage",
      description: "Package damaged during transit or incorrect delivery",
      timeLimit: "24 hours",
      eligibility: "All products",
      refundType: "Full replacement + shipping refund",
      process: "Carrier investigation + immediate replacement",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: "wrong-item",
      title: "Wrong Item Received",
      description: "Received different product than ordered",
      timeLimit: "7 days",
      eligibility: "All products",
      refundType: "Exchange or full refund",
      process: "Return wrong item + send correct item",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      id: "not-satisfied",
      title: "Not Satisfied",
      description: "Product doesn't meet expectations or taste preferences",
      timeLimit: "7 days",
      eligibility: "Dried tempe only",
      refundType: "Store credit or partial refund",
      process: "Return required, 50% restocking fee may apply",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const returnProcess = [
    {
      step: 1,
      title: "Contact Support",
      description: "Contact our customer service within the time limit",
      timeframe: "Immediate",
      actions: ["WhatsApp or email support", "Provide order number", "Describe the issue", "Include photos if applicable"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      step: 2,
      title: "Issue Assessment",
      description: "Our team reviews your case and determines next steps",
      timeframe: "2-4 hours",
      actions: ["Case review by quality team", "Photo/video assessment", "Return authorization issued", "Instructions provided"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h2m0-12h2m-2 0v12m2-12h2a2 2 0 012 2v8a2 2 0 01-2 2h-2m0 0V9a2 2 0 012-2h2" />
        </svg>
      )
    },
    {
      step: 3,
      title: "Return Shipping",
      description: "Ship the product back using our prepaid label",
      timeframe: "Customer's choice",
      actions: ["Print return label", "Package product securely", "Drop at courier location", "Track return shipment"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      step: 4,
      title: "Processing",
      description: "We receive and inspect the returned product",
      timeframe: "1-2 days",
      actions: ["Product inspection", "Quality verification", "Return approval", "Refund/replacement processing"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      step: 5,
      title: "Resolution",
      description: "Refund processed or replacement shipped",
      timeframe: "3-5 days",
      actions: ["Refund to original payment method", "Replacement order processing", "Shipping confirmation", "Resolution confirmation"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const refundMethods = [
    {
      method: "Original Payment Method",
      timeframe: "3-5 business days",
      description: "Refund to the card or account used for original purchase",
      fees: "No fees",
      availability: "All refunds",
      icon: "💳"
    },
    {
      method: "Store Credit",
      timeframe: "Instant",
      description: "Credit applied to your account for future purchases",
      fees: "No fees + 5% bonus",
      availability: "Customer choice",
      icon: "🎁"
    },
    {
      method: "Bank Transfer",
      timeframe: "1-2 business days",
      description: "Direct transfer to your bank account",
      fees: "$2-5 processing fee",
      availability: "Domestic customers",
      icon: "🏦"
    },
    {
      method: "Digital Wallet",
      timeframe: "Instant",
      description: "Refund to GoPay, OVO, DANA, or other digital wallets",
      fees: "No fees",
      availability: "Indonesian customers",
      icon: "📱"
    }
  ];

  const productPolicies = [
    {
      product: "Fresh Tempe",
      returnWindow: "24-48 hours",
      conditions: [
        "Must be reported within 24 hours of delivery",
        "Refrigeration maintained during return",
        "Quality issues fully covered",
        "Taste preferences not covered"
      ],
      refundRate: "100%",
      notes: "Due to short shelf life, returns must be immediate"
    },
    {
      product: "Frozen Tempe",
      returnWindow: "7 days",
      conditions: [
        "Must remain frozen during return process",
        "Original packaging required",
        "Quality and shipping damage covered",
        "Customer preference returns accepted with conditions"
      ],
      refundRate: "100% (quality) / 75% (preference)",
      notes: "Cold chain must be maintained for quality returns"
    },
    {
      product: "Dried Tempe",
      returnWindow: "14 days",
      conditions: [
        "Original packaging and seal intact",
        "At least 75% of product remaining",
        "Quality issues and wrong items covered",
        "Satisfaction guarantees available"
      ],
      refundRate: "100% (quality) / 50% (preference)",
      notes: "Most flexible return policy due to longer shelf life"
    }
  ];

  const internationalPolicy = [
    {
      region: "ASEAN Countries",
      returnShipping: "Prepaid return labels provided",
      timeframe: "7-14 days",
      restrictions: "Fresh products not returnable",
      customsDuties: "Covered by Tempe Nusantara"
    },
    {
      region: "International",
      returnShipping: "Customer pays return shipping",
      timeframe: "14-21 days",
      restrictions: "Quality issues and wrong items only",
      customsDuties: "Customer responsible for return duties"
    }
  ];

  const faqItems = [
    {
      question: "What if my fresh tempe arrives spoiled?",
      answer: "Contact us immediately with photos. We'll provide a full refund or replacement and cover all shipping costs. Fresh products have our 100% quality guarantee."
    },
    {
      question: "Can I return tempe if I just don't like the taste?",
      answer: "Dried tempe can be returned within 14 days with at least 75% remaining, subject to a 50% restocking fee. Fresh and frozen products cannot be returned for taste preferences due to food safety regulations."
    },
    {
      question: "How long do refunds take to process?",
      answer: "Credit card refunds take 3-5 business days, bank transfers 1-2 days, and store credit is instant. Processing begins immediately after we receive and inspect your return."
    },
    {
      question: "Who pays for return shipping?",
      answer: "We cover return shipping for quality issues, shipping damage, and wrong items. Customer preference returns require customer to pay return shipping costs."
    },
    {
      question: "Can I return international orders?",
      answer: "Yes, but policies vary by region. ASEAN countries receive prepaid return labels for quality issues. Other international customers pay return shipping and may be responsible for customs duties."
    },
    {
      question: "What if my package was delivered to the wrong address?",
      answer: "This is treated as shipping damage. Contact us immediately and we'll investigate with the carrier, provide a replacement, and ensure proper delivery to your address."
    }
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm text-primary font-medium">100% Satisfaction Guarantee</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Returns & Refunds</h1>
            <p className="text-lg md:text-xl text-secondary-70 max-w-3xl mx-auto leading-relaxed mb-8">
              Your satisfaction is our priority. Easy returns, fast refunds, and exceptional customer service 
              ensure you're completely happy with your premium Indonesian tempe purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Start Return Process
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Return Reasons Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Return Reasons & Policies
            </h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">
              We accept returns for various reasons with different policies and timeframes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {returnReasons.map((reason) => (
              <div
                key={reason.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedReturnType === reason.id
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-gray-200 hover:border-primary/50 hover:shadow-md'
                }`}
                onClick={() => setSelectedReturnType(reason.id)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{reason.title}</h3>
                    <p className="text-sm text-primary/70">{reason.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-primary">Time Limit:</span>
                    <p className="text-primary/70">{reason.timeLimit}</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Eligibility:</span>
                    <p className="text-primary/70">{reason.eligibility}</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Refund Type:</span>
                    <p className="text-primary/70">{reason.refundType}</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Process:</span>
                    <p className="text-primary/70">{reason.process}</p>
                  </div>
                </div>

                {selectedReturnType === reason.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Button className="w-full">
                      Start {reason.title} Return
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Return Process Timeline
            </h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">
              Simple 5-step process to ensure fast and hassle-free returns
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-primary/20 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {returnProcess.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                          <p className="text-sm text-primary/70">Expected: {step.timeframe}</p>
                        </div>
                      </div>
                      
                      <p className="text-primary/70 mb-4">{step.description}</p>
                      
                      <div>
                        <span className="text-sm font-medium text-primary">Actions Required:</span>
                        <ul className="mt-2 grid grid-cols-1 gap-1">
                          {step.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-center text-xs text-primary/70">
                              <svg className="w-3 h-3 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-secondary font-bold text-sm">{step.step}</span>
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

      {/* Refund Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Refund Methods & Processing Times
            </h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">
              Choose how you'd like to receive your refund with various processing options
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {refundMethods.map((method, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-6 border border-gray-200 shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{method.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{method.method}</h3>
                    <p className="text-sm text-primary/70">{method.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-primary/70">Processing Time:</span>
                    <span className="text-sm font-medium text-primary">{method.timeframe}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-primary/70">Fees:</span>
                    <span className={`text-sm font-medium ${method.fees.includes('No fees') ? 'text-green-600' : 'text-primary'}`}>
                      {method.fees}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-primary/70">Available For:</span>
                    <span className="text-sm font-medium text-primary">{method.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product-Specific Policies */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Product-Specific Return Policies
            </h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">
              Different products have different return windows and conditions based on their nature
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {productPolicies.map((policy, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-green-200 shadow-md">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{policy.product}</h3>
                  <div className="text-2xl font-bold text-green-600">{policy.returnWindow}</div>
                  <div className="text-sm text-primary/70">Return Window</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-3">Return Conditions:</h4>
                  <ul className="space-y-2">
                    {policy.conditions.map((condition, conditionIndex) => (
                      <li key={conditionIndex} className="flex items-start">
                        <svg className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-primary/70">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-primary">Refund Rate:</span>
                    <span className="font-bold text-green-600">{policy.refundRate}</span>
                  </div>
                </div>
                
                <div className="text-sm text-primary/70 italic">
                  <strong>Note:</strong> {policy.notes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Return Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              International Return Policy
            </h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">
              Special considerations for international customers returning products
            </p>
          </div>

          <div className="overflow-hidden bg-white rounded-xl border border-gray-200 shadow-lg">
            <div className="grid grid-cols-5 bg-primary text-secondary p-4 font-bold text-center text-sm">
              <div>Region</div>
              <div>Return Shipping</div>
              <div>Timeframe</div>
              <div>Restrictions</div>
              <div>Customs Duties</div>
            </div>
            {internationalPolicy.map((policy, index) => (
              <div key={index} className={`grid grid-cols-5 p-4 text-center text-sm border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="font-medium text-primary">{policy.region}</div>
                <div className="text-primary/70">{policy.returnShipping}</div>
                <div className="text-primary/70">{policy.timeframe}</div>
                <div className="text-primary/70">{policy.restrictions}</div>
                <div className="text-primary/70">{policy.customsDuties}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
              <h3 className="text-lg font-bold text-blue-800">International Return Important Notes</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-blue-700 text-sm">
              <div>
                <strong>Fresh Products:</strong> Cannot be returned internationally due to customs and food safety regulations
              </div>
              <div>
                <strong>Frozen Products:</strong> Return shipping not practical due to cold chain requirements
              </div>
              <div>
                <strong>Documentation:</strong> All returns require original customs documentation
              </div>
              <div>
                <strong>Insurance:</strong> We recommend purchasing return shipping insurance for valuable orders
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Returns & Refunds FAQ
            </h2>
            <p className="text-lg text-primary/70">
              Common questions about our return and refund policies
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-orange-200 shadow-md">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {faq.question}
                </h3>
                <p className="text-primary/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              100% Quality Guarantee
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              We stand behind every product we sell. If you're not completely satisfied with your premium Indonesian tempe, 
              we'll make it right with a full refund, replacement, or store credit - no questions asked.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-secondary bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Fast Processing</h3>
              <p className="text-sm opacity-90">Most returns processed within 24-48 hours of receipt</p>
            </div>

            <div className="bg-secondary bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">No Hidden Fees</h3>
              <p className="text-sm opacity-90">We cover return shipping for quality issues and mistakes</p>
            </div>

            <div className="bg-secondary bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Personal Support</h3>
              <p className="text-sm opacity-90">Dedicated customer service team available 24/7</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Start Return via WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Need Help with Returns?
            </h2>
            <p className="text-primary/70">
              Our customer service team is here to help you with any return or refund questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">WhatsApp Support</h3>
                <p className="text-primary/70 mb-4">Get instant help with returns and refunds</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-primary/70">24/7 availability</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-primary/70">Instant photo upload for issues</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-primary/70">Real-time status updates</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-primary/70">Multilingual support</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                onClick={() => window.open('https://wa.me/62XXXXXXXXX?text=Hi, I need help with a return. My order number is: ', '_blank')}
              >
                Start Return via WhatsApp
              </Button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Email Support</h3>
                <p className="text-primary/70 mb-4">Detailed return assistance and documentation</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-primary/70">Detailed case documentation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-primary/70">Return shipping labels</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-primary/70">Professional support team</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-primary/70">Email history and records</span>
                </div>
              </div>
              
              <div className="mb-4 text-center">
                <p className="text-sm text-primary/70 mb-1">Email us at:</p>
                <p className="font-medium text-primary">returns@tempenusantara.com</p>
              </div>
              
              <Button 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => window.open('mailto:returns@tempenusantara.com?subject=Return Request&body=Hi, I would like to return my order. My details are:\n\nOrder Number: \nReason for return: \nOrder Date: \n\nThank you!', '_blank')}
              >
                Send Return Request Email
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

export default ReturnRefundsPage;