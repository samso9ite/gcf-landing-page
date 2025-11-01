import React from 'react'
import career01 from '../../assets/images/resources/career-about-1-1.jpg'

function Aboutcareers() {
    return (
        <>
            <section className="career-about pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-xl-start text-center">
                            <img src={career01} className="img-responsive wow fadeInLeft" data-wow-duration="1500ms" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="career-about__content">
                                <div className="block-title text-left">
                                    <p className="block-title__tagline">About Company</p>
                                    <h2 className="block-title__title">Small business loans for daily expenses</h2>
                                </div>
                                <p className="career-about__highlight">Duis irure dolor lipsum is simply free text available.</p>

                                <p className="career-about__text">There are many variations of passages of lorem ipsum available the
                                    majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum
                                    is simply free text available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutcareers