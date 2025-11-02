import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function First() {

    const [p1, setP1] = useState(30000);
    const [n1, setN1] = useState(10);
    const [rate1, setRate1] = useState(8);
    const [existing, setExisting] = useState(100);
    const [income1, setIncome1] = useState(20000);

    const [monthEmi, setmonthEmi] = useState(0);
    const [elTotal, setelTotal] = useState(0);
    const [elemi, setelemi] = useState("");

    useEffect(() => {
        if (p1 > 0 && n1 > 0 && rate1 > 0 && existing > 0 && income1 > 0) {
            emiEligibility();
        }
    }, [p1, n1, rate1, existing, income1]);

    const emiEligibility = () => {
        const r1 = rate1 / (12 * 100); // to calculate rate percentage..
        const prate1 =
            (p1 * r1 * Math.pow(1 + r1, n1 * 12)) / (Math.pow(1 + r1, n1 * 12) - 1); // to calculate compound interest..
        const emi1 = Math.ceil(prate1 * 100) / 100; // to parse emi amount..
        const existingLoan = existing - (existing * 60) / 100;

        let incomere;
        if (income1 <= 14999) {
            incomere = (income1 * 40) / 100 - existingLoan;
        } else if (income1 <= 29999) {
            incomere = (income1 * 45) / 100 - existingLoan;
        } else if (income1 >= 30000) {
            incomere = (income1 * 50) / 100 - existingLoan;
        }
        const incomereq = Math.floor((incomere / emi1) * p1);
        const prate2 =
            (incomereq * r1 * Math.pow(1 + r1, n1 * 12)) /
            (Math.pow(1 + r1, n1 * 12) - 1); // to calculate compound interest2..
        const emi2 = Math.ceil(prate2 * 100) / 100; // to parse emi2 amount..   //Check again Reminder
        // console.log(P1);
        // to assign value in field1 as fixed upto two decimal..
        if (incomereq > p1) {
            console.log(emi1.toFixed(0));
            console.log(incomereq);
            console.log("/ " + emi2.toFixed(0) + "&nbsp;EMI");
            setmonthEmi(emi1.toFixed(0));
            setelTotal(incomereq);
            setelemi(`/ ${emi2.toFixed(0)} EMI`);
        } else {
            console.log("");
            console.log("");
            console.log("");
        }
    };

    return (
        <>
            <section className="loan-Calculator pt-120 pb-120">
                <div className="container">
                    <div className="loan-calculator__box" id="loan-eligibility">
                        <div className="loan-calculator__top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="block-title text-left">
                                        <p className="block-title__tagline">
                                            calculate your eligibility
                                        </p>
                                        <h2 className="block-title__title">
                                            Are you eligible for loan?
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p className="loan-calculator__top__text">
                                        Nullam vel nibh facilisis lectus fermentum ultrices quis non
                                        risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. In hac habitasse platea dictumst.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-7 col-lg-12">
                                <div className="slider-box">
                                    <form action="#">
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Loan Amount</h4>
                                                <input
                                                    className="form-control input-control"
                                                    type="text"
                                                    name="pricipal"
                                                    id="eligibility-principal-input"
                                                    onkeypress="return onlynumeric(event)"
                                                    value={p1}
                                                    onChange={(e) => {
                                                        setP1(e.target.value);
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
                                                    value={p1}
                                                    onChange={(e) => {
                                                        setP1(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>
                                            <div className="loan-counter-value">
                                                <span>$</span>
                                                <h6 id="eligibility-principal-show">{p1}</h6>
                                            </div>
                                        </div>

                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Gross Income (Monthly)</h4>
                                                <input
                                                    className="form-control input-control"
                                                    type="text"
                                                    name="grossincome"
                                                    id="eligibility-income-input"
                                                    onkeypress="return onlynumeric(event)"
                                                    value={income1}
                                                    onChange={(e) => {
                                                        setIncome1(e.target.value);
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
                                                    value={income1}
                                                    onChange={(e) => {
                                                        setIncome1(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>
                                            <div className="loan-counter-value">
                                                <span>$</span>
                                                <h6 id="eligibility-income-show">{income1}</h6>
                                            </div>
                                        </div>

                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Loan Years</h4>
                                                <input
                                                    className="form-control input-control"
                                                    type="text"
                                                    name="loan-year"
                                                    id="eligibility-year-input"
                                                    onkeypress="return onlynumeric(event)"
                                                    value={n1}
                                                    onChange={(e) => {
                                                        setN1(e.target.value);
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
                                                    value={n1}
                                                    onChange={(e) => {
                                                        setN1(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>
                                            <div className="loan-counter-value">
                                                <h6 id="eligibility-totalyear-show">{n1}</h6>
                                                <span>Years</span>
                                            </div>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Interest Rate</h4>
                                                <input
                                                    className="form-control input-control"
                                                    type="text"
                                                    name="interest-rate"
                                                    id="eligibility-rate-input"
                                                    onkeypress="return onlynumeric(event)"
                                                    value={rate1}
                                                    onChange={(e) => {
                                                        setRate1(e.target.value);
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
                                                    value={rate1}
                                                    onChange={(e) => {
                                                        setRate1(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>
                                            <div className="loan-counter-value">
                                                <h6 id="eligibility-interest-show">{rate1}</h6>
                                                <span>%</span>
                                            </div>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Other EMIs (Monthly)</h4>
                                                <input
                                                    className="form-control input-control"
                                                    type="text"
                                                    name="other-emi"
                                                    id="eligibility-other-input"
                                                    onkeypress="return onlynumeric(event)"
                                                    value={existing}
                                                    onChange={(e) => {
                                                        setExisting(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            <div className="w-100">
                                                <input
                                                    style={{ maxWidth: "100%" }}
                                                    className="w-100 slider"
                                                    type="range"
                                                    id="volume"
                                                    min="10"
                                                    max="50000"
                                                    value={existing}
                                                    onChange={(e) => {
                                                        setExisting(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>
                                            <div className="loan-counter-value">
                                                <span>$</span>
                                                <h6 id="eligibility-other-show">{existing}</h6>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-xl-5">
                                <div className="loan-calculation loan-eligibility">
                                    <div className="loan-calculation-content total-loan-form">
                                        <div className="total-loan-form-calculation">
                                            <div className="loan-eligibility-inner">
                                                <h4>Loan Amount:</h4>$
                                                <span
                                                    className="loan-eligibility-value"
                                                    id="loan-eligibility-principal"
                                                >
                                                    {p1}
                                                </span>
                                            </div>
                                            <div className="loan-eligibility-inner">
                                                <h4>Monthly EMI:</h4>$
                                                <span
                                                    className="loan-eligibility-value"
                                                    id="loan-eligibility-monthly-emi"
                                                >
                                                    {monthEmi}
                                                </span>
                                            </div>
                                            <div className="loan-eligibility-inner">
                                                <h4>Maximum Loan Eligibility:</h4>$
                                                <span
                                                    className="loan-eligibility-value"
                                                    id="loan-eligibility-total"
                                                >
                                                    {elTotal}
                                                </span>
                                                <br />
                                                <span id="loan-eligibility-emi">{elemi}</span>
                                            </div>
                                            <a href='https://app.globalcash.ng'
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