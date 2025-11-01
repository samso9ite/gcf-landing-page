import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function First() {

    const [loanAmount, setLoanAmount] = useState(30000);
    const [numberOfyears, setNumberOfyear] = useState(10);
    const [rateOfInterest, setRateOfInterest] = useState(8);

    const [monthlyemi, setMonthlyemi] = useState(0);
    const [totalinterest, setTotalinterest] = useState(0);
    const [totalamount, setTotalamount] = useState(0);
    const [emiprincipalinput, setEmiprincipalinput] = useState(0);

    useEffect(() => {
        if (loanAmount > 0 && numberOfyears > 0 && rateOfInterest > 0) {
            emiHome();
        }
    }, [loanAmount, numberOfyears, rateOfInterest]);

    const emiHome = () => {
        const numberOfMonths = numberOfyears * 12;
        const monthlyInterestRatio = rateOfInterest / 100 / 12;
        const top = Math.pow(1 + monthlyInterestRatio, numberOfMonths);
        const bottom = top - 1;
        const sp = top / bottom;
        const emi = loanAmount * monthlyInterestRatio * sp * 10;

        const full = numberOfMonths * emi;
        const interest = full - loanAmount;
        const int_pge = (interest / full) * 100;
        // int_pge.toFixed(2) + " %";
        // 100 - int_pge.toFixed(2) + " %";

        const emi_str = emi
            .toFixed(2)
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const loanAmount_str = loanAmount
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const full_str = full
            .toFixed(2)
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const int_str = interest
            .toFixed(2)
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const input_principal = "emi-principal-input"
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        setMonthlyemi(emi_str);
        setTotalinterest(int_str);
        setTotalamount(full_str);
        setEmiprincipalinput(input_principal);
    };

    const data = [
        {
            id: 1,
            months: 2022,
            Principal: 4953,
            InterestPaid: 5967,
            TotalPayment: 10920,
            Balance: 890117,
        },
        {
            id: 2,
            months: 2023,
            Principal: 20827,
            InterestPaid: 22851,
            TotalPayment: 43680,
            Balance: 3406876,
        },
        {
            id: 3,
            months: 2024,
            Principal: 2255,
            InterestPaid: 21122,
            TotalPayment: 43680,
            Balance: 3145826,
        },
        {
            id: 4,
            months: 2025,
            Principal: 24427,
            InterestPaid: 19251,
            TotalPayment: 43680,
            Balance: 2863141,
        },
        {
            id: 5,
            months: 2026,
            Principal: 26455,
            InterestPaid: 17223,
            TotalPayment: 43680,
            Balance: 2556994,
        },
        {
            id: 6,
            months: 2027,
            Principal: 28651,
            InterestPaid: 15028,
            TotalPayment: 43680,
            Balance: 2225435,
        },
        {
            id: 7,
            months: 2028,
            Principal: 31028,
            InterestPaid: 12648,
            TotalPayment: 43680,
            Balance: 1866359,
        },
        {
            id: 8,
            months: 2029,
            Principal: 31028,
            InterestPaid: 12648,
            TotalPayment: 43680,
            Balance: 1866359,
        },
        {
            id: 9,
            months: 2030,
            Principal: 33603,
            InterestPaid: 10074,
            TotalPayment: 43680,
            Balance: 1477479,
        },
        {
            id: 10,
            months: 2031,
            Principal: 36393,
            InterestPaid: 7286,
            TotalPayment: 43680,
            Balance: 1056322,
        },
        {
            id: 11,
            months: 2032,
            Principal: 39416,
            InterestPaid: 4264,
            TotalPayment: 43680,
            Balance: 600210,
        },
    ];

    return (
        <>
            <section className="loan-Calculator pt-120 pb-120">
                <div className="container">
                    <div className="loan-calculator__box" id="home-loan-calculator">
                        <div className="loan-calculator__top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="block-title text-left">
                                        <p className="block-title__tagline">calculate your rate</p>
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
                            <div className="col-xl-7 col-lg-12">
                                <div className="slider-box">
                                    <form action="#">
                                        <div className="main-heading block-title text-left">
                                            <p className="block-title__tagline mb-0">Monthly EMI</p>
                                            <h3 className="block-title__title w-500">
                                                Home Loan EMI Calculator
                                            </h3>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Loan Amount</h4>
                                                <input
                                                    className="form-control input-control"
                                                    type="text"
                                                    name="pricipal"
                                                    id="emi-principal-input"
                                                    onkeypress="return onlynumeric(event)"
                                                    value={loanAmount}
                                                    onChange={(e) => { setLoanAmount(e.target.value); }} />
                                            </div>
                                            <div className="w-100">
                                                <input
                                                    style={{ maxWidth: "100%" }}
                                                    className="w-100 slider"
                                                    type="range"
                                                    id="volume"
                                                    min="1000"
                                                    max="50000"
                                                    value={loanAmount}
                                                    onChange={(e) => {
                                                        setLoanAmount(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>

                                            <div className="loan-counter-value">
                                                <span>$</span>
                                                <h6 id="emi-principal-show">{loanAmount}</h6>
                                            </div>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Loan Years</h4>
                                                <input
                                                    className="form-control input-control"
                                                    type="text"
                                                    name="loan-year"
                                                    id="emi-year-input"
                                                    onkeypress="return onlynumeric(event)"
                                                    value={numberOfyears}
                                                    onChange={(e) => {
                                                        setNumberOfyear(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            <div className="w-100 ">
                                                <input
                                                    style={{ maxWidth: "100%" }}
                                                    className="w-100 slider"
                                                    type="range"
                                                    id="volume"
                                                    min="1"
                                                    max="24"
                                                    value={numberOfyears}
                                                    onChange={(e) => {
                                                        setNumberOfyear(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>

                                            <div className="loan-counter-value">
                                                <h6 id="emi-totalyear-show">{numberOfyears}</h6>
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
                                                    id="interest-rate-input"
                                                    onkeypress="return onlynumeric(event)"
                                                    value={rateOfInterest}
                                                    onChange={(e) => {
                                                        setRateOfInterest(e.target.value);
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
                                                    value={rateOfInterest}
                                                    onChange={(e) => {
                                                        setRateOfInterest(e.target.value);
                                                        console.log(e);
                                                    }}
                                                />
                                            </div>
                                            <div className="loan-counter-value">
                                                <h6 id="emi-interest-show">{rateOfInterest}</h6>
                                                <span>%</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-xl-5">
                                <div className="loan-calculation">
                                    <div className="loan-calculation-content total-loan-form-emi">
                                        <div className="total-loan-form-calculation">
                                            <div className="loan-calculation-details">
                                                <p className="loan-form-calculation">
                                                    <span>Monthly EMI</span>
                                                    <b>
                                                        $<i id="monthly-emi">{monthlyemi}</i>
                                                    </b>
                                                </p>
                                                <p className="loan-form-calculation">
                                                    <span>Total Interest</span>
                                                    <b>
                                                        $<i id="total-interest">{totalinterest}</i>
                                                    </b>
                                                </p>
                                                <p className="loan-form-calculation">
                                                    <span>Total Amount Payable</span>
                                                    <b>
                                                        $<i id="total-amount">{totalamount}</i>
                                                    </b>
                                                </p>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <Link
                                                        to="/applynow"
                                                        className="thm-btn"
                                                        target="_blank"
                                                        rel="nofollow"
                                                    >
                                                        Apply Loan
                                                    </Link>
                                                </div>
                                                <div className="col-xl-6">
                                                    <Link
                                                        to="#"
                                                        data-target="amortization-chart"
                                                        className="thm-btn scroll-to-chart"
                                                        rel="nofollow"
                                                    >
                                                        View Chart
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="loan-start-date">
                                    <label for="start-date">
                                        <h4>Select Start Date</h4>
                                    </label>
                                    <input
                                        type="date"
                                        id="start"
                                        name="trip-start"
                                        value="2018-07-22"
                                    />

                                    <i
                                        className="fas fa-calendar-alt"
                                    // onChange={(e) => {
                                    //   e.target.value;
                                    // }}
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="main-heading block-title text-left">
                                    <p className="block-title__tagline mb-0">
                                        Amortization Schedule
                                    </p>
                                    <h3 className="block-title__title w-500">
                                        Amortization Schedule
                                    </h3>
                                </div>
                                <div className="amortization-schedule">
                                    <div className="amortization-inner">
                                        <div className="amortization-title">
                                            <div className="amortization-title-inner">Month</div>
                                            <div className="amortization-title-inner">
                                                Principal <span>(A)</span>
                                            </div>
                                            <div className="amortization-title-inner">
                                                Interest Paid <span>(B)</span>
                                            </div>
                                            <div className="amortization-title-inner total-payment-title">
                                                Total Payment <span>(A + B)</span>
                                            </div>
                                            <div className="amortization-title-inner">Balance</div>
                                        </div>
                                        <div className="amortization-content">
                                            {data.map((item) => (
                                                <div className="amortization-column-outer">
                                                    <div className="amortization-column sum">
                                                        <div className="amortization-data year-outer">
                                                            <i className="fas fa-plus-circle"></i>
                                                            <span>{item.months}</span>
                                                        </div>
                                                        <div className="amortization-data principal-sum">
                                                            $<span>{item.Principal}</span>
                                                        </div>
                                                        <div className="amortization-data interest-sum">
                                                            $<span>{item.InterestPaid}</span>
                                                        </div>
                                                        <div className="amortization-data total-payment-sum">
                                                            $<span>{item.Principal + item.InterestPaid}</span>
                                                        </div>
                                                        <div className="amortization-data balance-sum">
                                                            $<span>{item.Balance}</span>
                                                        </div>
                                                    </div>
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