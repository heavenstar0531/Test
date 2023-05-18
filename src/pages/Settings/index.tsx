import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_900 flex sm:flex-col md:flex-col flex-row font-inter gap-[19px] items-center mx-auto pl-4 w-full">
        <div className="flex flex-col items-end justify-start md:px-5 w-[5%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
            <Img
              src="images/img_close_8.svg"
              className="common-pointer h-[34px]"
              alt="close"
              onClick={() => navigate(-1)}
            />
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
            <Img
              src="images/img_contrast_blue_gray_500.svg"
              className="h-8 mt-5 w-8"
              alt="contrast"
            />
            <div className="h-12 md:h-[57px] mt-6 relative w-[90%]">
              <Img
                src="images/img_settings_white_a700.svg"
                className="absolute h-8 left-[0] top-[0] w-8"
                alt="settings"
              />
              <Img
                src="images/img_cursor.svg"
                className="absolute bottom-[0] h-[33px] right-[0] w-[33px]"
                alt="cursor"
              />
            </div>
            <Img
              src="images/img_signal_blue_a700.svg"
              className="h-6 mt-2"
              alt="signal_One"
            />
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[59px] mr-0.5 mt-[584px]"
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
        <div className="h-[1158px] md:px-5 relative w-[94%] md:w-full">
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
              className="font-normal text-white_A700 w-auto"
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
          <div className="absolute h-[1158px] inset-[0] justify-center m-auto w-full">
            <Line className="absolute bg-blue_gray_500_67 h-px inset-x-[0] mx-auto top-[7%] w-full" />
            <Line className="absolute bg-blue_gray_500_67 h-[1158px] inset-y-[0] left-[0] my-auto w-px" />
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
            <div className="absolute bottom-[3%] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[95%]">
              <Text className="font-semibold text-white_A700" variant="body2">
                Settings
              </Text>
              <div className="flex flex-col items-center justify-start mt-[21px] w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                    <Text
                      className="font-normal text-white_A700"
                      variant="body7"
                    >
                      Start LAGX with Windows
                    </Text>
                    <Img
                      src="images/img_signal_blue_a700.svg"
                      className="h-6"
                      alt="signal_Two"
                    />
                  </div>
                  <Line className="bg-blue_gray_500_71 h-px w-full" />
                </div>
              </div>
              <Input
                wrapClassName="flex mt-[15px] w-full"
                className="font-normal p-0 placeholder:text-white_A700 text-left text-sm text-white_A700 w-full"
                name="group1948757667"
                placeholder="Turbo Games"
                suffix={
                  <Img
                    src="images/img_signal_blue_a700.svg"
                    className="ml-[35px] my-auto"
                    alt="signal"
                  />
                }
                size="3xl"
                variant="UnderLineBluegray50071"
              ></Input>
              <Input
                wrapClassName="flex mt-[15px] w-full"
                className="font-normal p-0 placeholder:text-white_A700 text-left text-sm text-white_A700 w-full"
                name="language"
                placeholder="Mimimize LAGX on System Tray "
                suffix={
                  <Img
                    src="images/img_signal_blue_a700.svg"
                    className="ml-[35px] my-auto"
                    alt="signal"
                  />
                }
                size="3xl"
                variant="UnderLineBluegray50071"
              ></Input>
              <Input
                wrapClassName="flex mt-[15px] w-full"
                className="font-normal p-0 placeholder:text-white_A700 text-left text-sm text-white_A700 w-full"
                name="group1948757669"
                placeholder="“UI Guide” Reset"
                suffix={
                  <Img
                    src="images/img_signal_blue_a700.svg"
                    className="ml-[35px] my-auto"
                    alt="signal"
                  />
                }
                size="3xl"
                variant="UnderLineBluegray50071"
              ></Input>
              <Input
                wrapClassName="flex mt-[13px] w-full"
                className="font-normal p-0 placeholder:text-white_A700 text-left text-sm text-white_A700 w-full"
                name="group1948757670"
                placeholder="Clear Cache"
                suffix={
                  <Img
                    src="images/img_signal_blue_a700.svg"
                    className="ml-[35px] my-auto"
                    alt="signal"
                  />
                }
                size="3xl"
                variant="UnderLineBluegray50071"
              ></Input>
              <Input
                wrapClassName="flex mt-[13px] w-full"
                className="font-normal p-0 placeholder:text-white_A700 text-left text-sm text-white_A700 w-full"
                name="group1948757671"
                placeholder="Smart Exit"
                suffix={
                  <Img
                    src="images/img_signal_blue_a700.svg"
                    className="ml-[35px] my-auto"
                    alt="signal"
                  />
                }
                size="3xl"
                variant="UnderLineBluegray50071"
              ></Input>
              <div className="flex md:flex-col flex-row gap-3 items-start justify-between mt-[15px] w-full">
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-3 md:mt-0 mt-1.5 w-3"
                  alt="arrowdown"
                />
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="font-normal text-white_A700"
                        variant="body7"
                      >
                        Boost FPS
                      </Text>
                      <Img
                        src="images/img_signal_blue_a700.svg"
                        className="h-6"
                        alt="signal_Seven"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_signal_blue_a700.svg"
                            className="ml-[35px]"
                            alt="signal"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Windows NTFS
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_signal_blue_a700.svg"
                            className="ml-[35px]"
                            alt="signal"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Windows UPDATE
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_switch.svg"
                            className="ml-[35px]"
                            alt="Switch"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Windows SEARCH
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_signal_blue_a700.svg"
                            className="ml-[35px]"
                            alt="signal"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Windows SUPERFETCH
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_signal_blue_a700.svg"
                            className="ml-[35px]"
                            alt="signal"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Windows REGISTRY
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_signal_blue_a700.svg"
                            className="ml-[35px]"
                            alt="signal"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Windows SERVICES
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_signal_blue_a700.svg"
                            className="ml-[35px]"
                            alt="signal"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Games Priority
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_signal_blue_a700.svg"
                            className="ml-[35px]"
                            alt="signal"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Games Priority
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_switch.svg"
                            className="ml-[35px]"
                            alt="Switch"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Windows VISUAL
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_switch.svg"
                            className="ml-[35px]"
                            alt="Switch"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Windows ENERGY
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_switch.svg"
                            className="ml-[35px]"
                            alt="Switch"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Windows GAME BAR
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_switch.svg"
                            className="ml-[35px]"
                            alt="Switch"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Windows PROCESSOR
                        </div>
                      </Button>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[1079px] md:min-w-full"
                        rightIcon={
                          <Img
                            src="images/img_switch.svg"
                            className="ml-[35px]"
                            alt="Switch"
                          />
                        }
                      >
                        <div className="font-normal text-blue_gray_500 text-left text-sm">
                          Windows PERFOMANCE COUNT
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[21px] w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                    <Text
                      className="font-normal text-white_A700"
                      variant="body7"
                    >
                      Number of simultaneous connections
                    </Text>
                    <Img
                      src="images/img_signal_blue_a700.svg"
                      className="h-6"
                      alt="signal_Eleven"
                    />
                  </div>
                  <Line className="bg-blue_gray_500_71 h-px w-full" />
                </div>
              </div>
              <Input
                wrapClassName="flex mt-[15px] w-full"
                className="font-normal p-0 placeholder:text-white_A700 text-left text-sm text-white_A700 w-full"
                name="group1948757674"
                placeholder="Routing system (1 mode & 2 mode)"
                suffix={
                  <Img
                    src="images/img_signal_blue_a700.svg"
                    className="ml-[35px] my-auto"
                    alt="signal"
                  />
                }
                size="3xl"
                variant="UnderLineBluegray50071"
              ></Input>
              <Input
                wrapClassName="flex mt-[15px] w-full"
                className="font-normal p-0 placeholder:text-white_A700 text-left text-sm text-white_A700 w-full"
                name="group1948757675"
                placeholder="Modules Version"
                suffix={
                  <Img
                    src="images/img_signal_blue_a700.svg"
                    className="ml-[35px] my-auto"
                    alt="signal"
                  />
                }
                size="3xl"
                variant="UnderLineBluegray50071"
              ></Input>
            </div>
            <Line className="absolute bg-blue_A700 h-0.5 left-[22%] rounded-[1px] top-[6%] w-[5%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
