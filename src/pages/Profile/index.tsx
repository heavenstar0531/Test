import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_900 flex sm:flex-col md:flex-col flex-row font-inter gap-[19px] items-center mx-auto pl-[13px] w-full">
        <div className="flex flex-col items-center justify-start md:px-5 w-[6%] md:w-full">
          <div className="md:h-[34px] h-[53px] relative w-full">
            <Img
              src="images/img_close_7.svg"
              className="common-pointer absolute bottom-[0] h-[34px] right-[0]"
              alt="close"
              onClick={() => navigate(-1)}
            />
            <Img
              src="images/img_cheveronleftsolid.svg"
              className="absolute h-8 left-[0] top-[0] w-8"
              alt="cheveronrightso"
            />
          </div>
          <Img
            src="images/img_home_blue_gray_500.svg"
            className="h-8 mt-[46px] w-8"
            alt="home"
          />
          <Img
            src="images/img_notification.svg"
            className="h-8 mt-5 w-8"
            alt="notification"
          />
          <Img
            src="images/img_signal.svg"
            className="h-8 mt-5 w-8"
            alt="signal"
          />
          <Img
            src="images/img_favorite.svg"
            className="h-8 mt-5 w-8"
            alt="favorite"
          />
          <div className="h-[43px] md:h-[53px] mt-5 relative w-[71%]">
            <Img
              src="images/img_eye_white_a700.svg"
              className="absolute h-8 left-[0] top-[0] w-8"
              alt="eye"
            />
            <Img
              src="images/img_cursor.svg"
              className="absolute bottom-[0] h-[33px] right-[0] w-[33px]"
              alt="cursor"
            />
          </div>
          <Img
            src="images/img_settings.svg"
            className="h-8 mt-[13px] w-8"
            alt="settings"
          />
          <Img
            src="images/img_signal_blue_a700.svg"
            className="h-6 mt-6"
            alt="signal_One"
          />
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[59px] mt-[326px]"
            rightIcon={
              <Img
                src="images/img_arrowdown.svg"
                className="ml-[7px] my-px"
                alt="arrow_down"
              />
            }
            shape="RoundedBorder4"
            size="md"
            variant="FillBluegray9003f01"
          >
            <div className="font-normal text-center text-white_A700 text-xs tracking-[-0.34px]">
              EN
            </div>
          </Button>
          <Img
            src="images/img_volume_blue_gray_500.svg"
            className="h-8 mt-6 w-8"
            alt="volume"
          />
        </div>
        <div className="h-[900px] md:px-5 relative w-[94%] md:w-full">
          <div className="absolute bottom-[5%] md:h-12 h-[53px] right-[3%] w-[5%]">
            <Button
              className="absolute flex h-12 items-center justify-center left-[0] rounded-[50%] top-[0] w-12"
              size="mdIcn"
              variant="icbOutlineBlueA7007f"
            >
              <Img
                src="images/img_question_white_a700.svg"
                className="h-8"
                alt="question"
              />
            </Button>
            <Img
              src="images/img_polygon1.svg"
              className="absolute bottom-[0] h-[22px] right-[0] w-[22px]"
              alt="polygonOne"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-8 h-full items-center justify-center ml-8 mt-[31px] w-auto">
            <Text
              className="font-semibold text-blue_gray_500 w-auto"
              variant="body7"
            >
              Homepage
            </Text>
            <Text
              className="font-normal text-blue_gray_500 w-auto"
              variant="body7"
            >
              Notifications
            </Text>
            <Text
              className="font-normal text-blue_gray_500 w-auto"
              variant="body7"
            >
              Settings
            </Text>
            <Text
              className="font-normal text-blue_gray_500 w-auto"
              variant="body7"
            >
              Affiliate System
            </Text>
            <Text
              className="font-normal text-blue_gray_500 w-auto"
              variant="body7"
            >
              Customer Support
            </Text>
            <Text
              className="font-normal text-blue_gray_500 w-auto"
              variant="body7"
            >
              Tutorial
            </Text>
            <Text
              className="font-normal text-blue_gray_500 w-auto"
              variant="body7"
            >
              Boost FPS
            </Text>
            <Text
              className="font-normal text-blue_gray_500 w-auto"
              variant="body7"
            >
              Blog
            </Text>
          </div>
          <div className="absolute h-[900px] inset-[0] justify-center m-auto w-full">
            <Line className="absolute bg-blue_gray_500_67 h-px inset-x-[0] mx-auto top-[9%] w-full" />
            <Line className="absolute bg-blue_gray_500_67 h-[900px] inset-y-[0] left-[0] my-auto w-px" />
            <div className="absolute flex flex-row gap-2 items-center justify-center right-[3%] top-[2%] w-[14%]">
              <div className="flex flex-col items-center justify-start w-[70%]">
                <Text
                  className="font-semibold text-white_A700"
                  variant="body10"
                >
                  Alexander Yeromin
                </Text>
                <div className="flex flex-row items-start justify-evenly mt-1 w-[97%] md:w-full">
                  <Img
                    src="images/img_starpurple500.svg"
                    className="h-3 w-3"
                    alt="starpurple500"
                  />
                  <Text className="font-normal text-blue_A700" variant="body11">
                    Enterprise member
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_ellipse10.png"
                className="h-10 md:h-auto rounded-[50%] w-10"
                alt="ellipseTen"
              />
            </div>
            <div className="absolute flex flex-col gap-6 inset-x-[0] items-start justify-start mx-auto top-[12%] w-[95%]">
              <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                <Text className="font-semibold text-white_A700" variant="body2">
                  My profile
                </Text>
                <div className="flex md:flex-col flex-row gap-[31px] items-center justify-between w-full">
                  <div className="bg-gray_900_07 flex md:flex-1 flex-col items-center justify-start p-[18px] rounded-[16px] w-[54%] md:w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start my-[5px] w-[99%] md:w-full">
                      <Text
                        className="font-semibold text-center text-white_A700 tracking-[-0.34px]"
                        variant="body5"
                      >
                        Your subscription
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="font-semibold sm:mt-0 mt-5 text-center text-white_A700 tracking-[-0.34px]"
                          variant="body7"
                        >
                          <span className="text-blue_gray_500 text-sm font-inter font-normal">
                            Email:{" "}
                          </span>
                          <span className="text-white_A700 text-sm font-inter">
                            {" "}
                          </span>
                          <span className="text-white_A700 text-sm font-inter font-normal">
                            lagx@gmail.com
                          </span>
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[47px] sm:mt-0 mt-5 text-blue_gray_500 text-center tracking-[-0.34px]"
                          variant="body7"
                        >
                          <span className="text-blue_gray_500 text-sm font-inter">
                            Expires in:{" "}
                          </span>
                          <span className="text-white_A700 text-sm font-inter">
                            21/04/2023
                          </span>
                        </Text>
                        <Button
                          className="cursor-pointer font-semibold min-w-[150px] sm:ml-[0] ml-[70px] text-center text-white_A700 text-xs"
                          shape="CircleBorder23"
                          size="2xl"
                          variant="FillBlueA700"
                        >
                          Update subscription
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[44%] md:w-full">
                    <div className="bg-gray_900_07 flex flex-col items-center justify-start pl-2 rounded-[16px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <Img
                            src="images/img_diamond_blue_a700.svg"
                            className="h-[78px] sm:mt-0 mt-4 rounded-[16px] w-[78px]"
                            alt="diamond"
                          />
                          <div className="flex flex-col items-start justify-start ml-3.5 sm:ml-[0] sm:mt-0 mt-[23px]">
                            <Text
                              className="text-center text-white_A700 tracking-[-0.34px]"
                              variant="body4"
                            >
                              Subscription: Enterprise
                            </Text>
                            <Text
                              className="font-normal mt-1.5 text-center text-gray_300_7f tracking-[-0.34px]"
                              variant="body10"
                            >
                              Unlimited features: to: 21/05/2023
                            </Text>
                            <Text
                              className="font-normal mt-5 text-blue_A700 text-center tracking-[-0.34px] underline"
                              variant="body7"
                            >
                              Change
                            </Text>
                          </div>
                          <div className="md:h-[115px] h-[123px] sm:ml-[0] ml-[79px] pl-1.5 relative rotate-[-32deg] rounded-[16px] w-1/4 sm:w-full">
                            <div className="absolute bottom-[18%] md:h-[19px] h-[37px] left-[5%] w-[21%]">
                              <div className="absolute bg-blue_A700 h-[19px] left-[0] rounded-[9px] top-[0] w-[19px]"></div>
                              <div className="absolute bg-blue_A700 bottom-[0] h-[17px] right-[0] rounded-lg w-[18px]"></div>
                            </div>
                            <div className="absolute md:h-[115px] h-[123px] inset-y-[0] my-auto right-[0] w-3/4">
                              <div className="absolute bottom-[0] md:h-[92px] h-[94px] inset-x-[0] mx-auto w-full">
                                <div className="flex flex-col h-full items-start justify-start m-auto w-full">
                                  <div className="bg-blue_A700 h-[17px] rounded-lg w-[18px]"></div>
                                  <div className="flex ml-1 md:ml-[0] relative w-[96%]">
                                    <div className="flex flex-col items-center justify-start my-auto w-[86%]">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <div className="bg-blue_A700 h-[19px] rounded-[9px] w-[19px]"></div>
                                        <div className="flex flex-row gap-3 items-start justify-start ml-1 md:ml-[0] w-[69%] md:w-full">
                                          <div className="bg-blue_A700 h-[18px] mb-[3px] rounded-lg w-[17px]"></div>
                                          <div className="bg-blue_A700 h-[19px] rounded-[9px] w-[19px]"></div>
                                        </div>
                                        <div className="flex flex-row gap-[7px] items-start justify-end md:ml-[0] ml-[19px] mt-1 w-[74%] md:w-full">
                                          <div className="flex flex-col items-end justify-start w-[46%]">
                                            <div className="bg-blue_A700 h-[19px] mr-1 rounded-[9px] w-[19px]"></div>
                                            <div className="bg-blue_A700 h-[11px] rounded-[5px] w-3/4"></div>
                                          </div>
                                          <div className="flex flex-col items-start justify-start mt-[3px] w-[42%]">
                                            <div className="bg-blue_A700 h-[18px] rounded-lg w-[17px]"></div>
                                            <div className="bg-blue_A700 h-[9px] ml-0.5 md:ml-[0] rounded w-[87%]"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-blue_A700 h-[19px] mb-[13px] ml-[-4.48px] mt-auto rounded-[7px] w-[18%] z-[1]"></div>
                                  </div>
                                </div>
                                <div className="absolute bg-blue_A700 h-[17px] inset-x-[0] mx-auto rounded-lg top-[22%] w-[18px]"></div>
                                <div className="absolute bg-blue_A700 bottom-[35%] h-4 right-[0] rounded-[50%] w-4"></div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-[39px] items-end justify-end pl-[5px] py-[5px] right-[0] rounded-[16px] top-[4%] w-[41%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_rewind.svg')",
                                  }}
                                >
                                  <Line className="bg-blue_A700 h-[18px] mt-[9px] rounded-sm w-1" />
                                </div>
                              </div>
                              <Line className="absolute bg-blue_A700 bottom-[23%] h-[27px] right-[0] rounded-[1px] w-px" />
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-[116px] items-end justify-start sm:pl-5 pl-[29px] py-[29px] right-[0] rounded-[16px] top-[0] w-[94%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group87.png')",
                                }}
                              >
                                <div className="bg-blue_A700 h-[19px] mb-[38px] rounded w-[16%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_900_07 flex flex-col gap-[17px] items-start justify-center p-[23px] sm:px-5 rounded-[16px] w-[54%] md:w-full">
                <Text
                  className="font-semibold text-center text-white_A700 tracking-[-0.34px]"
                  variant="body5"
                >
                  Password
                </Text>
                <Text
                  className="font-normal text-blue_gray_500"
                  variant="body7"
                >
                  Do you want to change your LagX acces password?
                </Text>
                <Button
                  className="cursor-pointer font-semibold mb-0.5 min-w-[137px] text-center text-white_A700 text-xs"
                  shape="CircleBorder23"
                  size="2xl"
                  variant="FillBlueA700"
                >
                  Change password
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
