import styles from './Button.module.css';
import Link from 'next/link';

type buttonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: buttonProps) => {
  return (
    <Link className={styles.buttonMain} href=''>
      {children}
    </Link>
  );
};

export default Button;
