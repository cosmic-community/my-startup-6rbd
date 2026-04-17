import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const name = getMetafieldValue(testimonial.metadata?.customer_name) || testimonial.title
  const role = getMetafieldValue(testimonial.metadata?.customer_role)
  const company = getMetafieldValue(testimonial.metadata?.company)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const avatar = testimonial.metadata?.avatar
  const rating = typeof testimonial.metadata?.rating === 'number' ? testimonial.metadata.rating : 5

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
      <p className="text-gray-700 text-lg mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-4">
        {avatar?.imgix_url && (
          <img
            src={`${avatar.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <div className="font-semibold">{name}</div>
          {(role || company) && (
            <div className="text-sm text-gray-600">
              {role}{role && company && ', '}{company}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}