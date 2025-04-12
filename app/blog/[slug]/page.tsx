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
    <div className="blog-post-container">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 space-y-6">
          <Image
            src={post.image.url}
            alt={post.image.alt}
            width={1000}
            height={600}
            className="w-full h-auto rounded-lg"
          />

          <h1 className="text-3xl text-green-800 font-bold leading-tight mt-2">{post.title}</h1>

          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="flex justify-center space-x-4 mt-8">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://wildarena.lulu.cloud/blog/${post.slug}`} target="_blank" rel="noreferrer">
              <Facebook className="w-8 h-8 text-green-500 hover:text-green-600" />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=https://wildarena.lulu.cloud/blog/${post.slug}&text=${post.title}`} target="_blank" rel="noreferrer">
              <Twitter className="w-8 h-8 text-green-500 hover:text-green-600" />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://wildarena.lulu.cloud/blog/${post.slug}`} target="_blank" rel="noreferrer">
              <Linkedin className="w-8 h-8 text-green-500 hover:text-green-600" />
            </a>
            <a href={`https://www.instagram.com/wildarena`} target="_blank" rel="noreferrer">
              <Instagram className="w-8 h-8 text-green-500 hover:text-green-600" />
            </a>
          </div>
        </article>

        <div className="space-y-8">
          {/* Latest News */}
          <div className='sm:sticky sm:top-36'>
            <h2 className="text-lg font-semibold mb-4">Articles récents</h2>

            {posts.slice(0, 3).map((post) => (
              <div key={post.slug} className="flex items-start space-x-4 mb-4">
                <img src={post.image.url} className="w-16 h-16 rounded" />
                <Link href={`/blog/${post.slug}`} className="flex flex-col hover:underline">
                  <p className="font-medium text-green-800">{post.title}</p>
                  <p className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString('fr-FR')}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex mt-8">
          <Link href="/blog" className="flex items-center gap-2 text-green-700 hover:underline">
            <ArrowLeft size={20} /> Retour au blog
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
