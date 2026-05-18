import styles from './ServiceCards.module.css';
import { Services } from '../../../../types';

const ServiceCards = ({ service }: { service: Services }) => {
  const Icon = service.Icon;
  const typeClass = styles[service.type];

  return (
    <li className={styles.serviceCardItem}>
      <div className={`${styles.serviceCard} ${typeClass}`}>
        <div className={styles.icon}>
          <Icon />
        </div>
        <h3 className={styles.serTitle}>{service.title}</h3>
        <p>{service.text}</p>
      </div>
    </li>
  );
};

export default ServiceCards;
