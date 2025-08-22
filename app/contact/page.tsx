"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: "" }))
    }

    const validateForm = () => {
        let isValid = true
        const newErrors = { name: "", email: "", subject: "", message: "" }

        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
            isValid = false
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
            isValid = false
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format"
            isValid = false
        }
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required"
            isValid = false
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required"
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm()) return

        setIsSubmitting(true)
        try {
            // Simulate API call (replace with actual API endpoint)
            console.log("Form submitted:", formData)
            setSubmitStatus("success")
            setFormData({ name: "", email: "", subject: "", message: "" })
        } catch (error) {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 font-franklin">
            <Navigation />
            <main>
                {/* Hero Section */}
                <div
                    className="min-h-[40vh] pt-20 bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
                    style={{
                        backgroundImage: "url(/location.webp)",
                    }}
                >
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-xs" />
                    <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4 md:px-6">
                        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
                                style={{ color: "#c89343" }}
                            >
                                Contact Us
                            </h1>
                            <p className="text-sm md:text-lg font-light italic px-2 text-gray-200">
                                Reach out to Café Cucina for inquiries, reservations, or feedback. We’re here to connect!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form and Info Section */}
                <div className="py-12 md:py-16 px-4 md:px-6 bg-white">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
                        {/* Contact Form */}
                        <div>
                            <h2
                                className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left"
                                style={{ color: "#67322C" }}
                            >
                                Get in Touch
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-base font-medium" style={{ color: "#67322C" }}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89343]"
                                        style={{ borderColor: "#67322C" }}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-base font-medium" style={{ color: "#67322C" }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89343]"
                                        style={{ borderColor: "#67322C" }}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-base font-medium" style={{ color: "#67322C" }}>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89343]"
                                        style={{ borderColor: "#67322C" }}
                                    />
                                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-base font-medium" style={{ color: "#67322C" }}>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89343]"
                                        style={{ borderColor: "#67322C" }}
                                    />
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>
                                <div className="flex justify-center md:justify-start">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="px-6 md:px-8 py-3 text-base md:text-lg font-medium shadow-md flex items-center gap-2"
                                        style={{ backgroundColor: "#c89343", color: "white" }}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        <Send className="w-5 h-5" />
                                    </Button>
                                </div>
                                {submitStatus === "success" && (
                                    <p className="text-green-600 text-center md:text-left mt-4">
                                        Message sent successfully! We'll get back to you soon.
                                    </p>
                                )}
                                {submitStatus === "error" && (
                                    <p className="text-red-600 text-center md:text-left mt-4">
                                        Failed to send message. Please try again later.
                                    </p>
                                )}
                            </form>
                        </div>

                        {/* Contact Info and Image */}
                        <div>
                            <h2
                                className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left"
                                style={{ color: "#67322C" }}
                            >
                                Contact Information
                            </h2>
                            <div className="space-y-4 md:space-y-6 text-[#67322C] mb-8">
                                <div className="flex items-center gap-4 justify-center md:justify-start">
                                    <MapPin className="w-6 h-6 flex-shrink-0" />
                                    <p className="text-base md:text-lg">Pulchowk Square, Lalitpur</p>
                                </div>
                                <div className="flex items-center gap-4 justify-center md:justify-start">
                                    <Phone className="w-6 h-6 flex-shrink-0" />
                                    <p className="text-base md:text-lg">9861601155</p>
                                </div>
                                <div className="flex items-center gap-4 justify-center md:justify-start">
                                    <Mail className="w-6 h-6 flex-shrink-0" />
                                    <p className="text-base md:text-lg">caferacucina@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-4 justify-center md:justify-start">
                                    <Clock className="w-6 h-6 flex-shrink-0" />
                                    <p className="text-base md:text-lg">Sun-Sat Served 7 am to 9 pm</p>
                                </div>
                            </div>
                            <div className="flex px-10">
                                <Image
                                    src="/interior.webp"
                                    alt="Cafe Contact"
                                    width={300}
                                    height={200}
                                    className="shadow-lg object-cover md:w-[350px] md:h-[230px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}