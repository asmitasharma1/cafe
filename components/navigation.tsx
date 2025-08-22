"use client"

import { useState } from "react"
import { Heart, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMenuPage = pathname === "/menu"
  const desktopTextColor = isMenuPage ? "text-[#67322C]" : "text-white"
  const desktopHoverColor = isMenuPage ? "hover:text-[#4A231F]" : "hover:text-gray-200"
  const iconColor = isMenuPage ? "#67322C" : "white"
  const borderColor = isMenuPage ? "border-[#67322C]" : "border-white"

  return (
    <nav className="bg-transparent backdrop-blur-sm px-4 md:px-6 py-0 shadow-sm fixed top-0 left-0 right-0 z-50">
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
          <Heart
            className={`w-6 h-6 ${borderColor} rounded-full p-1 cursor-pointer`}
            style={{ color: iconColor }}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <Heart
            className={`w-6 h-6 ${borderColor} rounded-full p-1 cursor-pointer`}
            style={{ color: iconColor }}
          />
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-white/20">
          <div className="flex flex-col space-y-4 px-6 py-6 font-baskerville">
            <Link
              href="/"
              className="text-white text-lg font-medium cursor-pointer hover:underline hover:text-gray-200 transition-colors"
            >
              Home Page
            </Link>
            <Link
              href="/about"
              className="text-white text-lg font-medium cursor-pointer hover:underline hover:text-gray-200 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/menu"
              className="text-white text-lg font-medium cursor-pointer hover:underline hover:text-gray-200 transition-colors"
            >
              Our Menu
            </Link>
            <Link
              href="/contact"
              className="text-white text-lg font-medium cursor-pointer hover:underline hover:text-gray-200 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="#"
              className="text-white text-lg font-medium cursor-pointer hover:underline hover:text-gray-200 transition-colors"
            >
              Gallery
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}