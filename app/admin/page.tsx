"use client"

import { useState, useEffect } from "react"
import {
  Users,
  MessageSquare,
  UtensilsCrossed,
  BarChart3,
  Settings,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ContactResponse {
  id: number
  name: string
  email: string
  subject: string
  message: string
  status: "new" | "read" | "replied" | "archived"
  admin_notes?: string
  created_at: string
  updated_at: string
}

interface MenuItem {
  id: number
  category_id: number
  name: string
  description: string
  price: string
  image_url?: string
  is_vegetarian: boolean
  is_available: boolean
  sort_order: number
  category_name?: string
  category_display_name?: string
}

interface MenuCategory {
  id: number
  name: string
  display_name: string
  description?: string
  sort_order: number
  is_active: boolean
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "contacts" | "menu">("dashboard")
  const [contacts, setContacts] = useState<ContactResponse[]>([])
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [categories, setCategories] = useState<MenuCategory[]>([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("")

  // Fetch contact responses
  const fetchContacts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/contact?status=${statusFilter}&limit=50`)
      const result = await response.json()

      if (result.success) {
        setContacts(result.data)
        console.log("[v0] Contacts loaded:", result.data.length)
      }
    } catch (error) {
      console.error("[v0] Error fetching contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  // Fetch menu items
  const fetchMenuItems = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/menu/items")
      const result = await response.json()

      if (result.success) {
        setMenuItems(result.data)
        console.log("[v0] Menu items loaded:", result.data.length)
      }
    } catch (error) {
      console.error("[v0] Error fetching menu items:", error)
    } finally {
      setLoading(false)
    }
  }

  // Update contact status
  const updateContactStatus = async (id: number, status: string, notes?: string) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, admin_notes: notes }),
      })

      const result = await response.json()
      if (result.success) {
        fetchContacts() // Refresh the list
        console.log("[v0] Contact status updated successfully")
      }
    } catch (error) {
      console.error("[v0] Error updating contact status:", error)
    }
  }

  // Delete contact
  const deleteContact = async (id: number) => {
    if (!confirm("Are you sure you want to delete this contact response?")) return

    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      })

      const result = await response.json()
      if (result.success) {
        fetchContacts() // Refresh the list
        console.log("[v0] Contact deleted successfully")
      }
    } catch (error) {
      console.error("[v0] Error deleting contact:", error)
    }
  }

  useEffect(() => {
    if (activeTab === "contacts") {
      fetchContacts()
    } else if (activeTab === "menu") {
      fetchMenuItems()
    }
  }, [activeTab, statusFilter])

  // Filter contacts based on search
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Filter menu items based on search
  const filteredMenuItems = menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.category_display_name && item.category_display_name.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const getStatusBadge = (status: string) => {
    const variants = {
      new: "bg-blue-100 text-blue-800",
      read: "bg-yellow-100 text-yellow-800",
      replied: "bg-green-100 text-green-800",
      archived: "bg-gray-100 text-gray-800",
    }
    return variants[status as keyof typeof variants] || variants.new
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-[#67322C]">Café Cucina Admin</h1>
              <p className="text-gray-600">Manage your restaurant operations</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: "dashboard", label: "Dashboard", icon: BarChart3 },
              { id: "contacts", label: "Contact Responses", icon: MessageSquare },
              { id: "menu", label: "Menu Management", icon: UtensilsCrossed },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center px-1 py-4 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-[#c89343] text-[#c89343]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{contacts.length}</div>
                <p className="text-xs text-muted-foreground">
                  {contacts.filter((c) => c.status === "new").length} new messages
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Menu Items</CardTitle>
                <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{menuItems.length}</div>
                <p className="text-xs text-muted-foreground">
                  {menuItems.filter((item) => item.is_available).length} available
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Categories</CardTitle>
                <Filter className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{categories.length}</div>
                <p className="text-xs text-muted-foreground">Active menu categories</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Replies</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {contacts.filter((c) => c.status === "new" || c.status === "read").length}
                </div>
                <p className="text-xs text-muted-foreground">Require attention</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "contacts" && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89343]"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89343]"
              >
                <option value="">All Status</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {/* Contacts List */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Contact Responses</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {loading ? (
                  <div className="p-6 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#c89343] mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading contacts...</p>
                  </div>
                ) : filteredContacts.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">No contact responses found.</div>
                ) : (
                  filteredContacts.map((contact) => (
                    <div key={contact.id} className="p-6 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-sm font-medium text-gray-900">{contact.name}</h4>
                            <Badge className={getStatusBadge(contact.status)}>{contact.status}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{contact.email}</p>
                          <p className="text-sm font-medium text-gray-900 mb-2">{contact.subject}</p>
                          <p className="text-sm text-gray-700 mb-3 line-clamp-2">{contact.message}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(contact.created_at).toLocaleDateString()} at{" "}
                            {new Date(contact.created_at).toLocaleTimeString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <select
                            value={contact.status}
                            onChange={(e) => updateContactStatus(contact.id, e.target.value)}
                            className="text-xs px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#c89343]"
                          >
                            <option value="new">New</option>
                            <option value="read">Read</option>
                            <option value="replied">Replied</option>
                            <option value="archived">Archived</option>
                          </select>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteContact(contact.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "menu" && (
          <div className="space-y-6">
            {/* Search and Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89343]"
                />
              </div>
              <Button className="bg-[#c89343] hover:bg-[#b8843d] text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Menu Item
              </Button>
            </div>

            {/* Menu Items List */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Menu Items</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {loading ? (
                  <div className="p-6 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#c89343] mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading menu items...</p>
                  </div>
                ) : filteredMenuItems.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">No menu items found.</div>
                ) : (
                  filteredMenuItems.map((item) => (
                    <div key={item.id} className="p-6 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                            {item.is_vegetarian && <Badge className="bg-green-100 text-green-800">V</Badge>}
                            <Badge
                              className={item.is_available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                            >
                              {item.is_available ? "Available" : "Unavailable"}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            {item.category_display_name || item.category_name}
                          </p>
                          <p className="text-sm text-gray-700 mb-2 line-clamp-2">{item.description}</p>
                          <p className="text-sm font-medium text-[#c89343]">{item.price}</p>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 bg-transparent"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
