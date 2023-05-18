import React from "react";

import { Button, Img, Line, Text } from "components";
import HomepageOneItem11 from "components/HomepageOneItem11";
import HomepageOneLogin from "components/HomepageOneLogin";
import HomepageOneNavigation from "components/HomepageOneNavigation";

const FAQPage: React.FC = () => {
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
          <div className="flex md:flex-col flex-row font-bebasneue md:gap-10 items-start justify-between mt-[102px] w-[91%] md:w-full">
            <div className="flex flex-col gap-4 items-center justify-start md:mt-0 mt-0.5 w-2/5 md:w-full">
              <Text
                className="leading-[100.00%] text-white_A700 tracking-[-0.34px] w-full"
                as="h2"
                variant="h2"
              >
                <span className="md:text-5xl text-white_A700 text-7xl font-bebasneue text-left font-bold">
                  FREQUENTLYASKED{" "}
                </span>
                <span className="md:text-5xl text-blue_A700 text-7xl font-bebasneue text-left font-bold">
                  QUESTIONS
                </span>
              </Text>
              <Line className="bg-blue_A700 h-1 w-1/2" />
            </div>
            <div className="flex flex-col font-inter items-center justify-start w-1/2 md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                    <Text
                      className="font-medium mt-[5px] text-white_A700"
                      variant="body2"
                    >
                      What is LAGX?
                    </Text>
                    <Img
                      src="images/img_cheveronrightsolid.svg"
                      className="h-8 w-8"
                      alt="cheveronrightso"
                    />
                  </div>
                  <Text
                    className="font-normal leading-[150.00%] text-gray_300_7f w-full"
                    variant="body5"
                  >
                    LAGX is a high-performance latency reduction software, our
                    multi route solutions enable maximum ping reduction, packet
                    loss correction and even drops in connection (disconnects).
                    NoPing works like an internet GPS, through a route
                    calculation algorithm we deviate from all routes that have
                    problems like lag or packet loss, and we only use the best
                    routes to reach any game in the shortest time (ping).
                  </Text>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 items-end justify-between mt-2 w-full">
                <Text
                  className="font-medium mt-1.5 text-white_A700"
                  variant="body2"
                >
                  How to enable 7 days trial?
                </Text>
                <Img
                  src="images/img_cheveronrightsolid_white_a700.svg"
                  className="h-8 w-8"
                  alt="cheveronrightso_One"
                />
              </div>
              <div className="flex flex-row sm:gap-10 items-end justify-between mt-[34px] w-full">
                <Text
                  className="font-medium mt-[5px] text-white_A700"
                  variant="body2"
                >
                  How to use LAGX?
                </Text>
                <Img
                  src="images/img_cheveronrightsolid_white_a700.svg"
                  className="h-8 w-8"
                  alt="cheveronrightso_Two"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-[34px] w-full">
                <Text
                  className="font-medium sm:mt-0 mt-1.5 text-white_A700"
                  variant="body2"
                >
                  I can use LAGX Online or only desktop app?
                </Text>
                <Img
                  src="images/img_cheveronrightsolid_white_a700.svg"
                  className="h-8 w-8"
                  alt="cheveronrightso_Three"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-evenly mt-[140px] w-full">
            <div className="flex md:flex-1 flex-col gap-10 items-center justify-start w-[91%] md:w-full">
              <Line className="bg-white_A700_19 h-px w-full" />
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[175px] items-start justify-start md:mt-0 mt-0.5 w-[11%] md:w-full">
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
              src="images/img_shadowbackground_280x140.png"
              className="md:flex-1 h-[280px] sm:h-auto object-cover w-[10%] md:w-full"
              alt="shadowbackgroun"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
