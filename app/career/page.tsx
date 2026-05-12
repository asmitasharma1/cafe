"use client"

import { FormEvent, useEffect, useState } from "react"
import { ArrowUp, Mail, Send } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SocialMediaSidebar from "@/components/social-media-sidebar"
import { Button } from "@/components/ui/button"

const contactEmail = "caferacucina@gmail.com"

const createGmailComposeUrl = (subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`

export default function CareerPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const position = formData.get("position")
    const experience = formData.get("experience")
    const message = formData.get("message")

    const body = [
      "Dear Cafe Cucina Team,",
      "",
      "I would like to apply for the following position at Cafe Cucina.",
      "",
      "==============================",
      "CAREER APPLICATION DETAILS",
      "==============================",
      "",
      `Full Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Position Applied For: ${position}`,
      `Experience: ${experience}`,
      "",
      "------------------------------",
      "Applicant Message",
      "------------------------------",
      "",
      message,
      "",
      "Thank you for reviewing my application. I look forward to hearing from you.",
      "",
      "Warm regards,",
      name,
    ].join("\n")

    window.open(createGmailComposeUrl(`Career Application - ${position}`, body), "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-[#f5e9db] font-sans">
      <Navigation />
      <SocialMediaSidebar />
      <main>
        <section
          className="min-h-[55vh] bg-cover bg-center relative flex items-center justify-center px-4"
          style={{ backgroundImage: "url(/cafeteam.webp)" }}
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 max-w-3xl text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "#c89343" }}>
              Career with Us
            </h1>
            <p className="text-base md:text-xl text-gray-100">
              Join Cafe Cucina as Head Chef, Head Barista, Supervisor, or share the role you are best suited for.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#67322C" }}>
                Apply Now
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#95541E" }}>
                We are looking for warm, reliable people who care about great food, coffee, and hospitality.
              </p>
              <div className="space-y-3 text-[#67322C]">
                <p className="font-semibold">Open roles</p>
                <p>Head Chef</p>
                <p>Head Barista</p>
                <p>Supervisor</p>
                <p className="flex items-center gap-2 pt-4">
                  <Mail className="h-5 w-5" />
                  {contactEmail}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#67322C" }}>
                  Full Name
                </label>
                <input id="name" name="name" required className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#67322C" }}>
                  Email
                </label>
                <input id="email" name="email" type="email" required className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: "#67322C" }}>
                  Phone
                </label>
                <input id="phone" name="phone" required className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium mb-2" style={{ color: "#67322C" }}>
                  Position
                </label>
                <select id="position" name="position" required className="w-full p-3 border rounded-lg bg-white">
                  <option>Head Chef</option>
                  <option>Head Barista</option>
                  <option>Supervisor</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-2" style={{ color: "#67322C" }}>
                  Experience
                </label>
                <input id="experience" name="experience" required className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#67322C" }}>
                  Message
                </label>
                <textarea id="message" name="message" rows={5} required className="w-full p-3 border rounded-lg" />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2" style={{ backgroundColor: "#c89343", color: "white" }}>
                Send Application <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-amber-800 to-amber-900 text-white p-3 rounded-full shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
