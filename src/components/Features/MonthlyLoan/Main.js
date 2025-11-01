import React from "react";
import { useState, useEffect, useRef } from "react";
import Bredcom from '../../Bredcom/Main'
import First from "../../Menmonthlylone/First";
import Second from "../../Menmonthlylone/Second";

const MonthlyLoan = () => {
  const [loanMoney, setLoanMoney] = useState(16000);
  const [loanMonth, setLoanMonth] = useState(8);
  const [interestRate, setInterestRate] = useState(15);

  const [Money, setMoney] = useState(0);
  const [Month, setMonth] = useState(0);
  const countRange = useRef();
  useEffect(() => {
    if (loanMoney > 0 && loanMonth > 0) {
      emiCalculate();
    }
  }, [loanMoney, loanMonth]);

  const emiCalculate = () => {
    const interestRatePercent = parseInt(interestRate, 10) / 100;
    const totalPay = loanMoney * interestRatePercent + parseInt(loanMoney, 10);
    const monthlyPay = totalPay / parseInt(loanMonth, 10);

    setMoney(parseInt(monthlyPay, 10));
    setMonth(parseInt(totalPay, 10));
  };

  return (
    <>
      <Bredcom title={"Home"} subtitle={"LOAN CALCULATOR"} link={"Loan Calculator"}/>
      <First/>
      <Second/>
    </>
  );
};

export default MonthlyLoan;
