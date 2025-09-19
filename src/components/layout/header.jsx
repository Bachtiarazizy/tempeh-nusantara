"use client";

import React from "react";
import { useAuth } from "../shared/AuthContext";
import { Icon } from "../ui/icon";

export const Header = ({ sidebarOpen, setSidebarOpen, title }) => {
  const { user } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 lg:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden mr-4 p-1">
            <Icon name="menu" className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-primary">{title}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block text-right">
            <p className="text-sm text-gray-600">Selamat datang,</p>
            <p className="font-medium text-primary">{user?.name}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
