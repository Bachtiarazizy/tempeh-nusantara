"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content:
        "At Tempe Nusantara, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our e-commerce platform and affiliate program. This policy applies to all users including buyers, affiliates, and visitors to our website.",
    },
    {
      id: "information-collected",
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "Personal Information",
          items: ["Name, email address, phone number", "Shipping and billing addresses", "Payment information (processed securely)", "Account credentials (username, password)", "Date of birth (for age verification)"],
        },
        {
          subtitle: "Business Information (for Affiliates)",
          items: ["Company name and registration details", "Tax identification numbers", "Bank account information for commission payments", "Business licenses and certifications"],
        },
        {
          subtitle: "Automatically Collected Data",
          items: ["IP address, browser type, device information", "Website usage patterns and analytics", "Cookies and tracking technologies", "Referral sources and affiliate tracking data", "Geographic location (country/city level)"],
        },
      ],
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      subsections: [
        {
          subtitle: "Order Processing & Customer Service",
          items: ["Process and fulfill your orders", "Send order confirmations and shipping updates", "Provide customer support and resolve issues", "Handle returns, refunds, and warranty claims"],
        },
        {
          subtitle: "Affiliate Program Management",
          items: ["Track referrals and calculate commissions", "Process affiliate payments and tax reporting", "Monitor affiliate performance and rankings", "Communicate program updates and goals"],
        },
        {
          subtitle: "Marketing & Communications",
          items: ["Send promotional emails and newsletters", "Personalize product recommendations", "Conduct market research and surveys", "Social media marketing and engagement"],
        },
        {
          subtitle: "Legal & Compliance",
          items: ["Comply with export/import regulations", "Prevent fraud and ensure security", "Meet tax and accounting requirements", "Respond to legal requests and disputes"],
        },
      ],
    },
    {
      id: "data-sharing",
      title: "Data Sharing and Disclosure",
      content:
        "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances: with trusted service providers (payment processors, shipping companies, email services), for legal compliance (court orders, regulatory requirements), with your explicit consent, in case of business transfer or merger, and for fraud prevention and security purposes.",
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      subsections: [
        {
          subtitle: "Types of Cookies We Use",
          items: [
            "Essential cookies for website functionality",
            "Analytics cookies to understand user behavior",
            "Marketing cookies for personalized advertising",
            "Affiliate tracking cookies for commission attribution",
            "Preference cookies to remember your settings",
          ],
        },
        {
          subtitle: "Cookie Management",
          content:
            "You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality. We use Google Analytics, Facebook Pixel, and other tracking tools to improve our services and marketing effectiveness.",
        },
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      content:
        "We implement industry-standard security measures to protect your personal information including SSL encryption for data transmission, secure servers with regular security updates, restricted access to personal data on need-to-know basis, regular security audits and vulnerability assessments, secure payment processing through certified providers, and data backup and disaster recovery procedures.",
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content:
        "We retain your personal data only as long as necessary for the purposes outlined in this policy. Account information is kept while your account is active and for 7 years after closure for legal compliance. Order and transaction data is retained for 10 years for tax and export documentation requirements. Marketing data is kept until you unsubscribe or opt-out. Affiliate data is retained for the duration of the partnership and 5 years thereafter for commission and tax purposes.",
    },
    {
      id: "international-transfers",
      title: "International Data Transfers",
      content:
        "As an export business serving international customers, we may transfer your data to countries outside Indonesia. We ensure adequate protection through standard contractual clauses, adequacy decisions by Indonesian authorities, and your explicit consent for specific transfers. All transfers comply with Indonesian data protection laws and international standards.",
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      subsections: [
        {
          subtitle: "Access and Control",
          items: [
            "Access your personal data we hold",
            "Request correction of inaccurate information",
            "Request deletion of your data (subject to legal requirements)",
            "Object to processing for marketing purposes",
            "Request data portability in standard formats",
          ],
        },
        {
          subtitle: "Marketing Communications",
          items: ["Unsubscribe from marketing emails anytime", "Opt-out of SMS marketing messages", "Manage notification preferences in your account", "Request removal from all marketing lists"],
        },
      ],
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      content:
        "Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you believe we have inadvertently collected information from a child, please contact us immediately and we will delete such information promptly.",
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      content:
        "Our website may contain links to third-party websites and services. This privacy policy does not apply to such third parties. We encourage you to read the privacy policies of any third-party services you use. We are not responsible for the privacy practices of third-party websites or services.",
    },
    {
      id: "updates",
      title: "Policy Updates",
      content:
        "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of significant changes via email or website notice. The updated policy will be effective immediately upon posting unless otherwise specified.",
    },
    {
      id: "contact",
      title: "Contact Information",
      content: [
        "Data Protection Officer: privacy@tempenusantara.com",
        "Customer Privacy Inquiries: support@tempenusantara.com",
        "Phone: +62-xxx-xxxx-xxxx",
        "Mailing Address: [Complete Company Address]",
        "Response Time: We aim to respond to privacy requests within 30 days",
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-primary font-medium">Legal Compliance Certified</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Privacy Policy</h1>
            <p className="text-base md:text-medium text-secondary-70 max-w-3xl mx-auto leading-relaxed">Your Privacy Matters - Tempe Nusantara Data Protection</p>
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

                  <div className="">{renderContent(section)}</div>
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
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default PrivacyPolicy;
