import { Instagram, Facebook, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#ebb16d] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-60">
        {/* Logo */}
        <div className="flex items-center">
          <div className="rounded-full flex items-center justify-center border-0 border-[#ebb16d]">
            <img src="/footerlogo.png" alt="Café & Cucina Logo" className="w-64 h-64 object-contain" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center w-full md:w-auto gap-12 text-white">
          {/* Cafe Column */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">CAFE</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:underline cursor-pointer">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery" className="hover:underline cursor-pointer">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:underline cursor-pointer">
                  Our Menu
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">SOCIALS</h3>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer flex items-center gap-2"
                >
                  <Instagram className="w-6 h-6" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer flex items-center gap-2"
                >
                  <Facebook className="w-6 h-6" /> Facebook
                </a>
              </li>
              <li>
                <a href="tel:+977123456789" className="hover:underline cursor-pointer flex items-center gap-2">
                  <Phone className="w-6 h-6" /> +977 123456789
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
