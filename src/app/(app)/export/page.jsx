"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ExportServicesPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("usa");

  const exportDestinations = [
    {
      id: "usa",
      name: "United States",
      flag: "🇺🇸",
      transitTime: "12-15 days",
      minOrder: "25 kg",
      duties: "5-8%",
      certifications: ["FDA", "USDA Organic", "Halal"],
      ports: ["Los Angeles", "New York", "Miami"],
      restrictions: "LACF registration required",
    },
    {
      id: "europe",
      name: "European Union",
      flag: "🇪🇺",
      transitTime: "18-22 days",
      minOrder: "30 kg",
      duties: "6-12%",
      certifications: ["EU Organic", "Halal", "HACCP"],
      ports: ["Rotterdam", "Hamburg", "Antwerp"],
      restrictions: "Novel food approval needed",
    },
    {
      id: "australia",
      name: "Australia",
      flag: "🇦🇺",
      transitTime: "8-12 days",
      minOrder: "20 kg",
      duties: "0-5%",
      certifications: ["AQIS", "Halal", "Organic"],
      ports: ["Sydney", "Melbourne", "Brisbane"],
      restrictions: "Biosecurity declaration required",
    },
    {
      id: "japan",
      name: "Japan",
      flag: "🇯🇵",
      transitTime: "5-8 days",
      minOrder: "15 kg",
      duties: "3-10%",
      certifications: ["JAS Organic", "Halal"],
      ports: ["Tokyo", "Osaka", "Yokohama"],
      restrictions: "Ministry of Health approval",
    },
    {
      id: "singapore",
      name: "Singapore",
      flag: "🇸🇬",
      transitTime: "3-5 days",
      minOrder: "10 kg",
      duties: "0%",
      certifications: ["AVA", "Halal"],
      ports: ["Singapore Port"],
      restrictions: "Import license required",
    },
    {
      id: "canada",
      name: "Canada",
      flag: "🇨🇦",
      transitTime: "14-18 days",
      minOrder: "25 kg",
      duties: "0-6.5%",
      certifications: ["CFIA", "Organic", "Halal"],
      ports: ["Vancouver", "Toronto", "Montreal"],
      restrictions: "Safe Food for Canadians Act",
    },
  ];

  const exportServices = [
    {
      title: "Documentation & Compliance",
      description: "Complete export documentation and regulatory compliance management",
      features: ["Certificate of Origin preparation", "Phytosanitary certificates", "Halal and organic certifications", "Commercial invoice and packing list", "Health certificates", "Export permits and licenses"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Logistics & Shipping",
      description: "End-to-end logistics management from factory to destination",
      features: ["Cold chain transportation", "Container loading supervision", "Freight forwarding services", "Insurance coverage", "Real-time shipment tracking", "Port handling coordination"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive quality control and testing services",
      features: ["Pre-shipment inspection", "Laboratory testing certificates", "Quality control documentation", "Temperature monitoring", "Packaging integrity checks", "Compliance verification"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Customs Clearance",
      description: "Professional customs brokerage and clearance services",
      features: ["Import/export declarations", "Duty and tax calculations", "Customs broker coordination", "Regulatory compliance checks", "Document submission", "Clearance status updates"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const exportProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Discuss your export requirements, destination markets, and volume needs",
      duration: "1-2 days",
      deliverables: ["Market analysis", "Compliance requirements", "Cost estimation"],
    },
    {
      step: 2,
      title: "Documentation Preparation",
      description: "Prepare all necessary export documents and certifications",
      duration: "3-5 days",
      deliverables: ["Export permits", "Health certificates", "Origin certificates"],
    },
    {
      step: 3,
      title: "Quality Control & Packaging",
      description: "Final quality inspection and export-grade packaging",
      duration: "2-3 days",
      deliverables: ["QC report", "Export packaging", "Temperature logs"],
    },
    {
      step: 4,
      title: "Shipping & Tracking",
      description: "Coordinate shipping and provide real-time tracking information",
      duration: "5-25 days",
      deliverables: ["Shipping schedule", "Tracking information", "Arrival confirmation"],
    },
    {
      step: 5,
      title: "Customs Clearance",
      description: "Manage customs clearance at destination port",
      duration: "1-3 days",
      deliverables: ["Clearance confirmation", "Delivery arrangement", "Final documentation"],
    },
  ];

  const certifications = [
    {
      name: "Halal Certification",
      issuer: "MUI (Indonesian Ulema Council)",
      validity: "2 years",
      markets: "Global Muslim markets",
      description: "Ensures products meet Islamic dietary requirements",
    },
    {
      name: "Organic Certification",
      issuer: "IFOAM/JAS/USDA/EU",
      validity: "1 year",
      markets: "USA, EU, Japan",
      description: "Certified organic production methods",
    },
    {
      name: "HACCP Certification",
      issuer: "Indonesian Food Safety Authority",
      validity: "3 years",
      markets: "Global food safety compliance",
      description: "Hazard Analysis Critical Control Points system",
    },
    {
      name: "ISO 22000",
      issuer: "International Standards Organization",
      validity: "3 years",
      markets: "International food safety",
      description: "Food safety management system standard",
    },
    {
      name: "Export License",
      issuer: "Ministry of Trade Indonesia",
      validity: "5 years",
      markets: "All export destinations",
      description: "Official permit for food product export",
    },
    {
      name: "Health Certificate",
      issuer: "Ministry of Health Indonesia",
      validity: "Per shipment",
      markets: "Health-regulated countries",
      description: "Confirms product safety and hygiene standards",
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
              <span className="text-sm text-primary font-medium">Global Trade Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Export Services</h1>
            <p className="text-lg md:text-xl text-secondary-70 max-w-3xl mx-auto leading-relaxed mb-8">
              Professional export services to bring premium Indonesian tempe to international markets. Complete documentation, logistics, and compliance support for seamless global trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
                Request Export Quote
              </Button>
              <Button size="lg" className="border border-secondary text-secondary hover:bg-secondary hover:text-primary">
                Download Export Guide
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Export Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Export Destinations</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">We export to major markets worldwide with full regulatory compliance and optimized logistics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {exportDestinations.map((destination) => (
              <div
                key={destination.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${selectedCountry === destination.id ? "border-primary bg-primary/5 shadow-lg" : "border-gray-200 hover:border-primary/50 hover:shadow-md"}`}
                onClick={() => setSelectedCountry(destination.id)}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{destination.flag}</span>
                  <h3 className="text-lg font-bold text-primary">{destination.name}</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary/70">Transit Time:</span>
                    <span className="font-medium text-primary">{destination.transitTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary/70">Min. Order:</span>
                    <span className="font-medium text-primary">{destination.minOrder}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary/70">Import Duties:</span>
                    <span className="font-medium text-primary">{destination.duties}</span>
                  </div>
                  <div>
                    <span className="text-primary/70">Main Ports:</span>
                    <p className="font-medium text-primary text-xs mt-1">{destination.ports.join(", ")}</p>
                  </div>
                </div>

                {selectedCountry === destination.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="mb-3">
                      <span className="text-sm font-medium text-primary">Required Certifications:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {destination.certifications.map((cert, index) => (
                          <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Special Requirements:</span>
                      <p className="text-xs text-primary/70 mt-1">{destination.restrictions}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-primary/70 mb-4">Don't see your destination? We export to 50+ countries worldwide.</p>
            <Button variant="outline">Contact for Other Markets</Button>
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Comprehensive Export Services</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">End-to-end export solutions to ensure your tempe reaches international markets safely and compliantly</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {exportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-primary/70 text-sm">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-4 h-4 mr-3 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-primary/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Export Process Timeline</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Our streamlined 5-step process ensures efficient and compliant international shipping</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-primary/20 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {exportProcess.map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-sm mr-4">{phase.step}</div>
                        <h3 className="text-xl font-bold text-primary">{phase.title}</h3>
                      </div>

                      <p className="text-primary/70 mb-4">{phase.description}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm">
                          <span className="font-medium text-primary">Duration: </span>
                          <span className="text-primary/70">{phase.duration}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-sm font-medium text-primary">Deliverables:</span>
                        <ul className="mt-2 space-y-1">
                          {phase.deliverables.map((deliverable, delivIndex) => (
                            <li key={delivIndex} className="flex items-center text-sm text-primary/70">
                              <svg className="w-3 h-3 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Export Cost Calculator</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">Get an estimate of your total export costs including shipping, documentation, and compliance fees</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-primary">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Shipment Details</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Destination Country</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                      {exportDestinations.map((destination) => (
                        <option key={destination.id} value={destination.id}>
                          {destination.flag} {destination.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Order Quantity (kg)</label>
                    <input type="number" min="10" defaultValue="50" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
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
                    <label className="block text-sm font-medium mb-2">Shipping Method</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Sea Freight (LCL)</option>
                      <option>Sea Freight (FCL)</option>
                      <option>Air Freight</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Cost Breakdown</h3>

                {(() => {
                  const selectedDest = exportDestinations.find((d) => d.id === selectedCountry);

                  return (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span>Product Cost (50kg):</span>
                        <span>$425.00</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                        <span>Export Documentation:</span>
                        <span>$150.00</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <span>Shipping & Logistics:</span>
                        <span>$280.00</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                        <span>Insurance:</span>
                        <span>$45.00</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                        <span>Estimated Duties ({selectedDest?.duties}):</span>
                        <span>$34.00</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border-t-2 border-primary">
                        <span className="font-bold">Total Landed Cost:</span>
                        <span className="font-bold text-primary">$934.00</span>
                      </div>

                      <div className="text-center text-sm text-primary/70 mb-4">
                        Transit time to {selectedDest?.name}: {selectedDest?.transitTime}
                      </div>

                      <Button className="w-full">Request Detailed Quote</Button>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Certifications & Compliance</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">We maintain all necessary certifications to meet international food safety and quality standards</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-green-200 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary">{cert.name}</h3>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary/70">Issuer:</span>
                    <span className="font-medium text-primary text-xs">{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary/70">Validity:</span>
                    <span className="font-medium text-primary">{cert.validity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary/70">Markets:</span>
                    <span className="font-medium text-primary text-xs">{cert.markets}</span>
                  </div>
                  <p className="text-primary/70 text-xs mt-3">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Ready to Export Premium Tempe?
          </h2>
          <p className="text-lg text-primary/70 mb-8">
            Let our export experts handle all the complexities of international trade. 
            From documentation to delivery, we ensure your tempe reaches global markets successfully.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
              Start Export Process
            </Button>
            <Button size="lg" variant="outline">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24
">                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Export Guide
            </Button>
          </div>
            <p className="text-sm text-primary/70"></p>
              By clicking "Start Export Process," you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
            </p>
        </div>
        </section> */}
    </div>
  );
};

export default ExportServicesPage;
