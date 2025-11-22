import { Link } from "react-router-dom";
import React from "react";
import "./CustomBanner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import loanBanner2 from "../../assets/images/gcf/loanBanner2.jpeg";
import BGImg from "../../assets/images/gcf/Pre-Approved-Car-Loan.jpg";
import BGImg1 from "../../assets/images/gcf//uba-love-car-loan.jpeg";
import IMG1 from "../../assets/images/afri.webp"
import carLoan from "../../assets/images/carLoan.jpg"
import img2 from "../../assets/images/Img2.avif"
import personalLoanBanner from "../../assets/images/gcf/personal-loan-banner.jpg";

function CustomBanner() {
  return (
    <section className="custom-banner py-60">
      <div className="custom-banner__bg" aria-hidden="true" />
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="custom-banner__content">
              <h2 className="custom-banner__title text-center pt-30" >
                Your Business & Car Loan is <span className="highlight">Guaranteed</span>
              </h2>
              <p className="custom-banner__subtitle text-center">
                Get fast approvals, transparent rates, and repayment terms that fit your cash flow.
              </p>

              <div className="custom-banner__actions text-center pb-40 pt-20">
                <a href="https://app.gcf.ng/signin" className="thm-btn thm-btn--dark-hover">
                  Request a Loan
                </a>
                <Link to="/contact" className="thm-btn thm-btn--secondary ms-3">
                  Talk to an Advisor
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="custom-banner__slider">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={16}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
              >
                {[IMG1,carLoan,img2].map((src, idx) => (
                  <SwiperSlide key={idx} className="custom-banner__slide">
                    <img
                      src={src}
                      alt={`Hero image slide ${idx + 1}`}
                      loading="lazy"
                    />
                    <div className="custom-banner__stat">
                      <i className="icon-successful"></i>
                      <div>
                        <small>Approval Rate</small>
                        <strong>95%</strong>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomBanner;
