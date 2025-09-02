"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SocialMediaSidebar from "@/components/social-media-sidebar"
import { Trash2, ShoppingCart, Heart } from "lucide-react"
import { useFavorites } from "@/contexts/favourites-context"
import { Libre_Baskerville, Libre_Franklin } from "next/font/google"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

export default function FavoritesPage() {
  const { favorites, removeFromFavorites, clearFavorites, favoritesCount } = useFavorites()
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({})

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      const newQuantities = { ...quantities }
      delete newQuantities[itemId]
      setQuantities(newQuantities)
    } else {
      setQuantities((prev) => ({ ...prev, [itemId]: quantity }))
    }
  }

  const getQuantity = (itemId: number) => quantities[itemId] || 1

  const generateWhatsAppMessage = () => {
    if (favorites.length === 0) return ""

    let message = "Hello! I would like to place an order from Café Cucina:\n\n"

    favorites.forEach((item) => {
      const quantity = getQuantity(item.id)
      const cleanName = item.name.replace(/\s*$$V$$\s*/g, "").replace(/\s*0\s*/g, "")
      message += `${quantity}x ${cleanName} - ${item.price}\n`
      if (item.description) {
        message += `   (${item.description})\n`
      }
      message += "\n"
    })

    message += "Please confirm availability and total amount. Thank you!"
    return encodeURIComponent(message)
  }

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/9779861601155?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  if (favoritesCount === 0) {
    return (
      <div className="min-h-screen bg-[#fff8f3] font-franklin">
        <Navigation />
        <SocialMediaSidebar />

        {/* Hero Section */}
        <div
          className="min-h-[60vh] pt-10 bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
          style={{
            backgroundImage: "url(/cafefood.webp)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${libreBaskerville.className}`}>
              Your Favorites
            </h1>
            <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto text-justify ${libreFranklin.className}`}>
              Browse your favorite items and place your order with ease.
            </p>
          </div>
        </div>

        <div className="pt-24 pb-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Heart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#67322C" }}>
                Your Favorites
              </h1>
              <p className="text-lg" style={{ color: "#95541E" }}>
                You haven't added any items to your favorites yet.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg" style={{ backgroundColor: "#f9f7f4" }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#67322C" }}>
                Start Building Your Order
              </h3>
              <p className="text-base mb-6" style={{ color: "#95541E" }}>
                Browse our menu and click the heart icon next to items you'd like to order.
              </p>
              <a href="/menu">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-medium shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                  style={{ backgroundColor: "#c89343", color: "white" }}
                >
                  Browse Menu
                </Button>
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fff8f3] font-franklin">
      <Navigation />
      <SocialMediaSidebar />

      {/* Hero Section */}
      <div
        className="min-h-[60vh] pt-10 bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{
          backgroundImage: "url(/cafefood.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${libreBaskerville.className}`}>
            Your Favorites
          </h1>
          <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto text-justify ${libreFranklin.className}`}>
            Review your selected items and place your order with ease.
          </p>
        </div>
      </div>

      <div className="pt-10 pb-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#67322C" }}>
              Your Favorites ({favoritesCount} items)
            </h1>
            <p className="text-lg" style={{ color: "#95541E" }}>
              Review your selected items and place your order via WhatsApp
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8" style={{ backgroundColor: "#f9f7f4" }}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold" style={{ color: "#67322C" }}>
                Selected Items
              </h2>
              <Button
                onClick={clearFavorites}
                variant="outline"
                size="sm"
                className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>

            <div className="space-y-4">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white rounded-lg shadow-sm border"
                >
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="font-semibold text-lg mb-1" style={{ color: "#67322C" }}>
                      {item.name.replace(/\s*$$V$$\s*/g, "").replace(/\s*0\s*/g, "")}
                    </h3>
                    {item.description && (
                      <p className="text-sm mb-2" style={{ color: "#95541E" }}>
                        {item.description}
                      </p>
                    )}
                    <p className="text-lg font-bold" style={{ color: "#67322C" }}>
                      {item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium" style={{ color: "#67322C" }}>
                        Qty:
                      </label>
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, getQuantity(item.id) - 1)}
                          className="px-3 py-1 hover:bg-gray-100 transition-colors"
                          style={{ color: "#67322C" }}
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-x" style={{ color: "#67322C" }}>
                          {getQuantity(item.id)}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, getQuantity(item.id) + 1)}
                          className="px-3 py-1 hover:bg-gray-100 transition-colors"
                          style={{ color: "#67322C" }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <Button
                      onClick={() => removeFromFavorites(item.id)}
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center" style={{ backgroundColor: "#f9f7f4" }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#67322C" }}>
              Ready to Order?
            </h3>
            <p className="text-lg mb-6" style={{ color: "#95541E" }}>
              Send your order directly to us via WhatsApp for quick confirmation and preparation!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppOrder}
                size="lg"
                className="px-8 py-4 text-lg font-medium shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Order via WhatsApp
              </Button>
              <a href="/menu">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-medium shadow-md hover:scale-105 cursor-pointer transition-all duration-300 bg-transparent"
                  style={{ borderColor: "#c89343", color: "#c89343" }}
                >
                  Add More Items
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}