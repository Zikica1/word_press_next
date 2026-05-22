import styles from './About.module.css';
import AboutUs from '@/components/about/AboutUs';
import OurTime from '@/components/about/OurTime';
import { aboutMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/jsonLD/JsonLd';
import { getAboutJsonLd } from '@/lib/seo/structuredData';

export const metadata = aboutMetadata();

const About = () => {
  const jsonLd = getAboutJsonLd();

  return (
    <main className={styles.about}>
      <JsonLd data={jsonLd} />
      <AboutUs />
      <OurTime />
    </main>
  );
};

export default About;
