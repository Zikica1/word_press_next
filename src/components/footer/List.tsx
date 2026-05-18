import styles from './List.module.css';
import { Footer } from '../../../types';

const List = ({ title, text }: Footer) => {
  return (
    <div>
      <h3 className={styles.footerTitle}>{title}</h3>
      <ul className={styles.listWrapper}>
        {text.map((value, id) => (
          <li key={id}>{value.list}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
