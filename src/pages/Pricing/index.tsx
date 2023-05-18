import React from "react";

import { Button, Img, Input, Line, List, Switch, Text } from "components";
import HomepageOneCheveronleftsol from "components/HomepageOneCheveronleftsol";
import HomepageOneItem11 from "components/HomepageOneItem11";
import HomepageOneLogin from "components/HomepageOneLogin";
import HomepageOneNavigation from "components/HomepageOneNavigation";
import PricingCheckmark from "components/PricingCheckmark";
import PricingColumnclock from "components/PricingColumnclock";
import PricingColumngoogle from "components/PricingColumngoogle";
import PricingColumngroupten from "components/PricingColumngroupten";
import PricingColumnrefresh from "components/PricingColumnrefresh";
import PricingColumnvectorTwo from "components/PricingColumnvectorTwo";
import PricingColumnvisa from "components/PricingColumnvisa";
import PricingPaymentmethods from "components/PricingPaymentmethods";
import PricingPaymentmethods1 from "components/PricingPaymentmethods1";
import PricingPaymentmethods2 from "components/PricingPaymentmethods2";
import PricingPaymentmethods3 from "components/PricingPaymentmethods3";

const PricingPage: React.FC = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-inter items-center justify-start mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1320px] mb-[76px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              src="images/img_group_white_a700.svg"
              className="h-8"
              alt="group"
            />
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[70%] md:w-full">
              <div className="bg-blue_gray_900_3f flex flex-col gap-3.5 justify-end pt-[18px] px-[18px] rounded-[28px]">
                <HomepageOneNavigation
                  className="flex flex-row gap-10 items-center justify-center md:ml-[0] ml-[17px] mr-[13px] w-auto sm:w-full"
                  home="Home"
                  games="Games"
                  howitworks="How it works"
                  pricing="Pricing"
                  faq="FAQ"
                />
                <Line className="bg-blue_A700 h-0.5 md:ml-[0] ml-[330px] mr-20 rounded-[1px] w-[12%]" />
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
          <div className="flex md:flex-col flex-row font-bebasneue md:gap-10 gap-[66px] items-end justify-start ml-72 md:ml-[0] mt-32 w-[51%] md:w-full">
            <div className="bg-black_900 h-3.5 md:mt-0 mt-[88px] w-[13px]"></div>
            <div className="flex flex-col mb-1 relative w-[89%] md:w-full">
              <Text
                className="m-auto text-white_A700 tracking-[-0.34px]"
                as="h1"
                variant="h1"
              >
                <span className="md:text-5xl text-white_A700 text-8xl font-bebasneue text-left font-bold">
                  GET LAGX IN{" "}
                </span>
                <span className="md:text-5xl text-blue_A700 text-8xl font-bebasneue text-left font-bold">
                  3 STEPS
                </span>
              </Text>
              <Line className="bg-blue_A700 h-1 mt-[-1.4px] mx-auto w-full z-[1]" />
            </div>
          </div>
          <Text
            className="font-normal md:ml-[0] ml-[507px] mt-[27px] text-center text-gray_300_7f"
            variant="body2"
          >
            Select a plan that works for you:
          </Text>
          <div className="flex flex-row font-inter items-start justify-end md:ml-[0] ml-[579px] mt-[22px] w-1/5 md:w-full">
            <Text className="font-bold mt-3.5 text-white_A700" variant="body3">
              Monly
            </Text>
            <Switch value={true} className="ml-3 mt-[11px] w-[21%]" />
            <Text
              className="font-bold ml-3 mt-3.5 text-white_A700"
              variant="body3"
            >
              Yearly
            </Text>
            <Button
              className="cursor-pointer font-semibold mb-3.5 min-w-[62px] ml-[3px] text-[10px] text-center text-white_A700"
              shape="CircleBorder11"
              size="sm"
              variant="FillBlueA700"
            >
              12% Save
            </Button>
          </div>
          <div className="flex md:flex-col flex-row font-inter gap-5 items-start justify-between mt-11 w-full">
            <div className="bg-gray_900_02 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[34px] p-[19px] rounded-[24px] w-[33%] md:w-full">
              <div className="flex flex-col gap-3 items-center justify-start mb-[9px] mt-[5px] w-[97%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    src="images/img_diamond.svg"
                    className="h-[78px] w-[78px]"
                    alt="diamond"
                  />
                  <div className="flex flex-col items-start justify-start ml-3 sm:ml-[0]">
                    <Text
                      className="font-semibold text-center text-white_A700 tracking-[-0.34px]"
                      variant="body2"
                    >
                      Basic
                    </Text>
                    <Text
                      className="font-normal mt-1 text-center text-gray_300_7f tracking-[-0.34px]"
                      variant="body5"
                    >
                      Free 7 days trial
                    </Text>
                  </div>
                  <Text
                    className="sm:ml-[0] ml-[116px] text-center text-white_A700 tracking-[-0.34px]"
                    variant="body1"
                  >
                    Free
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <Line className="bg-blue_gray_900 h-px w-full" />
                  <div className="flex flex-row gap-3 items-end justify-start mt-[21px] w-3/4 md:w-full">
                    <PricingCheckmark className="bg-light_green_900 border border-light_green_A700 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                    <Text
                      className="font-medium mb-0.5 mt-[7px] text-white_A700"
                      variant="body3"
                    >
                      You can Use only 4 games
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start mt-6 w-[44%] md:w-full">
                    <PricingCheckmark className="bg-light_green_900 border border-light_green_A700 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                    <Text
                      className="font-medium mb-0.5 mt-[7px] text-white_A700"
                      variant="body3"
                    >
                      Chat support
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start mt-6 w-[51%] md:w-full">
                    <PricingCheckmark className="bg-light_green_900 border border-light_green_A700 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                    <Text
                      className="font-medium mb-0.5 mt-[7px] text-white_A700"
                      variant="body3"
                    >
                      Only 7 Days trial
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start mt-6 w-[51%] md:w-full">
                    <PricingCheckmark className="bg-gray_900_04 border border-blue_gray_900_01 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                    <Text
                      className="font-medium mb-0.5 mt-[7px] text-gray_300_7f"
                      variant="body3"
                    >
                      All games acces
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-end justify-start mt-6 w-[94%] md:w-full">
                    <PricingCheckmark className="bg-gray_900_04 border border-blue_gray_900_01 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                    <Text
                      className="font-medium mb-0.5 mt-[7px] text-gray_300_7f"
                      variant="body3"
                    >
                      New benefits for game connection
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[55%] md:w-full">
                    <PricingCheckmark className="bg-gray_900_04 border border-blue_gray_900_01 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                    <Text
                      className="font-medium text-gray_300_7f"
                      variant="body3"
                    >
                      Stable connection
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold h-16 mt-10 text-base text-center text-white_A700 tracking-[-0.34px] w-[366px]"
                    shape="CircleBorder32"
                    size="3xl"
                    variant="FillBluegray90002"
                  >
                    Get started Free
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-[614px] mb-0.5 relative w-[33%] md:w-full">
              <Button
                className="cursor-pointer font-bold mb-[-2px] min-w-[122px] mx-auto text-base text-center text-white_A700 z-[1]"
                shape="CircleBorder17"
                size="md"
                variant="FillBlueA700"
              >
                Special
              </Button>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[582px] items-center justify-start mt-auto mx-auto p-[21px] sm:px-5 rounded-[24px] w-full"
                style={{ backgroundImage: "url('images/img_group105.svg')" }}
              >
                <div className="flex flex-col gap-10 items-center justify-start my-[5px] w-[98%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                        <Img
                          src="images/img_diamond_blue_a700.svg"
                          className="h-[78px] w-[78px]"
                          alt="diamond_One"
                        />
                        <div className="flex flex-col items-start justify-start ml-3 sm:ml-[0]">
                          <Text
                            className="font-semibold text-center text-white_A700 tracking-[-0.34px]"
                            variant="body2"
                          >
                            Enterprise
                          </Text>
                          <Text
                            className="font-normal text-center text-gray_300_7f tracking-[-0.34px]"
                            variant="body5"
                          >
                            Unlimited features
                          </Text>
                        </div>
                        <Text
                          className="sm:ml-[0] ml-[99px] text-center text-white_A700 tracking-[-0.34px]"
                          variant="body1"
                        >
                          Free
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                        <Line className="bg-blue_gray_900 h-px w-full" />
                        <div className="flex flex-row gap-3 items-end justify-start mt-[21px] w-3/4 md:w-full">
                          <PricingCheckmark className="bg-light_green_900 border border-light_green_A700 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                          <Text
                            className="font-medium mb-0.5 mt-[7px] text-white_A700"
                            variant="body3"
                          >
                            You can Use only 4 games
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-end justify-start mt-6 w-[44%] md:w-full">
                          <PricingCheckmark className="bg-light_green_900 border border-light_green_A700 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                          <Text
                            className="font-medium mb-0.5 mt-[7px] text-white_A700"
                            variant="body3"
                          >
                            Chat support
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-end justify-start mt-6 w-[51%] md:w-full">
                          <PricingCheckmark className="bg-light_green_900 border border-light_green_A700 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                          <Text
                            className="font-medium mb-0.5 mt-[7px] text-white_A700"
                            variant="body3"
                          >
                            Only 7 Days trial
                          </Text>
                        </div>
                        <div className="h-36 md:h-[168px] mt-6 relative w-[94%]">
                          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[54%]">
                            <div className="flex flex-col gap-6 items-start justify-start w-full">
                              <div className="flex flex-row gap-3 items-end justify-start w-full">
                                <PricingCheckmark className="bg-light_green_900 border border-light_green_A700 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                                <Text
                                  className="font-medium mb-0.5 mt-[7px] text-gray_300_7f"
                                  variant="body3"
                                >
                                  <span className="text-gray_300_7f text-lg font-inter text-left">
                                    All{" "}
                                  </span>
                                  <span className="text-white_A700 text-lg font-inter text-left">
                                    games acces
                                  </span>
                                </Text>
                              </div>
                              <PricingCheckmark className="bg-light_green_900 border border-light_green_A700 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                              <PricingCheckmark className="bg-light_green_900 border border-light_green_A700 border-solid flex h-8 items-center justify-center p-1 rounded-[50%] w-8" />
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                            <Text
                              className="font-medium text-gray_300_7f"
                              variant="body3"
                            >
                              <span className="text-gray_300_7f text-lg font-inter text-left">
                                New{" "}
                              </span>
                              <span className="text-white_A700 text-lg font-inter text-left">
                                benefits
                              </span>
                              <span className="text-gray_300_7f text-lg font-inter text-left">
                                {" "}
                                for game connection
                              </span>
                            </Text>
                          </div>
                          <div className="absolute bottom-[3%] flex flex-col items-center justify-start left-[13%]">
                            <Text
                              className="font-medium text-gray_300_7f"
                              variant="body3"
                            >
                              Stable connection
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold h-16 text-base text-center text-white_A700 tracking-[-0.34px] w-[366px]"
                    shape="CircleBorder32"
                    size="3xl"
                    variant="FillBlueA700"
                  >
                    Choose plan
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[31px] w-[33%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-end justify-start w-[53%] md:w-full">
                    <Text
                      className="bg-blue_A700 flex font-bold h-8 items-center justify-center rounded-[50%] text-center text-white_A700 w-8"
                      variant="body3"
                    >
                      2
                    </Text>
                    <Text
                      className="font-medium mb-1 mt-[7px] text-white_A700"
                      variant="body5"
                    >
                      Enter your email adress
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[140.00%] mt-2 text-gray_300_7f w-[89%] sm:w-full"
                    variant="body7"
                  >
                    Privacy guarantee: We do not share your information and will
                    contact you only as needed to provide our service.
                  </Text>
                  <Input
                    wrapClassName="mt-5 w-full"
                    className="font-normal p-0 placeholder:text-gray_300_7f text-base text-gray_300_7f text-left w-full"
                    type="email"
                    name="group103"
                    placeholder="Email"
                    shape="RoundedBorder12"
                    size="lg"
                    variant="FillGray90004"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-8 w-[89%] md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-end justify-start w-[62%] md:w-full">
                    <Text
                      className="bg-blue_A700 flex font-bold h-8 items-center justify-center rounded-[50%] text-center text-white_A700 w-8"
                      variant="body3"
                    >
                      3
                    </Text>
                    <Text
                      className="font-medium mb-1 mt-[7px] text-white_A700"
                      variant="body5"
                    >
                      Select payment method:
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[140.00%] text-gray_300_7f w-full"
                    variant="body7"
                  >
                    Privacy guarantee: We do not share your information and will
                    contact you only as needed to provide our service.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[21px] w-full">
                <div className="bg-gray_900_04 flex flex-col items-center justify-end p-[9px] rounded-[12px] w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-0.5 w-[97%] md:w-full">
                    <Img
                      src="images/img_arrowdown_blue_a700.svg"
                      className="h-6 sm:mt-0 mt-[3px] w-6"
                      alt="arrowdown"
                    />
                    <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[9px]">
                      <Text
                        className="font-medium text-white_A700"
                        variant="body7"
                      >
                        Credit Card
                      </Text>
                      <Text
                        className="font-normal text-gray_300_7f"
                        variant="body10"
                      >
                        Option - 1
                      </Text>
                    </div>
                    <PricingPaymentmethods className="bg-yellow_100 flex flex-col items-center justify-start mb-2.5 sm:ml-[0] ml-[145px] sm:mt-0 mt-[7px] rounded-sm sm:w-full" />
                    <PricingColumnvisa className="bg-teal_50 flex flex-col items-center justify-start mb-2.5 ml-1.5 sm:ml-[0] sm:mt-0 mt-[7px] p-0.5 rounded-sm sm:w-full" />
                    <PricingColumngoogle className="bg-gray_300_01 flex flex-col items-center justify-start mb-2.5 ml-1.5 sm:ml-[0] sm:mt-0 mt-[7px] p-0.5 rounded-sm sm:w-full" />
                    <PricingPaymentmethods1 className="bg-red_100 flex flex-col items-center justify-start mb-2.5 ml-1 sm:ml-[0] sm:mt-0 mt-[7px] p-0.5 rounded-sm sm:w-full" />
                    <PricingPaymentmethods2 className="bg-blue_100 flex flex-col items-center justify-start mb-2.5 ml-1 sm:ml-[0] sm:mt-0 mt-[7px] py-1 rounded-sm sm:w-full" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-4 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-gray_900_04 flex flex-col items-center justify-end p-[9px] rounded-[12px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-1 w-[97%] md:w-full">
                      <Img
                        src="images/img_arrowdown_blue_a700.svg"
                        className="h-6 sm:mt-0 mt-0.5 w-6"
                        alt="arrowdown_One"
                      />
                      <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[9px]">
                        <Text
                          className="font-medium text-white_A700"
                          variant="body7"
                        >
                          PayPal
                        </Text>
                        <Text
                          className="font-normal text-gray_300_7f"
                          variant="body10"
                        >
                          Option - 2
                        </Text>
                      </div>
                      <PricingColumngroupten className="bg-blue_100_01 flex flex-col items-center justify-start mb-2.5 sm:ml-[0] ml-[280px] sm:mt-0 mt-1.5 p-0.5 rounded-sm sm:w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-4 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-gray_900_04 flex flex-col items-center justify-end p-[9px] rounded-[12px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-0.5 w-[97%] md:w-full">
                      <Img
                        src="images/img_arrowdown_blue_a700.svg"
                        className="h-6 sm:mt-0 mt-[3px] w-6"
                        alt="arrowdown_Two"
                      />
                      <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[9px]">
                        <Text
                          className="font-medium text-white_A700"
                          variant="body7"
                        >
                          Bitcoin
                        </Text>
                        <Text
                          className="font-normal text-gray_300_7f"
                          variant="body10"
                        >
                          Option - 3
                        </Text>
                      </div>
                      <PricingColumnclock className="bg-yellow_100_01 flex flex-col items-center justify-start mb-2.5 sm:ml-[0] ml-[280px] sm:mt-0 mt-[7px] p-0.5 rounded-sm sm:w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-4 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-gray_900_04 flex flex-col items-center justify-end p-[9px] rounded-[12px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-0.5 w-[97%] md:w-full">
                      <Img
                        src="images/img_arrowdown_blue_a700.svg"
                        className="h-6 sm:mt-0 mt-[3px] w-6"
                        alt="arrowdown_Three"
                      />
                      <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[9px]">
                        <Text
                          className="font-medium text-white_A700"
                          variant="body7"
                        >
                          Other
                        </Text>
                        <Text
                          className="font-normal text-gray_300_7f"
                          variant="body10"
                        >
                          Option - 4
                        </Text>
                      </div>
                      <PricingPaymentmethods3 className="bg-red_100_01 flex flex-col items-center justify-start mb-2.5 sm:ml-[0] ml-[222px] sm:mt-0 mt-[7px] p-0.5 rounded-sm sm:w-full" />
                      <PricingColumnrefresh className="bg-lime_100 flex flex-col items-center justify-start mb-2.5 sm:ml-[0] ml-[5px] sm:mt-0 mt-[7px] p-0.5 rounded-sm sm:w-full" />
                      <PricingColumnvectorTwo className="bg-blue_100_02 flex flex-col items-start justify-start mb-2.5 sm:ml-[0] ml-[5px] sm:mt-0 mt-[7px] p-0.5 rounded-sm sm:w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter items-center justify-start mt-[117px] w-full">
            <div className="flex flex-col gap-[54px] items-center justify-start w-full">
              <div className="flex flex-col gap-8 items-center justify-center w-auto sm:w-full">
                <Text
                  className="font-bebasneue text-center text-white_A700 tracking-[-0.34px] w-48"
                  as="h2"
                  variant="h2"
                >
                  REVIEWS
                </Text>
                <Text
                  className="font-inter font-normal text-center text-gray_300_7f w-auto"
                  variant="body5"
                >
                  We are trusted by those, below you can read the reviews
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <HomepageOneCheveronleftsol className="bg-blue_A700 border border-blue_A700 border-solid flex h-[58px] items-center justify-center mb-[170px] md:mt-0 mt-[39px] p-[13px] rounded-[16px] shadow-bs4 w-[58px]" />
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[132px] grid md:grid-cols-1 grid-cols-2"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-6 items-center justify-start sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-medium leading-[170.00%] max-w-[442px] md:max-w-full text-white_A700"
                      variant="body3"
                    >
                      <>
                        This is the best service for games that use a vpn
                        connection. Thanks to this service my game is more
                        focused and there are no crashes from the game as it was
                        before. Stable connection and reliability, that&#39;s
                        what LAGX says about the service
                      </>
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[442px] sm:w-full">
                      <Img
                        src="images/img_avatar.png"
                        className="h-16 md:h-auto rounded-[50%] w-16"
                        alt="avatar"
                      />
                      <div className="flex flex-col gap-0.5 items-start justify-center w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                          <Text
                            className="font-semibold text-gray_300_7f text-right w-auto"
                            variant="body5"
                          >
                            5.0
                          </Text>
                          <Img
                            src="images/img_container.svg"
                            className="h-6 w-[82px]"
                            alt="container"
                          />
                        </div>
                        <Text
                          className="font-medium text-white_A700 w-auto"
                          variant="body3"
                        >
                          Aleksandr Kostylev “s1mple”
                        </Text>
                        <Text
                          className="font-normal text-white_A700_7f w-auto"
                          variant="body3"
                        >
                          Player - Natus Vincere
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start sm:ml-[0] w-auto sm:w-full">
                    <Text
                      className="font-medium leading-[170.00%] max-w-[442px] md:max-w-full text-white_A700"
                      variant="body3"
                    >
                      <>
                        This is the best service for games that use a vpn
                        connection. Thanks to this service my game is more
                        focused and there are no crashes from the game as it was
                        before. Stable connection and reliability, that&#39;s
                        what LAGX says about the service
                      </>
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[442px] sm:w-full">
                      <Img
                        src="images/img_avatar_64x64.png"
                        className="h-16 md:h-auto rounded-[50%] w-16"
                        alt="avatar"
                      />
                      <div className="flex flex-col gap-0.5 items-start justify-center w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                          <Text
                            className="font-semibold text-gray_300_7f text-right w-auto"
                            variant="body5"
                          >
                            4.7
                          </Text>
                          <Img
                            src="images/img_container_amber_500.svg"
                            className="h-6 w-[82px]"
                            alt="container"
                          />
                        </div>
                        <Text
                          className="font-medium text-white_A700 w-auto"
                          variant="body3"
                        >
                          Mathieu Herbaugh “ZywOo”
                        </Text>
                        <Text
                          className="font-normal text-white_A700_7f w-auto"
                          variant="body3"
                        >
                          Player - Vitality
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <HomepageOneCheveronleftsol className="bg-blue_A700 border border-blue_A700 border-solid flex h-[58px] items-center justify-center mb-[170px] md:mt-0 mt-[39px] p-[13px] rounded-[16px] shadow-bs4 w-[58px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter gap-10 items-center justify-start mt-[120px] w-full">
            <Line className="bg-white_A700_19 h-px w-full" />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-44 items-start justify-start w-[11%] md:w-full">
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
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[316px]"
                    leftIcon={
                      <Img
                        src="images/img_icons8windows8.svg"
                        className="mr-3"
                        alt="icons8-windows-8 1"
                      />
                    }
                    shape="CircleBorder23"
                    size="lg"
                    variant="FillBlueA700"
                  >
                    <div className="font-semibold text-center text-white_A700 text-xs">
                      Download for Windows
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;