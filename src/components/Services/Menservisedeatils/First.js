import BGS1 from '../../../assets/images/services/service-s-1-1.png'
import { Link } from 'react-router-dom'
import React, { useState }   from 'react'
import service01 from '../../../assets/images/services/service-d-1-1.png'
import service02 from '../../../assets/images/services/service-d-1-2.png'


function First() {

    const [clicked, setClicked] = useState(0);
    const faqs = [
        {
            question: "Nunc dui massa, porttitor id erat et",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
        {
            question: "Quisque quis urna consequat, scelerisque",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
        {
            question: "Mauris a ipsum id libero sodales dapibus",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat.There are many variations of passages of available but the majority have suffered alteration that some form by injected randomised words which don’t look even as slightly believable now. Phasellus mollis ac augue sed varius. "
        },
        {
            question: "Nunc dui massa, porttitor id erat et",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        }
    ]

  return (
    <>
        <section className="service-details pt-120 pb-120">
            <div className="container">
                <div className="row row-gutter-y-30">
                    <div className="col-lg-4">
                        <div className="service-sidebar">
                            <div className="service-sidebar__item service-sidebar__item--menu">
                                <ul className="service-sidebar__menu">
                                    <li className="active"><Link to="#">Wedding Loan</Link></li>
                                    <li><Link to="#">Property Loan</Link></li>
                                    <li><Link to="#">Business Loan</Link></li>
                                    <li><Link to="#">Education Loan</Link></li>
                                    <li><Link to="#">Personal Loan</Link></li>
                                </ul>
                            </div>
                            <div className="service-sidebar__item service-sidebar__item--contact">
                                <div className="service-sidebar__bg" style={{ backgroundImage: `url(${BGS1})`}}>
                                </div>
                                <div className="service-sidebar__contact">
                                    <div className="service-sidebar__icon">
                                        <i className="icon-phone-ringing"></i>
                                    </div>
                                    <h3 className="service-sidebar__title">Quick loan
                                        proccess</h3>
                                    <hr className="service-sidebar__separator" />
                                    <p className="service-sidebar__tagline">Talk to an expert</p>
                                    <Link to="tel:+1-(246)333-0089" className="service-sidebar__phone" >+ 1- (246) 333-0089</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="service-details__image">
                            <img src={service01} alt="" />
                            <div className="service-details__icon">
                                <i className="icon-diamond"></i>
                            </div>
                        </div>
                        <div className="service-details__content">
                            <h3 className="service-details__title">Wedding Loan</h3>
                            <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum
                                quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
                                port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry
                                standard dummy text ever since the 1500s.</p>
                            <p>It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design
                                printng and type setting Ipsum take a look at our round. When an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting.</p>
                            <div className="row row-gutter-y-30">
                                <div className="col-md-6">
                                    <img src={service02} alt="" />
                                </div>
                                <div className="col-md-6">
                                    <h3 className="service-details__subtitle">Service benefits</h3>
                                    <p className="service-details__text">Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum.</p>
                                    <ul className="list-unstyled ml-0 service-details__list">
                                        <li>
                                            <i className="fa fa-check-circle"></i>
                                            Refresing to get such a personal touch.
                                        </li>
                                        <li>
                                            <i className="fa fa-check-circle"></i>
                                            Duis aute irure dolor in in voluptate.
                                        </li>
                                        <li>
                                            <i className="fa fa-check-circle"></i>
                                            Velit esse cillum eu fugiat pariatur.
                                        </li>
                                        <li>
                                            <i className="fa fa-check-circle"></i>
                                            Duis aute irure dolor in in voluptate.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="accrodion-grp service-details__accrodion" data-grp-name="service-details__accrodion-1">
                                    {faqs.map((item, index) => (
                                        <div className={`accrodion  wow fadeInUp ${index === clicked && "active"}`} key={index} data-wow-delay="0ms">
                                            <div className="accrodion-title" onClick={() => setClicked(index)}>
                                                <h4>{item.question}</h4>
                                            </div>
                                            {index === clicked && <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>}
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default First