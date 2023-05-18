import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const NotificationsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_900 flex sm:flex-col md:flex-col flex-row font-inter gap-[19px] items-center mx-auto pl-4 w-full">
        <div className="flex flex-col items-end justify-start md:px-5 w-[5%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
            <Img
              src="images/img_close_4.svg"
              className="common-pointer h-[34px]"
              alt="close"
              onClick={() => navigate(-1)}
            />
            <Img
              src="images/img_home_blue_gray_500.svg"
              className="h-8 mt-[46px] w-8"
              alt="home"
            />
            <div className="h-[45px] md:h-[53px] mt-5 relative w-[45px]">
              <Img
                src="images/img_notification_white_a700.svg"
                className="absolute h-8 left-[0] top-[0] w-8"
                alt="notification"
              />
              <Img
                src="images/img_cursor.svg"
                className="absolute bottom-[0] h-[33px] right-[0] w-[33px]"
                alt="cursor"
              />
            </div>
            <Img
              src="images/img_signal.svg"
              className="h-8 mt-[7px] w-8"
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
            <Img
              src="images/img_settings.svg"
              className="h-8 mt-6 w-8"
              alt="settings"
            />
            <Img
              src="images/img_signal_blue_a700.svg"
              className="h-6 mt-6"
              alt="signal_One"
            />
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[59px] mr-0.5 mt-[326px]"
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
              className="font-normal text-white_A700 w-auto"
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
            <Line className="absolute bg-blue_A700 h-0.5 left-[12%] rounded-[1px] top-[8%] w-[8%]" />
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
              <Text className="font-semibold text-white_A700" variant="body2">
                Notifications
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                    <Text
                      className="font-normal text-white_A700"
                      variant="body7"
                    >
                      Maintenance alert (POP UP)
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
                wrapClassName="flex w-full"
                className="font-normal p-0 placeholder:text-white_A700 text-left text-sm text-white_A700 w-full"
                name="group1948757667"
                placeholder="“X” Button to close"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
