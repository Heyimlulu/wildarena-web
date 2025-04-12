import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Post } from '@/types/models/post';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    content: contentHtml,
    contentPreview: contentHtml.slice(0, 200) + '...',
    description: data.description,
    image: {
      url: data.image?.url || '/images/blog/default-blog-image.jpg',
      alt: data.image?.alt || data.title,
    },
  };
}

export async function getPostContentPreview(slug: string): Promise<string> {
  const post = await getPostData(slug);
  return post.contentPreview;
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getSortedPostsData(): Promise<Omit<Post, 'content'>[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    const contentPreview = await getPostContentPreview(slug);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      contentPreview: contentPreview,
      image: {
        url: data.image?.url || '/images/blog/default-blog-image.jpg',
        alt: data.image?.alt || data.title,
      },
    };
  });

  return (await Promise.all(allPostsData)).sort((a, b) => (a.date < b.date ? 1 : -1));
}
