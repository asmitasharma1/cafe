import { type NextRequest, NextResponse } from "next/server"
import { executeQuery } from "@/lib/database"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { status, admin_notes } = body
    const responseId = params.id

    const query = `
      UPDATE contact_responses 
      SET status = ?, admin_notes = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `
    const queryParams = [status, admin_notes || null, responseId]

    await executeQuery(query, queryParams)

    return NextResponse.json({
      success: true,
      message: "Contact response updated successfully",
    })
  } catch (error) {
    console.error("[v0] Error updating contact response:", error)
    return NextResponse.json({ success: false, error: "Failed to update contact response" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const responseId = params.id

    const query = "DELETE FROM contact_responses WHERE id = ?"
    await executeQuery(query, [responseId])

    return NextResponse.json({
      success: true,
      message: "Contact response deleted successfully",
    })
  } catch (error) {
    console.error("[v0] Error deleting contact response:", error)
    return NextResponse.json({ success: false, error: "Failed to delete contact response" }, { status: 500 })
  }
}
