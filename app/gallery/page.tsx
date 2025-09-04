"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Libre_Baskerville, Libre_Franklin } from "next/font/google";
import SocialMediaSidebar from "@/components/social-media-sidebar";
import { useCallback, useEffect, useState } from "react";
import { ArrowUp, X } from "lucide-react";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const windowScrollY = window.scrollY || window.pageYOffset;
    const documentScrollTop = document.documentElement.scrollTop;
    const bodyScrollTop = document.body.scrollTop;

    const scrollTop = Math.max(windowScrollY, documentScrollTop, bodyScrollTop);

    if (scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    const addScrollListeners = () => {
      window.addEventListener("scroll", handleScroll, { passive: true });
      document.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("scroll", handleScroll, { passive: true });
    };

    const removeScrollListeners = () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("scroll", handleScroll);
    };

    addScrollListeners();
    handleScroll();

    return () => {
      removeScrollListeners();
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.pageYOffset = 0;
      }, 100);
    } catch (error) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  };

  const openImage = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <SocialMediaSidebar />
      <main className="pt-0">
        {/* Hero Section */}
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
          style={{
            backgroundImage: "url(/cafephoto.webp)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${libreBaskerville.className}`}>Our Gallery</h1>
            <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto text-justify ${libreFranklin.className}`}>
              Explore the warmth and vibrancy of Cafe Cucina through our collection of moments, from cozy interiors to delightful dishes.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="py-16 md:py-24 px-4 md:px-6 bg-[#f5f0e6]">
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-light mb-12 text-center ${libreBaskerville.className}`}
              style={{ color: "#c89343" }}
            >
              Moments at Cafe Cucina
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gallery Item 1 */}
              <div className="relative overflow-hidden rounded-1xl shadow-lg cursor-pointer">
                <img
                  src="/interior.webp"
                  alt="Cafe Interior"
                  className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => openImage("/interior.webp")}
                />
              </div>
              {/* Gallery Item 2 */}
              <div className="relative overflow-hidden rounded-1xl shadow-lg cursor-pointer">
                <img
                  src="/cafebook.png"
                  alt="Coffee Table"
                  className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => openImage("/cafebook.png")}
                />
              </div>
              {/* Gallery Item 3 */}
              <div className="relative overflow-hidden rounded-1xl shadow-lg cursor-pointer">
                <img
                  src="/mirror.png"
                  alt="Cafe Decor"
                  className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => openImage("/mirror.png")}
                />
              </div>
              {/* Gallery Item 4 */}
              <div className="relative overflow-hidden rounded-1xl shadow-lg cursor-pointer">
                <img
                  src="/insidecafe.webp"
                  alt="Inside Cafe"
                  className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => openImage("/insidecafe.webp")}
                />
              </div>
              {/* Gallery Item 5 */}
              <div className="relative overflow-hidden rounded-1xl shadow-lg cursor-pointer">
                <img
                  src="/cashier1.webp"
                  alt="Cashier Area"
                  className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => openImage("/cashier1.webp")}
                />
              </div>
              {/* Gallery Item 6 */}
              <div className="relative overflow-hidden rounded-1xl shadow-lg cursor-pointer">
                <img
                  src="/foodwine.webp"
                  alt="Food and Wine"
                  className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => openImage("/foodwine.webp")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-[10000] flex items-center justify-center">
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
              aria-label="Close image"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen Gallery Image"
              className="max-w-[90%] max-h-[90%] object-contain"
            />
          </div>
        )}
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
  );
}