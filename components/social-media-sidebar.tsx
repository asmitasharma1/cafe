import { Instagram, Facebook, MessageCircle } from "lucide-react"

// Custom TikTok icon since it's not in lucide-react
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function SocialMediaSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/cafe.cucina/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-3 rounded-full group hover:scale-110"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-6 h-6 text-amber-800 group-hover:text-amber-900" />
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-3 rounded-full group hover:scale-110"
        aria-label="Follow us on TikTok"
      >
        <div className="w-6 h-6 text-amber-800 group-hover:text-amber-900">
          <TikTokIcon />
        </div>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/cafecucina.restaurant/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-3 rounded-full group hover:scale-110"
        aria-label="Follow us on Facebook"
      >
        <Facebook className="w-6 h-6 text-amber-800 group-hover:text-amber-900" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/9779861601155"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-3 rounded-full group hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-amber-800 group-hover:text-amber-900" />
      </a>
    </div>
  )
}
