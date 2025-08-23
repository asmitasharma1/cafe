"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import styles from "./MenuPage.module.css"
import { useState } from "react"
import { Download } from "lucide-react"

interface MenuItem {
    id: number
    name: string
    description: string
    price: string
    image?: string
}


const menuSections = {
    breakfast: [
        {
            id: 1,
            name: "Eggs on your style on toast",
            description: "Poached/Scrambled/Sunny side",
            price: "Rs.545",
        },
        {
            id: 2,
            name: "Namaste Porridge (V)",
            description: "Cooked Based In Almond Milk, Seasonal Fruits, Almond, & Raisin W Honey",
            price: "Rs.595",
        },
        {
            id: 3,
            name: "Muesli (V)",
            description: "Topped W Dry Fruits & Yogurt",
            price: "Rs.575",
        },
        {
            id: 4,
            name: "Hash Stack",
            description: "Roasted Crusted Potato Mixed W Herbs & Cheese; Topped W Poached Eggs & Hollandaise Sauce",
            price: "Rs.595",
        },
        {
            id: 5,
            name: "Breakfast Of Champion (BOC)",
            description:
                "Served Eggs On Your Style, Roasted Mushroom, Sautéed Spinach, Hash Brown, Crispy Bacon, Grilled Tomato, Baked Beans & Sicilian Sausage",
            price: "Rs.1050",
        },
        {
            id: 6,
            name: "BOC Sandwich",
            description:
                "Choice of Bread, Spicy Sunnyside Eggs, Italian Pork Sausage, Bacon, Sundried Tomato and Slice of Cheese",
            price: "Rs.945",
        },
        {
            id: 7,
            name: "Smashed Avocado",
            description:
                "Seasonal Avocado Mashed W Lowest Fat Feta, Beading On Multigrain Bread, Cherry Tomato, Poached Eggs & Middle Eastern Spice (Dukkah)",
            price: "Rs.645",
        },
        {
            id: 8,
            name: "Eggs Benedict",
            description: "Served On Multigrain Bread W Smoked Grilled Ham, Poached Eggs & Hollandaise Sauce",
            price: "Rs.625",
        },
        {
            id: 9,
            name: "Eggs Florentine",
            description: "Served On Multigrain Bread W Sautéed Spinach Mushroom, Poached Eggs & Hollandaise Sauce",
            price: "Rs.645",
        },
        {
            id: 10,
            name: "French Toast",
            description: "Topped W Grilled Bacon, Maple Syrup & Ice Cream",
            price: "Rs.645",
        },
        {
            id: 11,
            name: "Roti Wrap",
            description: "Filled W Scrambled Eggs, Crispy Bacon, Sautéed Mushroom & Shredded Cheese",
            price: "Rs.695",
        },
        {
            id: 12,
            name: "Fajita Chicken Wrap",
            description: "Sautéed Chicken, Capsicum, Tomato, Spanish Onion, Finished W Cajun Spice. Served With Fries",
            price: "Rs.645",
        },
        {
            id: 13,
            name: "Cottage Cheese Wrap (V)",
            description: "Sautéed Cottage Cheese, Capsicum, Red Onion, Tomato W Homemade Pesto Basil Sauce",
            price: "Rs.675",
        },
        {
            id: 14,
            name: "Smoothie Bowl",
            description: "Chocolate & Peanut Butter / Litchi & Berries",
            price: "Rs.695",
        },
    ],
    starters: [
        {
            id: 15,
            name: "Potato Wedges (V)",
            description: "Tossed With Our Signature Herbs & Spices",
            price: "Rs.475",
        },
        {
            id: 16,
            name: "Cheese Ball (V)",
            description: "Stuffed With Mozzarella Cheese",
            price: "Rs.575",
        },
        {
            id: 17,
            name: "Veg. Tempura (V)",
            description: "Beer Battered Coated Vegetables & Paneer",
            price: "Rs.595",
        },
        {
            id: 18,
            name: "Sweet Corn (V)",
            description: "Buttery/Spicy",
            price: "Rs.475",
        },
        {
            id: 19,
            name: "BBQ Chicken Wings",
            description: "Finished With BBQ Sauce And Red Wine",
            price: "Rs.595",
        },
        {
            id: 20,
            name: "Fish Finger",
            description: "Served With Organic Salad",
            price: "Rs.575",
        },
        {
            id: 21,
            name: "Chicken Nuggets/Popcorn",
            description: "Crispy golden chicken pieces",
            price: "Rs.595",
        },
    ],
    soups: [
        {
            id: 22,
            name: "Man Chow",
            description: "Fried Spaghetti Tossed With Vegetables and Pan-Fried Chicken",
            price: "Rs.545",
        },
        {
            id: 23,
            name: "Mushroom (V)",
            description: "Diced Mushroom Prepared With Milk Base",
            price: "Rs.475",
        },
        {
            id: 24,
            name: "Chicken & Mushroom",
            description: "Diced Chicken And Button Mushroom Cooked With Milk Base",
            price: "Rs.525",
        },
        {
            id: 25,
            name: "Hot & Sour",
            description:
                "World Famous Soup Prepared With Diced Chicken, Boiled Vegetables And Touch Of Hot Sauce And Tangy Flavour",
            price: "Rs.525",
        },
    ],
    salads: [
        {
            id: 26,
            name: "Seasonal Fruit Salad (V)",
            description: "Fresh seasonal fruits",
            price: "Rs.645",
        },
        {
            id: 27,
            name: "Chicken Caesar Salad",
            description:
                "Cos Lettuce, Crispy Bacon, Herb Roasted Croutons, Parmesan Cheese Topped W Poached Egg, Mustard Mayo & Cherry Tomato",
            price: "Rs.695",
        },
        {
            id: 28,
            name: "Crispy Chicken Salad",
            description:
                "Iceberg Lettuce, Red Cabbage, Cucumber, Carrot, Apple, Kalamata Olives, Dried Fruits Drizzled With Balsamic Vinaigrette",
            price: "Rs.675",
        },
        {
            id: 29,
            name: "Greek Salad (V)",
            description:
                "Roman Lettuce, Cherry Tomato, Cucumber, Spanish Onion, Olives, Feta Cheese, Drizzled W Lemon & Olive Oil",
            price: "Rs.595",
        },
    ],
    sandwichBurger: [
        {
            id: 30,
            name: "Quattro Sandwich",
            description: "Choice Of Bread, Grilled Chicken, Grilled Ham, Fried Egg, Slice Cheese, Tomato, Lettuce & Mayo",
            price: "Rs.795",
        },
        {
            id: 31,
            name: "Mediterranean Veg. Sandwich (V)",
            description: "Filled W Grilled Vegetables, Feta Cheese, Sundried Tomato, Basil Pesto & Rocca Leaf",
            price: "Rs.645",
        },
        {
            id: 32,
            name: "Grilled Frango Burger",
            description: "Grilled Cajun Chicken Breast Fillet W Tangy Mayo, Mango Salsa, Kakro, Jalapeno & Sour Cream",
            price: "Rs.695",
        },
        {
            id: 33,
            name: "Chicken Schnitzel Burger",
            description: "Bread Crumbed Chicken Breast Fillet, Lettuce, Tomato, Cheese & BBQ Sauce",
            price: "Rs.625",
        },
        {
            id: 34,
            name: "Veg. Burger (V)",
            description: "Mixed Veg, Mushroom & Spinach Patty W Tomato, Lettuce, Cheese & Basil Pesto",
            price: "Rs.645",
        },
        {
            id: 35,
            name: "Fish Burger",
            description: "Grilled Fish Fillet, Lettuce, Gherkins, Cheese and Tartare Sauce",
            price: "Rs.745",
        },
        {
            id: 36,
            name: "New York Style Burger",
            description:
                "Homemade Tenderloin Patty Layer W Fried Egg, Grilled Crispy Bacon, Slice Cheese, Ripe Tomato, Lettuce, Beetroot, Whole Grain Mustard Mayo & Caramelized Onion",
            price: "Rs.825",
        },
        {
            id: 37,
            name: "Avocado Sandwich (V)",
            description: "Fresh avocado with seasonal vegetables",
            price: "Rs.495",
        },
        {
            id: 38,
            name: "Egg & Bacon Sandwich",
            description: "Classic combination with fresh bread",
            price: "Rs.595",
        },
        {
            id: 39,
            name: "Chicken Avocado Sandwich",
            description: "Grilled chicken with fresh avocado",
            price: "Rs.695",
        },
        {
            id: 40,
            name: "BLT",
            description: "Bacon, Lettuce, Tomato classic",
            price: "Rs.595",
        },
        {
            id: 41,
            name: "BLAT",
            description: "Bacon, Lettuce, Avocado, Tomato",
            price: "Rs.625",
        },
    ],
    pasta: [
        {
            id: 42,
            name: "Pollo – e – Pomodorro Risotto",
            description:
                "Cooked In Creamy Arborio Rice, Sautéed Chicken, Sun Dried Tomato & Baby Capers On Base Of Tomato Sauce Topped W Parmesan Cheese",
            price: "Rs.845",
        },
        {
            id: 43,
            name: "Tres Champinon Risotto (V)",
            description: "Cooked In Creamy Arborio Rice, Shiitake Mushroom Topped W Parmesan Wafer",
            price: "Rs.745",
        },
        {
            id: 44,
            name: "Linguine Carbonara",
            description: "White Wine Base, Grilled Bacon, Touch Of Cream Finished W Egg Yolk",
            price: "Rs.775",
        },
        {
            id: 45,
            name: "Linguine Alfredo",
            description:
                "Tossed W Herbs Marinated Grilled Chicken, Mushroom & Cream Sauce; Finished W Shaved Parmesan Cheese",
            price: "Rs.745",
        },
        {
            id: 46,
            name: "Aglio – E – Olio (V)",
            description: "Tossed W Homemade Basil Pesto",
            price: "Rs.595/695",
        },
        {
            id: 47,
            name: "Penne Avocado (V)",
            description: "Penne Tossed W Seasonal Vegetables On Cream Sauce Topped W Cheese",
            price: "Rs.675/775",
        },
        {
            id: 48,
            name: "Penne Verao (V)",
            description: "Penne Tossed W Seasonal Vegetables On Napolitano Sauce Topped W Cheese",
            price: "Rs.725",
        },
    ],
    mainCourse: [
        {
            id: 49,
            name: "Grilled Rooster Rosemary",
            description:
                "Lemon & Rosemary Grilled Chicken Breast Served W Herbs Mashed Potato W Organic Salad & Drizzled Basil Pesto",
            price: "Rs.775",
        },
        {
            id: 50,
            name: "Peri-Peri Chicken Oyster",
            description: "Marinated Chicken Oyster, With Creamy Mushroom and Cauliflower Puree, Choice of Sautéed Veg./Salad",
            price: "Rs.825",
        },
        {
            id: 51,
            name: "Chicken Parmigianino (Parma)",
            description:
                "Crumbed Chicken Breast Fillet Topped W Grilled Ham, Egg Plant, & Cheese Finished W Homemade Tomato Sauce",
            price: "Rs.925",
        },
        {
            id: 52,
            name: "Veg. Steak (V)",
            description: "Mix Veg. Patty, Cottage Cheese, Butter Cream sauce, sides of Salad And Mashed Potato",
            price: "Rs.795",
        },
        {
            id: 53,
            name: "Chicken Steak",
            description:
                "Grilled Chicken Breast Fillet Topped W Mushroom Brown Sauce Served Hot Spicy Spaghetti & Sautéed Vegetables",
            price: "Rs.825",
        },
        {
            id: 54,
            name: "Oz Style Bush Steak",
            description:
                "Wrapped W Crispy Bacon Served W Onion Jam, Crispy Greens Topped W Mushroom Demi Glace Sauce (180 Gms)",
            price: "Rs.1495",
        },
        {
            id: 55,
            name: "Salmon Steak",
            description:
                "Smoked Norwegian Salmon, Beetroot Risotto, Sautéed Vegetables, Topped with Poached Egg, Finished with Lemon Butter Sauce",
            price: "Rs.2195",
        },
        {
            id: 56,
            name: "Pork Chop",
            description:
                "Herb Crusted Pan Roasted Pork Chop Served With Beetroot Risotto, Crispy Buttered Greens & Choice of BBQ OR Schezwan Sauce",
            price: "Rs.1395",
        },
        {
            id: 57,
            name: "Fish Saltimbocca",
            description: "Pan-Fried Bacon Wrapped Fish Fillet, Served W Mash Potato, Crispy Greens & Pan-Glazed Sauce",
            price: "Rs.1145",
        },
    ],
    pizza: [
        {
            id: 58,
            name: "Margherita (V)",
            description: "Homemade Tomato Sauce, Mozzarella Cheese",
            price: "Rs.695",
        },
        {
            id: 59,
            name: "Pizza Al Quattro Formaggi (V)",
            description: "Homemade Tomato Sauce with Combination of Four Types of Cheese",
            price: "Rs.1195",
        },
        {
            id: 60,
            name: "Al Fungi (V)",
            description: "Homemade Tomato Sauce, Mozzarella Cheese, Mushroom",
            price: "Rs.725",
        },
        {
            id: 61,
            name: "Mix Veg. Pizza (V)",
            description:
                "Homemade Tomato Sauce, Mozzarella Cheese, Capsicum, Spanish Onion, Mushroom, Tomato, Sweet corn, Olives, Cottage Cheese",
            price: "Rs.795",
        },
        {
            id: 62,
            name: "Greek Pizza (V)",
            description: "Homemade Tomato Sauce, Mozzarella Cheese, Feta Cheese, Black Olive, Spanish onion, Tomato",
            price: "Rs.975",
        },
        {
            id: 63,
            name: "Pepperoni",
            description: "Homemade Tomato Sauce, Mozzarella Cheese, Pork Pepperoni",
            price: "Rs.1095",
        },
        {
            id: 64,
            name: "Capricciosa",
            description: "Homemade Tomato Sauce, Mozzarella Cheese, Ham, Mushroom, Olives",
            price: "Rs.1095",
        },
        {
            id: 65,
            name: "Salame Pizza",
            description: "Homemade Tomato Sauce, Mozzarella Cheese, Pork Salami",
            price: "Rs.995",
        },
        {
            id: 66,
            name: "BBQ Chicken",
            description: "Homemade Tomato Sauce, Mozzarella Cheese, BBQ Chicken, Grilled Onion",
            price: "Rs.995",
        },
        {
            id: 67,
            name: "Smoked Chicken",
            description: "Homemade Tomato Sauce, Mozzarella Cheese, Smoked Chicken",
            price: "Rs.1095",
        },
        {
            id: 68,
            name: "Hawaiian",
            description: "Homemade Tomato Sauce, Mozzarella Cheese, Chicken/Pork, Pineapple",
            price: "Rs.995",
        },
        {
            id: 69,
            name: "Meat Lover",
            description: "Homemade Tomato Sauce, Mozzarella Cheese, Bacon, Ham, Smoked Chicken, Pepperoni",
            price: "Rs.1195",
        },
    ],
    oriental: [
        {
            id: 70,
            name: "Spiced Noodle",
            description: "Asian style spiced noodles",
            price: "Rs.725",
        },
        {
            id: 71,
            name: "Peanut Chicken",
            description: "Chicken cooked with peanut sauce",
            price: "Rs.645",
        },
        {
            id: 72,
            name: "Chicken Sausage",
            description: "Traditional chicken sausage preparation",
            price: "Rs.495",
        },
        {
            id: 73,
            name: "Spiced Chicken",
            description: "Traditional spiced chicken preparation",
            price: "Rs.595",
        },
        {
            id: 74,
            name: "Spiced Pork",
            description: "Traditional spiced pork preparation",
            price: "Rs.675",
        },
        {
            id: 75,
            name: "Chicken MO:MO",
            description: "Traditional Nepali dumplings with chicken filling",
            price: "Rs.445",
        },
        {
            id: 76,
            name: "Veg. MO:MO",
            description: "Traditional Nepali dumplings with vegetable filling",
            price: "Rs.345",
        },
    ],
    espresso: [
        {
            id: 77,
            name: "Ristretto/Espresso",
            description: "Rich, bold, aromatic coffee shot",
            price: "Rs.170",
        },
        {
            id: 78,
            name: "Double Ristretto/Espresso/Macchiato",
            description: "Double shot espresso variations",
            price: "Rs.260",
        },
        {
            id: 79,
            name: "Long Black/Americano",
            description: "Espresso with hot water",
            price: "Rs.275",
        },
        {
            id: 80,
            name: "Café Latte/Cappuccino/Flat White",
            description: "Steamed milk with espresso",
            price: "Rs.300",
        },
        {
            id: 81,
            name: "Mochaccino",
            description: "Chocolate coffee blend",
            price: "Rs.360",
        },
        {
            id: 82,
            name: "Piccolo Latte",
            description: "Small latte with strong coffee flavor",
            price: "Rs.260",
        },
        {
            id: 83,
            name: "Spiced Chai Latte",
            description: "Traditional spiced tea with milk",
            price: "Rs.295",
        },
        {
            id: 84,
            name: "Dirty Chai Latte",
            description: "Chai latte with espresso shot",
            price: "Rs.325",
        },
        {
            id: 85,
            name: "Turmeric Latte",
            description: "Golden milk with turmeric",
            price: "Rs.300",
        },
        {
            id: 86,
            name: "Hot Lemon with Honey & Ginger",
            description: "Warming herbal drink",
            price: "Rs.295",
        },
        {
            id: 87,
            name: "Hot Chocolate",
            description: "Rich creamy hot chocolate",
            price: "Rs.375",
        },
        {
            id: 88,
            name: "Alternative Coffee Brewing",
            description: "V60, Chemex, French Press",
            price: "Rs.375",
        },
    ],
    teas: [
        {
            id: 89,
            name: "English Breakfast/Green Tea/Lemon Tea/Masala Tea",
            description: "Twinings tea selection",
            price: "Rs.175",
        },
        {
            id: 90,
            name: "Hibiscus",
            description: "Flower tea with tart flavor",
            price: "Rs.300",
        },
        {
            id: 91,
            name: "Butterfly Pea",
            description: "Color-changing flower tea",
            price: "Rs.300",
        },
        {
            id: 92,
            name: "Chamomile",
            description: "Calming flower tea",
            price: "Rs.300",
        },
        {
            id: 93,
            name: "Everest Green",
            description: "Premium Nepali green tea",
            price: "Rs.300/600",
        },
        {
            id: 94,
            name: "Everest Oolong (Ball Rolled)",
            description: "Premium Nepali oolong tea",
            price: "Rs.300/600",
        },
        {
            id: 95,
            name: "Everest Ruby",
            description: "Premium Nepali black tea",
            price: "Rs.300/600",
        },
        {
            id: 96,
            name: "Spearmint",
            description: "Fresh herb tea",
            price: "Rs.300",
        },
        {
            id: 97,
            name: "Matcha Latte",
            description: "Japanese green tea latte",
            price: "Rs.350",
        },
    ],
    coldBeverages: [
        {
            id: 98,
            name: "Iced Long Black/Americano",
            description: "Cold espresso with water",
            price: "Rs.275",
        },
        {
            id: 99,
            name: "Iced Café Latte",
            description: "Cold latte with ice",
            price: "Rs.300",
        },
        {
            id: 100,
            name: "Iced Coffee",
            description: "Cold brew coffee with ice",
            price: "Rs.395",
        },
        {
            id: 101,
            name: "Iced Mochaccino",
            description: "Cold chocolate coffee",
            price: "Rs.445",
        },
        {
            id: 102,
            name: "Iced Spiced Chai Latte",
            description: "Cold spiced chai",
            price: "Rs.445",
        },
        {
            id: 103,
            name: "Iced Dirty Chai Latte",
            description: "Cold chai with espresso",
            price: "Rs.475",
        },
        {
            id: 104,
            name: "Iced Matcha Latte",
            description: "Cold matcha green tea",
            price: "Rs.350",
        },
        {
            id: 105,
            name: "Affogato",
            description: "Vanilla ice cream with espresso",
            price: "Rs.325",
        },
        {
            id: 106,
            name: "Iced Chocolate",
            description: "Cold chocolate drink",
            price: "Rs.395",
        },
        {
            id: 107,
            name: "Iced Lemon/Peach Tea",
            description: "Refreshing iced tea",
            price: "Rs.325",
        },
        {
            id: 108,
            name: "Smoothie",
            description: "Avocado/Banana/Strawberry/Mango/\nBlueberry/Black Berry",
            price: "Rs.545",
        },
        {
            id: 109,
            name: "Milkshakes",
            description: "Coffee/Strawberry/Chocolate/\nCaramel/Vanilla",
            price: "Rs.375",
        },
        {
            id: 110,
            name: "Virgin Mojito",
            description: "Strawberry/Pomegranate Mojito",
            price: "Rs.495",
        },
        {
            id: 111,
            name: "Blue Lagoon",
            description: "Tropical blue mocktail",
            price: "Rs.445",
        },
        {
            id: 112,
            name: "Lemonade",
            description: "Mint/Strawberry/Watermelon",
            price: "Rs.350",
        },
        {
            id: 113,
            name: "Lemon Lime Bitter",
            description: "Refreshing citrus drink",
            price: "Rs.445",
        },
        {
            id: 114,
            name: "Kombucha",
            description: "Fermented tea beverage",
            price: "Rs.375",
        },
        {
            id: 115,
            name: "Sea Buck Thorn",
            description: "Himalayan superfruit juice",
            price: "Rs.300",
        },
        {
            id: 116,
            name: "Fresh Lime Soda",
            description: "Classic lime soda",
            price: "Rs.250",
        },
        {
            id: 117,
            name: "Coke Spider",
            description: "Coke with ice cream",
            price: "Rs.275",
        },
        {
            id: 118,
            name: "Bottle Water",
            description: "Pure drinking water",
            price: "Rs.100",
        },
    ],
    juices: [
        {
            id: 119,
            name: "Watermelon",
            description: "Fresh watermelon juice",
            price: "Rs.375",
        },
        {
            id: 120,
            name: "Orange (OJ)",
            description: "Fresh orange juice",
            price: "Rs.425",
        },
        {
            id: 121,
            name: "Carrot & Ginger",
            description: "Healthy carrot ginger blend",
            price: "Rs.425",
        },
        {
            id: 122,
            name: "ABC, Ginger, Lemon, Parsley",
            description: "Apple, Beetroot, Carrot blend",
            price: "Rs.499",
        },
        {
            id: 123,
            name: "Apple, Beetroot, OJ, Lemon & Ginger",
            description: "Antioxidant rich blend",
            price: "Rs.499",
        },
        {
            id: 124,
            name: "Detox",
            description: "Strawberry, Pineapple, OJ, Mango, Banana, Coconut Water",
            price: "Rs.595",
        },
        {
            id: 125,
            name: "Carrot",
            description: "Pure carrot juice",
            price: "Rs.475",
        },
        {
            id: 126,
            name: "Pina Colada",
            description: "Banana, Coconut Water, Coconut Milk, Pineapple",
            price: "Rs.595",
        },
        {
            id: 127,
            name: "Berries",
            description: "Mixed berry smoothie",
            price: "Rs.625",
        },
        {
            id: 128,
            name: "Tropical Green",
            description: "Almond/Oat Milk, OJ, Avocado, Mango, Spinach",
            price: "Rs.645",
        },
        {
            id: 129,
            name: "Orange Side",
            description: "Almond/Oat Milk, Orange, Banana, Carrot",
            price: "Rs.595",
        },
        {
            id: 130,
            name: "Vita 'C' Bomb",
            description: "Vitamin C rich blend",
            price: "Rs.645",
        },
        {
            id: 131,
            name: "Tropical Turmeric",
            description: "Mango, Banana, Pineapple, Turmeric, Coco Milk, Lemon Juice",
            price: "Rs.625",
        },
    ],
    spirits: [
        {
            id: 132,
            name: "Royal Salute 21years",
            description: "Premium Scotch Whisky",
            price: "Rs.1550/3000 (30ml/60ml)",
        },
        {
            id: 133,
            name: "JW Blue Label",
            description: "Premium Blended Scotch",
            price: "Rs.1750/3400 (30ml/60ml)",
        },
        {
            id: 134,
            name: "JW Gold Label",
            description: "Premium Blended Scotch",
            price: "Rs.600/1200 (30ml/60ml)",
        },
        {
            id: 135,
            name: "JW Black Label",
            description: "Blended Scotch Whisky",
            price: "Rs.445/800 (30ml/60ml)",
        },
        {
            id: 136,
            name: "Glenfiddich 18years",
            description: "Single Malt Scotch",
            price: "Rs.1100/2200 (30ml/60ml)",
        },
        {
            id: 137,
            name: "Glenfiddich 12years",
            description: "Single Malt Scotch",
            price: "Rs.600/1100 (30ml/60ml)",
        },
        {
            id: 138,
            name: "Jack Daniel",
            description: "Tennessee Whiskey",
            price: "Rs.445/800 (30ml/60ml)",
        },
        {
            id: 139,
            name: "Grey Goose",
            description: "Premium French Vodka",
            price: "Rs.575/1100 (30ml/60ml)",
        },
        {
            id: 140,
            name: "Absolute Vodka",
            description: "Swedish Vodka",
            price: "Rs.375/650 (30ml/60ml)",
        },
        {
            id: 141,
            name: "Bombay Sapphire Gin",
            description: "Premium London Dry Gin",
            price: "Rs.490/950 (30ml/60ml)",
        },
        {
            id: 142,
            name: "Himalayan Reserve",
            description: "Local premium whisky",
            price: "Rs.555",
        },
        {
            id: 143,
            name: "OD Black Chimney",
            description: "Local premium whisky",
            price: "Rs.555",
        },
    ],
    wines: [
        {
            id: 144,
            name: "Wine Selection",
            description: "House wine selection",
            price: "Rs.2550",
        },
        {
            id: 145,
            name: "JP Chenet",
            description: "French wine",
            price: "Rs.2550",
        },
        {
            id: 146,
            name: "Bottega",
            description: "Italian wine",
            price: "Rs.3900",
        },
    ],
    beers: [
        {
            id: 147,
            name: "Barahsinghe",
            description: "Local premium beer",
            price: "Rs.645",
        },
        {
            id: 148,
            name: "Tuborg",
            description: "International beer",
            price: "Rs.595",
        },
        {
            id: 149,
            name: "Khumbu Kolsch",
            description: "Sherpa Craft Beer",
            price: "Rs.555 (500ml) / Rs.1650 (1.75L)",
        },
        {
            id: 150,
            name: "Himalayan Red",
            description: "Sherpa Craft Beer",
            price: "Rs.555 (500ml) / Rs.1650 (1.75L)",
        },
        {
            id: 151,
            name: "Indian Pale Ale (IPA)",
            description: "Sherpa Craft Beer",
            price: "Rs.595 (500ml) / Rs.1750 (1.75L)",
        },
    ],
    cocktails: [
        {
            id: 152,
            name: "Mimosa",
            description: "Champagne and orange juice",
            price: "Rs.695",
        },
        {
            id: 153,
            name: "Mojito",
            description: "Classic rum cocktail with mint",
            price: "Rs.645",
        },
        {
            id: 154,
            name: "Hot Rum Punch",
            description: "Warm spiced rum cocktail",
            price: "Rs.545",
        },
        {
            id: 155,
            name: "Blue Lagoon",
            description: "Tropical blue cocktail",
            price: "Rs.645",
        },
        {
            id: 156,
            name: "Vodka Sunrise",
            description: "Vodka with orange juice and grenadine",
            price: "Rs.645",
        },
    ],
}

