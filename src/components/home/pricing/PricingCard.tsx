import styles from './PricingCard.module.css';
import { Pricing } from '../../../../types';
import Link from 'next/link';

const PricingCard = ({ value }: { value: Pricing }) => {
  const { subject, type, pricing, text } = value;
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.pricingCard}>
        <div className={styles.pricingCardHed}>
          <h3>{subject}</h3>
          <h5>{type}</h5>
        </div>
        <div className={styles.pricingCardBody}>
          <div className={styles.textWrap}>
            <span>$</span>
            <p> {pricing}</p>
            <span>/Mont</span>
          </div>
        </div>
        <div className={styles.pricingCardFoot}>
          <ul className={styles.pricingList}>
            {text.map((t, index) => (
              <li key={index}>{t.list}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.pricingCardPurchase}>
        <Link href=''>Purchase &rarr;</Link>
      </div>
    </div>
  );
};

export default PricingCard;
