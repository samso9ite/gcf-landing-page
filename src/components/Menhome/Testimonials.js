import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials.css';
import tst1 from '../../assets/images/resources/testi-1-1.png'
import tst2 from '../../assets/images/resources/testi-1-2.png'
import tst3 from '../../assets/images/resources/testi-1-3.png'

function Testimonials() {
  const testimonials = [
    {
      imageSrc: tst1,
      name: 'Delia Riley',
      designation: 'Finance Manager',
      text: 'I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here. Thank you for yours service.'
    },
    {
      imageSrc: tst2,
      name: 'Essie Perez',
      designation: 'Finance Manager',
      text: 'I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here. Thank you for yours service.'
    },
    {
      imageSrc: tst3,
      name: 'Dustin Dunn',
      designation: 'Finance Manager',
      text: 'I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here. Thank you for yours service.'
    },
     {
      imageSrc: tst3,
      name: 'Dustin Dunn',
      designation: 'Finance Manager',
      text: 'I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here. Thank you for yours service.'
    }
  ];

  return (
    <>
      <section className="testimonials-one pt-120 mb--40">
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">our testimonials</p>
            <h2 className="block-title__title">
              What they're talking about <br /> our company
            </h2>
          </div>
          <div className="testimonials-carousel">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: '.testimonials-pagination',
              }}
              navigation={{
                nextEl: '.testimonials-next',
                prevEl: '.testimonials-prev',
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <div className="testimonial-card__info">
                      <div className="testimonial-card__image">
                        <img src={testimonial.imageSrc} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-card__meta">
                        <div className="testimonial-card__stars">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <h3 className="testimonial-card__name">{testimonial.name}</h3>
                        <p className="testimonial-card__designation">{testimonial.designation}</p>
                      </div>
                    </div>
                    <span className="testimonial-card__line"></span>
                    <div className="testimonial-card__text">
                      <p>{testimonial.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Pagination and Navigation */}
            <div className="testimonials-pagination"></div>
            <div className="testimonials-navigation">
              <button className="testimonials-prev">
                <i className="fa fa-chevron-left"></i>
              </button>
              <button className="testimonials-next">
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
