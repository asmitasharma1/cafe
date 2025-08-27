"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import styles from "./MenuPage.module.css"
import { useState, useEffect } from "react"
import { Download } from "lucide-react"
import jsPDF from "jspdf"

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image?: string
  is_vegetarian?: boolean
}

interface MenuCategory {
  id: number
  name: string
  display_name: string
  description?: string
  sort_order: number
}

interface MenuData {
  categories: MenuCategory[]
  menuSections: { [key: string]: MenuItem[] }
}

function MenuSection({
  title,
  items,
  leftImage,
  rightImage,
  thirdImage,
  isReversed = false,
}: {
  title: string
  items: MenuItem[]
  leftImage?: string
  rightImage?: string
  thirdImage?: string
  isReversed?: boolean
}) {
  return (
    <div className="mb-12 bg-[#fff8f3] rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: "#67322C" }}>
        {title}
      </h2>

      <div className={`flex flex-col lg:flex-row gap-6 items-start ${isReversed ? "lg:flex-row-reverse" : ""}`}>
        {/* Images Section */}
        <div className="w-full lg:w-72 flex flex-col gap-3">
          {leftImage && (
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src={leftImage || "/placeholder.svg"}
                alt="Menu dish"
                width={300}
                height={items.length > 10 ? 300 : 200}
                className={`w-full ${items.length > 10 ? "h-72" : "h-48"} object-cover hover:scale-105 transition-transform duration-300`}
              />
            </div>
          )}
          {rightImage && items.length > 4 && (
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src={rightImage || "/placeholder.svg"}
                alt="Menu dish"
                width={300}
                height={items.length > 10 ? 300 : 200}
                className={`w-full ${items.length > 10 ? "h-72" : "h-48"} object-cover hover:scale-105 transition-transform duration-300`}
              />
            </div>
          )}
          {thirdImage && items.length > 4 && (
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src={thirdImage || "/placeholder.svg"}
                alt="Menu dish"
                width={300}
                height={items.length > 10 ? 300 : 200}
                className={`w-full ${items.length > 10 ? "h-72" : "h-48"} object-cover hover:scale-105 transition-transform duration-300`}
              />
            </div>
          )}
        </div>

        {/* Menu Items Section */}
        <div className="flex-1 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 rounded-lg shadow-sm border border-gray-100 hover:scale-102 hover:-translate-y-0.5 transition-transform duration-200 bg-white"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-lg" style={{ color: "#67322C" }}>
                    {item.name.replace(/\s*$$V$$\s*/g, "").replace(/\s*0\s*/g, "")}
                  </h3>
                  <p className="text-sm italic" style={{ color: "#95541E" }}>
                    {item.description}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold" style={{ color: "#c89343" }}>
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MenuPage() {
  const [menuData, setMenuData] = useState<MenuData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("/api/menu")
        const result = await response.json()

        if (result.success) {
          setMenuData(result.data)
        } else {
          setError("Failed to load menu data")
        }
      } catch (err) {
        console.error("[v0] Error fetching menu:", err)
        setError("Failed to load menu data")
      } finally {
        setLoading(false)
      }
    }

    fetchMenuData()
  }, [])

  const marqueeImages = [
    "/mixfood1.webp",
    "/sandwich4.webp",
    "/pasta1.webp",
    "/momo1.webp",
    "/pakoda1.webp",
    "/sandwich1.webp",
    "/tender1.webp",
    "/avocadotoast.webp",
  ]

  // Mapping of menu sections to specific images in the public folder
  const sectionImages = {
    breakfast: ["/fruitbowl.webp", "/avocadotoast.webp", "/fruitbowl.webp"],
    starters: ["/tender1.webp", "/idkfood.webp"],
    soups: ["/cafefood.webp"],
    salads: ["/fruitbowl1.webp"],
    sandwichBurger: ["/sandwich1.webp", "/burger1.webp"],
    pasta: ["/pasta1.webp", "/pasta2.webp"],
    mainCourse: ["/mixfood1.webp", "/tender2.webp", "/mixfood1.webp"],
    pizza: ["/cafefood.webp", "/sandwich4.webp"],
    oriental: ["/momo1.webp", "/momo2.webp"],
    espresso: ["/coffee.webp", "/pudinajuice.webp"],
    teas: ["/cafetea.png", "/greenjuice.webp"],
    coldBeverages: ["/greenjuics1.webp", "/cafecoffee1.webp"],
    juices: ["/greenjuice.webp", "/greenjuice.webp"],
    spirits: ["/brew2.webp", "/yellowdrink.webp", "/sherpabrew.webp"],
    wines: ["/wine.webp"],
    beers: ["/beer.webp"],
    cocktails: ["/creekjuice.webp"],
  }

  const filteredMenuSections = menuData?.menuSections
    ? Object.fromEntries(
        Object.entries(menuData.menuSections)
          .map(([key, items]) => [
            key,
            items.filter(
              (item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
          ])
          .filter(([, items]) => items.length > 0),
      )
    : {}

  const downloadMenuPDF = () => {
    if (!menuData) return

    const doc = new jsPDF()
    let yOffset = 20
    const pageWidth = doc.internal.pageSize.width
    const margin = 10
    const maxWidth = pageWidth - 2 * margin

    doc.setFontSize(20)
    doc.text("Café Cucina Menu", pageWidth / 2, yOffset, { align: "center" })
    yOffset += 10

    Object.entries(filteredMenuSections).forEach(([sectionKey, items]) => {
      const category = menuData.categories.find((cat) => cat.name === sectionKey)
      const title = category?.display_name || sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)

      yOffset += 10
      if (yOffset > 270) {
        doc.addPage()
        yOffset = 20
      }

      doc.setFontSize(16)
      doc.text(title, margin, yOffset)
      yOffset += 8
      doc.setLineWidth(0.5)
      doc.line(margin, yOffset, margin + 50, yOffset)
      yOffset += 5

      items.forEach((item) => {
        if (yOffset > 270) {
          doc.addPage()
          yOffset = 20
        }

        doc.setFontSize(12)
        const cleanName = item.name.replace(/\s*$$V$$\s*/g, "").replace(/\s*0\s*/g, "")
        doc.text(cleanName, margin, yOffset, { maxWidth: maxWidth * 0.7 })
        doc.text(item.price, pageWidth - margin - 30, yOffset, { align: "right" })
        yOffset += 6

        doc.setFontSize(10)
        const descLines = doc.splitTextToSize(item.description, maxWidth * 0.7)
        descLines.forEach((line: string) => {
          if (yOffset > 270) {
            doc.addPage()
            yOffset = 20
          }
          doc.text(line, margin + 5, yOffset)
          yOffset += 5
        })
        yOffset += 3
      })
    })

    yOffset += 10
    if (yOffset > 270) {
      doc.addPage()
      yOffset = 20
    }
    doc.setFontSize(14)
    doc.text("Add-Ons Available", margin, yOffset)
    yOffset += 6
    doc.setFontSize(10)
    doc.text("Eggs/Bacon/Ham/Chicken Sausage/Mushroom/Hash Brown/Cheese/Hollandaise Sauce - Rs.299", margin, yOffset, {
      maxWidth,
    })
    yOffset += 6
    doc.text("Mashed Potato/Sautéed Veg./Avocado/Chicken/Pork Sausage/Salmon Slice - Rs.399", margin, yOffset, {
      maxWidth,
    })
    yOffset += 6
    doc.text("*Some items may contain trace of food allergens such as nuts, eggs, and seafood.", margin, yOffset, {
      maxWidth,
    })

    doc.save("Cafe_Cucina_Menu.pdf")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 font-franklin">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c89343] mx-auto mb-4"></div>
            <p className="text-lg" style={{ color: "#67322C" }}>
              Loading menu...
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 font-franklin">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-lg text-red-600 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()} style={{ backgroundColor: "#c89343", color: "white" }}>
              Try Again
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 font-franklin">
      <Navigation />

      <div className="py-24 px-6 md:px-8 text-center bg-[#fff8f3]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: "#67322C" }}>
          Dive Into Delicious <br /> Meal Dishes
        </h1>
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            {[...marqueeImages, ...marqueeImages, ...marqueeImages].map((src, index) => (
              <Image
                key={index}
                src={src || "/placeholder.svg"}
                alt={`Dish ${(index % marqueeImages.length) + 1}`}
                width={200}
                height={200}
                className="rounded-xl shadow-md object-cover mx-4 cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged dish"
              width={800}
              height={600}
              className="rounded-xl object-contain max-w-[80vw] max-h-[80vh]"
            />
            <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="py-4 px-4 md:px-6">
        <div className="max-w-2xl mx-auto mb-8 flex items-center gap-4">
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c89343]"
            style={{ color: "#67322C" }}
          />
          <Button
            size="lg"
            className="px-4 py-2 text-lg font-medium shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
            style={{ backgroundColor: "#c89343", color: "white" }}
            onClick={downloadMenuPDF}
          >
            <Download className="mr-2 h-5 w-5" /> Download Menu
          </Button>
        </div>
        <div className="max-w-6xl mx-auto">
          {Object.entries(filteredMenuSections).map(([key, items], index) => {
            const category = menuData?.categories.find((cat) => cat.name === key)
            return (
              <MenuSection
                key={key}
                title={category?.display_name || key.charAt(0).toUpperCase() + key.slice(1)}
                items={items}
                leftImage={sectionImages[key]?.[0]}
                rightImage={items.length > 4 ? sectionImages[key]?.[1] : undefined}
                thirdImage={items.length > 4 ? sectionImages[key]?.[2] : undefined}
                isReversed={index % 2 === 1}
              />
            )
          })}
          <div className="text-center mt-16">
            <div
              className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto mb-8"
              style={{ backgroundColor: "#f9f7f4" }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: "#67322C" }}>
                Add-Ons Available
              </h3>
              <p className="text-sm mb-2" style={{ color: "#95541E" }}>
                Eggs/Bacon/Ham/Chicken Sausage/Mushroom/Hash Brown/Cheese/Hollandaise Sauce - Rs.299
              </p>
              <p className="text-sm mb-4" style={{ color: "#95541E" }}>
                Mashed Potato/Sautéed Veg./Avocado/Chicken/Pork Sausage/Salmon Slice - Rs.399
              </p>
              <p className="text-xs italic" style={{ color: "#95541E" }}>
                *Some items may contain trace of food allergens such as nuts, eggs, and seafood.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
              style={{ backgroundColor: "#f9f7f4" }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#67322C" }}>
                Ready to Order?
              </h3>
              <p className="text-lg mb-6 italic" style={{ color: "#95541E" }}>
                Place your order now via WhatsApp and enjoy Café Cucina's authentic flavors!
              </p>
              <a
                href="https://wa.me/9779861601155?text=Hello%20I%20would%20like%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-medium shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                  style={{ backgroundColor: "#c89343", color: "white" }}
                >
                  Order Now
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
