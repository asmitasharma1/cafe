"use client"

import { useState, useEffect } from "react"
import { Heart, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if the hero section is still in view
      const heroSection = document.querySelector("#hero") // Assuming hero section has id="hero"
      const heroBottom = heroSection ? heroSection.getBoundingClientRect().bottom : 0
      setIsScrolled(window.scrollY > heroBottom)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Define consistent colors for all pages
  const desktopTextColor = isScrolled ? "text-[#4A231F]" : "text-white"
  const desktopHoverColor = isScrolled ? "hover:text-[#67322C]" : "hover:text-gray-200"
  const iconColor = isScrolled ? "#4A231F" : "white"
  const borderColor = isScrolled ? "border-[#4A231F]" : "border-white"
  const navBackground = isScrolled ? "bg-white" : "bg-transparent backdrop-blur-sm"

  return (
    <nav className={`${navBackground} px-4 md:px-6 py-0 shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo (clickable to homepage) */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="cafe-logo.png"
              alt="Café & Cuero Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 font-baskerville">
          <Link
            href="/"
            className={`${desktopTextColor} ${desktopHoverColor} text-lg font-medium cursor-pointer hover:underline transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${desktopTextColor} ${desktopHoverColor} text-lg font-medium cursor-pointer hover:underline transition-colors`}
          >
            About Us
          </Link>
          <Link
            href="/menu"
            className={`${desktopTextColor} ${desktopHoverColor} text-lg font-medium cursor-pointer hover:underline transition-colors`}
          >
            Our Menu
          </Link>
          <Link
            href="/contact"
            className={`${desktopTextColor} ${desktopHoverColor} text-lg font-medium cursor-pointer hover:underline transition-colors`}
          >
            Contact Us
          </Link>
          <a
            href="#"
            className={`${desktopTextColor} ${desktopHoverColor} text-lg font-medium cursor-pointer hover:underline transition-colors`}
          >
            Gallery
          </a>
          <Heart className={`w-6 h-6 ${borderColor} rounded-full p-1 cursor-pointer`} style={{ color: iconColor }} />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <Heart className={`w-6 h-6 ${borderColor} rounded-full p-1 cursor-pointer`} style={{ color: iconColor }} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" style={{ color: iconColor }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: iconColor }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#F5E9E2] border-t border-[#4A231F]/20">
          <div className="flex flex-col space-y-4 px-6 py-6 font-baskerville">
            <Link
              href="/"
              className="text-[#4A231F] text-lg font-medium cursor-pointer hover:underline hover:text-[#67322C] transition-colors"
            >
              Home Page
            </Link>
            <Link
              href="/about"
              className="text-[#4A231F] text-lg font-medium cursor-pointer hover:underline hover:text-[#67322C] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/menu"
              className="text-[#4A231F] text-lg font-medium cursor-pointer hover:underline hover:text-[#67322C] transition-colors"
            >
              Our Menu
            </Link>
            <Link
              href="/contact"
              className="text-[#4A231F] text-lg font-medium cursor-pointer hover:underline hover:text-[#67322C] transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="#"
              className="text-[#4A231F] text-lg font-medium cursor-pointer hover:underline hover:text-[#67322C] transition-colors"
            >
              Gallery
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}