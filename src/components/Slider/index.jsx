import React from 'react';

import styles from './styles.module.css';
import SimpleSlider from './simpleSlider';

const Sliders = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        iCaria Living - Explore the wonders of life
      </div>
      <div className={styles.hidden}>
        Choose your profession for more details
      </div>
      <div className={styles.sliderContainer}>
        <SimpleSlider />
      </div>
    </div>
  );
};

export default Sliders;
