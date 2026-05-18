import styles from './BlogPosts.module.css';
import { getSortedPostsData } from '@/lib/action/getPostsData';
import ListItem from './ListItem';
import { BlogProps } from '../../../types';

const BlogPosts = ({ limit, variant }: BlogProps) => {
  const posts = getSortedPostsData();
  const displayedPost = limit ? posts.slice(0, limit) : posts;
  return (
    <section className={styles.blogs}>
      <ul className={styles.blogWrapper}>
        {displayedPost.map((post) => (
          <ListItem key={post.id} post={post} variant={variant} />
        ))}
      </ul>
    </section>
  );
};

export default BlogPosts;
