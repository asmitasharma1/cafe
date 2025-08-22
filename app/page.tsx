import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function CafeCucinaLanding() {
  return (
    <div className="min-h-screen bg-gray-100 font-franklin">
      <Navigation />
      <main>
        <div className="min-h-screen relative">
          {/* Hero Section */}
          <div
            className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
            style={{
              backgroundImage: "url(/insidecafe.webp)",
            }}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-2" />

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 md:px-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-1xl p-6 md:p-8 py-8 md:py-12 border border-white/30 mt-16 md:mt-20">
                <p className="text-lg md:text-5xl font-light mb-4 md:mb-6 tracking-wide">WELCOME TO</p>

                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8"
                  style={{ color: "#c89343" }}
                >
                  CAFE CUCINA
                </h1>

                <p className="text-lg md:text-2xl mb-8 md:mb-10 font-light italic px-2">
                  Savor the taste of artisan coffee and continental food
                </p>

                <div className="mt-8 md:mt-10">
                  <Button
                    size="lg"
                    className="px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-medium mb-8 md:mb-10"
                    style={{ backgroundColor: "#c89343", color: "white" }}
                  >
                    Book Now
                  </Button>
                </div>

                <p className="text-lg md:text-xl font-light">
                  We are open from <span className="font-medium">7am</span>
                  <br />
                  to <span className="font-medium">9pm</span>
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
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: "#67322C" }}>
                Handcrafted Curations
              </h2>
              <p className="text-base md:text-lg font-medium mb-8 md:mb-10 px-4 italic" style={{ color: "#95541E" }}>
                Each dish and drink is thoughtfully crafted to elevate your dining experience, blending bold flavors
                with the finest ingredients.
              </p>

              {/* Image Wrapper */}
              <div className="relative flex flex-col justify-center items-center min-h-[300px] md:min-h-[400px]">
                {/* Background Image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image src="/cafecoffee.png" alt="Background Curated Item" fill className="object-cover" priority />
                  {/* Brown overlay */}
                  <div className="absolute inset-0 bg-amber-900/20"></div>
                </div>

                {/* Foreground Images */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-28 relative z-10">
                  <div className="rounded-1xl overflow-hidden shadow-lg">
                    <Image
                      src="/cafetea.png"
                      alt="Curated Item 1"
                      width={250}
                      height={167}
                      className="object-cover md:w-[300px] md:h-[200px]"
                    />
                  </div>
                  <div className="rounded-1xl overflow-hidden shadow-lg">
                    <Image
                      src="/cafefood.png"
                      alt="Curated Item 2"
                      width={250}
                      height={167}
                      className="object-cover md:w-[300px] md:h-[200px]"
                    />
                  </div>
                </div>

                {/* Order Now Button */}
                <div className="relative z-10 mt-6 md:mt-8 flex justify-center mb-1">
                  <Button
                    size="lg"
                    className="px-8 md:px-10 py-2 text-lg md:text-xl font-medium"
                    style={{ backgroundColor: "#c89343", color: "white" }}
                  >
                    Order Now
                  </Button>
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
                    className="text-base md:text-lg leading-relaxed mb-4 text-justify italic"
                    style={{ color: "#95541E" }}
                  >
                    Café Cucina was born from a love for the warmth and vibrancy of the Italian kitchen where "cucina"
                    means more than just a place to cook; it's the heart of connection, creativity, and community.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed mb-6 text-justify italic"
                    style={{ color: "#95541E" }}
                  >
                    Inspired by the spirit of Italian culinary traditions, we envisioned a space where the inviting
                    aroma of freshly brewed coffee meets the soulful essence of a bustling kitchen.
                  </p>
                  <Link href="/about">
                    <Button
                      size="lg"
                      className="px-6 md:px-8 py-3 text-base md:text-lg font-medium shadow-md transition-all duration-300 cursor-pointer  hover:bg-[#d98c1a] hover:scale-105"
                      style={{ backgroundColor: "#c89343", color: "white" }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src="/cafecucina.png"
                    alt="Café Interior"
                    className="w-full max-w-sm md:w-3/4 h-auto shadow-md"
                  />
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

            <div className="relative z-10 px-4 md:px-6 md:ml-38 flex flex-col items-center md:items-start gap-6">
              {/* Text Box */}
              <div className="bg-[#e6b574] bg-opacity-90 p-6 md:p-8 rounded-2xl shadow-lg max-w-xl mt-8 md:mt-20 mx-4 md:mx-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: "#67322C" }}>
                  Book A Reservation
                </h2>
                <p className="text-base md:text-lg text-[#67322C] italic leading-relaxed mb-6 text-center">
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
              {/* Left Content */}
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left"
                  style={{ color: "#67322C" }}
                >
                  CONTACT US
                </h2>

                <div className="space-y-4 md:space-y-6 text-[#67322C]">
                  {/* Location */}
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <MapPin className="w-6 h-6 flex-shrink-0" />
                    <p className="text-base md:text-lg">Pulchowk Square, Lalitpur</p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <Phone className="w-6 h-6 flex-shrink-0" />
                    <p className="text-base md:text-lg">9861601155</p>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <Mail className="w-6 h-6 flex-shrink-0" />
                    <p className="text-base md:text-lg">caferacucina@gmail.com</p>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <Clock className="w-6 h-6 flex-shrink-0" />
                    <p className="text-base md:text-lg">Sun-Sat Served 7 am to 9 pm</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <Image
                  src="/cafefood.png"
                  alt="Cafe Contact"
                  width={400}
                  height={320}
                  className="shadow-lg object-cover md:w-[500px] md:h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
