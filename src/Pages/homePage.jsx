import React from "react";

import Features from "../Components/Features";
import AllFeatures from "../Components/AllFeatures";
import Reviews from "../Components/Reviews";
import Hero from "../Components/Hero";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#090D1B] lg:px-[140px] px-[100px] py-[30px]">
        <Hero />
        <AllFeatures />
        <Features />
        <Reviews />
      </div>
    </>
  );
};

export default HomePage;
