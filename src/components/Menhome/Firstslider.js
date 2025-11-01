import BGImg from "../../assets/images/backgrounds/slider-1-1.png";
import BGImg1 from "../../assets/images/backgrounds/slider-1-2.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

function Firstslider() {

    const sliderOptions = {
        navigation: {
            nextEl: '.slider-one__carousel__btn__left', 
            prevEl: '.slider-one__carousel__btn__right', 

    }
}

  return (
    <>
        <section className="slider-one">
            <Swiper prevE1=".slider-one__carousel__btn__right" nextE1=".slider-one__carousel__btn__left"  navigation={sliderOptions.navigation} {...sliderOptions} >
                <SwiperSlide className="item">
                    <div className="slider-one__item">
                    <div className="slider-one__lines">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="slider-one__image" style={{ backgroundImage: `url(${BGImg})`}}></div>
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-7">
                                <p className="slider-one__tagline">
                                <i className="fa fa-chart-pie"></i>
                                Simple & Secure Payment
                                </p>

                                <h2 className="slider-one__title">
                                We provide you a financial <span>power</span>
                                </h2>
                                <p className="slider-one__text">
                                Nullam vel nibh facilisis lectus fermentum ultrices quis
                                non risus.
                                </p>
                                <div className="slider-one__btns">
                                <Link to="/applynow" className="thm-btn">
                                    Apply For Loan
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="item">
                    <div className="slider-one__item">
                    <div className="slider-one__lines">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="slider-one__image" style={{ backgroundImage: `url(${BGImg1})`}}></div>

                    <div className="container">
                        <div className="row">
                        <div className="col-lg-7">
                            <p className="slider-one__tagline">
                            <i className="fa fa-chart-pie"></i>
                            Simple & Secure Payment
                            </p>

                            <h2 className="slider-one__title">
                            We provide you a financial <span>power</span>
                            </h2>
                            <p className="slider-one__text">
                            Nullam vel nibh facilisis lectus fermentum ultrices quis
                            non risus.
                            </p>
                            <div className="slider-one__btns">
                            <Link to="/applynow" className="thm-btn">
                                Apply For Loan
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="slider-one__carousel__btn">
            <button className="slider-one__carousel__btn__left" >
                <i className="fa fa-angle-left"></i>
            </button>
            <button className="slider-one__carousel__btn__right">
                <i className="fa fa-angle-right"></i>
            </button>
            </div>
            <div
            className="slider-one__box wow fadeInRight"
            data-wow-duration="1500ms" >
            <div className="slider-one__box__icon">
                <i className="icon-successful"></i>
            </div>
            <div className="slider-one__box__content">
                <p className="slider-one__box__tagline">Checkout our</p>
                <h3 className="slider-one__box__title">88% Success Rates</h3>
            </div>
            </div>
        </section>
    </>
  )
}

export default Firstslider