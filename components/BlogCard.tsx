import Link from 'next/link'
import type { BlogPost } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function BlogCard({ post }: { post: BlogPost }) {
  const title = getMetafieldValue(post.metadata?.title) || post.title
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const image = post.metadata?.featured_image
  const date = getMetafieldValue(post.metadata?.published_date)
  const author = post.metadata?.author

  return (
    <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">
      {image?.imgix_url && (
        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {date && (
          <div className="text-sm text-gray-500 mb-2">
            {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        )}
        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition line-clamp-2">{title}</h3>
        {excerpt && <p className="text-gray-600 line-clamp-3 mb-4">{excerpt}</p>}
        {author && (
          <div className="text-sm text-gray-500">
            By {getMetafieldValue(author.metadata?.name) || author.title}
          </div>
        )}
      </div>
    </Link>
  )
}