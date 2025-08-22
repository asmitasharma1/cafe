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

        <div className="flex flex-col md:flex-row justify-center w-full md:w-auto gap-12 md:gap-16 text-white">
          {/* Opening Hours and Location */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">OPENING HOURS</h3>
            <p>Sun - Saturday</p>
            <p>Served 7AM to 9PM</p>
            <h3 className="text-lg font-semibold mt-6 mb-4">LOCATION</h3>
            <p>Pulchowk Square, Lalitpur</p>
          </div>

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
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li>
                <a
                  href="https://www.instagram.com/cafe.cucina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer flex items-center gap-2"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/cafecucina.restaurant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer flex items-center gap-2"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer flex items-center gap-2"
                >
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-white/40 flex flex-col md:flex-row justify-between items-center text-sm text-white">
        <p>© CafeCucina 2025. All Rights Reserved</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <Link href="/privacy" className="hover:underline cursor-pointer">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline cursor-pointer">Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}