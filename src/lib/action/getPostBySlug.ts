import { posts } from '@/data/posts';
import { BlogPost } from '../../../types';

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  const post = posts.find((post) => post.slug === slug);

  if (!post) return undefined;

  return post;
};
