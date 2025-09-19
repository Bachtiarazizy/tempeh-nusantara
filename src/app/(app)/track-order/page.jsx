"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const OrderTrackingPage = () => {
  const [trackingMethod, setTrackingMethod] = useState("whatsapp");

  const orderSteps = [
    {
      step: 1,
      title: "Order Received",
      description: "Your order has been received and is being processed",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      timeframe: "0-2 hours",
    },
    {
      step: 2,
      title: "Payment Confirmed",
      description: "Payment verification completed and order approved",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      timeframe: "2-12 hours",
    },
    {
      step: 3,
      title: "Preparing Order",
      description: "Your tempe is being prepared with quality control checks",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      timeframe: "1-2 days",
    },
    {
      step: 4,
      title: "Quality Control",
      description: "Final quality inspection and packaging for shipment",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h2m0-12h2m-2 0v12m2-12h2a2 2 0 012 2v8a2 2 0 01-2 2h-2m0 0V9a2 2 0 012-2h2" />
        </svg>
      ),
      timeframe: "2-3 days",
    },
    {
      step: 5,
      title: "Shipped",
      description: "Package has been dispatched and is on its way to you",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      timeframe: "3-7 days",
    },
    {
      step: 6,
      title: "Delivered",
      description: "Your order has been successfully delivered",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
        </svg>
      ),
      timeframe: "7-14 days",
    },
  ];

  const shippingMethods = [
    {
      type: "Standard Shipping",
      timeframe: "7-14 days",
      description: "Cost-effective shipping for regular orders",
      tracking: "Available after dispatch",
      icon: "🚚",
    },
    {
      type: "Express Shipping",
      timeframe: "3-7 days",
      description: "Faster delivery for urgent orders",
      tracking: "Real-time GPS tracking",
      icon: "✈️",
    },
    {
      type: "International Export",
      timeframe: "10-25 days",
      description: "Global shipping with customs handling",
      tracking: "Multi-carrier tracking system",
      icon: "🌍",
    },
    {
      type: "Bulk/Wholesale",
      timeframe: "5-15 days",
      description: "Large volume orders with freight shipping",
      tracking: "Dedicated logistics coordination",
      icon: "📦",
    },
  ];

  const trackingInfo = [
    {
      category: "What You'll Need",
      items: ["Your order number (e.g., TN-2024-001234)", "Email address used for the order", "Phone number associated with the order", "Approximate order date"],
    },
    {
      category: "Available Information",
      items: ["Current order status and location", "Estimated delivery date and time", "Shipping carrier and tracking number", "Delivery address confirmation", "Special delivery instructions status"],
    },
    {
      category: "Updates You'll Receive",
      items: ["Order confirmation and processing updates", "Shipping notifications with tracking details", "Delivery estimates and schedule changes", "Delivery confirmation with photo proof", "Customer satisfaction follow-up"],
    },
  ];

  const faqItems = [
    {
      question: "How long does processing take?",
      answer: "Standard orders are processed within 1-2 business days. Bulk and custom orders may take 2-5 business days depending on volume and specifications.",
    },
    {
      question: "When will I receive tracking information?",
      answer: "You'll receive tracking information via email and SMS within 24 hours of your order being shipped. For immediate updates, contact us via WhatsApp.",
    },
    {
      question: "Can I change my delivery address?",
      answer: "Address changes are possible before shipping. Contact us immediately via WhatsApp or email with your order number and new address details.",
    },
    {
      question: "What if my order is delayed?",
      answer: "We'll notify you immediately of any delays. For urgent orders, we can arrange express shipping or provide compensation for significant delays.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship to 50+ countries worldwide. International orders include customs documentation and may require additional processing time for export compliance.",
    },
    {
      question: "How do I report delivery issues?",
      answer: "Contact us immediately via WhatsApp (+62-xxx-xxxx-xxxx) or email (support@tempenusantara.com) with photos and details. We'll resolve issues within 24 hours.",
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="text-sm text-primary font-medium">Real-Time Updates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Order Tracking</h1>
            <p className="text-lg md:text-xl text-secondary-70 max-w-3xl mx-auto leading-relaxed mb-8">Stay updated on your tempe order journey from our kitchen to your table. Get real-time status updates and delivery information.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Track via WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Track via Email
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Track Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Quick Track Your Order</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">Choose your preferred method to get instant updates on your order status</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp Tracking */}
            <div
              className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${trackingMethod === "whatsapp" ? "border-green-500 bg-green-50 shadow-lg" : "border-gray-200 hover:border-green-300 hover:shadow-md"}`}
              onClick={() => setTrackingMethod("whatsapp")}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Track via WhatsApp</h3>
                <p className="text-primary/70 text-sm mb-4">Get instant updates on your mobile device</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-primary/70">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time status updates
                </div>
                <div className="flex items-center text-sm text-primary/70">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Direct chat with support team
                </div>
                <div className="flex items-center text-sm text-primary/70">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Photo updates of your order
                </div>
                <div className="flex items-center text-sm text-primary/70">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Available 24/7
                </div>
              </div>

              <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => window.open("https://wa.me/62XXXXXXXXX?text=Hi, I would like to track my order. My order number is: ", "_blank")}>
                Chat on WhatsApp
              </Button>
            </div>

            {/* Email Tracking */}
            <div
              className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${trackingMethod === "email" ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200 hover:border-blue-300 hover:shadow-md"}`}
              onClick={() => setTrackingMethod("email")}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Track via Email</h3>
                <p className="text-primary/70 text-sm mb-4">Detailed tracking information in your inbox</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-primary/70">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Detailed status reports
                </div>
                <div className="flex items-center text-sm text-primary/70">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional documentation
                </div>
                <div className="flex items-center text-sm text-primary/70">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tracking links and attachments
                </div>
                <div className="flex items-center text-sm text-primary/70">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email history and records
                </div>
              </div>

              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() =>
                  window.open("mailto:tracking@tempenusantara.com?subject=Order Tracking Request&body=Hi, I would like to track my order. My order details are:\n\nOrder Number: \nEmail Address: \nOrder Date: \n\nThank you!", "_blank")
                }
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Order Journey Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Your Order Journey</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Track your tempe's journey from our kitchen to your table with these detailed status updates</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-primary/20 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {orderSteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">{step.icon}</div>
                        <div>
                          <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                          <p className="text-sm text-primary/70">{step.timeframe}</p>
                        </div>
                      </div>
                      <p className="text-primary/70">{step.description}</p>
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

      {/* Shipping Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Shipping Methods & Tracking</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Different shipping methods with their respective tracking capabilities and timeframes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {shippingMethods.map((method, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-6 border border-gray-200 shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{method.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{method.type}</h3>
                    <p className="text-sm text-primary/70">{method.timeframe}</p>
                  </div>
                </div>

                <p className="text-primary/70 mb-4">{method.description}</p>

                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-sm font-medium text-primary">Tracking: </span>
                    <span className="text-sm text-primary/70">{method.tracking}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Information */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Tracking Information Guide</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Everything you need to know about tracking your order and what information we provide</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {trackingInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-green-200 shadow-md">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  {info.category}
                </h3>

                <ul className="space-y-3">
                  {info.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-4 h-4 mr-3 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Tracking FAQ</h2>
            <p className="text-lg text-primary/70">Common questions about order tracking and delivery</p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {faq.question}
                </h3>
                <p className="text-primary/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Need Help Tracking Your Order?</h2>
          <p className="text-lg mb-8 opacity-90">Our customer support team is ready to help you track your order and answer any questions. Contact us through your preferred method for instant assistance.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Support</h3>
              <p className="mb-4 opacity-90">Get instant help and real-time order updates</p>
              <p className="text-sm opacity-75 mb-4">+62-xxx-xxxx-xxxx</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white border-0" onClick={() => window.open("https://wa.me/62XXXXXXXXX?text=Hi, I need help tracking my order", "_blank")}>
                Chat on WhatsApp
              </Button>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="mb-4 opacity-90">Detailed tracking information and documentation</p>
              <p className="text-sm opacity-75 mb-4">tracking@tempenusantara.com</p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white border-0" onClick={() => window.open("mailto:tracking@tempenusantara.com?subject=Order Tracking Support", "_blank")}>
                Send Email
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>24/7 WhatsApp support</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Real-time order updates</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Multilingual support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">Important Tracking Notes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <h3 className="text-lg font-bold text-primary">Order Information Required</h3>
              </div>
              <ul className="space-y-2 text-sm text-primary/70">
                <li>• Have your order number ready (format: TN-2024-XXXXXX)</li>
                <li>• Provide the email address used for the order</li>
                <li>• Keep your phone number handy for verification</li>
                <li>• Remember your approximate order date</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 mr-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-bold text-primary">Tracking Updates</h3>
              </div>
              <ul className="space-y-2 text-sm text-primary/70">
                <li>• Updates are provided in real-time during business hours</li>
                <li>• International orders may have delayed status updates</li>
                <li>• Weekend and holiday deliveries may be limited</li>
                <li>• Contact us immediately for any delivery concerns</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border border-green-200">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-bold text-green-800">Quality Guarantee</h3>
            </div>
            <p className="text-green-700 text-center">
              We're committed to delivering fresh, high-quality tempe. If there are any issues with your order during transit, we provide full replacement or refund. Your satisfaction is our priority!
            </p>
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

export default OrderTrackingPage;
