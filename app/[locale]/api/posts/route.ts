import { NextResponse } from 'next/server';
import { getSortedPostsData } from '@/services/blog/posts';

export async function GET() {
  try {
    const posts = await getSortedPostsData();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 });
  }
}
