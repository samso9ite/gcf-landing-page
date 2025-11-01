import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import resource01 from '../../assets/images/resources/loan-calculator-1-1.png'

function Calcuter() {

    const [loanMoney, setLoanMoney] = useState(16000);
    const [loanMonth, setLoanMonth] = useState(8);
    const [interestRate, setInterestRate] = useState(15);

    const [Money, setMoney] = useState(0);
    const [Month, setMonth] = useState(0);

    useEffect(() => {
        if (loanMoney > 0 && loanMonth > 0) {
            emiCalculate();
        }
    }, [loanMoney, loanMonth]);
    const emiCalculate = () => {
        console.log("ddsfdfef fsfasf");

        const interestRatePercent = parseInt(interestRate, 10) / 100;
        const totalPay = loanMoney * interestRatePercent + parseInt(loanMoney, 10);
        const monthlyPay = totalPay / parseInt(loanMonth, 10);

        setMoney(parseInt(monthlyPay, 10));
        setMonth(parseInt(totalPay, 10));
    };
    return (
        <>
            <section className="loan-calculator loan-calculator--has-bg pt-120">
                <div className="container">
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
                                    Nullam vel nibh facilisis lectus fermentum ultrices quis non
                                    risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. In hac habitasse platea dictumst.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="loan-calculator__box">
                        <div className="row row-gutter-x-0">
                            <div className="col-lg-6">
                                <form className="loan-calculator__form" action="/contact" id="loan-calculator" data-interest-rate="15" >
                                    <div className="input-box__top">
                                        <span>$10000</span>
                                        <span>$40000</span>
                                    </div>
                                    <div>
                                        <input color="orange-50" className="w-100 slider" type="range" id="volume" min="10000" max="40000" onChange={(e) => { setLoanMoney(e.target.value); }} />
                                        <h6>${loanMoney}</h6>
                                    </div>
                                    <div className="input-box">
                                        <div className="range-slider-count" id="range-slider-count"></div>
                                        <input type="hidden" value="" id="min-value-rangeslider-count" />
                                        <input type="hidden" value="" id="max-value-rangeslider-count" />
                                    </div>
                                    <div className="input-box__top">
                                        <span>1 Month</span>
                                        <span>12 Months</span>
                                    </div>
                                    <input style={{ color: "orange-50" }} className="w-100 slider" type="range" id="volume" min="1" max="12" value={loanMonth} onChange={(e) => { setLoanMonth(e.target.value); console.log(e); }} />
                                    <h6>{loanMonth} Months</h6>
                                    <div className="input-box">
                                        <div className="range-slider-month" id="range-slider-month"></div>
                                        <input type="hidden" value="" id="min-value-rangeslider-month" />
                                        <input type="hidden" value="" id="max-value-rangeslider-month" />
                                    </div>
                                    <p>
                                        <span>Pay Monthly</span>
                                        <b>
                                            $<i id="loan-monthly-pay">{Money}</i>
                                        </b>
                                    </p>
                                    <p>
                                        <span>Term of Use</span>
                                        <b>
                                            <i id="loan-month">{loanMonth}</i> Months
                                        </b>
                                    </p>
                                    <p>
                                        <span>Total Pay Back</span>
                                        <b>
                                            $<i id="loan-total">{Month}</i>
                                        </b>
                                    </p>
                                    <Link to="/applynow" className="thm-btn thm-btn--dark-hover"> Apply For Loan </Link>
                                    <div className="loan-calculator__form__terms">
                                        *These calculators are provided only as general self-help
                                        Planning Tools. Results depend on other factors.
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <div className="loan-calculator__image">
                                    <img src={resource01} alt="" />
                                    <div className="loan-calculator__image__caption wow fadeInUp" data-wow-duration="1500ms" >
                                        <div className="loan-calculator__image__caption__inner">
                                            <h3 className="loan-calculator__image__title">
                                                98<span>%</span>
                                            </h3>
                                            <p className="loan-calculator__image__text">
                                                Satisfied Customers
                                            </p>
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

export default Calcuter