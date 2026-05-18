import styles from './Services.module.css';
import ServiceCards from './ServiceCards';
import ButtonSec from '@/components/button/ButtonSec';
import ButtonSecStyles from '@/components/button/ButtonSec.module.css';
import { services } from '@/data/db';

const Services = () => {
  return (
    <section className={styles.service}>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceText}>
          <div className={styles.serviceHeading}>
            <p className={styles.servicePar}>Our Services</p>
            <h2 className={styles.serviceHead}>Ultimate Experiences</h2>
          </div>

          <p className={styles.serviceParSec}>
            Delivering cutting-edge WordPress solutions that elevate your online
            presence with seamless functionality, creative design, and unmatched
            performance.
          </p>
          <div className={styles.buttonSec}>
            <ButtonSec bg={ButtonSecStyles.buttonSecOne}>Read More</ButtonSec>
          </div>
        </div>
        <ul className={styles.serviceCardsWrap}>
          {services.map((service) => (
            <ServiceCards key={service.id} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
