"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Handshake, Users, Store, Globe, TrendingUp, Award, Target, DollarSign, Truck, CheckCircle, ArrowRight, Mail, Phone, Calendar } from "lucide-react";
import { useState } from "react";

const PartnershipPage = () => {
  const [selectedPartnership, setSelectedPartnership] = useState("distributor");
  const [formData, setFormData] = useState({
    partnershipType: "",
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
    message: "",
  });

  const partnershipTypes = [
    {
      id: "distributor",
      title: "Regional Distributor",
      subtitle: "Exclusive Territory Rights",
      description: "Become the exclusive distributor for your region with comprehensive support and marketing materials",
      minCommitment: "500kg monthly",
      benefits: ["Exclusive territory protection", "Up to 40% wholesale discount", "Marketing co-op funding", "Training and certification", "Dedicated account manager", "Custom packaging options"],
      requirements: ["Established distribution network", "Cold chain logistics capability", "Minimum monthly commitment", "Marketing investment commitment", "Local regulatory compliance"],
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-500",
      icon: Globe,
    },
    {
      id: "retail",
      title: "Retail Partner",
      subtitle: "Premium Store Partnership",
      description: "Stock our premium tempeh products in your health food stores, supermarkets, or specialty retailers",
      minCommitment: "100kg monthly",
      benefits: ["Competitive wholesale pricing", "Point-of-sale materials", "Product training for staff", "Flexible ordering system", "Marketing support", "Category management expertise"],
      requirements: ["Established retail presence", "Refrigerated storage capability", "Health food or organic focus", "Minimum order quantities", "Product placement agreements"],
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-500",
      icon: Store,
    },
    {
      id: "foodservice",
      title: "Foodservice Partner",
      subtitle: "Restaurant & Catering",
      description: "Supply restaurants, cafeterias, and catering companies with bulk tempeh products",
      minCommitment: "200kg monthly",
      benefits: ["Bulk pricing discounts", "Custom portion sizes", "Chef training programs", "Menu development support", "Consistent supply guarantee", "Recipe database access"],
      requirements: ["Commercial kitchen operation", "Food service license", "Volume commitment", "Quality standards compliance", "Regular ordering schedule"],
      color: "from-orange-50 to-orange-100",
      iconColor: "bg-orange-500",
      icon: Users,
    },
    {
      id: "private-label",
      title: "Private Label Partner",
      subtitle: "White Label Solutions",
      description: "Launch your own tempeh brand with our manufacturing expertise and quality standards",
      minCommitment: "1000kg monthly",
      benefits: ["Custom recipe development", "Your brand packaging design", "Quality assurance support", "Regulatory compliance help", "Scalable production capacity", "International certifications"],
      requirements: ["Brand development capability", "Significant volume commitment", "Marketing investment", "Long-term contract agreement", "Quality standard alignment"],
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-500",
      icon: Award,
    },
  ];

  const successStories = [
    {
      company: "Green Valley Foods",
      type: "Regional Distributor",
      country: "Australia",
      result: "300% growth in plant-based category",
      quote: "Partnership with Tempeh Nusantara has transformed our plant-based offerings and significantly increased our market share.",
    },
    {
      company: "Organic Life Supermarkets",
      type: "Retail Chain",
      country: "Singapore",
      result: "Top-selling protein product",
      quote: "Their tempeh consistently outsells other plant-based proteins in our stores. The quality and customer satisfaction is exceptional.",
    },
    {
      company: "Healthy Bites Catering",
      type: "Foodservice",
      country: "UAE",
      result: "Expanded to 50+ locations",
      quote: "The consistency and quality of their tempeh has allowed us to scale our healthy catering business across the region.",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partnership inquiry submitted:", formData);
    alert("Thank you for your partnership inquiry! We'll contact you within 24 hours.");
  };

  const selectedPartnershipData = partnershipTypes.find((p) => p.id === selectedPartnership);

  return (
    <div className="min-h-screen bg-secondary text-primary">
      {/* Hero Section */}
      <section
        className="relative bg-primary text-secondary"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("/images/hero-image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-secondary bg-opacity-20 rounded-full backdrop-blur-sm mb-6">
              <Handshake className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm text-primary font-medium">Strategic Partnerships</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Partner with Tempeh Nusantara</h1>

            <p className="text-base md:text-medium text-secondary/80 max-w-3xl mx-auto leading-relaxed">
              Join our global network of distributors, retailers, and foodservice partners. Together, we're bringing authentic Indonesian tempeh to health-conscious consumers worldwide.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Handshake className="w-5 h-5 mr-2" />
                Explore Partnerships
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Partnership Opportunities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Choose Your Partnership Model</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Multiple partnership opportunities designed to match your business model and growth objectives</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {partnershipTypes.map((partnership) => (
              <Card
                key={partnership.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${selectedPartnership === partnership.id ? "ring-2 ring-green-500 shadow-lg" : ""}`}
                onClick={() => setSelectedPartnership(partnership.id)}
              >
                <CardContent className={`p-6 bg-gradient-to-br ${partnership.color} border-0`}>
                  <div className={`w-12 h-12 ${partnership.iconColor} rounded-lg flex items-center justify-center mb-4`}>
                    <partnership.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{partnership.title}</h3>
                  <p className="text-sm font-medium text-green-600 mb-3">{partnership.subtitle}</p>
                  <p className="text-sm text-primary/70 leading-relaxed mb-4">{partnership.description}</p>
                  <div className="text-sm font-medium text-primary">Min. Commitment: {partnership.minCommitment}</div>
                  <ArrowRight className={`w-4 h-4 mt-4 text-primary/40 transition-transform duration-300 ${selectedPartnership === partnership.id ? "translate-x-2" : ""}`} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Details */}
      {selectedPartnershipData && (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Benefits */}
              <div>
                <Badge className="bg-green-100 text-green-800 mb-4">Partnership Benefits</Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">{selectedPartnershipData.title} Benefits</h3>

                <div className="space-y-4">
                  {selectedPartnershipData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-primary">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <Target className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-primary mb-2">Success Metrics</h4>
                  <p className="text-primary/70 text-sm">Our partners typically see 150-300% growth in their plant-based category within the first year of partnership.</p>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <Badge className="bg-blue-100 text-blue-800 mb-4">Requirements</Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">Partner Requirements</h3>

                <div className="space-y-4 mb-8">
                  {selectedPartnershipData.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">{index + 1}</span>
                      </div>
                      <span className="text-primary">{requirement}</span>
                    </div>
                  ))}
                </div>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-primary mb-2">Investment & Returns</h4>
                    <p className="text-primary/70 text-sm mb-4">Initial investment varies by partnership type and territory size. Our partners typically achieve ROI within 6-12 months.</p>
                    <Button className="bg-primary hover:bg-primary/90">Request Financial Details</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Partner Success Stories</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">See how our partners are growing their businesses with premium Indonesian tempeh</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="font-bold text-primary text-lg">{story.company}</h4>
                    <p className="text-green-600 text-sm font-medium">
                      {story.type} • {story.country}
                    </p>
                  </div>

                  <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600 mb-1" />
                    <p className="font-semibold text-green-800">{story.result}</p>
                  </div>

                  <blockquote className="text-primary/70 text-sm italic leading-relaxed">"{story.quote}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Partnership Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How to Become a Partner</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Our streamlined partnership process gets you started quickly while ensuring mutual success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Submit inquiry and schedule consultation call to discuss your market and goals",
              },
              {
                step: "2",
                title: "Market Assessment",
                description: "We analyze your market potential and provide customized partnership proposal",
              },
              {
                step: "3",
                title: "Agreement & Training",
                description: "Sign partnership agreement and complete comprehensive training program",
              },
              {
                step: "4",
                title: "Launch & Support",
                description: "Official launch with ongoing support, monitoring, and optimization",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{process.title}</h3>
                <p className="text-sm text-primary/70">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Discuss Partnership Opportunities?</h2>
            <p className="text-secondary/80">Contact our partnership team directly for immediate assistance</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-secondary text-primary">
              <CardContent className="p-0">
                <Mail className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Partnership Inquiries</h3>
                <p className="text-primary/70 mb-4">Get detailed partnership information and proposals</p>
                <p className="font-medium">partnerships@tempenusantara.com</p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-secondary text-primary">
              <CardContent className="p-0">
                <Phone className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Direct Partnership Line</h3>
                <p className="text-primary/70 mb-4">Speak directly with our partnership team</p>
                <p className="font-medium">+62 21 1234 5679</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 mb-4">Get Started</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Partnership Inquiry Form</h2>
            <p className="text-lg text-primary/70">Tell us about your business and partnership interests. We'll respond within 24 hours.</p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="partnershipType">Partnership Type</Label>
                  <Select value={formData.partnershipType} onValueChange={(value) => handleInputChange("partnershipType", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      {partnershipTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" type="text" required value={formData.companyName} onChange={(e) => handleInputChange("companyName", e.target.value)} className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="contactName">Contact Name</Label>
                  <Input id="contactName" type="text" required value={formData.contactName} onChange={(e) => handleInputChange("contactName", e.target.value)} className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="country">Country/Region</Label>
                  <Input id="country" type="text" required value={formData.country} onChange={(e) => handleInputChange("country", e.target.value)} className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="experience">Business Experience</Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">New Business/Startup</SelectItem>
                    <SelectItem value="1-5">1-5 Years Experience</SelectItem>
                    <SelectItem value="5-10">5-10 Years Experience</SelectItem>
                    <SelectItem value="10+">10+ Years Experience</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Tell us about your business and partnership goals</Label>
                <Textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="mt-2"
                  placeholder="Describe your business, target market, and what you hope to achieve through partnership..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Mail className="w-5 h-5 mr-2" />
                Submit Partnership Inquiry
              </Button>
            </form>
          </Card>
        </div>
      </section>

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

export default PartnershipPage;
