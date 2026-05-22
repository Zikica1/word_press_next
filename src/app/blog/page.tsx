import BlogPosts from '@/components/blogPosts/BlogPosts';
import { blogMetadata } from '@/lib/seo/metadata';
import { getBlogJsonLd } from '@/lib/seo/structuredData';
import JsonLd from '@/components/jsonLD/JsonLd';

export const metadata = blogMetadata();

export const revalidate = 60;

const page = () => {
  const jsonLd = getBlogJsonLd();
  return (
    <main>
      <JsonLd data={jsonLd} />
      <BlogPosts />
    </main>
  );
};

export default page;
