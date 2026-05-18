import styles from './About.module.css';
import AboutUs from '@/components/about/AboutUs';
import OurTime from '@/components/about/OurTime';

const About = () => {
  return (
    <main className={styles.about}>
      <AboutUs />
      <OurTime />
    </main>
  );
};

export default About;
