import React from "react";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Clint() {
  const imageSources = [
    "assets/images/resources/brand-1-1.png",
    "assets/images/resources/brand-1-1.png",
    "assets/images/resources/brand-1-1.png",
    "assets/images/resources/brand-1-1.png",
    "assets/images/resources/brand-1-1.png",
  
  ];

  return (
    <>
      <div className="client-carousel @@extraclassNameName">
        <div className="container">
          <Swiper
            className="thm-swiper__slider swiper-container"
            modules={[Autoplay]}
            loop= {true}
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              "0": { spaceBetween: 10, slidesPerView: 2 },
              "375": { spaceBetween: 10, slidesPerView: 2 },
              "575": { spaceBetween: 10, slidesPerView: 3 },
              "767": { spaceBetween: 10, slidesPerView: 4 },
              "991": { spaceBetween: 15, slidesPerView: 5 },
              "1199": { spaceBetween: 30, slidesPerView: 5 }
            }}>
            <div className="swiper-wrapper">
              {imageSources.map((imageSrc, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-slide">
                    <img src={imageSrc} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Clint;
