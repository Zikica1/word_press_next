import styles from './AboutUs.module.css';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import HeadingMain from '../heading/HeadingMain';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className={styles.chooseUs}>
      <div
        className={`${styles.chooseUsWrap} ${styles.grid} ${styles.gridContainer}`}
      >
        <div className={styles.chooseUsDes}>
          <div>
            <HeadingMain
              title='An Exceptionally Unique Experience Tailored To You'
              subtitle='Why Choose Us'
            />

            <p>
              We are idea generators, goal seekers, challenge-thirsty
              professionals, creators of unique Internet projects. We deliver
              unconventional solutions
            </p>
          </div>

          <div className={styles.choseCardsContainer}>
            <div className={styles.chooseCardDesign}>
              <div className={styles.icon}>
                <FaEnvelope />
              </div>
              <h3>Minimal Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                aliquid!
              </p>
            </div>
            <div className={styles.chooseCardMaterial}>
              <div className={styles.icon}>
                <FaBell />
              </div>
              <h3>Best material</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, molestias!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.chooseUsImg}>
          <div className={styles.choosePicture1}>
            <Image
              src='/images/about/about-1-img.webp'
              width={792}
              height={330}
              alt=''
            />
          </div>
          <div className={styles.choosePicture2}>
            <Image
              src='/images/about/about-2-img.webp'
              width={792}
              height={330}
              alt=''
            />
          </div>
          <div className={styles.choosePicture3}>
            <Image
              src='/images/about/about-3-img.webp'
              width={244}
              height={89}
              alt=''
            />
          </div>
          <div className={styles.choosePicture4}>
            <Image
              src='/images/about/about-4-img.webp'
              width={84}
              height={129}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
