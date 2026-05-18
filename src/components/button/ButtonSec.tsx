'use client';
import styles from './ButtonSec.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ButtonSecProps = {
  children: React.ReactNode;
  bg: string;
  url?: string;
};

const ButtonSec = ({ children, bg, url }: ButtonSecProps) => {
  const pathname = usePathname();

  const urlLink = url || pathname;

  return (
    <Link href={urlLink} className={`${styles.buttonSec} ${bg}`}>
      {children}
    </Link>
  );
};

export default ButtonSec;
