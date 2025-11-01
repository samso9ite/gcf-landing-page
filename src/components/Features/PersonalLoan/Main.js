import React from "react";
import Bredcom from '../../Bredcom/Main'
import Cal from "../Menpersonalloan/Cal";

const PersonalLoan = () => {

  return (
    <>
      <Bredcom title={"Home"} subtitle={"PERSONAL LOAN CALCULATOR"} link={"Personal Loan Calculator"}/>
      <Cal />
    </>
  );
};

export default PersonalLoan;
