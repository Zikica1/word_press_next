'use client';

import styles from './Testimonial.module.css';
import { useState } from 'react';
import HeadingMain from '@/components/heading/HeadingMain';
import { testimonial } from '@/data/db';
import TesCard from './TesCard';

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    setIndex((prev) => (prev < testimonial.length - 1 ? prev + 1 : prev));
  };

  const handlePrevClick = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className={styles.testimonial}>
      <HeadingMain
        title='Do not Believe Me Check Client Says'
        subtitle='Testimonial'
      />

      <div className={styles.testimonialWrapper}>
        {testimonial.map((item) => (
          <TesCard
            key={item.id}
            item={item}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
