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
                    Cafe Cucina, a proud branch of Basil Hospitality Pvt Ltd, was born from a love for the warmth and vibrancy of the Italian kitchen, where "cucina" means more than just a place to cook—it’s the heart of connection, creativity, and community.
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    Inspired by the spirit of Italian culinary traditions, we envisioned a space where the inviting aroma of freshly brewed coffee meets the soulful essence of a bustling kitchen. Our journey began with a mission to bring this vision to life in unique settings like healthcare facilities, where comfort and nourishment are most needed.
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed mb-4 text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    As a small, independent cafe chain under Basil Hospitality’s trusted legacy, we operate with big-hearted values—good food, good coffee, and genuine community spirit. Our cafes at Hems Hospital and Nagarik Hospital serve as welcoming havens for patients, visitors, and staff, offering a taste of warmth and connection through every dish and cup.
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed mb-6 text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    Our philosophy is to nourish both body and soul, one meal at a time, while delivering the excellence and trust that define Basil Hospitality’s legacy.
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
                  At Cafe Cucina, we believe in keeping things simple yet meaningful. Our menu is rooted in quality ingredients and honest preparation, with no frills or fuss—just satisfying plates and a friendly atmosphere. We are guided by three core principles:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    <strong>Quality:</strong> We source fresh, sustainable ingredients to craft nutritious, flavorful meals that honor Italian culinary traditions while embracing local tastes.
                  </li>
                  <li
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    <strong>Hospitality:</strong> Every guest is welcomed with genuine warmth, creating a space where community thrives and every visit feels like coming home.
                  </li>
                  <li
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    <strong>Community:</strong> As part of Basil Hospitality Pvt Ltd, we are committed to uplifting the communities we serve, fostering connections through food in the heart of healthcare environments.
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

        {/* Our Incredible Team Section */}
        <div className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div>
                <p
                  className={`text-4xl uppercase tracking-widest mb-2 text-justify ${libreFranklin.className}`}
                  style={{ color: "#95541E" }}
                >
                  Meet
                </p>
                <h2
                  className={`text-3xl md:text-4xl font-light mb-6 text-justify ${libreBaskerville.className}`}
                  style={{ color: "#c89343" }}
                >
                  Our Incredible Team
                </h2>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    Here at Café Cucina, we truly value our staff and invest in their career development.
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    From barista training and food hygiene courses to being first-aid trained, we offer our team the
                    opportunity to learn and develop in their chosen areas.
                  </p>
                  <p
                    className={`text-base md:text-lg leading-relaxed text-justify ${libreFranklin.className}`}
                    style={{ color: "#95541E" }}
                  >
                    Our incredible team members all share our values of delivering outstanding customer service, being
                    passionate about serving the highest quality food, and creating a warm, welcoming environment to
                    foster community spirit.
                  </p>
                </div>
              </div>
              {/* Right Image */}
              <div className="rounded-1xl overflow-hidden shadow-lg">
                <img src="/team1.jpg" alt="Our Team" className="w-full h-[390px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}