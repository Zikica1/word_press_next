'use server';
import styles from './CommentsList.module.css';
import getComments from '@/lib/action/getComments';
import { FaUserCircle } from 'react-icons/fa';
type Props = {
  slug: string;
};

const CommentsList = async ({ slug }: Props) => {
  const comments = await getComments(slug);
  const reviews = comments?.length ?? 0;

  return (
    <section className={styles.comments}>
      <div className={styles.commentsReviews}>
        <p>Reviews</p>
        <div className={styles.reviewsCount}>{reviews}</div>
      </div>
      {reviews > 0 && (
        <ul className={styles.commentsWrapper}>
          {comments?.map((c, index) => (
            <li className={styles.commentsList} key={index}>
              <div className={styles.commentsUserWrap}>
                <FaUserCircle />
                <div>
                  <p className={styles.commentsName}>{c.name}</p>
                  <p>
                    {new Date(c.createdAt).toLocaleString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              <p>{c.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CommentsList;
