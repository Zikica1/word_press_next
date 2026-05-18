import styles from './ListItem.module.css';
import stylesButton from '../button/ButtonSec.module.css';
import { PostProps } from '../../../types';
import Image from 'next/image';
import ButtonSec from '../button/ButtonSec';

type ListItemProps = {
  post: PostProps;
  variant?: string;
};

const ListItem = ({ post, variant }: ListItemProps) => {
  const { id, title, image, date } = post;

  return (
    <li className={styles.blogItem}>
      <Image
        className={variant === 'home' ? styles.homeImg : styles.blogImg}
        src={image}
        alt={title}
        width={1024}
        height={1065}
        sizes='(max-width: 768px) 100vw, 50vw'
      />
      <div className={styles.blogContent}>
        <p
          className={
            variant === 'home' ? styles.homeSubhead : styles.blogSubhead
          }
        >
          {date}
        </p>
        <h3
          className={variant === 'home' ? styles.homeTitle : styles.blogTitle}
        >
          {title}
        </h3>
        <ButtonSec
          bg={
            variant === 'home'
              ? stylesButton.buttonSecFor
              : stylesButton.buttonSecThree
          }
          url={`blog/${id}`}
        >
          Read More
        </ButtonSec>
      </div>
    </li>
  );
};

export default ListItem;
