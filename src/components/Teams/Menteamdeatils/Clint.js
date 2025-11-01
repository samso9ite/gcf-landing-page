import React from 'react'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import bran01 from '../../../assets/images/resources/brand-2-1.png'

function Clint() {
  return (
    <>
           <div className="client-carousel client-carousel--team-details">
            <div className="container">
            <Swiper
                    className="thm-swiper__slider swiper-container" 
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    autoplay={{delay:5000}}
                    breakpoints= {{
                     "0": {
                         "spaceBetween": 10,
                         "slidesPerView": 2
                     },
                     "375": {
                         "spaceBetween": 10,
                         "slidesPerView": 2
                     },
                     "575": {
                         "spaceBetween": 10,
                         "slidesPerView": 3
                     },
                     "767": {
                         "spaceBetween": 10,
                         "slidesPerView": 4
                     },
                     "991": {
                         "spaceBetween": 15,
                         "slidesPerView": 5
                     },
                     "1199": {
                         "spaceBetween": 30,
                         "slidesPerView": 5
                     }
                    }} 
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <img src={bran01} alt="" />
                            </div>
                        </SwiperSlide>  
                        <SwiperSlide> 
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={bran01} alt="" />
                        </div>
                        </SwiperSlide>
                    </div>
        </Swiper>
            </div>
        </div>
    </>
  )
}

export default Clint