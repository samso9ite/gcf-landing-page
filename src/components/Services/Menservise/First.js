import React from 'react';
import { Link } from 'react-router-dom';

const serviceCardsData = [
  {
    image: 'assets/images/services/services-1-1.png',
    icon: 'icon-car',
    title: 'Auto Car Loan',
    text: 'Car Loan provide low interest many variations of passages of lorem ipsum have some.',
  },
  {
    image: 'assets/images/services/services-1-2.png',
    icon: 'icon-diamond',
    title: 'Wedding Loan',
    text: 'Car Loan provide low interest many variations of passages of lorem ipsum have some.',
  },
  {
    image: 'assets/images/services/services-1-3.png',
    icon: 'icon-house',
    title: 'Property Loan',
    text: 'Car Loan provide low interest many variations of passages of lorem ipsum have some.',
  },
  {
    image: 'assets/images/services/services-1-4.png',
    icon: 'icon-briefcase',
    title: 'Business Loan',
    text: 'Car Loan provide low interest many variations of passages of lorem ipsum have some.',
  },
  {
    image: 'assets/images/services/services-1-5.png',
    icon: 'icon-book',
    title: 'Education Loan',
    text: 'Car Loan provide low interest many variations of passages of lorem ipsum have some.',
  },
  {
    image: 'assets/images/services/services-1-6.png',
    icon: 'icon-user',
    title: 'Personal Loan',
    text: 'Car Loan provide low interest many variations of passages of lorem ipsum have some.',
  },
];

const First = () => {
  return (
    <>
      <section className="service-grid pt-120 pb-140">
        <div className="container">
          <div className="row row-gutter-y-50">
            {serviceCardsData.map((card, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="service-card">
                  <div className="service-card__image">
                    <img src={card.image} alt={card.title} />
                    <Link to="/servicedetails"></Link>
                  </div>
                  <div className="service-card__content">
                    <div className="service-card__content__inner">
                      <div className="service-card__icon">
                        <i className={card.icon}></i>
                      </div>
                      <h3 className="service-card__title">
                        <Link to="/servicedetails">{card.title}</Link>
                      </h3>
                      <p className="service-card__text">{card.text}</p>
                      <Link to="/servicedetails" className="service-card__link">
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default First;
