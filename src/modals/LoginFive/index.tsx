import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const LoginFiveModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[30%]"
      overlayClassName="bg-black_900_cc fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-black_900_02 flex flex-col items-end justify-start mb-[193px] p-6 md:px-5 rounded-[12px] w-full">
          <div className="flex flex-col justify-start mr-2 w-[91%] md:w-full">
            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[146px] w-[63%] md:w-full">
              <Button
                className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                size="xlIcn"
                variant="icbFillBlue10003"
              >
                <Img
                  src="images/img_hugeicondevicesolidunlock.svg"
                  className="h-10"
                  alt="hugeicondevices"
                />
              </Button>
              <Img
                src="images/img_frame_gray_600_02.svg"
                className="h-6 rounded-lg w-6"
                alt="frame"
              />
            </div>
            <Text
              className="font-normal ml-12 md:ml-[0] mt-[31px] text-white_A700"
              variant="body2"
            >
              Password successfully reset
            </Text>
            <Text
              className="font-normal mr-[25px] mt-[13px] text-center text-white_A700_99"
              variant="body7"
            >
              We sent you instructions for further password recovery
            </Text>
            <Button
              className="cursor-pointer font-normal min-w-[148px] md:ml-[0] ml-[108px] mr-[134px] mt-6 text-center text-sm text-white_A700"
              shape="CircleBorder11"
              size="2xl"
              variant="FillBlueA200"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default LoginFiveModal;
