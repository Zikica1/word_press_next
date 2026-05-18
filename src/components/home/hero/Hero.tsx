import styles from './Hero.module.css';
import ButtonSec from '@/components/button/ButtonSec';
import ButtonSecStyles from '@/components/button/ButtonSec.module.css';
import HeadingMain from '@/components/heading/HeadingMain';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div
        className={`${styles.heroWrapper} ${styles.grid} ${styles.gridContainer}`}
      >
        <div className={styles.heroHeading}>
          <div className='hero-ani-1'>
            <HeadingMain
              title='make more time for the work that matters most'
              subtitle='We Are WordPress Agency'
              className={styles.heroHead}
            />
            <p>
              Focus on what matters while we take care of your WordPress site.
              Fast, reliable, and tailored IT services for your digital success.
            </p>
          </div>

          <div className={styles.buttonWrap}>
            <div className={styles.buttonOne}>
              <ButtonSec bg={ButtonSecStyles.buttonSecOne} url=''>
                Watch Video
              </ButtonSec>
            </div>

            <div className={styles.buttonTwo}>
              <ButtonSec bg={ButtonSecStyles.buttonSecTwo} url=''>
                Get Started
              </ButtonSec>
            </div>
          </div>
        </div>

        <div className={`${styles.heroImgWrap} ${styles.grid}`}>
          <div className={styles.heroImgOne}>
            <Image
              src='/images/hero/hero-card-1.png'
              alt=''
              width={704}
              height={730}
              sizes='(max-width:768px) 100vw, 495px'
            />
          </div>

          <div className={styles.heroImgTwo}>
            <Image
              src='/images/hero/hero-card-2.png'
              alt=''
              width={405}
              height={279}
            />
          </div>
          <div className={styles.heroImgThree}>
            <Image
              src='/images/hero/hero-card-3.png'
              alt=''
              width={434}
              height={243}
            />
          </div>
          <div className={styles.heroImgFive}>
            <Image
              src='/images/hero/hero-card-5.png'
              alt=''
              width={244}
              height={89}
            />
          </div>
          <div className={styles.heroImgSeven}>
            <Image
              src='/images/hero/hero-card-7.png'
              alt=''
              width={218}
              height={218}
            />
          </div>

          <div
            className={styles.heroImgFor}
            style={{
              width: '100%',
              aspectRatio: '408/389',
              position: 'relative',
            }}
          >
            <Image
              src='/images/hero/hero-card-4.png'
              alt=''
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className={styles.heroImgSix}>
            <Image
              src='/images/hero/hero-card-6.png'
              alt=''
              width={407}
              height={468}
            />
          </div>

          <div className={styles.heroImgEight}>
            <Image
              src='/images/hero/hero-card-8.png'
              alt=''
              width={84}
              height={129}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