function MenuSection({
    title,
    items,
    leftImage,
    rightImage,
}: { title: string; items: MenuItem[]; leftImage?: string; rightImage?: string }) {
    return (
        <div className="mb-12 bg-[#fff8f3] rounded-xl p-6 shadow-sm relative overflow-hidden">
            {(leftImage || rightImage) && (
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: leftImage && rightImage
                            ? `url(${leftImage}), url(${rightImage})`
                            : leftImage
                                ? `url(${leftImage})`
                                : rightImage
                                    ? `url(${rightImage})`
                                    : 'none',
                        backgroundPosition: leftImage && rightImage ? 'left center, right center' : 'center',
                        backgroundSize: '400px 300px',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.5,
                    }}
                />
            )}
            <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#67322C" }}>
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto lg:px-16">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 p-4 rounded-lg shadow-sm border border-gray-100 hover:scale-103 hover:-translate-y-0.5 transition-transform duration-200"
                            style={{
                                background: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(5px)',
                            }}
                        >
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

    const [searchQuery, setSearchQuery] = useState("")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const filteredMenuSections = Object.entries(menuSections).reduce((acc, [key, items]) => {
        const filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        if (filteredItems.length > 0) {
            acc[key] = filteredItems
        }
        return acc
    }, {} as { [key: string]: MenuItem[] })

    return (
        <div className="min-h-screen bg-gray-50 font-franklin">
            <Navigation />

            <div className="py-24 px-6 md:px-8 text-center bg-[#fff8f3]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: "#67322C" }}>
                    Dive Into Delicious <br /> Meal Dishes
                </h1>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marquee}>
                        {[...images, ...images, ...images].map((src, index) => (
                            <Image
                                key={index}
                                src={src || "/placeholder.svg"}
                                alt={`Dish ${(index % images.length) + 1}`}
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
                            src={selectedImage}
                            alt="Enlarged dish"
                            width={800}
                            height={600}
                            className="rounded-xl object-contain max-w-[80vw] max-h-[80vh]"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-3xl"
                            onClick={() => setSelectedImage(null)}
                        >
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
                    <div className="relative">
                        <Button
                            size="lg"
                            className="px-4 py-2 text-lg font-medium shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                            style={{ backgroundColor: "#c89343", color: "white" }}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <Download className="mr-2 h-5 w-5" /> Download Menu
                        </Button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                                <a
                                    href="/ccfoodmenu.pdf"
                                    download="Cafe_Cucina_Food_Menu.pdf"
                                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                                    style={{ color: "#67322C" }}
                                >
                                    <Download className="h-4 w-4" /> Food Menu
                                </a>
                                <a
                                    href="/ccdrinksmenu.pdf"
                                    download="Cafe_Cucina_Drinks_Menu.pdf"
                                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                                    style={{ color: "#67322C" }}
                                >
                                    <Download className="h-4 w-4" /> Drinks Menu
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <div className="max-w-6xl mx-auto">
                    {Object.entries(filteredMenuSections).map(([key, items]) => (
                        <MenuSection
                            key={key}
                            title={
                                key === "breakfast" ? "Breakfast Special Menu" :
                                    key === "starters" ? "Starters & Appetizers" :
                                        key === "sandwichBurger" ? "Sandwiches & Burgers" :
                                            key === "pasta" ? "Pasta & Risotto" :
                                                key === "oriental" ? "From Oriental Kitchen" :
                                                    key === "espresso" ? "Espresso & Hot Beverages" :
                                                        key === "coldBeverages" ? "Cold Beverages" :
                                                            key === "juices" ? "Fresh Juices & Smoothies" :
                                                                key.charAt(0).toUpperCase() + key.slice(1)
                            }
                            items={items}
                        />
                    ))}
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
