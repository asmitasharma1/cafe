import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";

export default function CafeCucinaLanding() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="pt-0">
        <div className="min-h-screen relative">
          {/* Hero Section with Background Image */}
          <div
            className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
            style={{
              backgroundImage: "url(/cafebg.jpg)",
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
              {/* Welcome Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="text-xl font-light mb-6 tracking-wide">WELCOME TO</p>

                <h1 className="text-7xl md:text-8xl font-bold mb-8" style={{ color: "#c89343" }}>
                  CAFE CUCINA
                </h1>

                <p className="text-2xl mb-10 font-light italic">Savor the taste of artisan coffee and continental food</p>

                <Button
                  size="lg"
                  className="px-10 py-5 text-xl font-medium rounded-full mb-10"
                  style={{ backgroundColor: "#c89343", color: "white" }}
                >
                  Book Now
                </Button>

                <p className="text-xl font-light">
                  We open from <span className="font-medium">7am</span>
                  <br />
                  to <span className="font-medium">9pm</span>
                </p>
              </div>
            </div>
          </div>

          {/* Footer Information Section */}
          <div className="py-12 px-6" style={{ backgroundColor: "#ebb16d" }}>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-white">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">ADDRESS</h3>
                    <p className="text-lg">Pulchowk Square</p>
                    <p className="text-lg">Lalitpur</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">OPENING HOURS</h3>
                    <p className="text-lg">Sun-Sat Served 7 am to 9 pm</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">CONTACT US</h3>
                    <p className="text-lg">986-1601155</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}