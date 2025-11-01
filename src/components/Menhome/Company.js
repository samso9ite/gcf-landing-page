import { Link } from "react-router-dom";
import React from "react";
import Abts01 from '../../assets/images/resources/about-4-1.png'

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
                        Personal loans to fulfill your dreams
                    </h2>
                    </div>
                    <div className="about-four__box">
                    <div className="about-four__box__icon">
                        <i className="icon-loan"></i>
                    </div>
                    <div className="about-four__box__content">
                        <h3 className="about-four__box__title">
                        We’re in this business since 1987 and we provide the best
                        services.
                        </h3>
                    </div>
                    </div>
                    <p className="about-four__text">
                    Alteration in some form by injected humour. Duis aute irure
                    dolor lipsum is simply free text available in the local
                    markets in reprehenderit.
                    </p>

                    <div className="row row-gutter-y-20">
                    <div className="col-md-6">
                        <div className="about-four__feature">
                        <div className="about-four__feature__content">
                            <div className="about-four__feature__icon">
                            <i className="icon-confirmation"></i>
                            </div>
                            <h3 className="about-four__feature__title">
                            Direct card payment
                            </h3>
                        </div>
                        <div className="about-four__feature__text">
                            Lorem ipsum dolor sit ame ed consectetur nod.
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
                            Direct card payment
                            </h3>
                        </div>
                        <div className="about-four__feature__text">
                            Lorem ipsum dolor sit ame ed consectetur nod.
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
                        25<i>+</i>
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