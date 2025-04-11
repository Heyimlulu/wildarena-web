import Header from '@/components/layout/Header';
import { getAllPostSlugs, getPostData } from '@/services/blog/posts';
import { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import '@/styles/blog-post.css';

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
  const post = await getPostData(params.slug);

  return (
    <div className="blog-post-container">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="blog-post-article">
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-date">{new Date(post.date).toLocaleDateString()}</p>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        <div className="flex justify-center mt-8">
          <Link href="/blog" className="blog-post-back-link">
            <ArrowLeft size={20} /> Retour au blog
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
