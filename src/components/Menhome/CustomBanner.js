import { Link } from "react-router-dom";
import React from "react";
import "./CustomBanner.css";

function CustomBanner() {
  return (
    <section className="custom-banner py-60">
      <div className="custom-banner__bg" aria-hidden="true" />
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="custom-banner__content">
              <h2 className="custom-banner__title text-center pt-30" >
                Your Business & Car Loan is <span className="highlight">Guaranteed</span>
              </h2>
              <p className="custom-banner__subtitle text-center">
                Get fast approvals, transparent rates, and repayment terms that fit your cash flow.
              </p>

              <div className="custom-banner__actions text-center pb-20">
                <Link to="/about" className="thm-btn thm-btn--dark-hover">
                  Request a Loan
                </Link>
                <Link to="/contact" className="thm-btn thm-btn--secondary ms-3">
                  Talk to an Advisor
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="custom-banner__image">
              <img
                src="https://cdn.prod.website-files.com/62ce94ab2b9c3a3597a7acd4/6853d4e0b9a1b5d325626ff9_Hero%20Image%20(1).webp"
                alt="Customer receiving loan approval"
                loading="lazy"
              />
              <div className="custom-banner__stat">
                <i className="icon-successful"></i>
                <div>
                  <small>Approval Rate</small>
                  <strong>95%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomBanner;
