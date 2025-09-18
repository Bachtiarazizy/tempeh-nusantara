"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

const AffiliateTerms = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content:
        "Welcome to the Tempe Nusantara Affiliate Program! These Terms and Conditions govern your participation as an affiliate partner in promoting our premium Indonesian tempe products for export. By joining our program, you agree to comply with these terms and represent our brand with integrity and professionalism.",
    },
    {
      id: "program-overview",
      title: "Program Overview",
      subsections: [
        {
          subtitle: "Commission Structure",
          items: [
            "Base commission: 10% of net sales from your referrals",
            "Tier 1 (5+ orders/month): 12% commission rate",
            "Tier 2 (15+ orders/month): 15% commission rate",
            "Tier 3 (30+ orders/month): 18% commission rate",
            "Bonus incentives for achieving monthly goals",
          ],
        },
        {
          subtitle: "Tracking System",
          items: ["Unique referral links (tempenusantara.com/?ref=yourusername)", "90-day cookie attribution window", "Real-time tracking dashboard", "Cross-device tracking capabilities", "Transparent commission calculations"],
        },
        {
          subtitle: "Ranking & Leaderboard",
          items: ["Monthly affiliate ranking based on total sales", "Public leaderboard for top performers", "Special recognition for top 3 affiliates", "Quarterly performance reviews", "Annual affiliate awards program"],
        },
      ],
    },
    {
      id: "eligibility-requirements",
      title: "Eligibility Requirements",
      subsections: [
        {
          subtitle: "General Requirements",
          items: [
            "Must be 18+ years old or of legal age in your jurisdiction",
            "Valid business registration (for corporate affiliates)",
            "Active social media presence or website",
            "Clean reputation and professional conduct",
            "Compliance with local advertising regulations",
          ],
        },
        {
          subtitle: "Prohibited Affiliates",
          items: [
            "Competitors selling similar products",
            "Websites with adult, violent, or illegal content",
            "Spam or misleading marketing practices",
            "Social media accounts with fake followers",
            "Individuals with history of fraudulent activities",
          ],
        },
        {
          subtitle: "Application Process",
          items: ["Complete online application form", "Provide business/tax identification documents", "Submit portfolio or marketing plan", "Undergo manual approval process (3-5 business days)", "Complete affiliate training program"],
        },
      ],
    },
    {
      id: "goals-targets",
      title: "Goals & Performance Targets",
      subsections: [
        {
          subtitle: "Quarterly Goals System",
          items: [
            "Q1 Target: 5 successful orders minimum",
            "Q2 Target: 10 successful orders minimum",
            "Q3 Target: 15 successful orders minimum",
            "Q4 Target: 20 successful orders minimum",
            "Annual bonus for exceeding all quarterly targets",
          ],
        },
        {
          subtitle: "Performance Metrics",
          items: ["Click-through rate (CTR) monitoring", "Conversion rate optimization", "Average order value (AOV) tracking", "Customer retention from referrals", "Geographic reach and market penetration"],
        },
        {
          subtitle: "Performance Incentives",
          items: ["Goal achievement bonuses: $100-500 per quarter", "Top performer monthly rewards", "Exclusive product samples for testing", "Priority customer support access", "Invitations to company events and webinars"],
        },
      ],
    },
    {
      id: "commission-payment",
      title: "Commission & Payment Terms",
      subsections: [
        {
          subtitle: "Payment Schedule",
          items: ["Monthly commission payouts", "Minimum payout threshold: $50 USD equivalent", "Payment within 30 days after month-end", "Automatic hold for disputed orders", "Annual tax documentation provided"],
        },
        {
          subtitle: "Payment Methods",
          items: ["Bank transfer (domestic and international)", "PayPal (where available)", "Cryptocurrency payments (Bitcoin, USDT)", "Local digital wallets (GoPay, OVO, DANA)", "Check payments for high-value commissions"],
        },
        {
          subtitle: "Commission Calculation",
          items: [
            "Based on net sales (excluding taxes and shipping)",
            "Commissions credited after order confirmation",
            "Refunds deducted from future commissions",
            "Currency conversion at time of sale",
            "Detailed commission statements provided monthly",
          ],
        },
      ],
    },
    {
      id: "marketing-guidelines",
      title: "Marketing Guidelines",
      subsections: [
        {
          subtitle: "Approved Marketing Channels",
          items: ["Social media platforms (Instagram, Facebook, TikTok, YouTube)", "Personal blogs and websites", "Email newsletters to existing subscribers", "WhatsApp groups and business networks", "Offline events and food exhibitions"],
        },
        {
          subtitle: "Content Guidelines",
          items: ["Use official product images and descriptions", "Clearly disclose affiliate relationship", "Promote health benefits accurately", "Highlight export quality and certifications", "Include proper hashtags and brand mentions"],
        },
        {
          subtitle: "Prohibited Marketing Practices",
          items: ["Spam emails or unsolicited messages", "False or exaggerated health claims", "Using trademarked terms in domain names", "Bidding on brand keywords in paid ads", "Misleading price comparisons"],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      subsections: [
        {
          subtitle: "Brand Usage Rights",
          items: ["Limited license to use Tempe Nusantara brand name", "Access to official product photography", "Pre-approved marketing materials library", "Logo usage with specific guidelines", "Brand voice and messaging guidelines"],
        },
        {
          subtitle: "Usage Restrictions",
          items: ["Cannot modify logos or brand elements", "No registration of similar domain names", "Cannot create derivative brand materials", "Must discontinue use upon program termination", "No sublicensing of brand materials"],
        },
      ],
    },
    {
      id: "compliance-legal",
      title: "Compliance & Legal Requirements",
      subsections: [
        {
          subtitle: "Export Compliance",
          items: ["Awareness of international trade regulations", "Compliance with destination country import laws", "Understanding of product certifications", "Support for customs documentation", "Adherence to food safety standards"],
        },
        {
          subtitle: "Tax Obligations",
          items: ["Affiliates responsible for own tax compliance", "1099 forms provided for US affiliates", "Tax withholding per local regulations", "Record keeping for commission income", "Professional tax advice recommended"],
        },
        {
          subtitle: "Legal Compliance",
          items: ["Adherence to consumer protection laws", "Compliance with advertising standards", "Respect for privacy and data protection", "Following social media platform policies", "Maintaining professional business conduct"],
        },
      ],
    },
    {
      id: "termination",
      title: "Termination & Account Management",
      subsections: [
        {
          subtitle: "Voluntary Termination",
          items: ["30-day written notice required", "Final commission payout within 60 days", "Return of promotional materials", "Removal of affiliate links and content", "Exit interview and feedback session"],
        },
        {
          subtitle: "Involuntary Termination",
          items: ["Violation of terms and conditions", "Fraudulent or unethical behavior", "Failure to meet minimum performance standards", "Breach of brand guidelines", "Legal or regulatory violations"],
        },
        {
          subtitle: "Post-Termination",
          items: ["Commission forfeiture for violations", "Continued obligation to maintain confidentiality", "Immediate cessation of brand usage", "Cooperation with ongoing investigations", "Opportunity for reapplication after 12 months"],
        },
      ],
    },
    {
      id: "support-resources",
      title: "Support & Resources",
      subsections: [
        {
          subtitle: "Affiliate Support",
          items: ["Dedicated affiliate manager", "Monthly training webinars", "Marketing materials library", "Product knowledge resources", "24/7 technical support portal"],
        },
        {
          subtitle: "Available Resources",
          items: ["High-resolution product photos", "Video testimonials and reviews", "Educational content about tempe", "Export certification documents", "Cultural and recipe content"],
        },
      ],
    },
    {
      id: "contact-information",
      title: "Contact Information",
      content: [
        "Affiliate Program Manager: affiliate@tempenusantara.com",
        "Commission Inquiries: payments@tempenusantara.com",
        "Technical Support: support@tempenusantara.com",
        "General Questions: info@tempenusantara.com",
        "Phone: +62-xxx-xxxx-xxxx",
        "WhatsApp Business: +62-xxx-xxxx-xxxx",
        "Office Hours: Monday-Friday, 9:00 AM - 6:00 PM WIB",
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm text-primary font-medium">Partnership Program</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Affiliate Terms & Conditions</h1>
            <p className="text-base md:text-medium text-secondary-70 max-w-3xl mx-auto leading-relaxed">Join Our Premium Tempe Export Partnership Program</p>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:gap-12">
          {/* Main Content */}
          <main className="lg:flex-1 lg:max-w-4xl">
            {/* Effective Date */}
            <div className="mb-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-primary rounded-r-lg shadow-sm">
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

            {/* Commission Overview Cards */}
            <div className="mb-16 grid md:grid-cols-4 gap-4">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-700 mb-2">10%</div>
                <div className="text-sm font-medium text-blue-600 mb-1">Base Rate</div>
                <div className="text-xs text-blue-500">Starting commission</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="text-2xl font-bold text-green-700 mb-2">12%</div>
                <div className="text-sm font-medium text-green-600 mb-1">Tier 1</div>
                <div className="text-xs text-green-500">5+ orders/month</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
                <div className="text-2xl font-bold text-amber-700 mb-2">15%</div>
                <div className="text-sm font-medium text-amber-600 mb-1">Tier 2</div>
                <div className="text-xs text-amber-500">15+ orders/month</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <div className="text-2xl font-bold text-purple-700 mb-2">18%</div>
                <div className="text-sm font-medium text-purple-600 mb-1">Tier 3</div>
                <div className="text-xs text-purple-500">30+ orders/month</div>
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

            {/* Application CTA */}
            <div className="mt-20 p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl text-primary shadow-xl">
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-4">Ready to Join Our Affiliate Program?</h3>
                  <p className="text-base md:text-medium leading-relaxed mb-6 opacity-95">
                    Start earning commissions by promoting premium Indonesian tempe to international markets. Apply now and join our growing community of successful affiliates.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Button size="lg" className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      Apply Now
                    </Button>
                    <Button variant="outline" size="lg" className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Learn More
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No application fees</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Monthly payouts</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Dedicated support</span>
                    </div>
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
                  Download Terms PDF
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
                  Questions about the affiliate program?
                  <Button variant="link">Contact our affiliate team</Button>
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

                {/* Quick Stats */}
                <div className="mt-8 p-4 bg-secondary/30 rounded-lg border border-secondary border-opacity-30">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary">90</div>
                    <div className="text-xs text-primary opacity-70">Day Cookie Window</div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary">$50</div>
                    <div className="text-xs text-primary opacity-70">Minimum Payout</div>
                  </div>
                  <div className="flex items-center text-sm text-primary">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Need affiliate support?</span>
                  </div>
                  <p className="text-xs text-secondary mt-1">Contact our dedicated affiliate team.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

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

export default AffiliateTerms;
