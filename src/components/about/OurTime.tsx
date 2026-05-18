import styles from './OurTime.module.css';
import { time } from '@/data/db';
import OurTimeCard from './OurTimeCard';

const OurTime = () => {
  return (
    <section className={styles.ourTime}>
      <div className={styles.ourTimeHeadline}>
        <p className={styles.ourTimePar}>Our team</p>
        <h2 className={styles.ourTimeHead}>
          Meet the minds shaping an industry
        </h2>
      </div>

      <ul className={styles.ourTimeImgList}>
        {time.map((t, index) => (
          <OurTimeCard key={index} item={t} />
        ))}
      </ul>
    </section>
  );
};

export default OurTime;
