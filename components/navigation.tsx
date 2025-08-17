"use client"

import { useState } from "react"
import { Heart, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-transparent backdrop-blur-sm px-4 md:px-6 py-0 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="cafe-logo.png" alt="Café & Cuero Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
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

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <Heart className="w-6 h-6 text-white border border-white rounded-full p-1" />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-white/20">
          <div className="flex flex-col space-y-4 px-6 py-6">
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
          </div>
        </div>
      )}
    </nav>
  )
}
