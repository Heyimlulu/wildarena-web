import Header from '@/components/layout/Header';
import { getAllPostSlugs, getPostData } from '@/services/blog/posts';
import { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import '@/styles/blog-post.css';
import { getSortedPostsData } from '@/services/blog/posts';
import Image from 'next/image';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostData(params.slug);
  return {
    title: `${post.title} - Wild Arena Blog`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const posts = await getSortedPostsData();
  const post = await getPostData(params.slug);

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
          <li>
            <Link href="/blog" className="hover:text-green-700 underline">Blog</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-green-800 font-semibold line-clamp-1 max-w-xs" title={post.title}>{post.title}</li>
        </ol>
      </nav>
      <main className="mx-auto max-w-4xl lg:max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Article */}
          <article className="bg-white rounded-2xl shadow-sm border p-6 md:p-10 flex-1 flex flex-col gap-6 min-w-0">
            <Image
              src={post.image.url}
              alt={post.image.alt}
              width={1000}
              height={600}
              className="w-full h-auto rounded-xl object-cover"
            />
            <time dateTime={post.date} className="text-sm text-gray-500 block -mb-4">
              {new Date(post.date).toLocaleDateString('fr-CH', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <h1 className="text-3xl text-green-800 font-bold leading-tight">{post.title}</h1>
            <div className="blog-post-content prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=https://wildarena.ch/blog/${post.slug}`} target="_blank" rel="noreferrer" aria-label="Partager sur Facebook">
                <Facebook className="w-8 h-8 text-green-500 hover:text-green-600" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=https://wildarena.ch/blog/${post.slug}&text=${post.title}`} target="_blank" rel="noreferrer" aria-label="Partager sur Twitter">
                <Twitter className="w-8 h-8 text-green-500 hover:text-green-600" />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://wildarena.ch/blog/${post.slug}`} target="_blank" rel="noreferrer">
                <Linkedin className="w-8 h-8 text-green-500 hover:text-green-600" />
              </a>
              <a href={`https://www.instagram.com/wildarena`} target="_blank" rel="noreferrer">
                <Instagram className="w-8 h-8 text-green-500 hover:text-green-600" />
              </a>
            </div>
            <div className="flex mt-8">
              <Link href="/blog" className="flex items-center gap-2 text-green-700 hover:underline">
                <ArrowLeft size={20} /> Retour au blog
              </Link>
            </div>
          </article>
          {/* Sidebar: Recent Posts */}
          <aside className="lg:w-80 w-full flex-shrink-0 mt-10 lg:mt-0">
            <div className="bg-white border rounded-2xl shadow-sm p-6 sticky top-36">
              <h2 className="text-lg font-semibold mb-4">Articles récents</h2>
              <div className="space-y-4">
                {posts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 6)
                  .map((post) => (
                    <div key={post.slug} className="flex items-start space-x-4">
                      <Image src={post.image.url} alt={post.image.alt} width={1000} height={600} className="w-16 h-16 rounded object-cover" />
                      <Link href={`/blog/${post.slug}`} className="flex flex-col hover:underline">
                        <p className="font-medium text-green-800 line-clamp-2">{post.title}</p>
                        <time dateTime={post.date} className="text-sm text-gray-400">
                          {new Date(post.date).toLocaleDateString('fr-CH', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
