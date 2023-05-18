import React from "react";

import { Button, Img, Text } from "components";

const COMPONENETSPage: React.FC = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col items-start justify-start mx-auto p-12 md:px-10 sm:px-5 w-full">
        <Text
          className="font-bebasneue mt-[164px] text-center text-white_A700 tracking-[-0.34px]"
          as="h2"
          variant="h2"
        >
          Buttons
        </Text>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[261px] mt-[74px]"
          leftIcon={
            <Img
              src="images/img_icons8windows8.svg"
              className="mr-4"
              alt="icons8-windows-8 1"
            />
          }
          shape="CircleBorder32"
          size="3xl"
          variant="FillBlueA700"
        >
          <div className="font-inter font-semibold text-base text-center text-white_A700 tracking-[-0.34px]">
            Download for Windows
          </div>
        </Button>
        <Button
          className="cursor-pointer font-bold font-inter h-14 mb-[326px] mt-[47px] text-base text-center text-white_A700 tracking-[-0.34px] w-[142px]"
          shape="CircleBorder28"
          size="2xl"
          variant="FillBlueA700"
        >
          Free Trial
        </Button>
      </div>
    </>
  );
};

export default COMPONENETSPage;
