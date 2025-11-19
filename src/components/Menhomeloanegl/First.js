import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function First() {
    const [loan_year_np, setLoan_year_np] = useState(15);
    const [income_pv, seIncome_pv] = useState(25000);
    const [Other_emi, setOther_emi] = useState(1000);
    const [interest_rate_ir, setInterest_rate_ir] = useState(6);
    const [totalamount, setTotalamount] = useState(25000);
    const [totalemi, setTotalemi] = useState(0);
    const [age, setAge] = useState(25);
  
    useEffect(() => {
      if (
        loan_year_np > 0 &&
        income_pv > 0 &&
        Other_emi > 0 &&
        interest_rate_ir > 0
      ) {
        homeloaneligibility();
      }
    }, [loan_year_np, income_pv, Other_emi, interest_rate_ir]);
  
    const homeloaneligibility = () => {
      let Elg = 0;
      const loanyear12 = loan_year_np * 12;
      const intesrt12 = interest_rate_ir / 1200;
      //Calculating PMT(Payment Per Period)
      const pmt = PMT(loanyear12, 100000, intesrt12);
      let Emi = 0;
  
      //Calculating Emi
      if (income_pv <= 20000) {
        Emi = income_pv * 0.55 - Other_emi;
      } else if (income_pv <= 50000) {
        Emi = income_pv * 0.6 - Other_emi;
      } else if (income_pv <= 100000) {
        Emi = income_pv * 0.65 - Other_emi;
      } else {
        Emi = income_pv * 0.7 - Other_emi;
      }
      Elg = Emi / pmt;
      console.log("pmt", pmt);
      // console.log(int_str)
      const e1 = (Elg * 100000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const e2 = Emi.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(e1);
      console.log(e2);
      setTotalamount(e1);
      setTotalemi(e2);
    };
    const PMT = (loan_year_np, income_pv, interest_rate_ir, FV) => {
      let fv;
      if (!FV) {
        fv = 0;
      } else {
        fv = FV;
      }
      const pvif = Math.pow(1 + interest_rate_ir, loan_year_np);
      console.log("pvif", interest_rate_ir, loan_year_np);
      const pmt = (interest_rate_ir * (income_pv * pvif + fv)) / (pvif - 1);
      return pmt;
    };

    return (
        <>
            <section className="loan-Calculator pt-120 pb-120">
                <div className="container">
                    <div className="loan-calculator__box" id="home-eligibility-calculator" >
                        <div className="loan-calculator__top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="block-title text-left">
                                        <p className="block-title__tagline">
                                            Home loan eligibility calculator
                                        </p>
                                        <h2 className="block-title__title">
                                            How much do you need loan for you?
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p className="loan-calculator__top__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Quam elementum pulvinar etiam non quam lacus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="slider-box">
                                    <div className="main-slide">
                                        <div className="single-loan-header">
                                            <h4>Age</h4>
                                            <input
                                                className="form-control input-control"
                                                type="text"
                                                name="age"
                                                id="eligibility-age-input"
                                                onkeypress="return onlynumeric(event)"
                                                value={age}
                                                onChange={(e) => {
                                                    setAge(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="w-100">
                                            <input
                                                style={{ maxWidth: "100%" }}
                                                className="w-100 slider"
                                                type="range"
                                                id="volume"
                                                min="1"
                                                max="60"
                                                value={age}
                                                onChange={(e) => {
                                                    setAge(e.target.value);
                                                    console.log(e);
                                                }}
                                            />
                                        </div>

                                        <div className="loan-counter-value">
                                            <h6 id="eligibility-age-show">{age}</h6>
                                            <span>Years</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider-box">
                                    <div className="main-slide">
                                        <div className="single-loan-header">
                                            <h4>Loan Years</h4>
                                            <input
                                                className="form-control input-control"
                                                type="text"
                                                name="loan-year"
                                                id="eligibility-year-input"
                                                onkeypress="return onlynumeric(event)"
                                                value={loan_year_np}
                                                onChange={(e) => {
                                                    setLoan_year_np(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="w-100">
                                            <input
                                                style={{ maxWidth: "100%" }}
                                                className="w-100 slider"
                                                type="range"
                                                id="volume"
                                                min="1"
                                                max="20"
                                                value={loan_year_np}
                                                onChange={(e) => {
                                                    setLoan_year_np(e.target.value);
                                                    console.log(e);
                                                }}
                                            />
                                        </div>
                                        <div className="loan-counter-value">
                                            <h6 id="eligibility-year-show">{loan_year_np}</h6>
                                            <span>Years</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-box">
                                    <div className="main-slide">
                                        <div className="single-loan-header">
                                            <h4>Monthly Income </h4>
                                            <input
                                                className="form-control input-control"
                                                type="text"
                                                name="monthlyincome"
                                                id="eligibility-income-input"
                                                onkeypress="return onlynumeric(event)"
                                                value={income_pv}
                                                onChange={(e) => {
                                                    seIncome_pv(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="w-100">
                                            <input
                                                style={{ maxWidth: "100%" }}
                                                className="w-100 slider"
                                                type="range"
                                                id="volume"
                                                min="1000"
                                                max="50000"
                                                value={income_pv}
                                                onChange={(e) => {
                                                    seIncome_pv(e.target.value);
                                                    console.log(e);
                                                }}
                                            />
                                        </div>
                                        <div className="loan-counter-value">
                                            <span>$</span>
                                            <h6 id="eligibility-income-show">{income_pv}</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider-box">
                                    <div className="main-slide">
                                        <div className="single-loan-header">
                                            <h4>Other EMIs (Monthly)</h4>
                                            <input
                                                className="form-control input-control"
                                                type="text"
                                                name="other-emi"
                                                id="eligibility-other-input"
                                                onkeypress="return onlynumeric(event)"
                                                value={Other_emi}
                                                onChange={(e) => {
                                                    setOther_emi(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="w-100">
                                            <input
                                                style={{ maxWidth: "100%" }}
                                                className="w-100 slider"
                                                type="range"
                                                id="volume"
                                                min="1000"
                                                max="50000"
                                                value={Other_emi}
                                                onChange={(e) => {
                                                    setOther_emi(e.target.value);
                                                    console.log(e);
                                                }}
                                            />
                                        </div>
                                        <div className="loan-counter-value">
                                            <span>$</span>
                                            <h6 id="eligibility-other-show">{Other_emi}</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider-box">
                                    <div className="main-slide">
                                        <div className="single-loan-header">
                                            <h4>Interest Rate</h4>
                                            <input
                                                className="form-control input-control"
                                                type="text"
                                                name="interest-rate"
                                                id="eligibility-rate-input"
                                                onkeypress="return onlynumeric(event)"
                                                value={interest_rate_ir}
                                                onChange={(e) => {
                                                    setInterest_rate_ir(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="w-100">
                                            <input
                                                style={{ maxWidth: "100%" }}
                                                className="w-100 slider"
                                                type="range"
                                                id="volume"
                                                min="1"
                                                max="24"
                                                value={interest_rate_ir}
                                                onChange={(e) => {
                                                    setInterest_rate_ir(e.target.value);
                                                    console.log(e);
                                                }}
                                            />
                                        </div>
                                        <div className="loan-counter-value">
                                            <h6 id="eligibility-interest-show">{interest_rate_ir}</h6>
                                            <span>%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                <div className="eligibility-button">
                  <Link
                    to="#"
                    className="thm-btn"
                    target="_blank"
                    rel="nofollow"
                  >
                    Check Eligibility
                  </Link>
                </div>
              </div> */}
                            <div className="col-md-5">
                                <div className="loan-calculation home-eligibility">
                                    <div className="home-eligibility-loan total-loan-form">
                                        <div className="home-eligibility-inner">
                                            <p>
                                                <h4>Loan Amount</h4>$
                                                <span id="total-amount">{totalamount}</span>
                                            </p>
                                            <p>
                                                <h4>Emi</h4>$<span id="total-emi">{totalemi}</span>
                                            </p>
                                            <a href='https://app.gcf.ng'
                                                className="thm-btn"
                                                target="_blank"
                                                rel="nofollow"
                                            >
                                                Apply For Loan
                                            </a>
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