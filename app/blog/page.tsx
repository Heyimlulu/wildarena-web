import Link from 'next/link';
import { getSortedPostsData } from '@/services/blog/posts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Blog - Wild Arena',
  description: 'Latest news and updates from Wild Arena',
};

export default async function Blog() {
  const posts = await getSortedPostsData();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl lg:max-w-7xl px-6 lg:px-8">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-green-800 sm:text-5xl">
              Dernières Actualités
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Explorez nos dernières actualités et mises à jour
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <article key={post.slug} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <Image
                      src={post.image.url}
                      alt={post.image.alt}
                      width={1000}
                      height={600}
                      className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.date} className="text-gray-500">
                        {new Intl.DateTimeFormat('fr-CH', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(post.date))}
                      </time>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg/6 font-semibold text-green-800 group-hover:text-green-600">
                        <Link href={`/blog/${post.slug}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 text-sm/6 text-gray-600" dangerouslySetInnerHTML={{ __html: post.contentPreview }} />
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
