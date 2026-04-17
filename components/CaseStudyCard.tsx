import Link from 'next/link'
import type { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const clientName = getMetafieldValue(caseStudy.metadata?.client_name) || caseStudy.title
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const headline = getMetafieldValue(caseStudy.metadata?.headline)
  const image = caseStudy.metadata?.featured_image

  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
      {image?.imgix_url && (
        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={clientName}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {industry && (
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium mb-3">
            {industry}
          </span>
        )}
        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">{clientName}</h3>
        {headline && <p className="text-gray-600 line-clamp-2">{headline}</p>}
      </div>
    </Link>
  )
}