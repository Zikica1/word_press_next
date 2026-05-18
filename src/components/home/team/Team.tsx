import styles from './Team.module.css';
import HeadingMain from '@/components/heading/HeadingMain';
import ButtonSec from '@/components/button/ButtonSec';
import ButtonSecStyles from '../../../components/button/ButtonSec.module.css';
import Image from 'next/image';

const Team = () => {
  return (
    <section className={styles.team}>
      <div className={styles.teamWrapper}>
        <div className={styles.teamDescription}>
          <div className={styles.teamHeading}>
            <HeadingMain
              title='We Are The Leader in Web Design'
              subtitle='About Team'
            />
          </div>
          <p className={styles.teamPar1}>
            We are pioneers in web design, crafting innovative digital
            experiences that captivate and engage. Our expertise transforms your
            vision into a stunning online presence.
          </p>

          <div className={styles.teamAnimate2}>
            <p className={styles.teamPar2}>
              With a commitment to excellence, we deliver cutting-edge design
              solutions tailored to your unique needs. Partner with us for a
              website that stands out and drives results.
            </p>
            <div className={styles.buttonWrapper}>
              <div style={{ display: 'inline-block' }}>
                <ButtonSec bg={ButtonSecStyles.buttonSecFor}>
                  Watch Video
                </ButtonSec>
              </div>
              <div style={{ display: 'inline-block' }}>
                <ButtonSec bg={ButtonSecStyles.buttonSecThree}>
                  Get Started
                </ButtonSec>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.teamPictures}>
          <div className={styles.teamPicturesWrap}>
            <Image
              className={styles.teamImg1}
              src='/images/team/team-1-img.webp'
              alt='image-team'
              width={660}
              height={601}
            />
            <Image
              className={styles.teamImg2}
              src='/images/team/team-2-img.webp'
              alt='image-team'
              width={484}
              height={460}
            />
            <Image
              className={styles.teamImg3}
              src='/images/team/team-3-img.webp'
              alt='image-team'
              width={244}
              height={89}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
