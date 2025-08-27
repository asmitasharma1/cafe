import mysql from "mysql2/promise"

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "cafecucina",
  port: Number.parseInt(process.env.DB_PORT || "3306"),
}

let connection: mysql.Connection | null = null

export async function getDbConnection() {
  if (!connection) {
    try {
      connection = await mysql.createConnection(dbConfig)
      console.log("Database connected successfully")
    } catch (error) {
      console.error("Database connection failed:", error)
      throw error
    }
  }
  return connection
}

export async function executeQuery(query: string, params: any[] = []) {
  try {
    const conn = await getDbConnection()
    if (query.includes("LIMIT") || query.includes("OFFSET")) {
      // Use conn.execute to handle parameters properly
      const [results] = await conn.execute(query, params)
      return results
    } else {
      const [results] = await conn.execute(query, params)
      return results
    }
  } catch (error) {
    console.error("Database query failed:", error)
    throw error
  }
}


export interface MenuItem {
    id: number
    category_id: number
    name: string
    description: string
    price: string
    image_url?: string
    is_vegetarian: boolean
    is_available: boolean
    sort_order: number
    created_at: string
    updated_at: string
    category_name?: string
    category_display_name?: string
  }
  
  export interface MenuCategory {
    id: number
    name: string
    display_name: string
    description?: string
    image_url?: string
    sort_order: number
    is_active: boolean
    created_at: string
    updated_at: string
  }
  

// Contact Response
export interface ContactResponse {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  admin_notes?: string | null;
  created_at: string;
  updated_at: string;
}