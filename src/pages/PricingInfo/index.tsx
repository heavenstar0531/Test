import React from "react";

import { Img, Text } from "components";

const PricingInfoPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-bebasneue items-center justify-start mx-auto w-full">
        <div className="bg-black_900_01 flex flex-col items-start justify-end p-[66px] md:px-10 sm:px-5 rounded-[56px] w-full">
          <div className="flex flex-row gap-6 items-center justify-center ml-2.5 md:ml-[0] mt-1.5 w-auto sm:w-full">
            <Img
              src="images/img_pricecheck.svg"
              className="h-20 w-20"
              alt="pricecheck"
            />
            <Text className="text-white_A700 w-[230px]" as="h1" variant="h1">
              PRICING
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingInfoPage;
