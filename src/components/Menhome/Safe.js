import { Link } from "react-router-dom";
import React from "react";

function Safe() {
  const services = [
    {
      icon: "icon-smartphone",
      title: "Safe and Secure Payments",
      text: "Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.",
      link: "/servicesdetails"
    },
    {
      icon: "icon-operation",
      title: "Quick Payment Process",
      text: "Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.",
      link: "/servicesdetails"
    },
    {
      icon: "icon-payment-gateway",
      title: "No Prepayment Charges",
      text: "Duis aute irure dolor lipsum free is simply free text the local markets in reprehenderit.",
      link: "/servicesdetails"
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
                      <Link to={service.link}>{service.title}</Link>
                    </h3>
                    <p className="service-card-two__text">{service.text}</p>
                    <Link to={service.link} className="service-card-two__link">
                      More Detail
                    </Link>
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
