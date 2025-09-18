"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the terms before sending your message.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success
      alert("Thank you for your message! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setAgreeTerms(false);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

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
              <MessageCircle className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm text-primary font-medium">Get In Touch</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Contact Us</h1>
            <p className="text-base md:text-medium text-secondary-70 max-w-3xl mx-auto leading-relaxed">Have questions about our tempeh products? Want to place a bulk order? We'd love to hear from you.</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Form */}
          <div>
            <div className="mb-8">
              <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">CONNECT</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">GET IN TOUCH</h2>
              <p className="text-gray-600">We'd love to hear from you!</p>
            </div>

            <Card className="relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-8 right-8 w-32 h-32 bg-gray-400 rounded-full"></div>
                <div className="absolute top-16 right-4 w-24 h-24 bg-gray-300 rounded-full"></div>
                <div className="absolute bottom-8 right-12 w-20 h-20 bg-gray-400 rounded-full"></div>
                <div className="absolute bottom-16 right-20 w-16 h-16 bg-gray-300 rounded-full"></div>
              </div>

              <CardContent className="p-8 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-2 bg-white border-gray-200 focus:border-green-500 focus:ring-green-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-2 bg-white border-gray-200 focus:border-green-500 focus:ring-green-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-2 bg-white border-gray-200 focus:border-green-500 focus:ring-green-500 resize-none"
                      placeholder="Share your thoughts..."
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" checked={agreeTerms} onCheckedChange={setAgreeTerms} className="mt-0.5" />
                    <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                      I agree to the{" "}
                      <a href="/terms" className="text-green-600 hover:text-green-700 underline">
                        Terms
                      </a>
                    </Label>
                  </div>

                  <Button type="submit" disabled={isSubmitting || !agreeTerms} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full">
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-12">
            {/* Email Section */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EMAIL</h3>
              <p className="text-gray-600 mb-4 max-w-sm mx-auto leading-relaxed">We're here to assist you with any inquiries or feedback.</p>
              <a href="mailto:info@tempenusantara.com" className="text-green-600 hover:text-green-700 font-medium">
                info@tempenusantara.com
              </a>
            </div>

            {/* Phone Section */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">PHONE</h3>
              <p className="text-gray-600 mb-4 max-w-sm mx-auto leading-relaxed">Reach out to us for quick assistance.</p>
              <a href="tel:+15551234567" className="text-green-600 hover:text-green-700 font-medium">
                +1 (555) 123-4567
              </a>
            </div>

            {/* Office Section */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">OFFICE</h3>
              <p className="text-gray-600 mb-4 max-w-sm mx-auto leading-relaxed">Visit us at our headquarters for more information.</p>
              <address className="text-green-600 not-italic font-medium">456 Tempeh Ave, Jakarta, Indonesia</address>
            </div>

            {/* Business Hours */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">BUSINESS HOURS</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Get help with orders, shipping, and product information</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Wholesale Inquiries</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Interested in bulk orders? Contact our sales team</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Press & Media</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Media inquiries and press kit requests welcome</p>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <Card className="mt-16">
          <CardContent className="p-0">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium">Interactive Map</p>
                <p className="text-gray-400">456 Tempeh Ave, Jakarta, Indonesia</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
