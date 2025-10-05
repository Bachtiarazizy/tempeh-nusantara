"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getNavigationMenu } from "../shared/navigation";
import { Icon } from "../ui/icon";
import { useAuth } from "../shared/AuthContext";

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname(); // PERBAIKAN: gunakan usePathname
  const menuItems = getNavigationMenu(user?.role);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (!user) return null;

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        {/* Logo & Brand */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="font-bold text-primary">Tempe Nusantara</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden p-1 hover:bg-gray-100 rounded">
            <Icon name="x" className="w-5 h-5" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-4">
          <div className="text-sm text-gray-600 mb-4">
            <p>Welcome back,</p>
            <p className="font-medium text-primary">{user.name}</p>
            <Badge variant="secondary" className="mt-1 text-xs">
              {user.role.toUpperCase()}
            </Badge>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="px-4 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      router.push(item.href);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    <Icon name={item.icon} className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-4 left-4 right-4">
          <Button onClick={handleLogout} variant="outline" className="w-full">
            <Icon name="log-out" className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
};
