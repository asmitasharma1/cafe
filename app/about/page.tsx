import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Libre_Baskerville, Libre_Franklin } from "next/font/google"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
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
            <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto ${libreFranklin.className}`}>
              There are people who can't start their day without having a freshly brewed cup of coffee and we understand
              them.
            </p>
          </div>
        </div>

        {/* Our Story & Philosophy Section */}
        <div className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Content */}
              <div>
                <h2
                  className={`text-3xl md:text-4xl font-light mb-8 ${libreBaskerville.className}`}
                  style={{ color: "#c89343" }}
                >
                  Our Story & Philosophy
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p
                    className={`text-base md:text-lg leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E", fontStyle: "italic" }}
                  >
                    We're a small, independent café built on big-hearted values — good food, good coffee, and genuine
                    community spirit.
                  </p>

                  <p
                    className={`text-base md:text-lg leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E", fontStyle: "italic" }}
                  >
                    Our menu is rooted in quality ingredients and honest preparation, with no frills or fuss — just
                    satisfying plates and a friendly atmosphere.
                  </p>

                  <p
                    className={`text-base md:text-lg leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E", fontStyle: "italic" }}
                  >
                    Café Cucina was born from a love for the warmth and vibrancy of the Italian kitchen where "cucina"
                    means more than just a place to cook; it's the heart of connection, creativity, and community.
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed mb-6 text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E", fontStyle: "italic" }}
                  >
                    Inspired by the spirit of Italian culinary traditions, we envisioned a space where the inviting
                    aroma of freshly brewed coffee meets the soulful essence of a bustling kitchen.
                  </p>
                </div>
              </div>
              {/* Right Images */}
              <div className="relative">
                {/* Main big image */}
                <div className="w-full h-[400px] relative rounded-1xl overflow-hidden shadow-lg">
                  <img src="location.webp" alt="Cafe Outside" className="w-full h-full object-cover" />
                </div>

                {/* Overlapping small image */}
                <div className="absolute -bottom-10 -left-10 w-60 h-40 md:w-72 md:h-48 rounded-1xl overflow-hidden shadow-md border-4 border-white">
                  <img src="/cafebook.png" alt="Coffee Table" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Incredible Team Section */}
        <div className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <div className="rounded-1xl overflow-hidden shadow-lg">
                <img src="/team.webp" alt="Our Team" className="w-full h-[400px] object-cover" />
              </div>

              {/* Right Content */}
              <div>
                <p
                  className={`text-4xl uppercase tracking-widest mb-2 ${libreFranklin.className}`}
                  style={{ color: "#95541E" }}
                >
                  Meet
                </p>
                <h2
                  className={`text-3xl md:text-4xl font-light mb-6 ${libreBaskerville.className}`}
                  style={{ color: "#c89343" }}
                >
                  Our Incredible Team
                </h2>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E", fontStyle: "italic" }}
                  >
                    Here at Café Cucina, we truly value our staff and invest in their career development.
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E", fontStyle: "italic" }}
                  >
                    From barista training and food hygiene courses to being first-aid trained, we offer our team the
                    opportunity to learn and develop in their chosen areas.
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E", fontStyle: "italic" }}
                  >
                    Our incredible team members all share our values of delivering outstanding customer service, being
                    passionate about serving the highest quality food, and creating a warm, welcoming environment to
                    foster community spirit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
