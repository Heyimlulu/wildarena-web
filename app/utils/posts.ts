import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Post } from '../types/post';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    content: contentHtml,
    title: data.title,
    date: data.date,
    description: data.description,
  };
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return fileName.replace(/\.md$/, '');
  });
}

export function getSortedPostsData(): Omit<Post, 'content'>[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
