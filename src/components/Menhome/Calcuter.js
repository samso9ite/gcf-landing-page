import { useState, useEffect } from "react";
import resource01 from "../../assets/images/gcf/loan-calculator.png";

function Calcuter() {
  const [loanMoney, setLoanMoney] = useState(16000);
  // tenure can be '15d' for 15 days or a numeric month string like '1','2',...'12'
  const [tenure, setTenure] = useState("1");
  const [interestRate, setInterestRate] = useState(17); // default 1 month

  const [Money, setMoney] = useState(0); // periodic payment (monthly or single period for 15 days)
  const [Total, setTotal] = useState(0); // total pay back amount
  const [Interest, setInterest] = useState(0); // interest portion

  // derive interest rate whenever tenure changes
  useEffect(() => {
    let rate;
    if (tenure === "15d") rate = 10;
    else if (tenure === "1") rate = 17;
    else if (tenure === "2") rate = 13;
    else rate = 12; // > 2 months
    setInterestRate(rate);
  }, [tenure]);

  useEffect(() => {
    if (loanMoney > 0 && tenure) {
      emiCalculate();
    }
  }, [loanMoney, tenure, interestRate, emiCalculate]);

  const emiCalculate = () => {
    const interestRatePercent = interestRate / 100;
    const totalPay = loanMoney + loanMoney * interestRatePercent;
    // For 15 days treat as single payoff period, else divide by number of months
    const periods = tenure === "15d" ? 1 : parseInt(tenure, 10);
    const periodicPay = totalPay / periods;
    setMoney(Math.round(periodicPay));
    setTotal(Math.round(totalPay));
    setInterest(Math.round(totalPay - loanMoney));
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
                    How much loan do you need for your business/car?
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <p className="loan-calculator__top__text">
                  Use our loan calculator to estimate your monthly payments and
                  total payback amount. Plan your finances with ease.
                </p>
              </div>
            </div>
          </div>

          <div className="loan-calculator__box">
            <div className="row row-gutter-x-0">
              <div className="col-lg-6">
                <form
                  className="loan-calculator__form"
                  action="/contact"
                  id="loan-calculator"
                  data-interest-rate="15"
                >
                  <div className="input-group mb-3">
                    <label
                      htmlFor="loanAmount"
                      className="w-100 fw-semibold mb-1"
                    >
                      Loan Amount (₦)
                    </label>
                    <input
                      type="number"
                      id="loanAmount"
                      className="w-100 form-control"
                      value={loanMoney}
                      onChange={(e) => setLoanMoney(Number(e.target.value))}
                    />
                    <small className="text-muted">
                      Min ₦50,000 • Max ₦5,000,000 for Business Loan
                    </small>
                  </div>
                  <div className="input-group mb-4">
                    <label
                      htmlFor="loanTenure"
                      className="w-100 fw-semibold mb-1"
                    >
                      Repayment Tenure
                    </label>
                    <select
                      id="loanTenure"
                      className="w-100 form-select"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value)}
                    >
                      <option value="15d">15 Days</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                        <option key={m} value={String(m)}>
                          {m} {m === 1 ? "Month" : "Months"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p>
                    <span>
                      {tenure === "15d" ? "Pay (After 15 Days)" : "Pay Monthly"}
                    </span>
                    <b>
                      ₦<i id="loan-monthly-pay">{Money}</i>{" "}
                      <small style={{ fontSize: "11px" }}>
                        at {interestRate}%
                      </small>
                    </b>
                  </p>
                  <p>
                    <span>Duration</span>
                    <b>
                      {tenure === "15d" ? (
                        "15 Days"
                      ) : (
                        <>
                          <i id="loan-month">{tenure}</i> Months
                        </>
                      )}
                    </b>
                  </p>

                  <p>
                    <span>Interest Amount</span>
                    <b>
                      ₦<i id="loan-interest">{Interest}</i>
                    </b>
                  </p>
                  <p>
                    <span>Total Pay Back</span>
                    <b>
                      ₦<i id="loan-total">{Total}</i>
                    </b>
                  </p>
                  <a
                    href="https://app.globalcash.ng"
                    className="thm-btn thm-btn--dark-hover"
                  >
                    {" "}
                    Apply For Loan{" "}
                  </a>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="loan-calculator__image">
                  <img src={resource01} alt="" />
                  <div
                    className="loan-calculator__image__caption wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
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
  );
}

export default Calcuter;
