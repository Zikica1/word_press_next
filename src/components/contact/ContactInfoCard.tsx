import styles from './ContactInfoCard.module.css';
import { Contact } from '../../../types';

const ContactInfoCard = ({ contact }: { contact: Contact }) => {
  const { title, info } = contact;

  const Icon = contact.Icon;

  return (
    <li className={`${styles.contactInfoCard} ${styles.grid}`}>
      <div className={styles.contactIcon}>
        <Icon />
      </div>

      <div className={styles.contactCardDes}>
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </li>
  );
};

export default ContactInfoCard;
