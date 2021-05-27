import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import slide2 from '../../assets/images/slider-images/slider-2.png';
import slide3 from '../../assets/images/slider-images/slider-3.png';
import slide4 from '../../assets/images/slider-images/slider-4.png';
import slide5 from '../../assets/images/slider-images/slider-5.png';
import slide6 from '../../assets/images/slider-images/slider-6.png';

let sliders = [
  {
    id: 1,
    img: slide3,
    title: 'Owner',
  },
  {
    id: 2,
    img: slide2,
    title: 'Tutor',
  },
  {
    id: 3,
    img: slide3,
    title: 'Financial Advisor',
  },
  {
    id: 4,
    img: slide4,
    title: 'Personal Care Giver',
  },
  {
    id: 5,
    img: slide5,
    title: 'Yoga Trainer',
  },
  {
    id: 6,
    img: slide6,
    title: 'Nutritionist',
  },
  {
    id: 7,
    img: slide6,
    title: 'Astrologer',
  },
  {
    id: 8,
    img: slide4,
    title: 'Sales Agent',
  },
  {
    id: 9,
    img: slide5,
    title: 'Senior Care Director',
  },
];

export default function SimpleSlider() {
  const [isMobile, setIsMobile] = useState(false);

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6.32,
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
      <Slider {...mobileSettings}>
        {sliders.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.img} alt="slider" />
              <span>{el.title}</span>
            </div>
          );
        })}
      </Slider>
    );
  } else {
    return (
      <Slider {...settings}>
        {sliders.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.img} alt="slider" />
              <span>{el.title}</span>
            </div>
          );
        })}
      </Slider>
    );
  }
}
