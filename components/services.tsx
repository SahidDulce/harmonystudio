import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Heart, Droplet, Sun } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Signature Facials",
    description: "Customized facial treatments tailored to your unique skin needs and goals.",
    price: "From $85",
  },
  {
    icon: Heart,
    title: "Anti-Aging Treatments",
    description: "Advanced techniques to reduce fine lines and restore youthful radiance.",
    price: "From $120",
  },
  {
    icon: Droplet,
    title: "Hydration Therapy",
    description: "Deep moisturizing treatments for plump, glowing, healthy skin.",
    price: "From $95",
  },
  {
    icon: Sun,
    title: "Skin Rejuvenation",
    description: "Comprehensive treatments to refresh and revitalize your complexion.",
    price: "From $110",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional treatments designed to bring out your best
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-border/50 hover:border-primary/50 transition-colors">
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
          ))}
        </div>
      </div>
    </section>
  )
}
