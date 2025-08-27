import { type NextRequest, NextResponse } from "next/server"
import { executeQuery } from "@/lib/database"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { name, description, price, image_url, is_vegetarian, is_available, sort_order } = body
    const itemId = params.id

    const query = `
      UPDATE menu_items 
      SET name = ?, description = ?, price = ?, image_url = ?, 
          is_vegetarian = ?, is_available = ?, sort_order = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `
    const queryParams = [
      name,
      description,
      price,
      image_url || null,
      is_vegetarian || false,
      is_available !== false,
      sort_order || 0,
      itemId,
    ]

    await executeQuery(query, queryParams)

    return NextResponse.json({
      success: true,
      message: "Menu item updated successfully",
    })
  } catch (error) {
    console.error("[v0] Error updating menu item:", error)
    return NextResponse.json({ success: false, error: "Failed to update menu item" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const itemId = params.id

    const query = "DELETE FROM menu_items WHERE id = ?"
    await executeQuery(query, [itemId])

    return NextResponse.json({
      success: true,
      message: "Menu item deleted successfully",
    })
  } catch (error) {
    console.error("[v0] Error deleting menu item:", error)
    return NextResponse.json({ success: false, error: "Failed to delete menu item" }, { status: 500 })
  }
}
