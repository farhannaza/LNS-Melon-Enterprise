import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="hero-background bg-green-500 text-white py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">Fresh Melons, Delivered to You</h1>
        <p className="text-xl mb-8 text-shadow">Experience the sweetness of our premium melons, grown with care and delivered with love.</p>
        <Button size="lg" className="bg-white text-green-600 hover:bg-green-100">
          Explore Our Melons
        </Button>
      </div>
    </section>
  )
}
