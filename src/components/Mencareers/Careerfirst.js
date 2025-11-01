import React from 'react'
import { Link } from 'react-router-dom'

const careerItems = [
    {
        icon: 'icon-management',
        title: 'Account Manager',
        text: 'Proin aliquet sagittis ex quis ultricies. Suspendisse a felis euismod, faucibus sem nec, porta velit.'
    },
    {
        icon: 'icon-designer',
        title: 'UI/UX Designer',
        text: 'Proin aliquet sagittis ex quis ultricies. Suspendisse a felis euismod, faucibus sem nec, porta velit.'
    },
    {
        icon: 'icon-programmer',
        title: 'Website Developer',
        text: 'Proin aliquet sagittis ex quis ultricies. Suspendisse a felis euismod, faucibus sem nec, porta velit.'
    },
    {
        icon: 'icon-flowchart',
        title: 'Project Management',
        text: 'Proin aliquet sagittis ex quis ultricies. Suspendisse a felis euismod, faucibus sem nec, porta velit.'
    }
]

function Careerfirst() {
    return (
        <>
            <section className="career-one pt-120 pb-120">
                <div className="container">
                    <div className="block-title text-center">
                        <p className="block-title__tagline">What We’re Offering</p>
                        <h2 className="block-title__title">Checkout finlon new job <br /> opportunities </h2>
                    </div>
                    <div className="row row-gutter-y-10">
                        {careerItems.map((item, index) => (
                            <div key={index} className="col-lg-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={`${index * 100}ms`}>
                                <div className="career-one__item">
                                    <div className="career-one__icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="career-one__content">
                                        <h3 className="career-one__title"><Link to="/contact">{item.title}</Link></h3>
                                        <p className="career-one__text">{item.text}</p>
                                    </div>
                                    <div className="career-one__btns">
                                        <Link to="/contact" className="thm-btn">Apply Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Careerfirst
