import Link from 'next/link';
import { getSortedPostsData } from '@/services/blog/posts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Wild Arena | Blog',
  description: 'Découvrez les dernières actualités et mises à jour de Wild Arena',
  keywords: "laser game, plein air, team building, activité groupe, laser tag, Valais, Suisse",
};

export default async function Blog() {
  const posts = await getSortedPostsData();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* Breadcrumb Navigation */}
      <nav className="mx-auto max-w-4xl lg:max-w-7xl px-6 lg:px-8 pt-6 pb-2 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-green-700 underline">Accueil</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-green-800 font-semibold">Blog</li>
        </ol>
      </nav>
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl lg:max-w-7xl px-6 lg:px-8">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-green-800 sm:text-5xl">
            Derni&egrave;res actualit&eacute;s
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Explorez nos dernières actualités et mises à jour
          </p>
          <div className="mt-16 grid gap-10 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="relative flex flex-col bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-shadow duration-200 group overflow-hidden"
                tabIndex={0}
                aria-labelledby={`post-title-${post.slug}`}
              >
                <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square">
                  <Image
                    src={post.image?.url || '/default-blog.jpg'}
                    alt={post.image?.alt || post.title || 'Image de l\'article'}
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-gray-900/10 pointer-events-none" />
                </div>
                <div className="flex-1 flex flex-col p-5 gap-2">
                  <div className="flex items-center gap-x-3 text-xs text-gray-500">
                    <time dateTime={post.date}>
                      {new Intl.DateTimeFormat('fr-CH', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(post.date))}
                    </time>
                    {/* Uncomment below if you add tags to your Post type in the future */}
                    {/*
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 ml-2">
                        {post.tags.map((tag: string) => (
                          <span key={tag} className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs font-medium">{tag}</span>
                        ))}
                      </div>
                    )}
                    */}
                  </div>
                  <h3 id={`post-title-${post.slug}`} className="mt-2 text-lg font-semibold text-green-800 group-hover:text-green-600 transition-colors">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded" aria-label={`Lire l\'article ${post.title}`}>
                      {post.title}
                    </Link>
                  </h3>
                  {/* Use contentPreview as excerpt/summary */}
                  {post.contentPreview && (
                    <p className="mt-1 text-sm text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.contentPreview }} />
                  )}
                  <div className="mt-auto pt-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block rounded bg-green-700 px-4 py-2 text-white font-semibold shadow hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                      aria-label={`Lire l'article ${post.title}`}
                    >
                      Lire l&apos;article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
