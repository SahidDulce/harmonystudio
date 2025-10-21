"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.services": "Services",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.testimonials": "Testimonials",
    "nav.book": "Book Appointment",
    "hero.title": "Harmony Studio",
    "hero.subtitle": "Your sanctuary for beauty and wellness. Experience professional care tailored to your unique needs.",
    "hero.consultation": "Book Your Consultation",
    "hero.viewServices": "View Services",
    "services.title": "Our Services",
    "services.subtitle": "Professional treatments designed to bring out your best",
    "about.title": "Meet Margarita",
    "gallery.title": "Our Work",
    "gallery.subtitle": "Real results from real clients",
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Hear from our satisfied clients",
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to start your skincare journey? Book your appointment today.",
    "contact.form.title": "Send us a message",
    "contact.form.description": "Fill out the form and we'll get back to you shortly.",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.location": "Location",
    "contact.hours": "Hours",
    "footer.description": "Professional esthetic treatments in Hamilton, NJ.",
    "footer.rights": "All rights reserved.",
    "whatsapp.message": "Hello, I would like to schedule an appointment at Harmony Studio",
  },
  es: {
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.gallery": "Galería",
    "nav.testimonials": "Testimonios",
    "nav.book": "Agendar Cita",
    "hero.title": "Harmony Studio",
    "hero.subtitle": "Tu santuario de belleza y bienestar. Experimenta cuidado profesional adaptado a tus necesidades únicas.",
    "hero.consultation": "Agenda tu Consulta",
    "hero.viewServices": "Ver Servicios",
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Tratamientos profesionales diseñados para resaltar tu belleza",
    "about.title": "Conoce a Margarita",
    "gallery.title": "Nuestro Trabajo",
    "gallery.subtitle": "Resultados reales de clientes reales",
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.subtitle": "Escucha a nuestros clientes satisfechos",
    "contact.title": "Contáctanos",
    "contact.subtitle": "¿Lista para comenzar tu viaje de cuidado de la piel? Agenda tu cita hoy.",
    "contact.form.title": "Envíanos un mensaje",
    "contact.form.description": "Completa el formulario y te responderemos pronto.",
    "contact.form.firstName": "Nombre",
    "contact.form.lastName": "Apellido",
    "contact.form.email": "Correo",
    "contact.form.phone": "Teléfono",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    "contact.location": "Ubicación",
    "contact.hours": "Horario",
    "footer.description": "Tratamientos estéticos profesionales en Hamilton, NJ.",
    "footer.rights": "Todos los derechos reservados.",
    "whatsapp.message": "Hola, me gustaría agendar una cita en Harmony Studio",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
