import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import HomepageOneItem11 from "components/HomepageOneItem11";
import HomepageOneLogin from "components/HomepageOneLogin";
import HomepageOneNavigation from "components/HomepageOneNavigation";

const LoginSixPage: React.FC = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-inter items-end justify-start mx-auto sm:pl-5 pl-[21px] py-[21px] w-full">
        <div className="flex flex-col items-start justify-start mb-[41px] md:px-5 w-[93%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[91%] md:w-full">
            <Img
              src="images/img_group_white_a700.svg"
              className="h-8"
              alt="group"
            />
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[70%] md:w-full">
              <div className="bg-blue_gray_900_3f flex flex-col gap-3.5 justify-end pt-[18px] px-[18px] rounded-[28px]">
                <HomepageOneNavigation
                  className="flex flex-row gap-10 items-center justify-center md:ml-[0] ml-[17px] mr-[13px] w-auto sm:w-full"
                  home="Home"
                  games="Games"
                  howitworks="How it works"
                  pricing="Pricing"
                  faq="FAQ"
                />
                <Line className="bg-blue_A700 h-0.5 md:ml-[0] ml-[409px] rounded-[1px] w-[12%]" />
              </div>
              <HomepageOneLogin
                className="flex flex-col items-center justify-end p-4 rounded-[28px] sm:w-full"
                freetrial="Log in"
              />
              <Button
                className="cursor-pointer font-bold h-14 min-w-[142px] text-base text-center text-white_A700 tracking-[-0.34px]"
                shape="CircleBorder28"
                size="2xl"
                variant="FillBlueA700"
              >
                Free Trial
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] justify-start md:ml-[0] ml-[467px] mt-[137px] w-[27%] md:w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start ml-14 md:ml-[0]">
              <Text
                className="font-normal text-white_A700"
                as="h5"
                variant="h5"
              >
                Forgot password?
              </Text>
              <Text className="font-normal text-gray_300_7f" variant="body7">
                Now worries, we’ll send you resent insctructions
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                wrapClassName="w-full"
                className="font-normal p-0 placeholder:text-gray_300_7f text-gray_300_7f text-left text-sm w-full"
                type="email"
                name="group2033"
                placeholder="Enter your Email adress"
                shape="RoundedBorder12"
                size="lg"
                variant="OutlineGray90006"
              ></Input>
              <Button
                className="cursor-pointer font-normal min-w-[386px] sm:min-w-full mt-8 text-center text-sm text-white_A700"
                shape="CircleBorder11"
                size="2xl"
                variant="FillBlueA200"
              >
                Reset password
              </Button>
              <Text
                className="font-normal mt-[25px] text-white_A700"
                variant="body7"
              >
                <span className="text-white_A700 text-sm font-inter text-left">
                  Back to{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-blue_A200 text-sm font-inter text-left underline"
                >
                  Log in
                </a>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mt-[161px] w-full">
            <div className="flex md:flex-1 flex-col gap-10 items-center justify-start w-[91%] md:w-full">
              <Line className="bg-white_A700_19 h-px w-full" />
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[174px] items-start justify-start md:mt-0 mt-[3px] w-[11%] md:w-full">
                    <Img
                      src="images/img_group_white_a700.svg"
                      className="h-8"
                      alt="group_One"
                    />
                    <Text
                      className="font-medium md:ml-[0] ml-[5px] text-right text-white_A700_7f"
                      variant="body5"
                    >
                      © 2023 LAGXVPN
                    </Text>
                  </div>
                  <HomepageOneItem11
                    className="flex sm:flex-1 flex-col gap-4 h-[226px] md:h-auto items-start justify-center md:ml-[0] ml-[190px] w-[113px] sm:w-full"
                    header="Homepage"
                    text="Games"
                    textOne="How it works"
                    textTwo="Pricing"
                    textThree="FAQ"
                    textFour="Free trial"
                  />
                  <HomepageOneItem11
                    className="flex sm:flex-1 flex-col gap-4 h-[226px] md:h-auto items-center justify-start md:ml-[0] ml-[223px] w-[113px] sm:w-full"
                    header="Account"
                    text="Log in"
                    textOne="Register"
                    textTwo="Terms of use"
                  />
                  <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[220px] w-[24%] md:w-full">
                    <Text
                      className="font-normal text-white_A700_7f"
                      variant="body5"
                    >
                      Get the app
                    </Text>
                    <div className="bg-blue_A700 flex flex-col items-center justify-end p-2.5 rounded-[23px] w-full">
                      <div className="flex flex-row gap-3 items-center justify-center w-auto">
                        <Img
                          src="images/img_icons8windows8.svg"
                          className="h-6 w-6"
                          alt="icons8windowsEight"
                        />
                        <Text
                          className="font-semibold text-center text-white_A700 w-auto"
                          variant="body10"
                        >
                          Download for Windows
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_shadowbackground_5.png"
              className="md:flex-1 h-[280px] sm:h-auto object-cover w-[10%] md:w-full"
              alt="shadowbackgroun"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSixPage;
