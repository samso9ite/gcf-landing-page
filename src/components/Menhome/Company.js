import { Link } from "react-router-dom";
import React from "react";
import Abts01 from '../../assets/images/gcf/loanImg.jpg'

function Company() {
  return (
    <>
        <section className="about-four pt-120 pb-120">
            <div className="about-four__shape"></div>
            <div className="container">
            <div className="row row-gutter-y-50">
                <div className="col-lg-6">
                <div className="about-four__content">
                    <div className="block-title text-left">
                    <p className="block-title__tagline">About Company</p>
                    <h2 className="block-title__title">
                        Financing solutions for your business and vehicle needs
                    </h2>
                    </div>
                    <div className="about-four__box">
                    <div className="about-four__box__icon">
                        <i className="icon-loan"></i>
                    </div>
                    <div className="about-four__box__content">
                        <h3 className="about-four__box__title">
                        Trusted lending partner, specializing in business and car loans
                        </h3>
                    </div>
                    </div>
                    <p className="about-four__text">
                    We provide flexible financing options tailored to help your business grow 
                    and get you behind the wheel of your dream car. Our streamlined application 
                    process and competitive rates make securing funding simple and fast.
                    </p>

                    <div className="row row-gutter-y-20">
                    <div className="col-md-6">
                        <div className="about-four__feature">
                        <div className="about-four__feature__content">
                            <div className="about-four__feature__icon">
                            <i className="icon-confirmation"></i>
                            </div>
                            <h3 className="about-four__feature__title">
                            Business Loans
                            </h3>
                        </div>
                        <div className="about-four__feature__text">
                            Flexible funding to expand operations, purchase equipment, or manage cash flow.
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-four__feature">
                        <div className="about-four__feature__content">
                            <div className="about-four__feature__icon">
                            <i className="icon-confirmation"></i>
                            </div>
                            <h3 className="about-four__feature__title">
                            Car Loans
                            </h3>
                        </div>
                        <div className="about-four__feature__text">
                            Competitive rates for new and used vehicles with flexible repayment terms.
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="about-four__btns">
                    <Link to="/about" className="thm-btn thm-btn--dark-hover">
                        Discover More
                    </Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="about-four__image">
                    <div className="about-four__image__bg"></div>
                    <div className="about-four__image__shape"></div>
                    <img src={Abts01} alt="" />
                    <div className="about-four__image__caption">
                    <h3 className="about-four__image__caption__year">
                        5<i>+</i>
                    </h3>
                    <p className="about-four__image__caption__text">
                        Years Experience
                    </p>
                    </div>
                    <div className="about-four__image__floated">Finance</div>
                </div>
                </div>
            </div>
            </div>
       </section>
    </>
  )
}

export default Company