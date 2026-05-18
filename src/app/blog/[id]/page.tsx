import styles from './Post.module.css';
import { getSortedPostsData, getPostData } from '@/lib/action/getPostsData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import BloForm from '@/components/blogPosts/BloForm';
import CommentsList from '@/components/blogPosts/CommentsList';

export const generateMetaData = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const posts = getSortedPostsData();
  const { id } = await params;

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  return {
    title: post.title,
  };
};

export const generateStaticParams = () => {
  const posts = getSortedPostsData();

  return posts.map((post) => ({ id: post.id }));
};

export const revalidate = 60;
export const dynamicParams = true;

const Post = async ({ params }: { params: Promise<{ id: string }> }) => {
  const posts = getSortedPostsData();
  const { id } = await params;

  if (!posts.find((post) => post.id === id)) notFound();

  const { title, image, data, contentHtml } = await getPostData(id);

  return (
    <main className={styles.post}>
      <Image
        className={styles.postImg}
        src={image}
        alt={title}
        width={1024}
        height={1065}
      />
      <div className={styles.postWrapper}>
        <h1 className={styles.postTitle}>{title}</h1>
        <p className={styles.postData}>{data}</p>
        <article className={styles.postContent}>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
        <CommentsList slug={id} />
        <BloForm slug={id} />
      </div>
    </main>
  );
};

export default Post;
