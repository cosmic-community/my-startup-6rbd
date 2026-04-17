// app/case-studies/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) notFound()

  const clientName = getMetafieldValue(caseStudy.metadata?.client_name) || caseStudy.title
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const headline = getMetafieldValue(caseStudy.metadata?.headline)
  const challenge = getMetafieldValue(caseStudy.metadata?.challenge)
  const solution = getMetafieldValue(caseStudy.metadata?.solution)
  const results = getMetafieldValue(caseStudy.metadata?.results)
  const image = caseStudy.metadata?.featured_image

  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="text-indigo-600 hover:underline mb-4 inline-block">← Back to Case Studies</Link>
          {industry && (
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              {industry}
            </span>
          )}
          <h1 className="text-5xl font-bold mb-4">{clientName}</h1>
          {headline && <p className="text-2xl text-gray-700">{headline}</p>}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {image?.imgix_url && (
          <img
            src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={clientName}
            className="w-full rounded-2xl mb-12"
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenge && (
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold mb-3 text-red-600">Challenge</h2>
              <div className="prose" dangerouslySetInnerHTML={{ __html: challenge }} />
            </div>
          )}
          {solution && (
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold mb-3 text-indigo-600">Solution</h2>
              <div className="prose" dangerouslySetInnerHTML={{ __html: solution }} />
            </div>
          )}
          {results && (
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold mb-3 text-green-600">Results</h2>
              <div className="prose" dangerouslySetInnerHTML={{ __html: results }} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}