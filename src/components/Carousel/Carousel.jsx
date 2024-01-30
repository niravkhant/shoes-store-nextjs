'use client'
import { Navigation, Pagination, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from "next/image";


const Carousel = () => {
  return (
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
    <SwiperSlide>
    <Image src="/images/shoes_cover1.jpg" alt="" height={500} width={1000} />
        
    </SwiperSlide>
    <SwiperSlide>
    <Image src="/images/shoes_cover2.jpg" alt="" height={500} width={1000} />
        
    </SwiperSlide>
    <SwiperSlide>
    <Image src="/images/shoes_cover3.jpg" alt="" height={500} width={1000} />
    </SwiperSlide>
    <SwiperSlide>
    <Image src="/images/shoes_cover1.jpg" alt="" height={500} width={1000} />
    </SwiperSlide>
    ...
  </Swiper>
  );
};

export default Carousel;
