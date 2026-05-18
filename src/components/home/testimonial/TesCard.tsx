'use client';

import styles from './TesCard.module.css';
import { TesCardProps } from '../../../../types';
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaQuoteLeft,
} from 'react-icons/fa';
import Image from 'next/image';

const TesCard = ({
  item,
  handleNextClick,
  handlePrevClick,
  index,
}: TesCardProps) => {
  const { cover, title, text, name, job, Icons } = item;
  return (
    <div
      className={`${styles.testCard} ${styles.gridContainerTest}`}
      style={{ translate: `${-100 * index}%` }}
    >
      <div className={styles.testImg}>
        <div className={styles.testImgWrap}>
          <Image src={cover} alt={name} width={946} height={499} />
          <div className={styles.testIcon}>
            <FaQuoteLeft />
          </div>
        </div>
      </div>
      <div className={styles.testCardDescription}>
        <h3>{title}</h3>
        <p className={styles.testText}>{text}</p>
        <div className={styles.starsContainer}>
          {Icons.map((Icon, id) => (
            <span key={id}>
              <Icon />
            </span>
          ))}
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className={styles.testButtonsContainer}>
          <button onClick={handlePrevClick} aria-label='previous'>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={handleNextClick} aria-label='next'>
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TesCard;
