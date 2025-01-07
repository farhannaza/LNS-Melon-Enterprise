import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-green-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Fresh Melons, Delivered to You</h1>
        <p className="text-xl mb-8">Experience the sweetness of our premium melons, grown with care and delivered with love.</p>
        <Button size="lg" className="bg-white text-green-600 hover:bg-green-100">
          Explore Our Melons
        </Button>
      </div>
    </section>
  )
}

