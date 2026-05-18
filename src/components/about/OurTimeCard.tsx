import styles from './OurTimeCard.module.css';
import { TeamMember } from '../../../types';
import Image from 'next/image';
import Link from 'next/link';

const OurTimeCard = ({ item }: { item: TeamMember }) => {
  return (
    <li className={styles.timeImgCard}>
      <Image src={item.img} alt={item.name} width={792} height={330} />
      <div className={styles.timeDetailCard}>
        <h5>{item.position}</h5>
        <h3 className={styles.timeDetailCardTit}>{item.name}</h3>
        <ul className={styles.timeIcons}>
          {item.Icons.map((Icon, index) => (
            <li className={styles.timeIcon} key={index}>
              <Link href=''>
                <Icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default OurTimeCard;
