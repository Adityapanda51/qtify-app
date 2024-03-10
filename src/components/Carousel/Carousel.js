
// import React, { useEffect, useState } from 'react';
// import styles from './Carousel.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
// import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

// const Carousel = ({ data, component, type }) => {
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   useEffect(() => {
//     if (swiperInstance) {
//       swiperInstance.slideTo(0, 1);
//     }
//   }, [data, swiperInstance]);

//   return (
//     <div className={styles.wrapper}>
//       <Swiper
//         style={{ padding: '0px 20px' }}
//         initialSlide={0}
//         navigation={{ clickable: true }}
//         modules={[Navigation]}
//         onSwiper={(swiper) => setSwiperInstance(swiper)}
//         slidesPerView={'auto'}
//         spaceBetween={40}
//         allowTouchMove
//       >
//         <CarouselLeftNavigation />
//         <CarouselRightNavigation />
//         {data.map((item) => (
//           <SwiperSlide style={{ width: 'auto' }} key={item.id}>
//             {component(item)}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;



import React, { useEffect, useState } from 'react';
import styles from './Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Carousel = ({ data, component }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0, 1);
    }
  }, [data, swiperInstance]);

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: '0px 20px' }}
        initialSlide={0}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        slidesPerView={'auto'}
        spaceBetween={40}
        allowTouchMove
      >
        <CarouselLeftNavigation onClick={() => swiperInstance.slidePrev()} />
        <CarouselRightNavigation onClick={() => swiperInstance.slideNext()} />
        {data.map((item) => (
          <SwiperSlide style={{ width: 'auto' }} key={item.id}>
            {component(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
