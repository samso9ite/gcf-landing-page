import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import Header from '../../Bredcom/Main'
import First from "../../Menhomelone/First";

const HomeLoan = () => {
  
  return (
    <>
      <Header title={"Home"} subtitle={"HOME LOAN CALCULATOR"} link={"Home Loan Calculator"}/>
      <First/>
    </>
  );
};

export default HomeLoan;
