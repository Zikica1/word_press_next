import BlogPosts from '@/components/blogPosts/BlogPosts';

export const revalidate = 60;

const page = () => {
  return (
    <div>
      <BlogPosts />
    </div>
  );
};

export default page;
