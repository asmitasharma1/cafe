import { NextResponse } from "next/server"
import { executeQuery, type MenuItem, type MenuCategory } from "@/lib/database"

export async function GET() {
  try {
    // Get all categories with their menu items
    const categoriesQuery = `
      SELECT * FROM menu_categories 
      WHERE is_active = TRUE 
      ORDER BY sort_order ASC
    `
    const categories = (await executeQuery(categoriesQuery)) as MenuCategory[]

    const menuData: { [key: string]: MenuItem[] } = {}

    for (const category of categories) {
      const itemsQuery = `
        SELECT * FROM menu_items 
        WHERE category_id = ? AND is_available = TRUE 
        ORDER BY sort_order ASC
      `
      const items = (await executeQuery(itemsQuery, [category.id])) as MenuItem[]
      menuData[category.name] = items
    }

    return NextResponse.json({
      success: true,
      data: {
        categories,
        menuSections: menuData,
      },
    })
  } catch (error) {
    console.error("[v0] Error fetching menu:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch menu data" }, { status: 500 })
  }
}
