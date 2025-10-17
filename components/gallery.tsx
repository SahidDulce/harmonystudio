export function Gallery() {
  const images = [
    { query: "before and after facial treatment results", alt: "Treatment results 1" },
    { query: "glowing skin after aesthetic treatment", alt: "Treatment results 2" },
    { query: "professional skincare products display", alt: "Products" },
    { query: "relaxing spa treatment room interior", alt: "Treatment room" },
    { query: "aesthetic facial treatment in progress", alt: "Treatment session" },
    { query: "natural skincare ingredients and tools", alt: "Natural ingredients" },
  ]

  return (
    <section id="gallery" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Our Work</h2>
          <p className="text-muted-foreground text-lg">Real results from real clients</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={`/.jpg?height=400&width=400&query=${image.query}`}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
