'use client';
import styles from './NavBar.module.css';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <ul className={styles.navBody}>
          <li>
            <Link
              href='/'
              className={pathname === '/' ? styles.active : ''}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className={pathname === '/about' ? styles.active : ''}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/blog'
              className={pathname === '/blog' ? styles.active : ''}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className={pathname === '/contact' ? styles.active : ''}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href='/admin'
              className={pathname === '/admin' ? styles.active : ''}
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </li>
          <li>
            <Link
              href='/login'
              className={pathname === '/login' ? styles.active : ''}
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleClick}
        className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      >
        <span className={styles.hamburgerTop}></span>
        <span className={styles.hamburgerMiddle}></span>
        <span className={styles.hamburgerBottom}></span>
      </button>
    </>
  );
};

export default NavBar;
