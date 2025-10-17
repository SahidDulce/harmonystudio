export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
            <img src="/professional-aesthetician-in-modern-spa-setting.jpg" alt="About us" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
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
              <div>
                <div className="text-3xl font-serif font-semibold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-semibold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
