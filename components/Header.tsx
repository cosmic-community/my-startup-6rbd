import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">My Startup</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-700 hover:text-indigo-600 font-medium transition">Services</Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-indigo-600 font-medium transition">Case Studies</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition">Pricing</Link>
            <Link href="/team" className="text-gray-700 hover:text-indigo-600 font-medium transition">Team</Link>
            <Link href="/blog" className="text-gray-700 hover:text-indigo-600 font-medium transition">Blog</Link>
          </nav>
          <Link href="/pricing" className="hidden md:inline-flex bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:shadow-lg transition">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}