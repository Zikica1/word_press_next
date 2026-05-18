import ContactInfo from '@/components/contact/ContactInfo';
import styles from '@/components/contact/ContactInfo.module.css';

const page = () => {
  return (
    <main className={styles.contact}>
      <ContactInfo />
    </main>
  );
};

export default page;
