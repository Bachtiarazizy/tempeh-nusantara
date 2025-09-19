"use client"

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock users
  const mockUsers = [
    { id: 1, username: 'buyer', password: 'buyer123', role: 'buyer', name: 'John Doe', email: 'john@example.com' },
    { id: 2, username: 'admin', password: 'admin123', role: 'admin', name: 'Admin Tempe', email: 'admin@tempenusantara.com' },
    { id: 3, username: 'affiliate', password: 'affiliate123', role: 'affiliate', name: 'Sarah Wilson', email: 'sarah@affiliate.com' }
  ];

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = mockUsers.find(u => u.username === username && u.password === password);
      if (foundUser) {
        setUser(foundUser);
        return { success: true, user: foundUser };
      } else {
        return { success: false, error: 'Username atau password salah' };
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};