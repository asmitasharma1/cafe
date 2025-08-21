import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import styles from "./MenuPage.module.css"

interface MenuItem {
    id: number
    name: string
    description: string
    price: string
    image: string
}

const menuSections = {
    breakfast: [
        {
            id: 1,
            name: "Crispy Chicken Poblano",
            description: "Beef, chicken, turkey",
            price: "Rs.9960",
            image: "/mixfood1.webp",
        },
        {
            id: 2,
            name: "Avocado Toast Supreme",
            description: "Fresh avocado, sourdough",
            price: "Rs.4482",
            image: "/sandwich4.webp",
        },
        {
            id: 3,
            name: "Continental Pancakes",
            description: "Fluffy pancakes, maple syrup",
            price: "Rs.6474",
            image: "/pasta1.webp",
        },
        {
            id: 4,
            name: "Eggs Benedict Classic",
            description: "Poached eggs, hollandaise",
            price: "Rs.5644",
            image: "/momo1.webp",
        },
        {
            id: 5,
            name: "Breakfast Burrito",
            description: "Scrambled eggs, cheese, salsa",
            price: "Rs.5312",
            image: "/pakoda1.webp",
        },
        {
            id: 6,
            name: "French Toast Delight",
            description: "Brioche, cinnamon, berries",
            price: "Rs.5727",
            image: "/sandwich1.webp",
        },
        {
            id: 7,
            name: "Granola Bowl",
            description: "House-made granola, yogurt",
            price: "Rs.6806",
            image: "/tender1.webp",
        },
        {
            id: 8,
            name: "Smoked Salmon Bagel",
            description: "Everything bagel, cream cheese",
            price: "Rs.3486",
            image: "/avocadotoast.webp",
        },
    ],
    lunch: [
        {
            id: 9,
            name: "Grilled Chicken Caesar",
            description: "Romaine, parmesan, croutons",
            price: "Rs.7885",
            image: "/mixfood1.webp",
        },
        {
            id: 10,
            name: "Beef Burger Deluxe",
            description: "Angus beef, cheese, fries",
            price: "Rs.9130",
            image: "/sandwich4.webp",
        },
        {
            id: 11,
            name: "Pasta Carbonara",
            description: "Creamy sauce, pancetta",
            price: "Rs.7304",
            image: "/pasta1.webp",
        },
        {
            id: 12,
            name: "Fish & Chips",
            description: "Beer battered, mushy peas",
            price: "Rs.7636",
            image: "/momo1.webp",
        },
    ],
    beverages: [
        {
            id: 13,
            name: "Espresso Blend",
            description: "Rich, bold, aromatic",
            price: "Rs.2075",
            image: "/pakoda1.webp",
        },
        {
            id: 14,
            name: "Cappuccino Classic",
            description: "Steamed milk, foam art",
            price: "Rs.2905",
            image: "/sandwich1.webp",
        },
        {
            id: 15,
            name: "Iced Latte",
            description: "Cold brew, milk, ice",
            price: "Rs.3320",
            image: "/tender1.webp",
        },
        {
            id: 16,
            name: "Fresh Orange Juice",
            description: "Squeezed daily, vitamin C",
            price: "Rs.2490",
            image: "/avocadotoast.webp",
        },
    ],
}

function MenuSection({ title, items }: { title: string; items: MenuItem[] }) {
    return (
        <div className="mb-12 bg-[#fff8f3] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#67322C" }}>
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                    >
                        <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg" style={{ color: "#67322C" }}>
                                {item.name}
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
    )
}

export default function MenuPage() {
    const images = [
        "/mixfood1.webp",
        "/sandwich4.webp",
        "/pasta1.webp",
        "/momo1.webp",
        "/pakoda1.webp",
        "/sandwich1.webp",
        "/tender1.webp",
        "/avocadotoast.webp",
    ]

    return (
        <div className="min-h-screen bg-gray-50 font-franklin">
            <Navigation />

            <div className="py-24 px-6 md:px-8 text-center bg-[#fff8f3]">
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                    style={{ color: "#67322C" }}
                >
                    Dive Into Delicious <br /> Meal Dishes
                </h1>

                <div className={styles.marqueeContainer}>
                    <div className={styles.marquee}>
                        {[...images, ...images, ...images].map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`Dish ${index % images.length + 1}`}
                                width={200}
                                height={200}
                                className="rounded-xl shadow-md object-cover mx-4"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-4 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <MenuSection title="Breakfast Special Menu" items={menuSections.breakfast} />
                    <MenuSection title="Lunch Favorites" items={menuSections.lunch} />
                    <MenuSection title="Beverages & Coffee" items={menuSections.beverages} />

                    <div className="text-center mt-16">
                        <div
                            className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
                            style={{ backgroundColor: "#f9f7f4" }}
                        >
                            <h3 className="text-2xl font-bold mb-4" style={{ color: "#67322C" }}>
                                Ready to Order?
                            </h3>
                            <p className="text-lg mb-6 italic" style={{ color: "#95541E" }}>
                                Reserve your table and experience the authentic taste of Café Cucina
                            </p>
                            <Button
                                size="lg"
                                className="px-8 py-4 text-lg font-medium shadow-md hover:scale-105 transition-all duration-300"
                                style={{ backgroundColor: "#c89343", color: "white" }}
                            >
                                Book a Table
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}