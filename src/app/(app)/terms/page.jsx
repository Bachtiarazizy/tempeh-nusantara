"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

const TermsAndServices = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content:
        'By accessing and using the Tempe Nusantara website and e-commerce platform (the "Platform"), you accept and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Platform.',
    },
    {
      id: "company",
      title: "Company Information",
      content: [
        "Company Name: Tempe Nusantara",
        "Business Type: Indonesian Tempeh Manufacturer and Exporter",
        "Address: [Complete Company Address]",
        "Email: [Company Email]",
        "Phone/WhatsApp: [Phone Number]",
        "Business Registration: [SIUP/NIB Number]",
        "Export License: [Export License Number]",
      ],
    },
    {
      id: "products",
      title: "Products and Services",
      content:
        "All product descriptions, images, and specifications are provided for informational purposes. We strive for accuracy but do not guarantee that all information is error-free. Product availability is subject to change without notice. All tempeh products meet Indonesian food safety standards (BPOM certification) and comply with international export requirements.",
    },
    {
      id: "ordering",
      title: "Ordering and Payment",
      content:
        "Orders are placed through our e-commerce platform or via WhatsApp/email for bulk purchases. Order confirmation will be sent via email or WhatsApp. All orders are subject to acceptance and product availability. Payment must be completed within specified timeframes of order placement.",
    },
    {
      id: "affiliate",
      title: "Affiliate Program",
      content:
        "Affiliates must register and await admin approval. Affiliates receive unique referral links and must comply with marketing guidelines. Commissions are earned on successful completed orders only, with monthly goals set by admin and ranking leaderboard based on total orders/commission earned.",
    },
    {
      id: "shipping",
      title: "Shipping and Delivery",
      content:
        "Domestic shipping within Indonesia via trusted courier services with delivery timeframes of 1-7 business days. International export shipments via air freight or sea freight with delivery timeframes of 5-30 business days depending on destination. Export documentation provided including health certificates and origin certificates.",
    },
    {
      id: "returns",
      title: "Returns and Refunds",
      content:
        "Fresh tempeh products: Returns accepted within 24 hours of delivery for quality issues. Processed/frozen products: Returns accepted within 7 days if unopened and in original condition. Buyers must provide photographic evidence of quality issues. Approved refunds processed within 7-14 business days.",
    },
    {
      id: "privacy",
      title: "Privacy and Data Protection",
      content:
        "We collect and process personal information as outlined in our Privacy Policy. User data is protected according to Indonesian data protection regulations. International transfers comply with applicable data protection laws. Platform uses cookies for functionality and analytics.",
    },
    {
      id: "export",
      title: "Export Compliance",
      content:
        "All export activities comply with Indonesian export regulations. Products meet international food safety standards for target markets. Proper export documentation provided for all international shipments. International buyers are responsible for import compliance in their countries.",
    },
    {
      id: "limitation",
      title: "Limitation of Liability",
      content:
        'Platform provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free service. Our liability is limited to the value of the specific order in question. We are not liable for indirect, incidental, or consequential damages.',
    },
    {
      id: "termination",
      title: "Termination",
      content:
        "Users may terminate accounts at any time. Outstanding orders and obligations survive termination. We may terminate accounts for Terms violations. Termination may be immediate for serious violations with users notified of termination and reasons when possible.",
    },
    {
      id: "contact",
      title: "Contact Information",
      content: [
        "Customer Service: customer-service@tempnusantara.com",
        "WhatsApp: +62-xxx-xxxx-xxxx",
        "Bulk Orders & Export Inquiries: export@tempnusantara.com",
        "Affiliate Program Support: affiliate@tempnusantara.com",
        "Business Hours: Monday - Friday, 9:00 AM - 6:00 PM WIB",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-secondary text-primary">
      {/* Header with Background Image */}
      <header
        className="relative bg-primary text-secondary "
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-secondary bg-opacity-20 rounded-full backdrop-blur-sm mb-6">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-primary font-medium">Legal Compliance Certified</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Terms & Conditions</h1>
            <p className="text-base md:text-medium text-secondary-70 max-w-3xl mx-auto leading-relaxed">Tempe Nusantara - Premium Indonesian Tempeh Export Platform</p>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:gap-12">
          {/* Main Content */}
          <main className="lg:flex-1 lg:max-w-4xl">
            {/* Effective Date */}
            <div className="mb-12 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-primary rounded-r-lg shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-primary mb-1">
                    <span className="font-semibold">Effective Date:</span> January 1, 2024
                  </p>
                  <p className="text-sm text-primary">
                    <span className="font-semibold">Last Updated:</span> January 1, 2024
                  </p>
                </div>
                <div className="bg-primary/70 text-secondary px-3 py-1 rounded-full text-sm font-medium">Version 1.0</div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-16">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary leading-tight">{section.title}</h2>
                  </div>

                  <div className="">
                    {Array.isArray(section.content) ? (
                      <div className="space-y-4 ml-6">
                        {section.content.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start group">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0 group-hover:bg-primary transition-colors"></div>
                            <p className="text-primary/70 leading-relaxed text:base md:text-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-primary/70 leading-relaxed text-base md:text-medium">{section.content}</p>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* Important Notice */}
            <div className="mt-20 p-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl text-primary shadow-xl">
              <div className="flex items-start">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Important Legal Notice</h3>
                  <p className="text-base md:text-medium leading-relaxed mb-4 opacity-95">By using the Tempe Nusantara Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
                  <p className="text-sm opacity-80">These Terms, together with our Privacy Policy, constitute the entire agreement between users and Tempe Nusantara regarding Platform use.</p>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-12 text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </Button>
                <Button variant="outline" size="lg">
                  <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H9.5a2 2 0 00-2 2v4a2 2 0 002 2h2M8 21h8a2 2 0 002-2v-1a2 2 0 00-2-2H8a2 2 0 00-2 2v1a2 2 0 002 2z" />
                  </svg>
                  Print Terms
                </Button>
              </div>

              <div className="text-primary">
                <p className="text-sm">
                  Questions about these terms?
                  <Button variant="link">Contact our support team</Button>
                </p>
              </div>
            </div>
          </main>

          {/* Side Navigation (Table of Contents) */}
          <aside className="hidden lg:block lg:w-80 lg:flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-secondary border border-primary rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-secondary bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary">Table of Contents</h3>
                </div>

                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                        activeSection === section.id ? "bg-secondary bg-opacity-10 text-primary border-l-4 border-secondary" : "text-primary hover:text-secondary hover:bg-secondary-foreground"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-7 h-7 text-xs rounded-full flex items-center justify-center mr-3 transition-colors duration-200 ${
                          activeSection === section.id ? "bg-primary text-secondary" : "bg-primary/30 text-secondary group-hover:bg-secondary group-hover:bg-opacity-20 group-hover:text-primary"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="leading-tight">{section.title}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-8 p-4 bg-secondary/30 rounded-lg border border-secondary border-opacity-30">
                  <div className="flex items-center text-sm text-primary">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Need help understanding our terms?</span>
                  </div>
                  <p className="text-xs text-secondary mt-1">Contact our legal team for clarification.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-primary hover:bg-secondary text-secondary hover:text-primary p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 hover:shadow-xl"
        aria-label="Back to top m-8 right-8 bg-green-600 hover:bg-green-700 text-secondary p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 hover:shadow-xl"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default TermsAndServices;
