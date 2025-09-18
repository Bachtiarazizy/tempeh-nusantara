"use client";

import React, { useState } from "react";
import { User, Lock, Eye, EyeOff, Mail, Phone, MapPin, ShoppingCart, Users, TrendingUp, Package, DollarSign, Settings, LogOut, Home, BarChart3, UserCheck, Handshake, Bell, Calendar, FileText, Target, Heart } from "lucide-react";

const TempehLoginSystem = () => {
  const [currentView, setCurrentView] = useState("login"); // login, buyer-dashboard, admin-dashboard, affiliate-dashboard
  const [userRole, setUserRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    role: "buyer",
  });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
  });

  // Mock user data for demonstration
  const mockUsers = {
    "buyer@test.com": { role: "buyer", name: "John Smith", company: "Smith Restaurant" },
    "admin@test.com": { role: "admin", name: "Admin User", company: "Tempeh Nusantara" },
    "affiliate@test.com": { role: "affiliate", name: "Sarah Wilson", company: "Wilson Distribution" },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = mockUsers[loginForm.email];
    if (user && user.role === loginForm.role) {
      setUserRole(loginForm.role);
      setCurrentView(`${loginForm.role}-dashboard`);
    } else {
      alert("Invalid credentials or role mismatch");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Mock registration - in real app, this would call API
    alert("Registration successful! Please login.");
    setCurrentView("login");
  };

  const handleLogout = () => {
    setUserRole("");
    setCurrentView("login");
    setLoginForm({ email: "", password: "", role: "buyer" });
  };

  // Login/Register Component
  const AuthComponent = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Branding */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-12 text-white flex flex-col justify-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Tempeh Nusantara</h1>
              <p className="text-xl text-green-100 mb-8">Join our community of tempeh lovers, business partners, and sales affiliates from around the world.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <ShoppingCart size={20} />
                  </div>
                  <span>Premium Indonesian Tempeh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Users size={20} />
                  </div>
                  <span>Global Business Network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <TrendingUp size={20} />
                  </div>
                  <span>Growing Sales Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Forms */}
          <div className="p-12">
            <div className="mb-8">
              <div className="flex space-x-4 bg-gray-100 rounded-xl p-1">
                <button onClick={() => setCurrentView("login")} className={`flex-1 py-2 rounded-lg font-medium transition-all ${currentView === "login" ? "bg-white text-green-600 shadow-md" : "text-gray-600"}`}>
                  Login
                </button>
                <button onClick={() => setCurrentView("register")} className={`flex-1 py-2 rounded-lg font-medium transition-all ${currentView === "register" ? "bg-white text-green-600 shadow-md" : "text-gray-600"}`}>
                  Register
                </button>
              </div>
            </div>

            {currentView === "login" ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome Back!</h2>

                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Login as</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["buyer", "admin", "affiliate"].map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setLoginForm({ ...loginForm, role })}
                        className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${loginForm.role === role ? "border-green-500 bg-green-50 text-green-700" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}
                      >
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg">
                  Sign In
                </button>

                <div className="text-sm text-gray-500 mt-4">
                  <p>
                    <strong>Demo Accounts:</strong>
                  </p>
                  <p>Buyer: buyer@test.com</p>
                  <p>Admin: admin@test.com</p>
                  <p>Affiliate: affiliate@test.com</p>
                  <p>Password: any</p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Join Us Today!</h2>

                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Register as</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["buyer", "admin", "affiliate"].map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setRegisterForm({ ...registerForm, role })}
                        className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${registerForm.role === role ? "border-green-500 bg-green-50 text-green-700" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}
                      >
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      placeholder="Email"
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={registerForm.phone}
                      onChange={(e) => setRegisterForm({ ...registerForm, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Company/Business"
                      value={registerForm.company}
                      onChange={(e) => setRegisterForm({ ...registerForm, company: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    placeholder="Address"
                    rows={3}
                    value={registerForm.address}
                    onChange={(e) => setRegisterForm({ ...registerForm, address: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="password"
                      placeholder="Password"
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={registerForm.confirmPassword}
                      onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg">
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Buyer Dashboard
  const BuyerDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">Tempeh Nusantara</h1>
              <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Buyer Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <User className="text-white" size={16} />
                </div>
                <span className="text-gray-700 font-medium">John Smith</span>
              </div>
              <button onClick={handleLogout} className="text-gray-400 hover:text-gray-600">
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Orders", value: "24", icon: ShoppingCart, color: "bg-blue-500" },
            { title: "This Month", value: "$1,250", icon: DollarSign, color: "bg-green-500" },
            { title: "Favorite Products", value: "8", icon: Package, color: "bg-purple-500" },
            { title: "Loyalty Points", value: "2,340", icon: Target, color: "bg-orange-500" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} rounded-full p-3`}>
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Orders</h3>
              <div className="space-y-4">
                {[
                  { id: "#TN-2024-001", product: "Traditional Tempeh", qty: "5 packs", status: "Delivered", date: "Jan 15, 2025" },
                  { id: "#TN-2024-002", product: "Marinated Tempeh", qty: "3 packs", status: "Shipped", date: "Jan 12, 2025" },
                  { id: "#TN-2024-003", product: "Tempeh Chips", qty: "10 packs", status: "Processing", date: "Jan 10, 2025" },
                ].map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Package className="text-green-600" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{order.product}</p>
                        <p className="text-sm text-gray-500">
                          {order.id} • {order.qty}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === "Delivered" ? "bg-green-100 text-green-800" : order.status === "Shipped" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {order.status}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-green-600 font-medium hover:text-green-700 transition-colors">View All Orders</button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { label: "Browse Products", icon: Package },
                  { label: "Track Order", icon: MapPin },
                  { label: "Reorder Favorites", icon: Heart },
                  { label: "Contact Support", icon: Phone },
                ].map((action, index) => (
                  <button key={index} className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-xl transition-colors">
                    <action.icon className="text-green-600" size={20} />
                    <span className="text-gray-700 font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Loyalty Program */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Loyalty Rewards</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress to Gold</span>
                    <span>2,340 / 5,000 pts</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-1/2"></div>
                  </div>
                </div>
                <p className="text-sm text-green-100">Earn 2,660 more points to unlock Gold benefits!</p>
                <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-2 font-medium transition-colors">View Rewards</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Admin Dashboard
  const AdminDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">Tempeh Nusantara</h1>
              <span className="ml-4 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Admin Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <User className="text-white" size={16} />
                </div>
                <span className="text-gray-700 font-medium">Admin User</span>
              </div>
              <button onClick={handleLogout} className="text-gray-400 hover:text-gray-600">
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Admin Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Revenue", value: "$45,230", icon: DollarSign, color: "bg-green-500" },
            { title: "Active Orders", value: "156", icon: ShoppingCart, color: "bg-blue-500" },
            { title: "Registered Users", value: "1,284", icon: Users, color: "bg-purple-500" },
            { title: "Products Sold", value: "3,429", icon: Package, color: "bg-orange-500" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} rounded-full p-3`}>
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Orders Management */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Management</h3>
              <div className="space-y-4">
                {[
                  { id: "#TN-2024-158", customer: "John Smith", product: "Traditional Tempeh Bundle", amount: "$89.99", status: "Processing" },
                  { id: "#TN-2024-157", customer: "Wilson Distribution", product: "Bulk Order - 200 units", amount: "$2,400.00", status: "Confirmed" },
                  { id: "#TN-2024-156", customer: "Sarah Wilson", product: "Mixed Tempeh Pack", amount: "$45.50", status: "Shipped" },
                ].map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <FileText className="text-green-600" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{order.customer}</p>
                        <p className="text-sm text-gray-500">
                          {order.id} • {order.product}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{order.amount}</p>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === "Shipped" ? "bg-green-100 text-green-800" : order.status === "Confirmed" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-green-600 font-medium hover:text-green-700 transition-colors">View All Orders</button>
            </div>
          </div>

          {/* Admin Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Admin Actions</h3>
              <div className="space-y-3">
                {[
                  { label: "Manage Products", icon: Package },
                  { label: "User Management", icon: Users },
                  { label: "Sales Analytics", icon: BarChart3 },
                  { label: "System Settings", icon: Settings },
                ].map((action, index) => (
                  <button key={index} className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-xl transition-colors">
                    <action.icon className="text-red-600" size={20} />
                    <span className="text-gray-700 font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Server Health</span>
                  <span className="text-xs bg-green-400 px-2 py-1 rounded-full">Excellent</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <span className="text-xs bg-green-400 px-2 py-1 rounded-full">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Payment Gateway</span>
                  <span className="text-xs bg-green-400 px-2 py-1 rounded-full">Active</span>
                </div>
                <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-2 font-medium transition-colors mt-4">View Full Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Affiliate Dashboard
  const AffiliateDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">Tempeh Nusantara</h1>
              <span className="ml-4 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Affiliate Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <User className="text-white" size={16} />
                </div>
                <span className="text-gray-700 font-medium">Sarah Wilson</span>
              </div>
              <button onClick={handleLogout} className="text-gray-400 hover:text-gray-600">
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Affiliate Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Commissions", value: "$3,245", icon: DollarSign, color: "bg-green-500" },
            { title: "This Month Sales", value: "89", icon: TrendingUp, color: "bg-blue-500" },
            { title: "Active Referrals", value: "234", icon: UserCheck, color: "bg-purple-500" },
            { title: "Conversion Rate", value: "12.5%", icon: Target, color: "bg-orange-500" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} rounded-full p-3`}>
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Sales */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Sales & Commissions</h3>
              <div className="space-y-4">
                {[
                  { customer: "John Restaurant", product: "Traditional Tempeh Bundle", commission: "$15.99", status: "Paid", date: "Jan 15" },
                  { customer: "Green Market Co.", product: "Bulk Order - 50 units", commission: "$125.00", status: "Pending", date: "Jan 14" },
                  { customer: "Healthy Living Store", product: "Mixed Tempeh Pack", commission: "$8.50", status: "Paid", date: "Jan 12" },
                ].map((sale, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Handshake className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{sale.customer}</p>
                        <p className="text-sm text-gray-500">{sale.product}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{sale.commission}</p>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${sale.status === "Paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>{sale.status}</span>
                        <span className="text-xs text-gray-500">{sale.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors">View All Sales</button>
            </div>
          </div>

          {/* Affiliate Tools */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Affiliate Tools</h3>
              <div className="space-y-3">
                {[
                  { label: "Marketing Materials", icon: FileText },
                  { label: "Referral Links", icon: Target },
                  { label: "Performance Analytics", icon: BarChart3 },
                  { label: "Payment History", icon: DollarSign },
                ].map((tool, index) => (
                  <button key={index} className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-xl transition-colors">
                    <tool.icon className="text-purple-600" size={20} />
                    <span className="text-gray-700 font-medium">{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Performance */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Monthly Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Sales Target</span>
                    <span>89 / 100 sales</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-4/5"></div>
                  </div>
                </div>
                <p className="text-sm text-purple-100">11 more sales to unlock bonus tier!</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold">4.8</div>
                    <div className="text-xs text-purple-100">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">12.5%</div>
                    <div className="text-xs text-purple-100">Conversion</div>
                  </div>
                </div>
                <button className="w-full bg-white/20 hover:bg-white/30 rounded-xl py-2 font-medium transition-colors">View Detailed Report</button>
              </div>
            </div>

            {/* Upcoming Payouts */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Payout</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$542.30</div>
                <p className="text-sm text-gray-500 mb-4">Next payout: Feb 1, 2025</p>
                <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                  <Calendar size={16} />
                  <span>Payments processed monthly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main component render logic
  if (currentView === "buyer-dashboard" && userRole === "buyer") {
    return <BuyerDashboard />;
  } else if (currentView === "admin-dashboard" && userRole === "admin") {
    return <AdminDashboard />;
  } else if (currentView === "affiliate-dashboard" && userRole === "affiliate") {
    return <AffiliateDashboard />;
  } else {
    return <AuthComponent />;
  }
};

export default TempehLoginSystem;
