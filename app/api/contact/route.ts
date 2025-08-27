import { type NextRequest, NextResponse } from "next/server"
import { executeQuery, type ContactResponse } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
    }

    // Insert contact response into database
    const query = `
      INSERT INTO contact_responses (name, email, subject, message, status)
      VALUES (?, ?, ?, ?, 'new')
    `
    const params = [name, email, subject, message]

    const result = await executeQuery(query, params)

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      data: result,
    })
  } catch (error) {
    console.error("[v0] Error submitting contact form:", error)
    return NextResponse.json({ success: false, error: "Failed to submit contact form" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    let query = "SELECT * FROM contact_responses"
    const params: any[] = []

    if (status) {
      query += " WHERE status = ?"
      params.push(status)
    }

    query += " ORDER BY created_at DESC LIMIT ? OFFSET ?"
    params.push(limit.toString(), offset.toString())

    const responses = (await executeQuery(query, params)) as ContactResponse[]

    // Get total count
    let countQuery = "SELECT COUNT(*) as total FROM contact_responses"
    const countParams: any[] = []

    if (status) {
      countQuery += " WHERE status = ?"
      countParams.push(status)
    }

    const [countResult] = (await executeQuery(countQuery, countParams)) as any[]

    return NextResponse.json({
      success: true,
      data: responses,
      total: countResult.total,
      limit,
      offset,
    })
  } catch (error) {
    console.error("[v0] Error fetching contact responses:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch contact responses" }, { status: 500 })
  }
}
