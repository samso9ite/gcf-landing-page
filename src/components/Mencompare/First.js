import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function First() {

    const [lowrate, setLowrate] = useState(0);
    const [highrate, setHighrate] = useState(0);
    const [principalrate, setPrincipalrate] = useState(50000);
    const [loanyear, setLoanyear] = useState(3);
  
    const loancalculate = (principal_rate, interest_rates, loan_year) => {
      const loanAmount = principal_rate;
      const numberOfMonths = loan_year * 12;
      const rateOfInterest = interest_rates;
      const monthlyInterestRatio = rateOfInterest / 100 / 12;
      const top = Math.pow(1 + monthlyInterestRatio, numberOfMonths);
      const bottom = top - 1;
      const sp = top / bottom;
      const emi = loanAmount * monthlyInterestRatio * sp;
      const full = numberOfMonths * emi;
      const interest = full - loanAmount;
      const int_pge = (interest / full) * 100;
  
      const emi_str = emi
        .toFixed(2)
        .toString()
        .replace(/,/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
      return emi_str;
    };
    const loancal = (lowInt, highInt) => {
      if (principalrate > 0 && loanyear > 0) {
        if (lowInt && highInt) {
          console.log(principalrate, lowInt, loanyear);
          const low_emi = loancalculate(principalrate, lowInt, loanyear);
          const high_emi = loancalculate(principalrate, highInt, loanyear);
          const pristr = `${"$"} ${low_emi} - ${"$"}${high_emi}`;
          return pristr;
        } else if (!lowInt && highInt) {
          const high_emi = loancalculate(principalrate, highInt, loanyear);
          return high_emi
        } else if (lowInt && !highInt) {
          const low_emi = loancalculate(principalrate, lowInt, loanyear);
          return low_emi
        }
      }
    };
  
    useEffect(() => {
      if (lowrate > 0 && highrate > 0 && principalrate > 0) {
      }
    }, [lowrate, highrate, principalrate]);
  
    const compardata = [
      {
        id: 1,
        name: "abc Bank",
        lowInt: 8.4,
        highInt: 12.6,
        fees: "Upto 2.5%",
        emi: "",
      },
      {
        id: 2,
        name: "xyz Bank",
        lowInt: 9.6,
        highInt: 13.85,
        fees: "**$20",
        emi: "",
      },
      {
        id: 3,
        name: "yesh Bank",
        lowInt: "Upto",
        highInt: 12.6,
        fees: "Upto 2.8%",
        emi: "",
      },
      {
        id: 4,
        name: "manthan Bank",
        lowInt: 5.9,
        highInt: "Onwoed",
        fees: "Upto 1.9% - 2%",
        emi: "",
      },
      {
        id: 5,
        name: "kirtan Bank",
        lowInt: 9.1,
        highInt: 13.2,
        fees: "Upto 3.2%",
        emi: "",
      },
      {
        id: 6,
        name: "hiren Bank",
        lowInt: 7.9,
        highInt: 13.2,
        fees: "**$35",
        emi: "",
      },
      {
        id: 7,
        name: "bhargav Bank",
        lowInt: 9.35,
        highInt: 13.35,
        fees: "Upto 3.5%",
        emi: "",
      },
      {
        id: 8,
        name: "siddhiesh Bank",
        lowInt: 8.5,
        highInt: 9.5,
        fees: "Upto 2.75%",
        emi: "",
      },
      {
        id: 9,
        name: "jay Bank",
        lowInt: 10.49,
        highInt: 12.99,
        fees: "	Upto 6.8%",
        emi: "",
      },
    ];

  return (
    <>

<section className="loan-Calculator pt-120 pb-120">
        <div className="container">
          <div className="loan-calculator__top">
            <div className="row">
              <div className="col-md-6">
                <div className="block-title text-left">
                  <p className="block-title__tagline">Compare Your EMI</p>
                  <h2 className="block-title__title">
                    Comparison With Other Banks
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
          <div className="loan-comparison__body" id="compare-emi-1">
            <div className="row">
              <div className="col-lg-6">
                <div className="slider-box">
                  <div className="main-slide">
                    <div className="single-loan-header">
                      <h4>Loan Amount</h4>
                      <input className="form-control input-control" type="text" id="principal-amount" name="principal-amount"
                        value={principalrate} onChange={(e) => { setPrincipalrate(e.target.value); }} />
                    </div>
                    <div className="w-100">
                      <input
                        style={{ maxWidth: "100%" }}
                        className="w-100 slider"
                        type="range"
                        id="volume"
                        min="1000"
                        max="500000"
                        value={principalrate}
                        onChange={(e) => { setPrincipalrate(e.target.value); }} />
                    </div>
                    <div className="loan-counter-value">
                      <span>$ {principalrate}</span>
                      <h6 id="principal-show"></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider-box">
                  <div className="main-slide">
                    <div className="single-loan-header">
                      <h4>Loan Years</h4>
                      <input
                        className="form-control input-control"
                        type="text"
                        id="loan-year"
                        name="loan-year"
                        value={loanyear}
                        onChange={(e) => { setLoanyear(e.target.value); }} />
                    </div>
                    <div className="w-100">
                      <input
                        style={{ maxWidth: "100%" }}
                        className="w-100 slider"
                        type="range"
                        id="volume"
                        min="1"
                        max="24"
                        value={loanyear}
                        onChange={(e) => {
                          setLoanyear(e.target.value);
                          console.log(e);
                        }}
                      />
                    </div>
                    <div className="loan-counter-value">
                      <h6 id="totalyear-show"></h6>
                      <span>{loanyear}Years</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="compare-table table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Banks</th>
                        <th>Interest Rate (p.a.)</th>
                        <th>Processing Fees</th>
                        <th>EMI</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compardata.map((item) => (
                        <tr>
                          <td>
                            <Link to="#">{item.name}</Link>
                          </td>
                          <td className="interest-rate">
                            {item.lowInt}% - {item.highInt}%
                          </td>
                          <td>{item.fees}</td>
                          <td className="calculated-emi">
                            {loancal(item.lowInt, item.highInt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="lowest-emi-note">
            <span className="indicator"></span>{" "}
            <small>This indicates lowest emi.</small>
          </div>
          <div className="terms-conditions">
            <small>**Tearms and conditions apply as per banks.</small>
          </div>
        </div>
      </section>

    </>
  )
}

export default First