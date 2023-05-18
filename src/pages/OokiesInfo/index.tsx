import React from "react";

import { Img, Text } from "components";

const OokiesInfoPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-bebasneue items-center justify-start mx-auto w-full">
        <div className="bg-black_900_01 flex flex-row gap-6 items-center justify-start p-[67px] md:px-10 sm:px-5 rounded-[56px] w-full">
          <Img
            src="images/img_cookie.svg"
            className="h-20 ml-2 w-20"
            alt="cookie"
          />
          <Text
            className="mb-[3px] text-center text-white_A700"
            as="h1"
            variant="h1"
          >
            Сookies
          </Text>
        </div>
      </div>
    </>
  );
};

export default OokiesInfoPage;
