"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Heart, Droplet, Sun, Zap, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

const services = [
  {
    icon: Sparkles,
    title: "Custom Facials",
    description: "Personalized facial treatments designed for your specific skin type and concerns.",
    price: "From $90",
  },
  {
    icon: Heart,
    title: "Anti-Aging Treatments",
    description: "Advanced skincare solutions to reduce fine lines, wrinkles, and restore youthful glow.",
    price: "From $130",
  },
  {
    icon: Droplet,
    title: "Hydrafacial",
    description: "Deep cleansing and hydration treatment for instantly radiant, refreshed skin.",
    price: "From $150",
  },
  {
    icon: Zap,
    title: "Chemical Peels",
    description: "Professional peels to improve texture, tone, and overall skin appearance.",
    price: "From $100",
  },
  {
    icon: Sun,
    title: "Microdermabrasion",
    description: "Exfoliating treatment to reveal smoother, brighter, more even-toned skin.",
    price: "From $110",
  },
  {
    icon: Star,
    title: "Dermaplaning",
    description: "Gentle exfoliation to remove dead skin and peach fuzz for a flawless complexion.",
    price: "From $85",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">{t("services.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border/50 hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl font-medium">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-primary">{service.price}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
