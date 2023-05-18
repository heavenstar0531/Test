import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import HomepageOneItem11 from "components/HomepageOneItem11";
import HomepageOneLogin from "components/HomepageOneLogin";
import HomepageOneNavigation from "components/HomepageOneNavigation";
import MyDataAvatarimage from "components/MyDataAvatarimage";
import MyDataColumnnotifications from "components/MyDataColumnnotifications";
import MyDataPlus from "components/MyDataPlus";

import { CloseSVG } from "../../assets/images";

const AffiliatePage: React.FC = () => {
  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-black_900 flex flex-col font-inter items-center justify-start mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[75px] items-center justify-start max-w-[1320px] mb-8 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-6 items-end justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-11 items-center justify-start md:mt-0 mt-[148px] w-[24%] md:w-full">
              <div className="flex flex-col items-start justify-start w-1/2 md:w-full">
                <div className="flex md:ml-[0] ml-[5px] relative w-[97%]">
                  <div className="h-[130px] my-auto w-[130px]">
                    <div className="flex flex-col h-full items-center justify-start m-auto outline outline-[1px] outline-gray_900_07 rounded-[50%] w-[130px]">
                      <Img
                        src="images/img_proggress.svg"
                        className="h-[130px] rounded-tl-[50%] rounded-tr-[50%] w-[130px]"
                        alt="proggress"
                      />
                    </div>
                    <MyDataAvatarimage className="absolute bg-amber_200 flex flex-col h-max inset-[0] items-center justify-center m-auto rounded-[50%] w-[110px] sm:w-full" />
                  </div>
                  <MyDataPlus className="bg-blue_A700 flex h-10 items-center justify-center ml-[-19px] my-auto p-1.5 rounded-[50%] shadow-bs3 w-10 z-[1]" />
                </div>
                <Text
                  className="font-bold md:ml-[0] ml-[11px] mt-6 text-center text-white_A700"
                  variant="body5"
                >
                  Clayton Santos
                </Text>
                <Text
                  className="font-bold mt-[11px] text-center text-gray_300_7f"
                  variant="body8"
                >
                  johny-perry@gmail.com
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start w-full">
                <div className="md:h-[200px] h-[202px] relative w-full">
                  <div className="h-[200px] m-auto outline outline-[1px] outline-gray_900_02 rounded-[20px] w-full"></div>
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[7%] w-[90%]">
                    <div className="flex flex-row items-center justify-start p-[15px] w-full">
                      <Img
                        src="images/img_user_30x30.svg"
                        className="h-[30px] w-[30px]"
                        alt="user"
                      />
                      <Text
                        className="font-black ml-5 text-blue_gray_500"
                        variant="body10"
                      >
                        My data
                      </Text>
                      <Img
                        src="images/img_arrowright_blue_gray_500.svg"
                        className="h-[30px] ml-[122px] w-[30px]"
                        alt="arrowright"
                      />
                    </div>
                    <div className="flex flex-col gap-[35px] items-center justify-start mt-[5px] w-[90%] md:w-full">
                      <div className="flex flex-row items-start justify-start w-full">
                        <Img
                          src="images/img_videocamera.svg"
                          className="h-[30px] w-[30px]"
                          alt="videocamera"
                        />
                        <Text
                          className="font-bold ml-5 mt-2 text-blue_gray_500"
                          variant="body10"
                        >
                          Enter key
                        </Text>
                        <Img
                          src="images/img_arrowright_blue_gray_500.svg"
                          className="h-[30px] ml-[114px] w-[30px]"
                          alt="arrowright_One"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start w-[98%] md:w-full">
                        <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                          <Img
                            src="images/img_user_blue_gray_500.svg"
                            className="h-[30px] w-[30px]"
                            alt="user_One"
                          />
                        </div>
                        <Text
                          className="font-bold ml-5 text-blue_gray_500"
                          variant="body10"
                        >
                          Personal information
                        </Text>
                        <Img
                          src="images/img_arrowright_blue_gray_500.svg"
                          className="h-[30px] ml-[47px]"
                          alt="arrowright_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[468px] h-[469px] relative w-full">
                  <div className="h-[468px] m-auto outline outline-[1px] outline-gray_900_02 rounded-[20px] w-full"></div>
                  <div className="absolute flex flex-col gap-4 h-max inset-[0] items-center justify-center m-auto w-[90%]">
                    <div className="flex flex-col gap-[34px] items-center justify-start w-[90%] md:w-full">
                      <div className="flex flex-row items-center justify-start w-full">
                        <Img
                          src="images/img_fire.svg"
                          className="h-[30px] w-[30px]"
                          alt="fire"
                        />
                        <Text
                          className="font-black ml-5 text-blue_gray_500"
                          variant="body10"
                        >
                          Reward program
                        </Text>
                        <Img
                          src="images/img_arrowright_blue_gray_500.svg"
                          className="h-[30px] ml-[71px] w-[30px]"
                          alt="arrowright_Three"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                          <Img
                            src="images/img_computer_blue_gray_500.svg"
                            className="h-[30px] w-[30px]"
                            alt="computer"
                          />
                          <Text
                            className="font-bold ml-5 text-blue_gray_500"
                            variant="body10"
                          >
                            Write Testimonials
                          </Text>
                          <Img
                            src="images/img_arrowright_blue_gray_500.svg"
                            className="h-[30px] ml-[60px] w-[30px]"
                            alt="arrowright_Four"
                          />
                        </div>
                      </div>
                    </div>
                    <MyDataColumnnotifications className="bg-blue_A700 flex flex-col items-center justify-start p-[15px] rounded-[30px] shadow-bs5 w-full" />
                    <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                      <List
                        className="flex-col gap-5 grid items-center pt-[50px] w-full"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-1 flex-row items-start justify-start mr-[7px] my-0 w-[98%] md:w-full">
                          <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                            <Img
                              src="images/img_question.svg"
                              className="h-[30px] w-[30px]"
                              alt="question"
                            />
                          </div>
                          <Text
                            className="font-bold ml-5 mt-2 text-blue_gray_500"
                            variant="body10"
                          >
                            Support
                          </Text>
                          <Img
                            src="images/img_arrowright_blue_gray_500.svg"
                            className="h-[30px] ml-[122px]"
                            alt="arrowright"
                          />
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                          <Img
                            src="images/img_checkmark_blue_gray_500.svg"
                            className="h-[30px] w-[30px]"
                            alt="checkmark"
                          />
                          <Text
                            className="font-bold ml-5 text-blue_gray_500"
                            variant="body10"
                          >
                            Statistics
                          </Text>
                          <Img
                            src="images/img_arrowright_blue_gray_500.svg"
                            className="h-[30px] ml-[114px] w-[30px]"
                            alt="arrowright"
                          />
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                          <Img
                            src="images/img_close.svg"
                            className="h-[30px] w-[30px]"
                            alt="close"
                          />
                          <Text
                            className="font-bold ml-5 text-blue_gray_500"
                            variant="body10"
                          >
                            Reccurence
                          </Text>
                          <Img
                            src="images/img_arrowright_blue_gray_500.svg"
                            className="h-[30px] ml-[100px] w-[30px]"
                            alt="arrowright"
                          />
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                          <Img
                            src="images/img_share.svg"
                            className="h-[30px] w-[30px]"
                            alt="share"
                          />
                          <Text
                            className="font-bold ml-5 text-blue_gray_500"
                            variant="body10"
                          >
                            Share Link
                          </Text>
                          <Img
                            src="images/img_arrowright_blue_gray_500.svg"
                            className="h-[30px] ml-[108px] w-[30px]"
                            alt="arrowright"
                          />
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                          <Img
                            src="images/img_volume_blue_gray_500.svg"
                            className="h-[30px] w-[30px]"
                            alt="volume"
                          />
                          <Text
                            className="font-bold ml-5 text-blue_gray_500"
                            variant="body10"
                          >
                            Exit
                          </Text>
                          <Img
                            src="images/img_arrowright_blue_gray_500.svg"
                            className="h-[30px] ml-[147px] w-[30px]"
                            alt="arrowright"
                          />
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[92px] items-end justify-start w-3/4 md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
                <div className="bg-blue_gray_900_3f flex flex-col items-center justify-end p-4 rounded-[28px]">
                  <HomepageOneNavigation
                    className="flex flex-row gap-10 items-center justify-center w-auto sm:w-full"
                    home="Home"
                    games="Games"
                    howitworks="How it works"
                    pricing="Pricing"
                    faq="FAQ"
                  />
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
              <div className="sm:h-[1427px] md:h-[927px] h-[930px] relative w-full">
                <div className="flex flex-row sm:gap-10 h-full items-start justify-between mt-7 mx-auto w-[95%]">
                  <Text
                    className="font-bold text-blue_gray_600"
                    variant="body8"
                  >
                    Affiliate
                  </Text>
                  <Text
                    className="font-bold text-blue_gray_600"
                    variant="body8"
                  >
                    Date of registration
                  </Text>
                </div>
                <div className="absolute border border-gray_900_02 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[27px] sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col items-start justify-start mb-[563px] mt-[35px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-white_A700"
                        variant="body3"
                      >
                        <span className="text-white_A700 text-lg font-inter text-left">
                          Your current balance:{" "}
                        </span>
                        <span className="text-blue_A700 text-lg font-inter text-left">
                          $12,99
                        </span>
                      </Text>
                      <Text
                        className="font-semibold ml-8 sm:ml-[0] text-white_A700"
                        variant="body3"
                      >
                        <span className="text-white_A700 text-lg font-inter text-left">
                          Your{" "}
                        </span>
                        <span className="text-white_A700 text-lg font-inter text-left">
                          Blocked balance
                        </span>
                        <span className="text-white_A700 text-lg font-inter text-left">
                          :{" "}
                        </span>
                        <span className="text-white_A700 text-lg font-inter text-left">
                          $0
                        </span>
                      </Text>
                      <Text
                        className="font-semibold ml-8 sm:ml-[0] text-white_A700"
                        variant="body3"
                      >
                        <span className="text-white_A700 text-lg font-inter text-left">
                          Level of Affiliate
                        </span>
                        <span className="text-white_A700 text-lg font-inter text-left">
                          :{" "}
                        </span>
                        <span className="text-blue_A700 text-lg font-inter text-left">
                          7
                        </span>
                      </Text>
                      <Text
                        className="font-semibold sm:ml-[0] ml-[124px] text-white_A700"
                        variant="body3"
                      >
                        20.04.2023
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold min-w-[150px] mt-6 text-center text-white_A700 text-xs"
                      shape="CircleBorder23"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Request Withdrawal
                    </Button>
                    <div className="flex flex-col items-center justify-start mt-10 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Line className="bg-gray_900_02 h-px w-full" />
                        <div className="flex flex-row sm:gap-10 items-start justify-between mt-[15px] w-full">
                          <Text
                            className="font-semibold mt-[17px] text-white_A700"
                            variant="body7"
                          >
                            Previous orders
                          </Text>
                          <Input
                            value={searchvalue}
                            onChange={(e) => setSearchvalue(e)}
                            wrapClassName="flex"
                            className="font-normal p-0 placeholder:text-gray_300_7f text-gray_300_7f text-left text-xs w-full"
                            name="search"
                            placeholder="Transaction History"
                            prefix={
                              <Img
                                src="images/img_search_white_a700.svg"
                                className="cursor-pointer mr-3 my-auto"
                                alt="search"
                              />
                            }
                            suffix={
                              <CloseSVG
                                fillColor="#7fe3e5e8"
                                className="cursor-pointer my-auto"
                                onClick={() => setSearchvalue("")}
                                style={{
                                  visibility:
                                    searchvalue?.length <= 0
                                      ? "hidden"
                                      : "visible",
                                }}
                                height={20}
                                width={20}
                                viewBox="0 0 20 20"
                              />
                            }
                            shape="srcRoundedBorder12"
                            size="smSrc"
                            variant="srcFillGray90002"
                          ></Input>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-7 w-full">
                          <div className="flex flex-col gap-[21px] items-start justify-start">
                            <Text
                              className="font-medium text-blue_gray_500"
                              variant="body8"
                            >
                              Date
                            </Text>
                            <Text
                              className="font-semibold text-white_A700"
                              variant="body7"
                            >
                              20.04.2023
                            </Text>
                          </div>
                          <div className="flex flex-col gap-5 items-start justify-start">
                            <Text
                              className="font-medium text-blue_gray_500"
                              variant="body8"
                            >
                              Full Name
                            </Text>
                            <Text
                              className="font-semibold text-white_A700"
                              variant="body7"
                            >
                              Oleksandr Yeromin
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[21px] items-start justify-start">
                            <Text
                              className="font-medium text-blue_gray_500"
                              variant="body8"
                            >
                              Transaction ID
                            </Text>
                            <Text
                              className="font-semibold text-white_A700"
                              variant="body7"
                            >
                              3456325
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[21px] items-start justify-start">
                            <Text
                              className="font-medium text-blue_gray_500"
                              variant="body8"
                            >
                              Partial balance
                            </Text>
                            <Text
                              className="font-semibold text-white_A700"
                              variant="body7"
                            >
                              $12,99
                            </Text>
                          </div>
                          <div className="flex sm:flex-1 flex-col gap-[15px] items-center justify-start w-[13%] sm:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Text
                                className="font-medium text-blue_gray_500"
                                variant="body8"
                              >
                                Support client 24/7
                              </Text>
                            </div>
                            <Button
                              className="flex h-6 items-center justify-center rounded-[50%] w-6"
                              size="smIcn"
                              variant="icbOutlineBlueA700"
                            >
                              <Img
                                src="images/img_checkmark_white_a700.svg"
                                className="h-4"
                                alt="checkmark"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <Line className="bg-white_A700_19 h-px w-full" />
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[174px] items-start justify-start md:mt-0 mt-[3px] w-[11%] md:w-full">
                    <Img
                      src="images/img_group_white_a700.svg"
                      className="h-8"
                      alt="group"
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
      </div>
    </>
  );
};

export default AffiliatePage;
