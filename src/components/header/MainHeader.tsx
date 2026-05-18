import styles from './MainHeader.module.css';
import NavBar from './NavBar';
import Image from 'next/image';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image
          src='/images/header/Logo.png'
          alt='word-press-image-logo'
          width='177'
          height='115'
        />
      </Link>

      <NavBar />
    </header>
  );
};

export default MainHeader;
