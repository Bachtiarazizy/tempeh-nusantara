"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Send, Package, Users, TrendingUp, BookOpen, CreditCard, Truck, Shield, Award } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);

    try {
      // Simulate newsletter subscription
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (error) {
      alert("There was an error subscribing. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
  ];

  const businessLinks = [
    { name: "Wholesale Orders", href: "/wholesale" },
    { name: "Bulk Pricing", href: "/bulk-pricing" },
    { name: "Export Services", href: "/export" },
    { name: "Partnership", href: "/partnership" },
    { name: "Distributor Program", href: "/distributor" },
  ];

  const affiliateLinks = [
    { name: "Become an Affiliate", href: "/affiliate/register" },
    { name: "Affiliate Login", href: "/affiliate/login" },
    { name: "Affiliate Dashboard", href: "/affiliate/dashboard" },
    { name: "Leaderboard", href: "/affiliate/leaderboard" },
    { name: "Commission Structure", href: "/affiliate/commission" },
  ];

  const supportLinks = [
    { name: "Order Tracking", href: "/track-order" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns & Refunds", href: "/returns" },
    { name: "Payment Methods", href: "/payment" },
    { name: "Customer Support", href: "/support" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Affiliate Terms", href: "/affiliate-terms" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Features/Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-800">
        <div className="text-center">
          <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-3">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <h5 className="font-semibold mb-1">Global Shipping</h5>
          <p className="text-gray-400 text-sm">Reliable global delivery</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h5 className="font-semibold mb-1">Premium Quality</h5>
          <p className="text-gray-400 text-sm">Traditional Indonesian methods</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h5 className="font-semibold mb-1">Affiliate Program</h5>
          <p className="text-gray-400 text-sm">Earn with our ranking system</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-3">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <h5 className="font-semibold mb-1">Secure Payments</h5>
          <p className="text-gray-400 text-sm">Multiple payment options</p>
        </div>
      </div>
      {/* Main Footer Content */}
      <Separator className="my-8 bg-secondary/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="logo tempeh nusantara" width={80} height={80} />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">Premium Indonesian tempeh for global markets. Crafted with traditional methods using the finest ingredients for authentic taste and superior nutrition.</p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-secondary" />
                <a href="mailto:info@tempenusantara.com" className="hover:text-white transition-colors">
                  info@tempenusantara.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-secondary" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-secondary" />
                <span>456 Tempeh Ave, Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">Shop</h4>
            <ul className="space-y-2 text-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 text-medium hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">Business</h4>
            <ul className="space-y-2 text-medium">
              {businessLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 text-medium hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliate Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">Affiliate</h4>
            <ul className="space-y-2 text-medium">
              {affiliateLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 text-medium hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">Support</h4>
            <ul className="space-y-2 text-medium">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 text-medium hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Legal */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 mt-8 border-t border-gray-800">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 mb-4 lg:mb-0">
            {legalLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm mr-2">Follow us:</span>
            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <Separator className="my-8 bg-gray-800" />
        <div className="text-center">
          <p className="text-gray-400 text-sm">© 2024 Tempeh Nusantara. All rights reserved. | Built for premium Indonesian tempeh export</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
