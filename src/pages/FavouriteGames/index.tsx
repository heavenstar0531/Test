import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const FavouriteGamesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_900 flex sm:flex-col md:flex-col flex-row font-inter gap-[19px] items-center mx-auto pl-4 w-full">
        <div className="flex flex-col items-end justify-start md:px-5 w-[5%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
            <Img
              src="images/img_close_6.svg"
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
            <div className="h-10 md:h-[53px] mt-5 relative w-[90%]">
              <Img
                src="images/img_favorite_white_a700.svg"
                className="absolute h-8 left-[0] top-[0] w-8"
                alt="favorite"
              />
              <Img
                src="images/img_cursor.svg"
                className="absolute bottom-[0] h-[33px] right-[0] w-[33px]"
                alt="cursor"
              />
            </div>
            <Img
              src="images/img_contrast_blue_gray_500.svg"
              className="h-8 mt-3 w-8"
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
            <div className="absolute flex flex-col gap-[19px] items-start justify-start left-[3%] top-[12%] w-[34%]">
              <Text className="font-semibold text-white_A700" variant="body2">
                Favourites Games
              </Text>
              <div className="flex flex-row gap-[30px] items-center justify-between w-full">
                <div className="flex flex-col gap-[11px] items-start justify-start w-[29%]">
                  <Img
                    src="images/img_rectangle1086_3.png"
                    className="h-[149px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                    alt="rectangle37083"
                  />
                  <Text
                    className="font-normal text-white_A700"
                    variant="body10"
                  >
                    Darktide
                  </Text>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start w-[29%]">
                  <Img
                    src="images/img_rectangle1086_1.png"
                    className="h-[149px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                    alt="rectangle37083_One"
                  />
                  <Text
                    className="font-normal text-white_A700"
                    variant="body10"
                  >
                    COD:MW2
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-[29%]">
                  <Img
                    src="images/img_rectangle1086_5.png"
                    className="h-[149px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                    alt="rectangle37083_Two"
                  />
                  <Text
                    className="font-normal text-white_A700"
                    variant="body10"
                  >
                    Gotham Knights
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouriteGamesPage;
