import BGImg from "../../assets/images/gcf/Pre-Approved-Car-Loan.jpg";
import BGImg1 from "../../assets/images/gcf//uba-love-car-loan.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

function Firstslider() {
  const sliderOptions = {
    navigation: {
      nextEl: ".slider-one__carousel__btn__left",
      prevEl: ".slider-one__carousel__btn__right",
    },
  };

  return (
    <>
  <section className="slider-one desktop-only">
        <Swiper
          prevE1=".slider-one__carousel__btn__right"
          nextE1=".slider-one__carousel__btn__left"
          navigation={sliderOptions.navigation}
          {...sliderOptions}
        >
          <SwiperSlide className="item">
            <div className="slider-one__item">
              <div className="slider-one__lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className="slider-one__image"
                style={{ backgroundImage: `url(${BGImg})` }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                ></div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <p className="slider-one__tagline">
                      Simple & Secured Payment
                    </p>

                    <h2 className="slider-one__title">
                      We provide you financial <span>power</span>
                    </h2>
                    <p className="slider-one__text">
                     We provide flexible financing options tailored to help your business grow.
                    </p>
                    <div className="slider-one__btns">
                      <a href="https://app.gcf.ng" className="thm-btn">
                        Apply For Business Loan
                      </a>
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
              <div
                className="slider-one__image"
                style={{ backgroundImage: `url(${BGImg1})` }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                ></div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <p className="slider-one__tagline">
                      <i className="fa fa-car"></i>
                      Fast & Easy Car Loans
                    </p>

                    <h2 className="slider-one__title">
                      Drive your dream car with <span>ease</span>
                    </h2>
                    <p className="slider-one__text">
                      Get a car loan with flexible terms and competitive rates.
                    </p>
                    <div className="slider-one__btns">
                      <a href="https://app.gcf.ng" className="thm-btn">
                        Apply For Car Loan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="slider-one__carousel__btn">
          <button className="slider-one__carousel__btn__left">
            <i className="fa fa-angle-left"></i>
          </button>
          <button className="slider-one__carousel__btn__right">
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
        <div
          className="slider-one__box wow fadeInRight"
          data-wow-duration="1500ms"
        >
          <div className="slider-one__box__icon">
            <i className="icon-successful"></i>
          </div>
          <div className="slider-one__box__content">
            <p className="slider-one__box__tagline">Checkout our</p>
            <h3 className="slider-one__box__title">95% Approval Rates</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Firstslider;
