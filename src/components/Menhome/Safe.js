import { Link } from "react-router-dom";
import React from "react";

function Safe() {
  const services = [
    {
      icon: "icon-smartphone",
      title: "Safe and Secure Payments",
      text: "Click on the Request Loan button to get started, submit the required details, and receive approval quickly.",
      link: "https://app.gcf.ng/signin"
    },
    {
      icon: "icon-operation",
      title: "Quick Payment Process",
      text: "Our streamlined application process ensures you get the funds without unnecessary delays. Disbursement is within 24 hours.",
      link: "https://app.gcf.ng/signin"
    },
    {
      icon: "icon-payment-gateway",
      title: "Repayment Flexibility",
      text: "We offer flexible repayment options to suit your financial situation by providing you with personalized account for repayments also an account officer.",
      link: "https://app.gcf.ng/signin"
    }
  ];

  return (
    <>
      <section className="service-two mb--120">
        <div className="service-two__shape"></div>
        <div className="container">
          <div className="row row-gutter-y-30">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-12" key={index}>
                <div className="service-card-two">
                  <div className="service-card-two__shape"></div>
                  <div className="service-card-two__icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="service-card-two__content">
                    <h3 className="service-card-two__title">
                      <a href={service.link}>{service.title}</a>
                    </h3>
                    <p className="service-card-two__text">{service.text}</p>
                    <a href={service.link} className="service-card-two__link">
                      Start Process
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Safe;
