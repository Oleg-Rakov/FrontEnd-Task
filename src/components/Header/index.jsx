import React from 'react';
import Slider from 'react-slick';
import styles from './styles.module.css';
import mobile from './mobile.module.css';

import logo1 from '../../assets/images/logo-1.svg';
import logo2 from '../../assets/images/logo-2.svg';
import logo3 from '../../assets/images/logo-3.svg';
import logo4 from '../../assets/images/logo-4.svg';
import { useEffect, useState } from 'react';

let array = [
  {
    id: 1,
    img: logo1,
    title: 'Offer coupons',
    description:
      'Grow your customer base by offering free coupons that are advertised on social media and discoverable through Google search. No hidden or upfront fees and you get a free professional profile.  Engage your customers and leads while expanding your business.',
  },
  {
    id: 2,
    img: logo2,
    title: 'Search and discover',
    description:
      'Our directory is accessed by families across US and Canada to find local service providers and facilities by profession, services offered, or ratings and rankings.We match families based on their needs.',
  },
  {
    id: 3,
    img: logo3,
    title: 'Improve satisfaction',
    description:
      'Get higher ratings and better reviews through transparency, media-rich profiles, engaging social blog, professional articles, and accreditation.Create events to promote your business and advertise them on social media.',
  },
  {
    id: 4,
    img: logo4,
    title: 'Profile boosting',
    description:
      'Get more referrals through improved ratings and reviews, performance monitoring, recommendations from other professionals, and profile search boosting. Your profiles are discoverable on Google search.',
  },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  if (isMobile) {
    return (
      <header className={mobile.header}>
        <div className={mobile.title}>Why Our Directory</div>
        <Slider {...settings}>
          {array.map((el) => {
            return (
              <div className={mobile.card} key={el.id}>
                <img className={mobile.image} src={el.img} alt="slider" />
                <h2 className={mobile.cardTitle}>{el.title}</h2>
                <p className={mobile.desc}>{el.description}</p>
              </div>
            );
          })}
        </Slider>
      </header>
    );
  } else {
    return (
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Why Our Directory</h1>
        </div>
        <div className={styles.cards}>
          {array.map((el) => {
            return (
              <div className={styles.card} key={el.id}>
                <img className={styles.logo} src={el.img} alt="card" />
                <h2 className={styles.logoTitle}>{el.title}</h2>
                <p className={styles.logoDesc}>{el.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Header;
