import BlogCard from '@/components/BlogCard'
import { getBlogPosts } from '@/lib/cosmic'

export const metadata = {
  title: 'Blog - My Startup',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Insights, updates, and stories from our team</p>
        </div>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No blog posts available.</p>
        )}
      </div>
    </div>
  )
}