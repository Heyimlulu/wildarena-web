import Link from 'next/link';
import { getSortedPostsData } from '../utils/posts';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'Blog - Wild Arena',
  description: 'Latest news and updates from Wild Arena',
};

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-green-800 text-4xl font-bold mb-8">Dernières Actualités</h1>
          <p className="text-gray-600 mb-8">Explorez nos dernières actualités et mises à jour</p>
          <div className="grid gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="p-6 bg-white rounded-lg hover:bg-white/50 transition">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-400 mb-4">{new Date(post.date).toLocaleDateString('fr-FR')}</p>
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
