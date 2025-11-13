import React from 'react'
import Abt02 from '../../assets/images/gcf/loanImg.png'

function Get() {
    return (
        <>
            <section className="about-two pt-120 pb-120">
                <div className="container">
                    <div className="row row-gutter-y-50">
                        <div className="col-lg-6">
                            <div className="about-two__image">
                                <img src={Abt02} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-two__content pr-20 pl-20">
                                <div className="block-title text-left">
                                    <p className="block-title__tagline">About Company</p>
                                    <h2 className="block-title__title">Your trusted partner in business and automotive financing</h2>

                                </div>
                                <p className="about-two__text">With over 5 years of experience, we've helped hundreds of businesses grow and individuals drive their dream cars. Our commitment to transparent lending, competitive rates, and exceptional customer service sets us apart in the financial industry.</p>
                                <ul className="list-unstyled ml-0 about-two__list">
                                    <li>
                                        <i className="fa fa-arrow-circle-right"></i>
                                        Flexible loan terms tailored to your needs
                                    </li>
                                    <li>
                                        <i className="fa fa-arrow-circle-right"></i>
                                        Quick approval process within 24-48 hours
                                    </li>
                                    <li>
                                        <i className="fa fa-arrow-circle-right"></i>
                                        Competitive interest rates with no hidden fees
                                    </li>
                                    <li>
                                        <i className="fa fa-arrow-circle-right"></i>
                                        Dedicated support team throughout your loan journey
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Get