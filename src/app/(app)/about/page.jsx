"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Factory, Globe, Heart, Leaf, Users, Shield, Target, UserCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AboutUsPage = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 variants={fadeInUp} initial="initial" animate="animate" className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Our Story of
            <span className="text-green-600 block">Indonesian Excellence</span>
          </motion.h1>

          <motion.p variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.2 }} className="text-xl text-gray-600 leading-relaxed mb-12">
            From a small village kitchen in Java to tables around the world, discover how we've been crafting premium tempeh with traditional Indonesian methods for over 25 years.
          </motion.p>

          <motion.div variants={stagger} initial="initial" animate="animate" className="grid md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Years of Excellence", icon: Award },
              { number: "50+", label: "Countries Served", icon: Globe },
              { number: "500+", label: "B2B Partners", icon: Users },
              { number: "10M+", label: "Happy Customers", icon: Heart },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} transition={{ delay: index * 0.1 }} whileHover={{ y: -10, scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Our Journey */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Every great story has humble beginnings. Ours started in a small village kitchen with a passion for authentic Indonesian flavors.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div variants={fadeInLeft} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=600&q=80" alt="Traditional Indonesian Kitchen" className="w-full h-96 object-cover rounded-3xl shadow-2xl" />
          </motion.div>

          <motion.div variants={fadeInRight} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">The Beginning (1999)</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our story began when Ibu Sari, a master tempeh maker from Central Java, decided to share her family's 100-year-old fermentation secrets with the world. What started as a small operation in her village kitchen has grown into
              Indonesia's premier tempeh export company.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We learned that the secret to exceptional tempeh isn't just in the ingredients, but in the passion, patience, and traditional techniques passed down through generations of Indonesian craftsmen.
            </p>

            <div className="flex items-center space-x-4 bg-green-50 p-4 rounded-xl">
              <div className="bg-green-600 rounded-full p-2">
                <Leaf className="text-white" size={20} />
              </div>
              <span className="text-green-800 font-medium">Traditional fermentation methods since 1899</span>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInLeft} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-6 order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-gray-900">Global Expansion (2010-Present)</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              By 2010, word of our exceptional tempeh had spread beyond Indonesia's borders. We began exporting to neighboring countries, and today we proudly serve customers in over 50 countries worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our state-of-the-art facilities now blend traditional craftsmanship with modern technology, ensuring every batch meets international quality standards while preserving the authentic taste our customers love.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <Globe className="text-blue-600 mb-2" size={24} />
                <div className="font-bold text-blue-900">50+ Countries</div>
                <div className="text-blue-700 text-sm">Worldwide Export</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <Factory className="text-purple-600 mb-2" size={24} />
                <div className="font-bold text-purple-900">ISO Certified</div>
                <div className="text-purple-700 text-sm">Quality Standards</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="initial" whileInView="animate" viewport={{ once: true }} className="order-1 lg:order-2">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Modern Production Facility" className="w-full h-96 object-cover rounded-3xl shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Our Values */}
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">These principles guide everything we do, from sourcing ingredients to serving customers worldwide.</p>
        </motion.div>

        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Authentic Tradition",
              description: "We honor centuries-old Indonesian tempeh-making traditions while embracing modern quality standards.",
              color: "from-red-500 to-pink-600",
            },
            {
              icon: Leaf,
              title: "Natural & Sustainable",
              description: "100% natural ingredients, sustainable farming practices, and eco-friendly packaging solutions.",
              color: "from-green-500 to-emerald-600",
            },
            {
              icon: Target,
              title: "Quality Excellence",
              description: "Every batch undergoes rigorous quality control to ensure consistent taste and nutritional value.",
              color: "from-blue-500 to-cyan-600",
            },
            {
              icon: Users,
              title: "Community First",
              description: "Supporting local Indonesian farmers and communities while building global partnerships.",
              color: "from-purple-500 to-indigo-600",
            },
            {
              icon: Shield,
              title: "Food Safety",
              description: "International certifications and strict hygiene protocols ensure the highest safety standards.",
              color: "from-orange-500 to-red-600",
            },
            {
              icon: Globe,
              title: "Global Vision",
              description: "Making Indonesian tempeh accessible to health-conscious consumers worldwide.",
              color: "from-teal-500 to-green-600",
            },
          ].map((value, index) => (
            <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
              <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">The passionate people behind every batch of premium tempeh we produce.</p>
        </motion.div>

        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Ibu Sari Wijaya",
              role: "Founder & Master Craftsman",
              image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
              description: "25+ years of tempeh expertise",
            },
            {
              name: "Budi Santoso",
              role: "Head of Production",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
              description: "Ensuring quality in every batch",
            },
            {
              name: "Maya Chen",
              role: "International Sales Director",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
              description: "Building global partnerships",
            },
            {
              name: "Ahmad Rahman",
              role: "Quality Assurance Manager",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
              description: "Maintaining international standards",
            },
          ].map((member, index) => (
            <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all group">
              <div className="relative mb-6">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <UserCheck className="text-white" size={16} />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-green-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Certifications & Awards</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">Our commitment to excellence is recognized by international standards and industry awards.</p>
        </motion.div>

        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "ISO 22000", subtitle: "Food Safety Management", icon: Shield },
            { title: "HACCP Certified", subtitle: "Hazard Analysis Critical", icon: CheckCircle },
            { title: "Organic Certified", subtitle: "USDA & EU Standards", icon: Leaf },
            { title: "Export Excellence", subtitle: "Indonesian Trade Award", icon: Award },
          ].map((cert, index) => (
            <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5, scale: 1.02 }} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <cert.icon className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
              <p className="text-green-100 text-sm">{cert.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </div>
);

export default AboutUsPage;
