"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

const CookiePolicy = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content:
        "This Cookie Policy explains how Tempe Nusantara uses cookies and similar tracking technologies on our e-commerce platform and affiliate program. This policy applies to all users including buyers, affiliates, and visitors to our website. By using our platform, you consent to our use of cookies as described in this policy.",
    },
    {
      id: "what-are-cookies",
      title: "What Are Cookies",
      content:
        "Cookies are small text files stored on your device when you visit our website. They help us provide you with a better user experience, remember your preferences, track affiliate referrals, and analyze website performance. Cookies contain information that is transferred to your computer's hard drive and stored there.",
    },
    {
      id: "types-of-cookies",
      title: "Types of Cookies We Use",
      subsections: [
        {
          subtitle: "Essential Cookies",
          items: ["Authentication and login functionality", "Shopping cart and checkout process", "Security and fraud prevention", "Website navigation and basic functionality", "Session management and user preferences"],
        },
        {
          subtitle: "Affiliate Tracking Cookies",
          items: ["Referral link tracking (ref=username parameters)", "Commission attribution and calculation", "Affiliate performance monitoring", "Click tracking and conversion measurement", "Ranking system data collection"],
        },
        {
          subtitle: "Analytics Cookies",
          items: [
            "Website traffic and user behavior analysis",
            "Product page views and engagement metrics",
            "Order completion rates and funnel analysis",
            "Geographic location data (country/city level)",
            "Device and browser information for optimization",
          ],
        },
        {
          subtitle: "Marketing Cookies",
          items: ["Personalized product recommendations", "Targeted advertising and retargeting", "Social media integration and sharing", "Email marketing optimization", "Cross-platform campaign tracking"],
        },
      ],
    },
    {
      id: "specific-cookies",
      title: "Specific Cookies and Their Purposes",
      subsections: [
        {
          subtitle: "E-commerce Platform Cookies",
          items: [
            "_tempe_session: Maintains your login session and shopping cart",
            "_cart_id: Tracks items in your shopping cart",
            "_user_prefs: Remembers your language and currency preferences",
            "_checkout_token: Secures the checkout process",
            "_order_tracking: Enables order status monitoring",
          ],
        },
        {
          subtitle: "Affiliate Program Cookies",
          items: [
            "_affiliate_ref: Tracks referral source and affiliate attribution",
            "_commission_track: Monitors commission-eligible transactions",
            "_ranking_data: Collects data for affiliate leaderboard",
            "_goals_progress: Tracks affiliate goal achievement",
            "_click_attribution: Measures affiliate link performance",
          ],
        },
        {
          subtitle: "Third-Party Service Cookies",
          items: [
            "Google Analytics: Website performance and user behavior",
            "Payment Gateway: Secure payment processing",
            "WhatsApp Business: Customer support integration",
            "Vercel Analytics: Hosting and performance monitoring",
            "Supabase: Database connection and authentication",
          ],
        },
      ],
    },
    {
      id: "cookie-duration",
      title: "Cookie Duration and Storage",
      subsections: [
        {
          subtitle: "Session Cookies",
          content: "These cookies are deleted when you close your browser. They include authentication tokens, shopping cart contents, and temporary preferences.",
        },
        {
          subtitle: "Persistent Cookies",
          items: ["User preferences: 1 year", "Affiliate tracking: 90 days from last click", "Analytics data: 2 years", "Marketing cookies: 30-365 days depending on campaign", "Remember login: 30 days (if selected)"],
        },
      ],
    },
    {
      id: "cookie-management",
      title: "Managing Your Cookie Preferences",
      subsections: [
        {
          subtitle: "Browser Settings",
          items: ["Enable or disable cookies entirely", "Delete existing cookies from your device", "Set preferences for third-party cookies", "Receive notifications when cookies are set", "Manage cookies on a site-by-site basis"],
        },
        {
          subtitle: "Our Cookie Settings",
          content:
            "You can manage your cookie preferences through our cookie banner when you first visit our website, or through your account settings if you're registered. Note that disabling certain cookies may affect website functionality and your user experience.",
        },
        {
          subtitle: "Affiliate Cookie Management",
          content: "Affiliates should be aware that disabling tracking cookies may affect commission attribution and performance monitoring. Essential affiliate functions require certain cookies to be enabled.",
        },
      ],
    },
    {
      id: "international-compliance",
      title: "International Cookie Compliance",
      content:
        "As an international export business, we comply with various cookie regulations including Indonesian data protection laws, GDPR for European visitors, and other applicable privacy regulations. We ensure proper consent mechanisms and transparent cookie usage across all jurisdictions where we operate.",
    },
    {
      id: "affiliate-specific",
      title: "Affiliate Program Cookie Usage",
      subsections: [
        {
          subtitle: "Referral Tracking",
          items: [
            "Unique referral codes embedded in cookies",
            "Commission attribution across multiple sessions",
            "Cross-device tracking for mobile and desktop",
            "Conversion window tracking (up to 90 days)",
            "Duplicate order prevention mechanisms",
          ],
        },
        {
          subtitle: "Performance Monitoring",
          items: ["Click-through rates and engagement metrics", "Goal progress and achievement tracking", "Ranking calculation and leaderboard updates", "Seasonal performance analysis", "Geographic performance by affiliate region"],
        },
      ],
    },
    {
      id: "data-security",
      title: "Cookie Security and Protection",
      content:
        "We implement security measures to protect cookie data including encryption of sensitive information, secure HTTPS transmission, regular security audits and updates, restricted access to cookie data, and compliance with industry security standards. All payment-related cookies are handled through certified secure payment processors.",
    },
    {
      id: "updates-changes",
      title: "Updates to This Cookie Policy",
      content:
        "We may update this Cookie Policy from time to time to reflect changes in our cookie usage, technology, or legal requirements. We will notify users of significant changes through email notifications, website banners, or account dashboard notifications. The updated policy will be effective immediately upon posting unless otherwise specified.",
    },
    {
      id: "contact-information",
      title: "Contact Information",
      content: [
        "Cookie Policy Inquiries: privacy@tempenusantara.com",
        "Technical Support: support@tempenusantara.com",
        "Affiliate Cookie Questions: affiliate@tempenusantara.com",
        "Phone: +62-xxx-xxxx-xxxx",
        "Mailing Address: [Complete Company Address]",
        "Response Time: We aim to respond to cookie-related inquiries within 48 hours",
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

  const renderContent = (section) => {
    // Jika section memiliki subsections, render subsections
    if (section.subsections) {
      return (
        <div className="space-y-8">
          {section.subsections.map((subsection, subIndex) => (
            <div key={subIndex} className="pl-4 border-l-2 border-primary/20">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                {subsection.subtitle}
              </h3>

              {/* Render items jika ada */}
              {subsection.items && (
                <div className="space-y-3 ml-6">
                  {subsection.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start group">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2.5 mr-3 flex-shrink-0 group-hover:bg-primary transition-colors"></div>
                      <p className="text-primary/70 leading-relaxed text-base md:text-medium">{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Render content jika ada (untuk subsection yang memiliki paragraf) */}
              {subsection.content && (
                <div className="ml-6">
                  <p className="text-primary/70 leading-relaxed text-base md:text-medium">{subsection.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Jika section memiliki content array
    if (Array.isArray(section.content)) {
      return (
        <div className="space-y-4 ml-6">
          {section.content.map((item, itemIndex) => (
            <div key={itemIndex} className="flex items-start group">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0 group-hover:bg-primary transition-colors"></div>
              <p className="text-primary/70 leading-relaxed text-base md:text-medium">{item}</p>
            </div>
          ))}
        </div>
      );
    }

    // Jika section memiliki content string
    return <p className="text-primary/70 leading-relaxed text-base md:text-medium">{section.content}</p>;
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-secondary bg-opacity-20 rounded-full backdrop-blur-sm mb-6">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <span className="text-sm text-primary font-medium">Cookie Transparency</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Cookie Policy</h1>
            <p className="text-base md:text-medium text-secondary-70 max-w-3xl mx-auto leading-relaxed">Understanding How We Use Cookies - Tempe Nusantara Tracking & Analytics</p>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:gap-12">
          {/* Main Content */}
          <main className="lg:flex-1 lg:max-w-4xl">
            {/* Effective Date */}
            <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-primary rounded-r-lg shadow-sm">
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

                  <div className="">{renderContent(section)}</div>
                </section>
              ))}
            </div>

            {/* Cookie Settings Panel */}
            <div className="mt-20 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl text-primary shadow-xl">
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-4">Manage Your Cookie Preferences</h3>
                  <p className="text-base md:text-medium leading-relaxed mb-6 opacity-95">You have control over which cookies we can use. Essential cookies are required for basic website functionality and cannot be disabled.</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <div>
                        <p className="font-semibold text-sm">Essential Cookies</p>
                        <p className="text-xs opacity-70">Required for basic functionality</p>
                      </div>
                      <div className="w-12 h-6 bg-green-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <div>
                        <p className="font-semibold text-sm">Analytics Cookies</p>
                        <p className="text-xs opacity-70">Help us improve our service</p>
                      </div>
                      <div className="w-12 h-6 bg-green-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <div>
                        <p className="font-semibold text-sm">Affiliate Tracking</p>
                        <p className="text-xs opacity-70">Track referrals and commissions</p>
                      </div>
                      <div className="w-12 h-6 bg-green-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <div>
                        <p className="font-semibold text-sm">Marketing Cookies</p>
                        <p className="text-xs opacity-70">Personalized recommendations</p>
                      </div>
                      <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button size="lg">Save Preferences</Button>
                    <Button variant="outline" size="lg">
                      Accept All
                    </Button>
                  </div>
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
                  Print Policy
                </Button>
              </div>

              <div className="text-primary">
                <p className="text-sm">
                  Questions about our cookie usage?
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                      />
                    </svg>
                    <span className="font-medium">Need help with cookie settings?</span>
                  </div>
                  <p className="text-xs text-secondary mt-1">Contact our technical support team.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-primary hover:bg-secondary text-secondary  hover:text-primary p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 hover:shadow-xl"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default CookiePolicy;
