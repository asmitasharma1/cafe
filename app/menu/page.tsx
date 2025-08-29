"use client"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import styles from "./MenuPage.module.css"
import { useState, useEffect } from "react"
import { Download } from "lucide-react"
import jsPDF from "jspdf"
import SocialMediaSidebar from "@/components/social-media-sidebar"

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image?: string
  is_vegetarian?: boolean
}

interface MenuCategory {
  idszínű: number
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
    <div className="mb-6 py-6 px-4 md:px-8 relative bg-[#fff8f3]">
      <div className="absolute top-6 right-8 opacity-30">
        <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
      </div>
      <div className="absolute top-12 right-16 opacity-40">
        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row gap-12 items-center min-h-[350px] ${isReversed ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Menu items container - center aligned on mobile */}
          <div className="flex-1 max-w-2xl w-full text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:text-left" style={{ color: "#67322C" }}>
              {title}
            </h2>
            {Array.isArray(items) &&
              items.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row md:items-start md:justify-between py-1 mb-1">
                  <div className="flex-1 md:pr-4">
                    <h3 className="font-semibold text-sm mb-0.5" style={{ color: "#67322C" }}>
                      {item.name
                        .replace(/\s*$$V$$\s*/g, "")
                        .replace(/\s*0\s*/g, "")}
                    </h3>
                    {item.description && (
                      <p className="text-xs leading-tight" style={{ color: "#95541E" }}>
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="md:text-right mt-1 md:mt-0">
                    <span className="text-base font-bold" style={{ color: "#67322C" }}>
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex-shrink-0">
            <div className="flex flex-col gap-4">
              {leftImage && (
                <div className="relative">
                  <div className="absolute -inset-4 border-2 border-orange-200 rounded-full opacity-40"></div>
                  <div className="absolute -top-6 -right-6 opacity-50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400">
                      <path
                        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="absolute -bottom-4 -left-4 opacity-50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-orange-400">
                      <path
                        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div
                    className="relative overflow-hidden shadow-2xl border-4 border-white"
                    style={{
                      width: "280px",
                      height: "320px",
                      borderRadius: "50%/45%",
                    }}
                  >
                    <Image
                      src={leftImage || "/placeholder.svg?height=320&width=280&query=delicious food dish"}
                      alt={`${title} dish`}
                      width={280}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              {rightImage && (
                <div className="relative">
                  <div className="absolute -inset-4 border-2 border-orange-200 rounded-full opacity-40"></div>
                  <div className="absolute -top-6 -right-6 opacity-50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400">
                      <path
                        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="absolute -bottom-4 -left-4 opacity-50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-orange-400">
                      <path
                        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div
                    className="relative overflow-hidden shadow-2xl border-4 border-white"
                    style={{
                      width: "280px",
                      height: "320px",
                      borderRadius: "50%/45%",
                    }}
                  >
                    <Image
                      src={rightImage || "/placeholder.svg?height=320&width=280&query=delicious food dish"}
                      alt={`${title} dish`}
                      width={280}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              {thirdImage && (
                <div className="relative">
                  <div className="absolute -inset-4 border-2 border-orange-200 rounded-full opacity-40"></div>
                  <div className="absolute -top-6 -right-6 opacity-50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400">
                      <path
                        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="absolute -bottom-4 -left-4 opacity-50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-orange-400">
                      <path
                        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div
                    className="relative overflow-hidden shadow-2xl border-4 border-white"
                    style={{
                      width: "280px",
                      height: "320px",
                      borderRadius: "50%/45%",
                    }}
                  >
                    <Image
                      src={thirdImage || "/placeholder.svg?height=320&width=280&query=delicious food dish"}
                      alt={`${title} dish`}
                      width={280}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .grass-icon {
          width: 60px;
          height: 60px;
          position: relative;
        }
        .blade {
          position: absolute;
          width: 10px;
          height: 40px;
          background: linear-gradient(to bottom, #2ecc71, #27ae60);
          border-radius: 5px;
          transform-origin: bottom;
          top: 10px;
        }
        .blade-left {
          left: 15px;
          transform: rotate(-15deg);
        }
        .blade-center {
          left: 25px;
          transform: rotate(0deg);
        }
        .blade-right {
          left: 35px;
          transform: rotate(15deg);
        }
        .leaf {
          position: absolute;
          width: 20px;
          height: 30px;
          background: #27ae60;
          border-radius: 50% 0 50% 50%;
          top: 30px;
          left: 20px;
          transform: rotate(45deg);
          opacity: 0.7;
        }
      `}</style>
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
        if (result?.success && result?.data?.menuSections) {
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

  const sectionImages: Record<string, string[]> = {
    breakfast: ["/fruitbowl.webp", "/avocadotoast.webp"],
    starters: ["/tender1.webp"],
    soups: ["/cafefood.webp"],
    salads: ["/fruitbowl1.webp"],
    sandwichBurger: ["/sandwich1.webp", "/burger1.webp"],
    pasta: ["/pasta2.webp"],
    mainCourse: ["/mixfood1.webp", "/tender2.webp"],
    pizza: ["/cafefood.webp", "/sandwich4.webp"],
    oriental: ["/momo2.webp"],
    espresso: ["/coffee.webp", "/pudinajuice.webp"],
    teas: ["/cafetea.png"],
    coldBeverages: ["/greenjuics1.webp", "/cafecoffee1.webp"],
    juices: ["/greenjuice.webp", "/greenjuice.webp"],
    spirits: ["/yellowdrink.webp", "/sherpabrew.webp"],
    wines: ["/wine.webp"],
    beers: ["/beer.webp"],
    cocktails: ["/creekjuice.webp"],
  }

  const filteredMenuSections: { [key: string]: MenuItem[] } = menuData?.menuSections
    ? Object.fromEntries(
      Object.entries(menuData.menuSections)
        .map(([key, items]) => [
          key,
          (Array.isArray(items) ? items : []).filter((item) => {
            const q = searchQuery.toLowerCase()
            return item.name?.toLowerCase().includes(q) || item.description?.toLowerCase().includes(q)
          }),
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
    <div className="min-h-screen bg-[#fff8f3] font-franklin">
      <Navigation />
      <SocialMediaSidebar />
      <div className="py-24 px-6 md:px-8 text-center bg-[#67322c5d]">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: "#FFFFFF" }}>
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
      <div className="py-4 px-4 md:px-4 bg-[#fff8f3]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto mb-8 flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c89343] text-center md:text-left"
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
          <div>
            {Object.entries(filteredMenuSections).map(([key, items], index) => {
              const category = menuData?.categories.find((cat) => cat.name === key)
              const imgs = sectionImages[key] || []
              return (
                <MenuSection
                  key={key}
                  title={category?.display_name || key.charAt(0).toUpperCase() + key.slice(1)}
                  items={items}
                  leftImage={imgs[0]}
                  rightImage={imgs[1]}
                  thirdImage={imgs[2]}
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
                <p className="text-lg mb-6 " style={{ color: "#95541E" }}>
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
      </div>
      <Footer />
    </div>
  )
}