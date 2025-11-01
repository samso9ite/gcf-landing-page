import React from 'react'
import Abt02 from '../../assets/images/resources/about-2-1.png'

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
                            <div className="about-two__content">
                                <div className="block-title text-left">
                                    <p className="block-title__tagline">About Company</p>
                                    <h2 className="block-title__title">Get to know about our company</h2>

                                </div>
                                <p className="about-two__text">There are many variations of passages of lorem ipsum available
                                    the
                                    majority have suffered alteration in some form by injected humour. Duis aute irure dolor
                                    lipsum
                                    is simply free text available.</p>
                                <ul className="list-unstyled ml-0 about-two__list">
                                    <li>
                                        <i className="fa fa-arrow-circle-right"></i>
                                        Nsectetur cing elit.
                                    </li>
                                    <li>
                                        <i className="fa fa-arrow-circle-right"></i>
                                        Suspe ndisse suscipit sagittis leo.
                                    </li>
                                    <li>
                                        <i className="fa fa-arrow-circle-right"></i>
                                        Entum estibulum digni posuere.
                                    </li>
                                    <li>
                                        <i className="fa fa-arrow-circle-right"></i>
                                        Donec tristique ante dictum rhoncus.
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