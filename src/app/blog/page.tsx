import BlogPostPage from '@/components/BlogPage/BlogPostPage';
import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

// This is a SERVER component
// It receives searchParams from the URL, e.g., /blog?slug=the-maryland-chameleon
export default async function Page({ searchParams }: PageProps) {
  // Await searchParams if it's a Promise (for Next.js server components)
  const params = typeof searchParams.then === 'function' ? await searchParams : searchParams;
  const slug = params.slug;

  // Ensure slug is a string
  if (typeof slug !== 'string') {
    return notFound();
  }

  const post = getPostBySlug(slug);
  

  // If no post is found for the given slug, show a 404 page
  if (!post) {
    return notFound();
  }

  // Pass the fetched post data as a prop to the client component
  return <BlogPostPage post={post} />;
}
