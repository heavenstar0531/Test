import React from "react";

import { Img, Text } from "components";

const PricingopenInfoPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-bebasneue items-center justify-start mx-auto w-full">
        <div className="bg-black_900_01 flex flex-col items-start justify-end p-[47px] md:px-10 sm:px-5 rounded-[56px] w-full">
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-center md:ml-[0] ml-[29px] mt-[25px] w-auto sm:w-full">
            <Img
              src="images/img_pricecheck.svg"
              className="h-20 w-20"
              alt="pricecheck"
            />
            <Text className="text-white_A700 w-auto" as="h1" variant="h1">
              PRICING (OPEN)
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingopenInfoPage;
