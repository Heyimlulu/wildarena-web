import Link from 'next/link';
import { getSortedPostsData } from '@/services/blog/posts';
import Image from 'next/image';

export const LatestNews = async () => {
  const posts = await getSortedPostsData();

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-green-800 font-semibold mb-8">Blog</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Card 1 */}
          <Link className="relative rounded-2xl overflow-hidden h-72 group" href={`/blog/${posts[0].slug}`}>
            <div className="relative w-full h-full">
              <Image
                src={posts[0].image.url}
                alt={posts[0].image.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-110"
                  priority
                />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">{new Intl.DateTimeFormat('fr-CH', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(posts[0].date))}</p>
                <h3 className="font-semibold text-green-700">{posts[0].title}</h3>
                <p className="text-sm text-gray-600">{posts[0].description}</p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link className="relative rounded-2xl overflow-hidden h-72 group" href={`/blog/${posts[1].slug}`}>
            <div className="relative w-full h-full">
              <Image
                src={posts[1].image.url}
                alt={posts[1].image.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-110"
                  priority
                />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">{new Intl.DateTimeFormat('fr-CH', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(posts[1].date))}</p>
                <h3 className="font-semibold text-green-700">{posts[1].title}</h3>
                <p className="text-sm text-gray-600">{posts[1].description}</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Recent Section */}
        <h2 className="text-2xl text-green-800 font-semibold mb-6">Derniers articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(2, 5).map((post) => (
            <Link className="rounded-2xl overflow-hidden bg-white shadow-md group" key={post.slug} href={`/blog/${post.slug}`}>
              <div className="relative h-56 w-full">
                  <Image
                    src={post.image.url}
                    alt={post.image.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h3 className="font-semibold text-white text-center mx-4">{post.title}</h3>
                  </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
