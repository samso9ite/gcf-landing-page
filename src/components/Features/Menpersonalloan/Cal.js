import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Cal() {
    const [loanAmt, setLoanAmt] = useState(100000);
    const [loanMonth, setLoanMonth] = useState(12);
    const [interestRate, setInterestRate] = useState(10);
    const [emiVal, setEmiVal] = useState(0);
    const [intVal, setIntVal] = useState(5499.06);
    const [TotalVal, setTotalVal] = useState(0);
    const chartRef = useRef(null);

    useEffect(() => {
        if (loanAmt > 0 && loanMonth > 0 && interestRate > 0) {
            emiCalculate();
        }
    }, [loanAmt, loanMonth, interestRate]);

    const emiCalculate = () => {
        const monthlyInterestRatio = interestRate / 100 / 12;
        const top = Math.pow(1 + monthlyInterestRatio, loanMonth);
        const bottom = top - 1;
        const sp = top / bottom;
        const emi = loanAmt * monthlyInterestRatio * sp;
        const emi_str = emi.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const full = loanMonth * emi;
        const interest = full - loanAmt;
        const int_str = interest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const full_str = full.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        setEmiVal(emi_str);
        setIntVal(parseFloat(int_str.replace(/,/g, "")));
        setTotalVal(full_str);
    };


    return (
        <>
            <section className="loan-Calculator pt-120 pb-120">
                <div className="container">
                    <div className="loan-calculator__box">
                        <div className="row">
                            <div className="col-xl-7 col-lg-12">
                                <div className="slider-box">
                                    <form>
                                        <div className="main-heading block-title text-left">
                                            <p className="block-title__tagline mb-0">Monthly EMI</p>
                                            <h3 className="block-title__title w-500">Loan Interest Calculator</h3>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Loan Amount</h4>
                                                <input type="number" className="form-control input-control"
                                                    value={loanAmt} onChange={(e) => setLoanAmt(e.target.value)} />
                                            </div>
                                            <input className="w-100 slider" type="range" min="10000" max="500000"
                                                value={loanAmt} onChange={(e) => setLoanAmt(e.target.value)} />
                                            <div className="loan-counter-value">
                                                <span>$</span>
                                                <h6>{loanAmt}</h6>
                                            </div>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Loan Months</h4>
                                                <input type="number" className="form-control input-control"
                                                    value={loanMonth} onChange={(e) => setLoanMonth(e.target.value)} />
                                            </div>
                                            <input className="w-100 slider" type="range" min="1" max="24"
                                                value={loanMonth} onChange={(e) => setLoanMonth(e.target.value)} />
                                            <div className="loan-counter-value">
                                                <h6>{loanMonth}</h6>
                                                <span>Months</span>
                                            </div>
                                        </div>
                                        <div className="main-slide">
                                            <div className="single-loan-header">
                                                <h4>Interest Rate</h4>
                                                <input type="number" className="form-control input-control"
                                                    value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
                                            </div>
                                            <input className="w-100 slider" type="range" min="1" max="24"
                                                value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
                                            <div className="loan-counter-value">
                                                <h6>{interestRate}</h6>
                                                <span>%</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="emi-calculation">
                                    <div className="emi-calculation-content">
                                        <p>
                                            <span>Monthly EMI</span>
                                            <b>$<i>{emiVal}</i></b>
                                        </p>
                                    </div>
                                </div>
                                <div className="loan-calculation">
                                    <div className="loan-calculation-content total-loan-form">
                                        <div className="total-loan-form-calculation">
                                            <p>
                                                <span>Total Interest</span>
                                                <b>$<i>{intVal}</i></b>
                                            </p>
                                            <p>
                                                <span>Total Amount Payable</span>
                                                <b>$<i>{TotalVal}</i></b>
                                            </p>
                                            <Link to="/applynow" className="thm-btn" target="_blank" rel="nofollow">
                                                Apply For Loan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cal;
