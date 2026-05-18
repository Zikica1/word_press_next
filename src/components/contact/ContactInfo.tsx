import styles from './ContactInfo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ContactInfoCard from './ContactInfoCard';
import HeadingMain from '../heading/HeadingMain';
import { contacts } from '@/data/db';
import ContactInfoForm from './ContactInfoForm';

const ContactInfo = () => {
  return (
    <>
      <section className={styles.contactInfo}>
        <HeadingMain
          title="Let's Create Progress Together For Great Business"
          subtitle='Contact With Us'
        />

        <ul className={`${styles.contactInfoWrap} ${styles.grid}`}>
          {contacts.map((contact) => (
            <ContactInfoCard key={contact.id} contact={contact} />
          ))}
        </ul>
      </section>

      <section className={styles.contactLocation}>
        <div className={styles.contactLocationWrap}>
          <div className={styles.contactLeftCol}>
            <HeadingMain
              title='Do not Google Design Questions'
              subtitle='Contact With Us'
            />

            <p>
              Your email address will not be published. Required fields are
              marked*
            </p>
            <ContactInfoForm />
          </div>

          <div className={styles.contactRightCol}>
            <div className={styles.contactFormMap}>
              <Image
                src='/images/contact/contact-map.png'
                alt='map'
                width={895}
                height={768}
              />

              <Link
                href='https://maps.app.goo.gl/dcdBkmv7fxtdwYe6A'
                target='_blank'
              >
                <Image
                  src='/images/contact/google-2logo.jpg'
                  alt='google-logo'
                  width={63}
                  height={26}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
