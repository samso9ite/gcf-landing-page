import { useState, useEffect } from "react";
import resource01 from "../../assets/images/gcf/loan-calculator.png";

// Pure helper to compute loan values given monthly interest rate.
// rateParam is interpreted as MONTHLY interest rate percent (e.g. 13 means 13% of principal each month).
// For tenure in months: monthlyInterest = principal * (rate/100)
// TotalInterest = monthlyInterest * months
// MonthlyPayment = (principal / months) + monthlyInterest (simple declining-balance not modeled; flat distribution assumed)
// For 15 days ("15d") we treat provided rate as a one-off simple interest percentage.
export function computeLoanValues(principal, tenureValue, rateParam) {
  if (!principal || principal <= 0) {
    return {
      monthlyPayment: 0,
      totalPay: 0,
      totalInterest: 0,
      monthlyInterest: 0,
      periods: 0,
    };
  }
  const isFifteenDays = tenureValue === "15d";
  const periods = isFifteenDays ? 1 : parseInt(tenureValue, 10);
  const rate = rateParam / 100;
  if (isNaN(periods) || periods <= 0) {
    return {
      monthlyPayment: 0,
      totalPay: 0,
      totalInterest: 0,
      monthlyInterest: 0,
      periods: 0,
    };
  }
  if (isFifteenDays) {
    const totalInterest = principal * rate;
    const totalPay = principal + totalInterest;
    return {
      monthlyPayment: totalPay, // single payment after 15 days
      totalPay,
      totalInterest,
      monthlyInterest: totalInterest, // same for display
      periods,
    };
  }
  const monthlyInterest = principal * rate;
  const totalInterest = monthlyInterest * periods; // flat monthly interest
  const totalPay = principal + totalInterest;
  const monthlyPayment = principal / periods + monthlyInterest;
  return { monthlyPayment, totalPay, totalInterest, monthlyInterest, periods };
}

// Format numbers with thousands separators for Nigerian locale (without currency symbol).
export function formatCurrency(value) {
  if (value === null || value === undefined || isNaN(value)) return '0';
  return new Intl.NumberFormat('en-NG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Parse any formatted currency/string into a numeric value (digits only)
export function parseCurrencyInput(input) {
  if (typeof input !== 'string') return Number(input) || 0;
  const digitsOnly = input.replace(/[^0-9]/g, '');
  return Number(digitsOnly) || 0;
}

function Calcuter() {
  const [loanMoney, setLoanMoney] = useState();
  // tenure can be '15d' for 15 days or a numeric month string like '1','2',...'12'
  const [tenure, setTenure] = useState("1");
  const [interestRate, setInterestRate] = useState(17); // default 1 month

  const [Money, setMoney] = useState(0); // monthly payment (or lump sum for 15 days)
  const [Total, setTotal] = useState(0); // total pay back amount (principal + all interest)
  const [Interest, setInterest] = useState(0); // total interest for full tenure (or 15 days)
  const [MonthlyInterest, setMonthlyInterest] = useState(0); // interest paid per month

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
      const {
        monthlyPayment,
        totalPay,
        totalInterest,
        monthlyInterest,
      } = computeLoanValues(loanMoney, tenure, interestRate);
      setMoney(Math.round(monthlyPayment));
      setTotal(Math.round(totalPay));
      setInterest(Math.round(totalInterest));
      setMonthlyInterest(Math.round(monthlyInterest));
    }
  }, [loanMoney, tenure, interestRate]);

  // Derived display string for the loan amount input
  const displayLoanMoney = loanMoney ? formatCurrency(loanMoney) : '';
  const handleLoanMoneyChange = (e) => {
    const parsed = parseCurrencyInput(e.target.value);
    setLoanMoney(parsed);
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
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      id="loanAmount"
                      className="w-100 form-control"
                      placeholder="Input Loan Amount"
                      value={displayLoanMoney}
                      onChange={handleLoanMoneyChange}
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
                      {tenure === "15d" ? "Pay (After 15 Days)" : "Monthly Payment"}
                    </span>
                    <b>
                      ₦<i id="loan-monthly-pay">{formatCurrency(Money)}</i>{" "}
                      <small style={{ fontSize: "11px" }}>
                        {tenure === "15d"
                          ? `at ${interestRate}% (15 days)`
                          : `${interestRate}% interest per month`}
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

                  {/* Interest display adjusted: show monthly interest when tenure is in months */}
                  {tenure === "15d" ? (
                    <p>
                      <span>Interest (15 Days)</span>
                      <b>
                        ₦<i id="loan-interest-15d">{formatCurrency(Interest)}</i>
                      </b>
                    </p>
                  ) : (
                    <p>
                      <span>Interest Paid Per Month</span>
                      <b>
                        ₦<i id="loan-monthly-interest">{formatCurrency(MonthlyInterest)}</i>
                        <small style={{ fontSize: "11px", marginLeft: 4 }}>
                          total interest ₦{formatCurrency(Interest)}
                        </small>
                      </b>
                    </p>
                  )}
                  <p>
                    <span>Total Pay Back</span>
                    <b>
                      ₦<i id="loan-total">{formatCurrency(Total)}</i>
                    </b>
                  </p>
                  <a
                    href="https://app.gcf.ng/signin"
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
