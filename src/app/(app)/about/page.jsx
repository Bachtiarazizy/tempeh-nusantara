"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Globe, Heart, Leaf, Factory, Shield, Target, TrendingUp, CheckCircle, Quote, MapPin } from "lucide-react";

const AboutPage = () => {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a passion for authentic Indonesian tempeh in Jakarta",
    },
    {
      year: "2019",
      title: "First Export",
      description: "Successfully shipped our first international order to Singapore",
    },
    {
      year: "2021",
      title: "Certification Achieved",
      description: "Obtained international food safety and organic certifications",
    },
    {
      year: "2022",
      title: "Affiliate Program Launch",
      description: "Introduced innovative ranking-based affiliate system",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Now serving 50+ countries with premium tempeh products",
    },
  ];

  const team = [
    {
      name: "Budi Santoso",
      role: "Founder & CEO",
      description: "30+ years in traditional tempeh making with vision for global expansion",
      expertise: "Traditional Fermentation Methods",
    },
    {
      name: "Sarah Mitchell",
      role: "International Business Director",
      description: "Export specialist with experience in food distribution across 40+ countries",
      expertise: "Global Market Development",
    },
    {
      name: "Dr. Ahmad Wijaya",
      role: "Quality Assurance Manager",
      description: "Food scientist ensuring every batch meets international standards",
      expertise: "Food Safety & Certification",
    },
    {
      name: "Maya Chen",
      role: "Affiliate Program Manager",
      description: "Digital marketing expert managing our global affiliate network",
      expertise: "Affiliate Relations & Marketing",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "We preserve traditional Indonesian tempeh-making methods passed down through generations",
      color: "from-red-50 to-red-100",
      iconColor: "bg-red-500",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Bringing Indonesian culinary heritage to health-conscious consumers worldwide",
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-500",
    },
    {
      icon: Shield,
      title: "Quality First",
      description: "Uncompromising standards in every step from sourcing to packaging",
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-500",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building mutually beneficial relationships with affiliates and wholesale partners",
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-500",
    },
  ];

  const certifications = [
    { name: "ISO 22000", description: "Food Safety Management" },
    { name: "Halal Certified", description: "Islamic Dietary Standards" },
    { name: "Organic Certified", description: "USDA & EU Organic Standards" },
    { name: "Export License", description: "Indonesian Ministry of Trade" },
    { name: "HACCP", description: "Hazard Analysis Critical Control Points" },
    { name: "GMP", description: "Good Manufacturing Practices" },
  ];

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
              {/* <Heart className="w-5 h-5 mr-2 text-green-400" /> */}
              <span className="text-sm text-primary font-medium">Our Story</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Tempeh Nusantara</h1>

            <p className="text-base md:text-medium text-secondary/80 max-w-3xl mx-auto leading-relaxed">
              Founded with a mission to share the nutritional and cultural richness of traditional Indonesian tempeh with global markets, while supporting local farmers and international partners.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">Our Purpose</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Mission & Vision</h2>

              <div className="space-y-8">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <Target className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                  <p className="text-primary/70 leading-relaxed">
                    To preserve and promote traditional Indonesian tempeh-making methods while building a sustainable global business that benefits local farmers, international partners, and health-conscious consumers worldwide.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                  <Globe className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                  <p className="text-primary/70 leading-relaxed">
                    To become the world's most trusted source of premium Indonesian tempeh, leading the global plant-based protein revolution while maintaining authentic traditional methods and fostering international partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-xl p-6">
                    <Factory className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-sm text-primary/60">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-primary/60">Countries Served</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-primary/60">Happy Customers</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-sm text-primary/60">Active Affiliates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Story & Milestones</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">From a small traditional tempeh workshop in Jakarta to a global export business serving customers worldwide</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="text-sm text-green-600 font-semibold mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                        <p className="text-primary/70">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Core Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Drives Us</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Our values guide every decision we make, from product development to partner relationships</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className={`p-6 bg-gradient-to-br ${value.color} border-0`}>
                  <div className={`w-12 h-12 ${value.iconColor} rounded-lg flex items-center justify-center mb-4`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-sm text-primary/70 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet the Leaders</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Experienced professionals passionate about bringing Indonesian tempeh to the world</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-primary text-center mb-1">{member.name}</h3>
                  <p className="text-green-600 text-center text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-primary/70 text-sm text-center mb-3 leading-relaxed">{member.description}</p>
                  <div className="text-center">
                    <Badge variant="outline" className="text-xs">
                      {member.expertise}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">Quality Assurance</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Certifications & Standards</h2>
              <p className="text-lg text-primary/70 mb-8">We maintain the highest international standards through rigorous certification processes and continuous quality monitoring.</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-primary">International Food Safety Standards</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-primary">Organic Certification Compliance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-primary">Export Documentation & Traceability</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-primary">Regular Third-Party Audits</span>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {/* <Shield className="w-5 h-5 mr-2" /> */}
                Download Certificates
              </Button>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-primary mb-1">{cert.name}</h4>
                      <p className="text-xs text-primary/60">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Sustainability</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Environmental Commitment</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Building a sustainable future through responsible sourcing, eco-friendly packaging, and supporting local communities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Sustainable Sourcing</h3>
                <p className="text-primary/70 leading-relaxed">We work directly with local farmers using sustainable agriculture practices, ensuring fair prices and environmental protection.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <Factory className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Eco-Friendly Production</h3>
                <p className="text-primary/70 leading-relaxed">Our production facilities use renewable energy and minimize waste through efficient processes and recycling programs.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Community Support</h3>
                <p className="text-primary/70 leading-relaxed">We invest in local communities through education programs, infrastructure development, and economic empowerment initiatives.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Visit Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Headquarters</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto">Located in the heart of Jakarta, our facility combines traditional tempeh-making with modern export capabilities</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Card className="p-8">
                <CardContent className="p-0">
                  <MapPin className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-4">Tempeh Nusantara Headquarters</h3>
                  <div className="space-y-3 text-primary/70">
                    <p>
                      <strong>Address:</strong> 456 Tempeh Ave, Jakarta Selatan 12560, Indonesia
                    </p>
                    <p>
                      <strong>Phone:</strong> +62 21 1234 5678
                    </p>
                    <p>
                      <strong>Email:</strong> info@tempenusantara.com
                    </p>
                    <p>
                      <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM WIB
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button className="bg-primary hover:bg-primary/90 mr-4">Get Directions</Button>
                    <Button variant="outline">Schedule Visit</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-0">
                  <div className="h-80 bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg font-medium">Interactive Map</p>
                      <p className="text-gray-400">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Journey?</h2>
          <p className="text-lg mb-8 opacity-90">Whether you're interested in our products, wholesale opportunities, or affiliate program, we'd love to connect with you.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
              Contact Us
            </Button>
            <Button size="lg" className="border border-secondary text-secondary hover:bg-secondary hover:text-primary">
              Explore Products
            </Button>
            <Button size="lg" className="border border-secondary text-secondary hover:bg-secondary hover:text-primary">
              Join Affiliate Program
            </Button>
          </div>
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

export default AboutPage;
