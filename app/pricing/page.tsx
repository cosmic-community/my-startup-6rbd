import PricingCard from '@/components/PricingCard'
import TestimonialCard from '@/components/TestimonialCard'
import { getPricingTiers, getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Pricing - My Startup',
}

export default async function PricingPage() {
  const [tiers, testimonials] = await Promise.all([
    getPricingTiers(),
    getTestimonials(),
  ])

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the plan that's right for your business</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {tiers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {tiers.map(tier => (
                <PricingCard key={tier.id} tier={tier} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No pricing tiers available.</p>
          )}
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map(t => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}