import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const LoginModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[30%]"
      overlayClassName="bg-black_900_cc fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-black_900_02 flex flex-col items-center justify-start mb-[147px] p-6 md:px-5 rounded-[12px] w-full">
          <div className="flex flex-col items-end justify-start mb-[7px] w-[97%] md:w-full">
            <div className="flex flex-row items-start justify-between w-[59%] md:w-full">
              <Button
                className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                size="lgIcn"
                variant="icbFillBlue10003"
              >
                <Img
                  src="images/img_checkmark_blue_a700.svg"
                  className="h-10"
                  alt="checkmark"
                />
              </Button>
              <Img
                src="images/img_frame_gray_600_02.svg"
                className="h-6 rounded-lg w-6"
                alt="frame"
              />
            </div>
            <div className="flex flex-col gap-4 items-center justify-start mt-[29px] w-full">
              <Text className="font-medium text-white_A700" variant="body2">
                Successfully registered
              </Text>
              <Text
                className="font-normal leading-[20.00px] text-center text-white_A700_99 w-full"
                variant="body7"
              >
                You are now successfully registered on our website. You can find
                more detailed information in your personal account
              </Text>
            </div>
            <Button
              className="cursor-pointer font-normal min-w-[148px] mr-[134px] mt-6 text-center text-sm text-white_A700"
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

export default LoginModal;
