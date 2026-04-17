// app/services/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getService } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) notFound()

  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const fullDesc = getMetafieldValue(service.metadata?.full_description)
  const icon = getMetafieldValue(service.metadata?.icon) || '💡'
  const image = service.metadata?.featured_image

  const featuresRaw = service.metadata?.key_features
  let features: string[] = []
  if (Array.isArray(featuresRaw)) {
    features = featuresRaw.map(f => getMetafieldValue(f)).filter(Boolean)
  } else if (typeof featuresRaw === 'string') {
    features = featuresRaw.split('\n').filter(Boolean)
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-indigo-600 hover:underline mb-4 inline-block">← Back to Services</Link>
          <div className="text-6xl mb-6">{icon}</div>
          <h1 className="text-5xl font-bold mb-4">{name}</h1>
          {shortDesc && <p className="text-xl text-gray-700">{shortDesc}</p>}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {image?.imgix_url && (
          <img
            src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full rounded-2xl mb-12"
          />
        )}

        {fullDesc && (
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: fullDesc }} />
        )}

        {features.length > 0 && (
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}