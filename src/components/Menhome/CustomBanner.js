import { Link } from "react-router-dom";
import React from "react";
import Abts01 from "../../assets/images/gcf/loanImg.jpg";

function CustomBanner() {
  return (
    <>
      <section className="about-four pt-40 pl-20 pr-20">
        <div className=""></div>
        <div className="container">
          <div className="row row-gutter-y-50">
            <div className="col-lg-6">
              <div className="about-four__content">
                <div className="block-title text-left">
                  <h2
                    className="block-title__title"
                    style={{
                      fontSize: "35px",
                      fontWeight: "800",
                      textAlign: "center",
                    }}
                  >
                    Your Business & Car Loan is Guaranteed
                  </h2>
                  <p className="pt-20 text-center">We provide tailored financial solutions to meet your needs.</p>
                </div>

                <center>
                  <div className="about-four__btns border-radius-50px">
                    <Link to="/about" className="thm-btn thm-btn--dark-hover ">
                     Request For Loan
                    </Link>
                  </div>{" "}
                </center>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four__image">
                <div className=""></div>
                <img
                  src="https://cdn.prod.website-files.com/62ce94ab2b9c3a3597a7acd4/6853d4e0b9a1b5d325626ff9_Hero%20Image%20(1).webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomBanner;
