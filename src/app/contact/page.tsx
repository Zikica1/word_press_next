import ContactInfo from '@/components/contact/ContactInfo';
import styles from '@/components/contact/ContactInfo.module.css';
import JsonLd from '@/components/jsonLD/JsonLd';
import { getContactJsonLd } from '@/lib/seo/structuredData';
import { contactMetadata } from '@/lib/seo/metadata';

export const metadata = contactMetadata();

const page = () => {
  const jsonLd = getContactJsonLd();
  return (
    <main className={styles.contact}>
      <JsonLd data={jsonLd} />
      <ContactInfo />
    </main>
  );
};

export default page;
