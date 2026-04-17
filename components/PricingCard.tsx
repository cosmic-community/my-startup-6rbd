import type { PricingTier } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function PricingCard({ tier }: { tier: PricingTier }) {
  const planName = getMetafieldValue(tier.metadata?.plan_name) || tier.title
  const price = getMetafieldValue(tier.metadata?.price)
  const period = getMetafieldValue(tier.metadata?.billing_period)
  const description = getMetafieldValue(tier.metadata?.description)
  const ctaText = getMetafieldValue(tier.metadata?.cta_text) || 'Get Started'
  const highlighted = tier.metadata?.highlighted === true
  
  const featuresRaw = tier.metadata?.features
  let features: string[] = []
  if (Array.isArray(featuresRaw)) {
    features = featuresRaw.map(f => getMetafieldValue(f)).filter(Boolean)
  } else if (typeof featuresRaw === 'string') {
    features = featuresRaw.split('\n').filter(Boolean)
  }

  return (
    <div className={`rounded-2xl p-8 ${highlighted ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl scale-105' : 'bg-white border border-gray-200'}`}>
      {highlighted && (
        <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold mb-4">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{planName}</h3>
      {description && <p className={`mb-6 ${highlighted ? 'text-indigo-100' : 'text-gray-600'}`}>{description}</p>}
      <div className="mb-6">
        <span className="text-5xl font-extrabold">${price}</span>
        {period && <span className={highlighted ? 'text-indigo-100' : 'text-gray-500'}>/{period}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-white' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-semibold transition ${highlighted ? 'bg-white text-indigo-600 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
        {ctaText}
      </button>
    </div>
  )
}