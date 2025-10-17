"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance">
              Reveal Your Natural Radiance
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Experience personalized aesthetic treatments designed to enhance your natural beauty. Expert care, proven
              results, and a commitment to your confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={scrollToContact}>
                Book Your Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("services")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Services
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <img
              src="/elegant-spa-treatment-room-with-soft-lighting-and-.jpg"
              alt="Aesthetic treatment room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
