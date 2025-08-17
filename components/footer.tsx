import { Instagram, Facebook, Phone } from "lucide-react"

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
              <li>About Us</li>
              <li>Our Menu</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>Gallery</li>
              <li>Our Menu</li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">SOCIALS</h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li>
                <Instagram className="w-6 h-6" />
              </li>
              <li>
                <Facebook className="w-6 h-6" />
              </li>
              <li>
                <Phone className="w-6 h-6" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
