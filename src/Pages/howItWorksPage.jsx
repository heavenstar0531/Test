import React from "react";

import AllFeatures from "../Components/AllFeatures";
import { HowItWorks } from "../Components";

const HowItWorksPage = () => {
  return (
    <>
      <div className="bg-[#090D1B] lg:px-[140px] px-[100px] py-[30px]">
        <HowItWorks />
        <AllFeatures />
      </div>
    </>
  );
};

export default HowItWorksPage;
