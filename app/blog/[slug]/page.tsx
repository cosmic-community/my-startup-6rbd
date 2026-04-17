// app/blog/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getMetafieldValue } from '@/lib/cosmic'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) notFound()

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const content = getMetafieldValue(post.metadata?.content)
  const image = post.metadata?.featured_image
  const date = getMetafieldValue(post.metadata?.published_date)
  const author = post.metadata?.author
  const authorName = author ? (getMetafieldValue(author.metadata?.name) || author.title) : null
  const authorPhoto = author?.metadata?.photo

  return (
    <article>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <Link href="/blog" className="text-indigo-600 hover:underline mb-6 inline-block">← Back to Blog</Link>
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        {excerpt && <p className="text-xl text-gray-600 mb-6">{excerpt}</p>}
        <div className="flex items-center gap-4 mb-8">
          {authorPhoto?.imgix_url && (
            <img
              src={`${authorPhoto.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
              alt={authorName || ''}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            {authorName && <div className="font-semibold">{authorName}</div>}
            {date && (
              <div className="text-sm text-gray-500">
                {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            )}
          </div>
        </div>
      </div>

      {image?.imgix_url && (
        <div className="max-w-5xl mx-auto px-4 mb-12">
          <img
            src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full rounded-2xl"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {content && (
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        )}
      </div>
    </article>
  )
}