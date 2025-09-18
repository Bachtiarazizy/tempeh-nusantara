"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Search, HelpCircle, Package, Truck, CreditCard, Users, Leaf, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState(new Set(["general-0"])); // Default open first item of general

  const toggleItem = (itemId) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      icon: HelpCircle,
      badge: "Popular",
      badgeVariant: "default",
      questions: [
        {
          question: "What is tempeh?",
          answer:
            "Tempeh is a traditional Indonesian fermented soybean product that's rich in protein and probiotics. It's made by fermenting soybeans with a natural culturing agent called Rhizopus oligosporus, which binds the soybeans into a firm, cake-like form. Our tempeh is crafted using authentic Indonesian methods passed down through generations.",
        },
        {
          question: "How is your tempeh different from store-bought versions?",
          answer:
            "Our tempeh is handcrafted in small batches using traditional Indonesian fermentation techniques. We use only premium non-GMO soybeans and natural starter cultures, with no artificial preservatives or additives. Each batch is carefully monitored for optimal fermentation, resulting in superior taste, texture, and nutritional value compared to mass-produced alternatives.",
        },
        {
          question: "Is tempeh suitable for vegans and vegetarians?",
          answer:
            "Yes, all our tempeh products are 100% plant-based and suitable for vegans and vegetarians. Tempeh is an excellent source of complete protein, containing all essential amino acids, making it a perfect meat substitute for plant-based diets.",
        },
        {
          question: "Do you offer wholesale or bulk pricing?",
          answer:
            "Yes, we offer wholesale pricing for restaurants, health food stores, and other businesses. We also provide bulk pricing for large orders. Please contact our sales team at wholesale@tempenusantara.com for custom pricing and minimum order requirements.",
        },
      ],
    },
    {
      id: "products",
      title: "Products & Ingredients",
      icon: Package,
      badge: "New",
      badgeVariant: "secondary",
      questions: [
        {
          question: "What ingredients are used in your tempeh?",
          answer:
            "Our basic tempeh contains only three ingredients: organic non-GMO soybeans, tempeh starter culture (Rhizopus oligosporus), and filtered water. Our flavored varieties may include additional natural spices and seasonings, which are clearly listed on each product page and package label.",
        },
        {
          question: "Are your products organic?",
          answer:
            "We offer both conventional and USDA organic certified tempeh products. Our organic line is made with certified organic soybeans and is processed in a certified organic facility. Look for the 'Organic' badge on product listings to identify our certified organic options.",
        },
        {
          question: "Do you use GMO soybeans?",
          answer:
            "No, we exclusively use non-GMO soybeans in all our tempeh products. Our soybeans are sourced from trusted suppliers who provide non-GMO verification certificates, ensuring the highest quality and natural integrity of our products.",
        },
        {
          question: "What allergens are present in your tempeh?",
          answer:
            "Our tempeh contains soy, which is a major allergen. Some flavored varieties may contain additional allergens such as nuts, sesame, or gluten from seasonings. All allergens are clearly labeled on product packaging and detailed on individual product pages. Our facility also processes nuts and wheat products.",
        },
        {
          question: "How long does tempeh last?",
          answer:
            "Fresh tempeh should be consumed within 7-10 days when refrigerated. Frozen tempeh can last up to 6 months in the freezer. Always check the expiration date on the package and look for signs of spoilage such as off-odors, unusual colors, or slimy texture before consumption.",
        },
      ],
    },
    {
      id: "ordering",
      title: "Ordering & Availability",
      icon: Users,
      questions: [
        {
          question: "How do I place an order?",
          answer:
            "You can place an order directly through our website by browsing our products, adding items to your cart, and proceeding to checkout. You can also call our customer service team at (555) 123-4567 during business hours for assistance with your order.",
        },
        {
          question: "Can I modify or cancel my order after placing it?",
          answer:
            "Orders can be modified or cancelled within 2 hours of placement, as long as they haven't entered the production phase. After this window, changes may not be possible due to our fresh production schedule. Please contact us immediately if you need to make changes.",
        },
        {
          question: "Do you have minimum order requirements?",
          answer: "There's no minimum order requirement for regular retail orders. However, we do offer free shipping on orders over $50. For wholesale orders, minimum quantities apply based on the specific products and your location.",
        },
        {
          question: "What if a product is out of stock?",
          answer:
            "If a product is temporarily out of stock, you can sign up for restock notifications on the product page. We typically restock popular items within 3-5 business days. For urgent needs, please contact our customer service team who may be able to provide alternatives or expedited restocking.",
        },
      ],
    },
    {
      id: "shipping",
      title: "Shipping & Delivery",
      icon: Truck,
      badge: "Important",
      badgeVariant: "destructive",
      questions: [
        {
          question: "What are your shipping options and costs?",
          answer:
            "We offer three shipping options: Standard (5-7 business days, $10), Express (2-3 business days, $25), and Overnight (1 business day, $45). Standard shipping is free on orders over $50. All tempeh is shipped in insulated packaging with ice packs to maintain freshness.",
        },
        {
          question: "What areas do you ship to?",
          answer:
            "We currently ship to all 50 US states and Washington DC. We're working on expanding to international shipping in the near future. Shipping to Alaska and Hawaii may require additional transit time and costs due to distance.",
        },
        {
          question: "How do you keep tempeh fresh during shipping?",
          answer:
            "All orders are packed in insulated boxes with food-grade ice packs or dry ice (for longer transit times). We use temperature-controlled shipping to ensure your tempeh arrives fresh and safe. Orders are typically shipped on Mondays-Wednesdays to avoid weekend delays.",
        },
        {
          question: "What if my order arrives damaged or spoiled?",
          answer: "If your order arrives damaged or spoiled, please contact us immediately with photos of the issue. We'll provide a full refund or replacement at no cost to you. Your satisfaction and food safety are our top priorities.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes, you'll receive a tracking number via email once your order ships. You can track your package through our website or directly with the shipping carrier. We also send delivery notifications to keep you updated on your order's progress.",
        },
      ],
    },
    {
      id: "payment",
      title: "Payment & Pricing",
      icon: CreditCard,
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All payments are processed securely through our encrypted payment gateway to protect your financial information.",
        },
        {
          question: "Are there any additional fees?",
          answer:
            "The price you see at checkout is the total price you'll pay. We don't add any hidden fees. The only additional costs are shipping (unless you qualify for free shipping) and applicable sales tax based on your delivery location.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "Yes, we offer full refunds for damaged, spoiled, or unsatisfactory products. Fresh food refunds must be requested within 7 days of delivery. Refunds are processed within 3-5 business days after we receive your return request.",
        },
        {
          question: "Can I use discount codes or coupons?",
          answer:
            "Yes, we regularly offer discount codes for new customers, seasonal promotions, and bulk orders. You can enter your discount code at checkout. Sign up for our newsletter to receive exclusive offers and early access to sales.",
        },
      ],
    },
    {
      id: "account",
      title: "Account & Support",
      icon: Users,
      questions: [
        {
          question: "Do I need to create an account to order?",
          answer:
            "You can place orders as a guest, but creating an account offers benefits like order tracking, reorder functionality, saved addresses, and access to exclusive member discounts. Account creation is free and only takes a minute.",
        },
        {
          question: "How do I reset my password?",
          answer:
            "Click the 'Forgot Password' link on the login page and enter your email address. We'll send you a secure reset link. If you don't receive the email within a few minutes, check your spam folder or contact our support team.",
        },
        {
          question: "Can I save my favorite products?",
          answer: "Yes, logged-in users can save products to their wishlist for easy reordering. You can also set up recurring deliveries for your favorite items at discounted prices through our subscription service.",
        },
        {
          question: "How do I contact customer support?",
          answer: "You can reach our customer support team via email at support@tempenusantara.com, phone at (555) 123-4567 during business hours (9 AM - 6 PM EST, Monday-Friday), or through our live chat feature on the website.",
        },
      ],
    },
    {
      id: "health",
      title: "Health & Nutrition",
      icon: Leaf,
      badge: "Health",
      badgeVariant: "outline",
      questions: [
        {
          question: "What are the health benefits of tempeh?",
          answer:
            "Tempeh is rich in protein (19-20g per 100g), probiotics for digestive health, and essential nutrients like magnesium, phosphorus, and B vitamins. The fermentation process increases nutrient bioavailability and creates beneficial compounds that support heart health and may help lower cholesterol.",
        },
        {
          question: "Is tempeh safe for people with soy allergies?",
          answer:
            "No, tempeh is made from soybeans and is not safe for people with soy allergies. However, some people with soy sensitivities may tolerate fermented soy products like tempeh better than other soy products due to the fermentation process, but this should be discussed with a healthcare provider.",
        },
        {
          question: "Can pregnant or breastfeeding women eat tempeh?",
          answer:
            "Tempeh is generally safe for pregnant and breastfeeding women and provides excellent nutrition. However, we recommend consulting with your healthcare provider about incorporating fermented foods into your diet during pregnancy and breastfeeding.",
        },
        {
          question: "How much tempeh should I eat per day?",
          answer:
            "A typical serving size is 3-4 oz (85-115g), which provides about 15-20g of protein. Tempeh can be enjoyed daily as part of a balanced diet. As with any food, moderation is key, and individual dietary needs may vary based on health conditions and nutritional requirements.",
        },
        {
          question: "Does tempeh need to be cooked before eating?",
          answer:
            "While tempeh is technically edible raw due to the fermentation process, we strongly recommend cooking it before consumption for food safety and optimal taste. Cooking also improves digestibility and brings out tempeh's nutty, savory flavors.",
        },
      ],
    },
  ];

  // Filter FAQ based on search
  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter((q) => q.question.toLowerCase().includes(searchQuery.toLowerCase()) || q.answer.toLowerCase().includes(searchQuery.toLowerCase())),
    }))
    .filter((category) => category.questions.length > 0);

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
              <HelpCircle className="w-5 h-5 mr-2 text-primary" />

              <span className="text-sm text-primary font-medium">Help Center</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-base md:text-medium text-secondary-70 max-w-3xl mx-auto leading-relaxed">Find answers to common questions about our tempeh products, ordering, shipping, and more</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input type="text" placeholder="Search FAQ..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 bg-white" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <p className="text-sm text-gray-600">Product Varieties</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">5000+</div>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">48h</div>
              <p className="text-sm text-gray-600">Average Delivery</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {(searchQuery ? filteredFAQs : faqCategories).map((category) => (
            <Card key={category.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <category.icon className="w-5 h-5 text-green-600" />
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    {category.badge && (
                      <Badge variant={category.badgeVariant || "default"} className="text-xs">
                        {category.badge}
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{category.questions.length} questions</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {category.questions.map((faq, index) => {
                    const itemId = `${category.id}-${index}`;
                    const isOpen = openItems.has(itemId);

                    return (
                      <div key={index}>
                        <Collapsible open={isOpen} onOpenChange={() => toggleItem(itemId)}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                            <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                            <ChevronDown className={`w-4 h-4 text-gray-400 transform transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="px-6 pb-4">
                              <Separator className="mb-4" />
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                        {index < category.questions.length - 1 && <div className="border-b border-gray-100 mx-6" />}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {searchQuery && filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-4">Try searching with different keywords or browse our categories above.</p>
            <Button variant="outline" onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
          </div>
        )}

        {/* Contact Support Section */}
        <Card className="mt-12 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Can't find what you're looking for? Our customer support team is here to help.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700">
                <Phone className="w-4 h-4 mr-2" />
                Call (555) 123-4567
              </Button>
              <Button variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </Button>
              <Button variant="outline">
                <MessageCircle className="w-4 h-4 mr-2" />
                Live Chat
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">Available Monday-Friday, 9 AM - 6 PM EST</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQPage;
