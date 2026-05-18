import styles from './Footer.module.css';
import HeadingMain from '../heading/HeadingMain';
import { footer } from '@/data/db';
import List from './List';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  const data = new Date();

  return (
    <footer className={styles.footer}>
      <div className={styles.ourCommunity}>
        <div className={styles.ourCommunityDes}>
          <div className={styles.ourContentText}>
            <HeadingMain
              title='Subscribe To Our Newsletter'
              subtitle='Join Our Community'
            />
            <p>
              Stay updated with the latest news, exclusive offers, and insights
              by joining our community today!
            </p>
          </div>

          <form className={styles.formCommunity}>
            <label htmlFor='email'>
              <input
                type='email'
                placeholder='Enter Your E-mail'
                id='email'
                name='email'
              />
            </label>

            <button type='submit'>Get Started</button>
          </form>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <Image
            src='/images/footer/footerLogo.png'
            alt='footerLogo'
            width={177}
            height={51}
            className={styles.logo}
          />
        </div>

        <div className={styles.footerListContainer}>
          {footer.map((items, index) => (
            <List {...items} key={items.id} id={index} />
          ))}
        </div>

        <div className={styles.footerLink}>
          <p className={styles.footerLinkPara}>
            Copyright &copy; {data.getFullYear()}{' '}
            <Link href='https://www.webworker.rs/sr'>WebWorker</Link> .All
            Rights Reserved.
          </p>
          <div className={styles.footerLinkIcons}>
            <Link href=''>
              <FaFacebookF />
            </Link>
            <Link href=''>
              <FaLinkedinIn />
            </Link>
            <Link href=''>
              <FaInstagram />
            </Link>
            <Link href=''>
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
