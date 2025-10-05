"use client";

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Ambil mock users dari .env
  const mockUsers = JSON.parse(process.env.NEXT_PUBLIC_MOCK_USERS || "[]");

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const foundUser = mockUsers.find((u) => u.username === username && u.password === password);
      if (foundUser) {
        setUser(foundUser);
        return { success: true, user: foundUser };
      } else {
        return { success: false, error: "Username atau password salah" };
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
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
