import styles from './HeadingMain.module.css';

type TitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const HeadingMain = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className={`${styles.hadingMain} ${className || ''}`}>
      <h5 className={styles.subtitle}>{subtitle}</h5>
      <h2>{title}</h2>
    </div>
  );
};

export default HeadingMain;
