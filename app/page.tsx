
"use client"

import { MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SocialMediaSidebar from "@/components/social-media-sidebar"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

// Import AOS for scroll animations
import AOS from "aos"
import "aos/dist/aos.css"

export default function CafeCucinaLanding() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Allow animations to repeat on scroll
      easing: "ease-out",
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 font-franklin">
      {/* Inline CSS for animations and marquee */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-continuous-pulse {
          animation: pulse 2s infinite ease-in-out;
        }
        .marquee-container {
          overflow-x: hidden;
          white-space: nowrap藝術
          width: 100%;
          max-width: 1800px; /* Increased width for larger display */
        }
        .marquee-content {
          display: inline-flex;
          gap: 2rem;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <Navigation />
      <SocialMediaSidebar />
      <main>

        {/* Hero Section */}
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
          style={{
            backgroundImage: "url(/insidecafe.webp)",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-xs" />

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4 md:px-6">
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl mt-12 md:mt-16">
              <p className="text-base md:text-2xl font-light mb-2 md:mb-4 tracking-wide text-gray-100">WELCOME TO</p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6" style={{ color: "#c89343" }}>
                CAFE CUCINA
              </h1>

              <p className="text-sm md:text-lg mb-6 font-light px-2 text-gray-200">
                Savor the taste of artisan coffee and continental food
              </p>

              <div className="mt-6">
                <Button
                  size="lg"
                  className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg font-medium shadow-md hover:shadow-lg transition"
                  style={{ backgroundColor: "#c89343", color: "white" }}
                >
                  Book Now
                </Button>
              </div>

              <p className="text-sm md:text-base font-light mt-6 text-gray-200">
                We are open from <span className="font-medium text-white">7am</span> to{" "}
                <span className="font-medium text-white">9pm</span>
              </p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="py-8 md:py-12 px-4 md:px-6" style={{ backgroundColor: "#ebb16d" }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-white items-center">
              {/* Address */}
              <div className="flex items-start gap-4 justify-center text-center md:text-left">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">ADDRESS</h3>
                  <p className="text-base md:text-lg">Pulchowk Square, Lalitpur</p>
                </div>
              </div>

              {/* Opening Hours with Dividers */}
              <div className="flex items-start gap-4 justify-center text-center md:text-left relative">
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 border-l-2 border-white h-16"></div>
                <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">OPENING HOURS</h3>
                  <p className="text-base md:text-lg">Sun-Sat Served 7 am to 9 pm</p>
                </div>
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 border-l-2 border-white h-16"></div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4 justify-center text-center md:text-left">
                <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">CONTACT US</h3>
                  <p className="text-base md:text-lg">986-1601155</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Handcrafted Curations Section */}
        <div className="py-12 md:py-16 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              className="text-2xl md:text-4xl font-bold mb-4"
              style={{ color: "#67322C" }}
            >
              Handcrafted Curations
            </h2>
            <p
              className="text-base md:text-lg font-medium mb-8 md:mb-10 px-4"
              style={{ color: "#95541E" }}
            >
              Each dish and drink is thoughtfully crafted to elevate your dining experience, blending bold flavors with
              the finest ingredients.
            </p>

            {/* Image Wrapper with Marquee */}
            <div className="relative flex justify-center items-center min-h-[300px] md:min-h-[400px]">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image src="/coffee.webp" alt="Background Curated Item" fill className="object-cover filter blur-sm" priority />
                {/* Brown overlay */}
                <div className="absolute inset-0 bg-amber-900/40"></div>
              </div>

              {/* Marquee Images */}
              <div className="marquee-container relative z-10 mx-auto">
                <div className="marquee-content">
                  {[
                    { src: "/foodwine.webp", alt: "Curated Item 1" },
                    { src: "/cafefood1.png", alt: "Curated Item 2" },
                    { src: "/burger1.webp", alt: "Curated Item 3" },
                    { src: "/cuinaredjuice.webp", alt: "Curated Item 4" },
                    // Duplicate images 
                    { src: "/foodwine.webp", alt: "Curated Item 1" },
                    { src: "/cafefood1.png", alt: "Curated Item 2" },
                    { src: "/burger1.webp", alt: "Curated Item 3" },
                    { src: "/cuinaredjuice.webp", alt: "Curated Item 4" },
                  ].map((item, index) => (
                    <div className="relative w-[240px] h-[250px]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>

                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="py-12 md:py-16 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
              {/* Left Content */}
              <div className="md:w-1/2">
                <p className="text-base md:text-lg font-medium mb-2" style={{ color: "#67322C" }}>
                  About Us
                </p>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: "#c89343" }}>
                  Our Story and Philosophy
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-4 text-justify"
                  style={{ color: "#95541E" }}
                >
                  Café Cucina was born from a love for the warmth and vibrancy of the Italian kitchen where "cucina"
                  means more than just a place to cook; it's the heart of connection, creativity, and community.
                </p>
                <p
                  className="text-base md:text-lg leading-relaxed mb-6 text-justify"
                  style={{ color: "#95541E" }}
                >
                  Inspired by the spirit of Italian culinary traditions, we envisioned a space where the inviting aroma
                  of freshly brewed coffee meets the soulful essence of a bustling kitchen.
                </p>
                <Link href="/about">
                  <Button
                    size="lg"
                    className="px-6 md:px-8 py-3 text-base md:text-lg font-medium shadow-md transition-all duration-300 cursor-pointer hover:bg-[#d98c1a] hover:scale-105"
                    style={{ backgroundColor: "#c89343", color: "white" }}
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Right Image */}
              <div className="md:w-1/2 flex justify-center">
                <img src="/cafecucina.png" alt="Café Interior" className="w-full max-w-sm md:w-3/4 h-auto shadow-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Book A Reservation Section */}
        <div
          className="relative py-16 md:py-24 min-h-[500px] md:min-h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/interior.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative z-10 px-4 md:px-6 md:ml-32 flex flex-col items-center md:items-start gap-6">
            {/* Text Box */}
            <div className="bg-[#e6b574] bg-opacity-90 p-6 md:p-8 rounded-2xl shadow-lg max-w-xl mt-8 md:mt-20 mx-4 md:mx-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: "#67322C" }}>
                Book A Reservation
              </h2>
              <p className="text-base md:text-lg text-[#67322C] leading-relaxed mb-6 text-center">
                Experience the warmth of Café Cucina, reserve your table today to savor our handcrafted dishes and
                drinks in the heart of our welcoming cucina.
              </p>
            </div>
            {/* Book Now Button */}
            <div className="mt-4 md:mt-6">
              <Button
                size="lg"
                className="px-6 md:px-8 py-3 text-base md:text-lg font-medium shadow-md"
                style={{ backgroundColor: "#f5a623", color: "white" }}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="py-12 md:py-16 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Left Content - Contact Form */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left"
                style={{ color: "#67322C" }}
              >
                CONTACT US
              </h2>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target as HTMLFormElement)
                  const name = formData.get("name") as string
                  const message = formData.get("message") as string

                  const whatsappMessage = `Hello! I'm ${name}. ${message}`
                  const whatsappUrl = `https://wa.me/9779823374111?text=${encodeURIComponent(whatsappMessage)}`
                  window.open(whatsappUrl, "_blank")
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#67322C" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c89343] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#67322C" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c89343] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full px-6 py-3 text-base md:text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: "#c89343", color: "white" }}
                >
                  Send via WhatsApp
                </Button>

                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full px-6 py-3 text-base md:text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 mt-4"
                    style={{ backgroundColor: "#c89333", color: "white" }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </form>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.260162252568!2d85.31310739999999!3d27.6783529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195f7bcc0349%3A0xdeb21c851d1fef6e!2sCafe%20%26%20Cucina!5e0!3m2!1sen!2snp!4v1756051189504!5m2!1sen!2snp"
                width="100%"
                height="500"
                className="shadow-lg border-2 border-[#8B5A2B]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cafe & Cucina Location"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
