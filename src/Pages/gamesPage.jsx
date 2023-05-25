import React from "react";

import Reviews from "../Components/Reviews";
import { Games } from "../Components";

const GamesPage = () => {
  return (
    <>
      <div className="bg-[#090D1B] lg:px-[140px] px-[100px] py-[30px]">
        <Games />
        <Reviews />
      </div>
    </>
  );
};

export default GamesPage;
