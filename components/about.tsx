"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/professional-aesthetician-in-modern-spa-setting.jpg"
              alt="About us"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light">Expert Care, Personal Touch</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 15 years of experience in aesthetic treatments, we bring expertise, passion, and personalized
                care to every client.
              </p>
              <p>
                Our approach combines proven techniques with the latest innovations in skincare, ensuring you receive
                treatments that are both effective and tailored to your unique needs.
              </p>
              <p>
                We believe that true beauty comes from confidence, and our mission is to help you feel your absolute
                best in your own skin.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Happy Clients" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl font-serif font-semibold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
