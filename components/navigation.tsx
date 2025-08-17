import React from 'react';
import { Heart } from "lucide-react";

export default function Navigation() {
    return (
      <nav className="bg-transparent backdrop-blur-sm px-6 py-0 shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="cafe-logo.png" 
              alt="Café & Cuero Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
  
          {/* Navigation Menu */}
          <div className="flex items-center space-x-12">
            <a href="#" className="text-[#ffffff] text-lg font-medium hover:text-gray-200 transition-colors">
              Home Page
            </a>
            <a href="#" className="text-[#ffffff] text-lg font-medium hover:text-gray-200 transition-colors">
              About Us
            </a>
            <a href="#" className="text-[#ffffff] text-lg font-medium hover:text-gray-200 transition-colors">
              Our Menu
            </a>
            <a href="#" className="text-[#ffffff] text-lg font-medium hover:text-gray-200 transition-colors">
              Contact Us
            </a>
            <a href="#" className="text-[#ffffff] text-lg font-medium hover:text-gray-200 transition-colors">
              Gallery
            </a>
            <Heart className="w-6 h-6 text-white border border-white rounded-full p-1" />
          </div>
        </div>
      </nav>
    )
}