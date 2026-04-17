import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.name) || service.title
  const description = getMetafieldValue(service.metadata?.short_description)
  const icon = getMetafieldValue(service.metadata?.icon) || '💡'
  const image = service.metadata?.featured_image

  return (
    <Link href={`/services/${service.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-300 hover:shadow-2xl transition duration-300">
      {image?.imgix_url && (
        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <span className="text-indigo-600 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more <span>→</span>
        </span>
      </div>
    </Link>
  )
}