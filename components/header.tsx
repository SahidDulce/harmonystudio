"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-sm transition-all duration-300 ${
          isScrolled ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+17604341000" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone size={14} />
                <span>(609) 943-1580</span>
              </a>
              <a
                href="mailto:info@harmonystudio.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail size={14} />
                <span>info@harmonystudio.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Clock size={14} />
              <span className="text-xs md:text-sm">Mon-Sat: 9AM-6PM | Sun: Closed</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.header
        className={`fixed left-0 right-0 z-40 bg-background shadow-md border-b border-border transition-all duration-300 ${
          isScrolled ? "top-0" : "top-10"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}
          >
            <div
              className={`font-serif font-semibold tracking-tight transition-all duration-300 ${
                isScrolled ? "text-xl" : "text-2xl md:text-3xl"
              }`}
            >
              Harmony Studio
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                Testimonials
              </button>
              <Button onClick={() => scrollToSection("contact")} size={isScrolled ? "sm" : "default"}>
                Book Appointment
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className="md:hidden pb-4 flex flex-col gap-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors"
                >
                  Testimonials
                </button>
                <Button onClick={() => scrollToSection("contact")} className="w-full">
                  Book Appointment
                </Button>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  )
}
