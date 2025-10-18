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
            <h2 className="font-serif text-4xl md:text-5xl font-light">Meet Margarita</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a licensed esthetician with a passion for skincare, I'm dedicated to helping you achieve your best
                skin through personalized treatments and expert care.
              </p>
              <p>
                Located in beautiful Hamilton, New Jersey, I combine advanced techniques with a warm, welcoming
                approach to create a relaxing experience that delivers real results.
              </p>
              <p>
                Whether you're looking to address specific skin concerns or simply maintain healthy, glowing skin, I'm
                here to guide you on your skincare journey with customized treatments designed just for you.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "1000+", label: "Happy Clients" },
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
