"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Libre_Baskerville, Libre_Franklin } from "next/font/google"
import SocialMediaSidebar from "@/components/social-media-sidebar"
import { useCallback, useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

const staffMembers = [
  {
    name: "Karan Basnet",
    role: "Chef",
    image: "/karan.jpg",
    details: [
      "Working together since 2017 at Coffee Pasal, Dhobighat.",
      "Continuously working at Cafe e' Cucina since its establishment in August 2021.",
      "Permanent address: Bitadi, Ramechhap.",
      "Temporary address: Kapan, Kathmandu.",
      "Age: 25 years.",
    ],
  },
  {
    name: "Saraswoti Khati",
    role: "Supervisor",
    image: "/sarswoti.jpg",
    details: [
      "Working together since 2024 at Coffee Pasal, Dhobighat.",
      "Continuously working with Cafe e' Cucina from August 2021.",
      "Permanent address: Kchhyawati, Dolakha.",
      "Temporary address: Sanagaun, Lalitpur.",
      "Age: 30 years.",
    ],
  },
  {
    name: "Hosanna Limbu",
    role: "Barista",
    image: "/hosana.jpg",
    details: [
      "Working with Cafe e' Cucina from August 2021.",
      "Permanent address: Kummayak, Panchthar.",
      "Temporary address: Harisiddhi, Lalitpur.",
      "Age: 26 years.",
    ],
  },
  {
    name: "Manisha Sunuwar",
    role: "Supervisor - HAMS, Dhumbarahi",
    image: "/manisha.jpg",
    details: [
      "Working with Cafe e' Cucina from 2022.",
      "Started as wait staff and now supervises the HAMS Cafe e' Cucina Branch, Dhumbarahi.",
      "Permanent address: Jiri, Dolakha.",
      "Temporary address: Kapan, Kathmandu.",
      "Age: 24 years.",
    ],
  },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = useCallback(() => {
    const windowScrollY = window.scrollY || window.pageYOffset
    const documentScrollTop = document.documentElement.scrollTop
    const bodyScrollTop = document.body.scrollTop

    const scrollTop = Math.max(windowScrollY, documentScrollTop, bodyScrollTop)

    if (scrollTop > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  useEffect(() => {
    const addScrollListeners = () => {
      window.addEventListener("scroll", handleScroll, { passive: true })
      document.addEventListener("scroll", handleScroll, { passive: true })
      document.body.addEventListener("scroll", handleScroll, { passive: true })
    }

    const removeScrollListeners = () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("scroll", handleScroll)
      document.body.removeEventListener("scroll", handleScroll)
    }

    addScrollListeners()
    handleScroll()

    return () => {
      removeScrollListeners()
    }
  }, [handleScroll])

  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })

      setTimeout(() => {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        window.pageYOffset = 0
      }, 100)
    } catch (error) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <SocialMediaSidebar />
      <main className="pt-0">
        {/* Hero Section */}
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
          style={{
            backgroundImage: "url(/interior.webp)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${libreBaskerville.className}`}>About Us</h1>
            <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto text-justify ${libreFranklin.className}`}>
              There are people who can't start their day without having a freshly brewed cup of coffee and we understand
              them.
            </p>
          </div>
        </div>

        {/* Our Story & Philosophy Section */}
        <div className="py-16 md:py-24 px-4 md:px-6 bg-[#f5f0e6]">
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-light mb-12 text-justify ${libreBaskerville.className}`}
              style={{ color: "#c89343" }}
            >
              Our Story & Philosophy
            </h2>

            {/* Our Story Subsection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div>
                <h3
                  className={`text-xl md:text-2xl font-light mb-4 text-justify ${libreBaskerville.className}`}
                  style={{ color: "#c89343" }}
                >
                  Our Story
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p
                    className={`text-base md:text-lg leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    Cafe Cucina, a proud branch of Basil Hospitality Pvt Ltd, was born from a love for the warmth and
                    vibrancy of the Italian kitchen, where "cucina" means more than just a place to cook—it’s the heart
                    of connection, creativity, and community.
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    Inspired by the spirit of Italian culinary traditions, we envisioned a space where the inviting
                    aroma of freshly brewed coffee meets the soulful essence of a bustling kitchen. Our journey began
                    with a mission to bring this vision to life in unique settings like healthcare facilities, where
                    comfort and nourishment are most needed.
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    As a small, independent cafe chain under Basil Hospitality’s trusted legacy, we operate with
                    big-hearted values—good food, good coffee, and genuine community spirit. Our cafes at HAMS Hospital
                    and Nagarik Hospital serve as welcoming havens for patients, visitors, and staff, offering a taste
                    of warmth and connection through every dish and cup.
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed mb-6 text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    Our philosophy is to nourish both body and soul, one meal at a time, while delivering the excellence
                    and trust that define Basil Hospitality’s legacy.
                  </p>
                </div>
              </div>
              {/* Right Images */}
              <div className="relative mt-4 lg:mt-0">
                <div className="grid grid-cols-1 gap-4">
                  <div className="w-full h-[310px] relative rounded-1xl overflow-hidden shadow-lg">
                    <img src="interior.webp" alt="Cafe Outside" className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full h-[230px] relative rounded-1xl overflow-hidden shadow-md">
                      <img src="/cafebook.png" alt="Coffee Table" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-[230px] relative rounded-1xl overflow-hidden shadow-md">
                      <img src="/mirror.png" alt="Coffee Table 2" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Philosophy Subsection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-4 lg:mt-6">
              {/* Left Images (Desktop) */}
              <div className="relative lg:order-1">
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-4">
                  <div className="w-full h-[250px] relative rounded-1xl overflow-hidden shadow-lg">
                    <img src="/insidecafe.webp" alt="Our Philosophy" className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full h-[200px] relative rounded-1xl overflow-hidden shadow-md">
                      <img src="/cashier1.webp" alt="Philosophy Image 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-[200px] relative rounded-1xl overflow-hidden shadow-md">
                      <img src="/foodwine.webp" alt="Philosophy Image 3" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Content (Desktop, Mobile) */}
              <div className="order-1 lg:order-2">
                <h3
                  className={`text-xl md:text-2xl font-light mb-4 text-justify ${libreBaskerville.className}`}
                  style={{ color: "#c89343" }}
                >
                  Our Philosophy
                </h3>
                <p
                  className={`text-base md:text-lg leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                  style={{ color: "#95541E" }}
                >
                  At Cafe Cucina, we believe in keeping things simple yet meaningful. Our menu is rooted in quality
                  ingredients and honest preparation, with no frills or fuss—just satisfying plates and a friendly
                  atmosphere. We are guided by three core principles:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    <strong>Quality:</strong> We source fresh, sustainable ingredients to craft nutritious, flavorful
                    meals that honor Italian culinary traditions while embracing local tastes.
                  </li>
                  <li
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    <strong>Hospitality:</strong> Every guest is welcomed with genuine warmth, creating a space where
                    community thrives and every visit feels like coming home.
                  </li>
                  <li
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    <strong>Community:</strong> As part of Basil Hospitality Pvt Ltd, we are committed to uplifting the
                    communities we serve, fostering connections through food in the heart of healthcare environments.
                  </li>
                </ul>
              </div>
              {/* Images (Mobile) */}
              <div className="relative order-2 lg:hidden">
                <div className="grid grid-cols-1 gap-4">
                  <div className="w-full h-[250px] relative rounded-1xl overflow-hidden shadow-lg">
                    <img src="/insidecafe.webp" alt="Our Philosophy" className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full h-[200px] relative rounded-1xl overflow-hidden shadow-md">
                      <img src="/cashier1.webp" alt="Philosophy Image 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-[200px] relative rounded-1xl overflow-hidden shadow-md">
                      <img src="/foodwine.webp" alt="Philosophy Image 3" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="py-16 md:py-24 px-4 md:px-6 bg-[#f5f0e6]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2
                className={`text-3xl md:text-4xl font-light mb-4 ${libreBaskerville.className}`}
                style={{ color: "#c89343" }}
              >
                Our Chef & Team
              </h2>
              <p
                className={`text-base md:text-lg leading-relaxed ${libreFranklin.className}`}
                style={{ color: "#95541E" }}
              >
                Meet the dedicated people who have helped shape Cafe e' Cucina from Coffee Pasal to our growing cafe
                branches, including the HAMS Cafe e' Cucina Branch at Dhumbarahi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {staffMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="h-72 overflow-hidden bg-[#faf7f2]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3
                      className={`text-xl font-light mb-1 ${libreBaskerville.className}`}
                      style={{ color: "#c89343" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm font-semibold mb-4 uppercase tracking-wide ${libreFranklin.className}`}
                      style={{ color: "#a0622c" }}
                    >
                      {member.role}
                    </p>
                    <ul className="space-y-2">
                      {member.details.map((detail) => (
                        <li
                          key={detail}
                          className={`text-sm leading-relaxed ${libreFranklin.className}`}
                          style={{ color: "#95541E" }}
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div>
                <h3
                  className={`text-2xl md:text-3xl font-light mb-4 ${libreBaskerville.className}`}
                  style={{ color: "#c89343" }}
                >
                  HAMS Cafe e' Cucina Branch, Dhumbarahi
                </h3>
                <p
                  className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                  style={{ color: "#95541E" }}
                >
                  Our HAMS branch at Dhumbarahi is an important part of the Cafe e' Cucina journey, serving hospital
                  guests, patients, visitors, and staff with the same care, food quality, and coffee culture that define
                  our team.
                </p>
              </div>
              <div className="h-72 md:h-96 overflow-hidden rounded-lg shadow-lg">
                <img src="/interior.webp" alt="HAMS Cafe e' Cucina Branch" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Our Projects & Partnerships Section */}
        <div className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-light mb-4 text-center ${libreBaskerville.className}`}
              style={{ color: "#c89343" }}
            >
              Our Projects & Partnerships
            </h2>
            <p
              className={`text-center max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed ${libreFranklin.className}`}
              style={{ color: "#95541E" }}
            >
              From healthcare facilities to innovative food service concepts, we've had the privilege of partnering with
              visionary organizations. Here's how Cafe Cucina is making a difference across Nepal.
            </p>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nagarik Community Teaching Hospital */}
              <div
                className="p-8 rounded-lg shadow-md border-l-4 transition-transform duration-300 hover:shadow-lg"
                style={{ borderColor: "#c89343", backgroundColor: "#faf7f2" }}
              >
                <h3
                  className={`text-xl md:text-2xl font-light mb-3 ${libreBaskerville.className}`}
                  style={{ color: "#c89343" }}
                >
                  Nagarik Community Teaching Hospital
                </h3>
                <p
                  className={`text-sm font-semibold mb-4 uppercase tracking-wide ${libreFranklin.className}`}
                  style={{ color: "#a0622c" }}
                >
                  🏥 Ongoing Partnership
                </p>
                <p
                  className={`text-base leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                  style={{ color: "#95541E" }}
                >
                  At Nagarik Community Teaching Hospital, Cafe Cucina operates a dedicated cafe providing nourishing
                  meals and freshly brewed coffee to patients during their recovery, visitors seeking comfort, and
                  medical staff managing demanding shifts. We understand that in a healthcare setting, the right meal
                  brings not just nutrition but emotional support. Our carefully curated menu balances Italian-inspired
                  flavors with local preferences, ensuring every patient and visitor experiences warmth through food.
                </p>
                <p className={`text-sm font-semibold ${libreFranklin.className}`} style={{ color: "#c89343" }}>
                  ✓ Serving community care through hospitality
                </p>
              </div>

              {/* HAMS Hospital */}
              <div
                className="p-8 rounded-lg shadow-md border-l-4 transition-transform duration-300 hover:shadow-lg"
                style={{ borderColor: "#c89343", backgroundColor: "#faf7f2" }}
              >
                <h3
                  className={`text-xl md:text-2xl font-light mb-3 ${libreBaskerville.className}`}
                  style={{ color: "#c89343" }}
                >
                  HAMS Hospital
                </h3>
                <p
                  className={`text-sm font-semibold mb-4 uppercase tracking-wide ${libreFranklin.className}`}
                  style={{ color: "#a0622c" }}
                >
                  🏗️ Upcoming Project - Construction Phase
                </p>
                <p
                  className={`text-base leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                  style={{ color: "#95541E" }}
                >
                  HAMS Hospital's new development represents an exciting evolution for Cafe Cucina. As their modern
                  healthcare facility takes shape, we're designing a comprehensive food service solution featuring a
                  3D-designed cafe, canteen, and restaurant space. This state-of-the-art facility will serve patients,
                  families, and hospital staff with elevated hospitality. Our vision extends beyond traditional hospital
                  food service—we're creating a welcoming destination where healing is complemented by genuine care and
                  culinary excellence.
                </p>
                <p className={`text-sm font-semibold ${libreFranklin.className}`} style={{ color: "#c89343" }}>
                  ✓ Reimagining healthcare hospitality
                </p>
              </div>

              {/* Lunch Box - Kathmandu */}
              <div
                className="p-8 rounded-lg shadow-md border-l-4 transition-transform duration-300 hover:shadow-lg"
                style={{ borderColor: "#c89343", backgroundColor: "#faf7f2" }}
              >
                <h3
                  className={`text-xl md:text-2xl font-light mb-3 ${libreBaskerville.className}`}
                  style={{ color: "#c89343" }}
                >
                  Lunch Box - Kathmandu Mahanagar
                </h3>
                <p
                  className={`text-sm font-semibold mb-4 uppercase tracking-wide ${libreFranklin.className}`}
                  style={{ color: "#a0622c" }}
                >
                  🍱 Community Catering Partner
                </p>
                <p
                  className={`text-base leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                  style={{ color: "#95541E" }}
                >
                  Collaborating with Lunch Box in Kathmandu Mahanagar allows us to extend our reach into the heart of
                  Kathmandu's bustling community. This partnership brings our philosophy of quality food and genuine
                  hospitality to everyday diners, students, and professionals. We work closely to ensure that every meal
                  reflects our commitment to fresh ingredients, consistent quality, and the warm spirit of Cafe Cucina,
                  making it accessible to everyone in the neighborhood.
                </p>
                <p className={`text-sm font-semibold ${libreFranklin.className}`} style={{ color: "#c89343" }}>
                  ✓ Bringing community dining to life
                </p>
              </div>

              {/* Huawei - Coffee Server */}
              <div
                className="p-8 rounded-lg shadow-md border-l-4 transition-transform duration-300 hover:shadow-lg"
                style={{ borderColor: "#c89343", backgroundColor: "#faf7f2" }}
              >
                <h3
                  className={`text-xl md:text-2xl font-light mb-3 ${libreBaskerville.className}`}
                  style={{ color: "#c89343" }}
                >
                  Huawei - Coffee Excellence
                </h3>
                <p
                  className={`text-sm font-semibold mb-4 uppercase tracking-wide ${libreFranklin.className}`}
                  style={{ color: "#a0622c" }}
                >
                  ☕ Premium Coffee Partnership
                </p>
                <p
                  className={`text-base leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                  style={{ color: "#95541E" }}
                >
                  Coffee is our passion, and Huawei embodies that commitment to excellence. Our partnership with Huawei
                  allows us to serve the finest, most ethically sourced coffee to our patrons. Every cup reflects years
                  of expertise in selecting, roasting, and brewing beans that deliver the perfect balance of flavor and
                  aroma. This collaboration ensures that whether you're in our cafe at a hospital or enjoying Lunch Box,
                  the coffee experience remains exceptional and memorable.
                </p>
                <p className={`text-sm font-semibold ${libreFranklin.className}`} style={{ color: "#c89343" }}>
                  ✓ Crafting the perfect cup, every time
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-850 hover:to-amber-900 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-white/20"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
