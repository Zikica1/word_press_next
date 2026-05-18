import styles from './Pricing.module.css';
import HeadingMain from '@/components/heading/HeadingMain';
import PricingCard from './PricingCard';
import { pricing } from '@/data/db';

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div>
        <HeadingMain
          title='Choose The Right Plan For Your Business'
          subtitle='Pricing Table'
        />
      </div>

      <div className={styles.pricingCardsContainer}>
        {pricing.map((price) => (
          <PricingCard key={price.id} value={price} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
