import React from "react";

import Reviews from "../Components/Reviews";
import Pricing from "../Components/Pricing/Pricing";

const PricingPage = () => {
  return (
    <>
      <div className="bg-[#090D1B]  py-[30px]">
        <Pricing />
        <Reviews />
      </div>
    </>
  );
};

export default PricingPage;
