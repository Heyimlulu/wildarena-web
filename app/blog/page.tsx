import Link from 'next/link';
import { getSortedPostsData } from '../utils/posts';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'Blog - WildWar',
  description: 'Latest news and updates from WildWar',
};

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-green-800 text-4xl font-bold mb-8">Blog</h1>
          <div className="grid gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="p-6 bg-white/5 rounded-lg hover:bg-white/80 transition">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-400 mb-4">{new Date(post.date).toLocaleDateString()}</p>
                  <p className="text-gray-600">{post.description}</p>
                </Link>
              </article>
            ))}
          </div>
        </main>
      <Footer />
    </div>
  );
}
