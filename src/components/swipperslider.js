import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'; 


export default function swipperslider() {
  return (
    <>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="..\images\DSC01668-Enhanced-NR 1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="..\images\DSC01668-Enhanced-NR 1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="..\images\DSC01668-Enhanced-NR 1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="..\images\DSC01668-Enhanced-NR 1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="..\images\DSC01668-Enhanced-NR 1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="..\images\DSC01668-Enhanced-NR 1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="..\images\DSC01668-Enhanced-NR 1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="..\images\DSC01668-Enhanced-NR 1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="..\images\DSC01668-Enhanced-NR 1.png" />
      </SwiperSlide>
    </Swiper>
  </>

  )
}
