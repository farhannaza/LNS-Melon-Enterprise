import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Melon Enthusiast",
    content: "LNS Melon Enterprise delivers the sweetest, juiciest melons I've ever tasted. Their commitment to quality is unmatched!",
    rating: 5
  },
  {
    name: "Mike Thompson",
    role: "Restaurant Owner",
    content: "As a restaurant owner, I rely on fresh, high-quality produce. LNS Melon Enterprise never disappoints with their consistent quality and timely deliveries.",
    rating: 5
  },
  {
    name: "Emily Chen",
    role: "Health Coach",
    content: "I always recommend LNS Melon Enterprise to my clients. Their melons are not only delicious but also packed with nutrients. A great addition to any healthy diet!",
    rating: 4
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
