import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const HomePreviewPage: React.FC = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-black_900 font-inter h-[900px] mx-auto pl-4 relative w-full">
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end max-w-[1221px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[46px] justify-start w-full">
            <Img
              src="images/img_close_1.svg"
              className="common-pointer h-[34px]"
              alt="close"
              onClick={() => navigate(-1)}
            />
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] w-full">
              <Img
                src="images/img_home_white_a700.svg"
                className="h-8 w-8"
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
                src="images/img_contrast_blue_gray_500.svg"
                className="h-8 mt-[72px] w-8"
                alt="contrast"
              />
              <Img
                src="images/img_settings.svg"
                className="h-8 mt-6 w-8"
                alt="settings"
              />
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[17px] w-full">
                <Img
                  src="images/img_volume_blue_gray_500.svg"
                  className="h-8 md:mt-0 mt-[411px] w-8"
                  alt="volume"
                />
                <div className="flex md:h-[540px] h-[542px] justify-end relative w-[93%] md:w-full">
                  <div className="md:h-[164px] h-[53px] mb-[116px] ml-auto mr-[5px] mt-auto w-[5%]">
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
                  <div className="absolute border border-gray_900_02 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[235px] md:px-10 sm:px-5 rounded-[16px] w-full">
                    <Text
                      className="font-normal mb-[31px] text-blue_gray_500"
                      as="h6"
                      variant="h6"
                    >
                      No connection through LAGX
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex sm:flex-col flex-row gap-8 items-center justify-center left-[10%] max-w-[812px] md:px-5 top-[3%] w-full">
          <Text
            className="font-semibold text-white_A700 w-auto"
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
        <div className="absolute h-[900px] inset-y-[0] my-auto md:px-5 right-[0] w-[93%] md:w-full">
          <div className="h-[900px] m-auto w-full">
            <Line className="absolute bg-blue_gray_500_67 h-px inset-x-[0] mx-auto top-[9%] w-full" />
            <Line className="absolute bg-blue_gray_500_67 h-[900px] inset-y-[0] left-[0] my-auto w-px" />
            <Line className="absolute bg-blue_A700 h-0.5 left-[3%] rounded-[1px] top-[8%] w-[7%]" />
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
            <div className="absolute flex flex-col gap-[31px] items-start justify-start left-[3%] top-[12%] w-[12%]">
              <Text className="font-semibold text-white_A700" variant="body2">
                Recent Games
              </Text>
              <div className="flex flex-col items-center justify-start w-4/5 md:w-full">
                <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                  <div className="h-[149px] relative w-full">
                    <Img
                      src="images/img_rectangle1086.png"
                      className="h-[149px] m-auto object-cover rounded-lg w-full"
                      alt="rectangle37083"
                    />
                    <div className="absolute bg-gradient4  bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[22px] sm:px-5 rounded-lg w-full">
                      <Img
                        src="images/img_avplaycirclefilled.svg"
                        className="h-10 mb-[33px] w-10"
                        alt="avplaycirclefil"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-normal text-white_A700"
                    variant="body10"
                  >
                    Diablo IV
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col gap-[51px] justify-start left-[3%] top-[32%] w-[11%]">
            <Img
              src="images/img_cursor.svg"
              className="h-[33px] md:ml-[0] ml-[95px] w-[33px]"
              alt="cursor"
            />
            <Text
              className="font-semibold mr-[21px] text-white_A700"
              variant="body2"
            >
              Connected
            </Text>
          </div>
          <div className="absolute bottom-[0] h-[823px] right-[0] w-[1%]">
            <Line className="bg-gray_900_10 h-[823px] m-auto w-1.5" />
            <Line className="absolute bg-blue_A700 h-[88px] inset-x-[0] mx-auto top-[0] w-1.5" />
          </div>
          <Input
            value={searchvalue}
            onChange={(e) => setSearchvalue(e)}
            wrapClassName="flex mr-8 mt-[101px] right-[3%] top-[11%] w-[16%]"
            className="font-normal p-0 placeholder:text-gray_300_7f text-gray_300_7f text-left text-sm w-full"
            name="search"
            placeholder="Search a game..."
            prefix={
              <Img
                src="images/img_search_white_a700.svg"
                className="mt-auto mb-px cursor-pointer mr-4 bottom-[0] right-[1%] absolute"
                alt="search"
              />
            }
            suffix={
              <CloseSVG
                fillColor="#7fe3e5e8"
                className="cursor-pointer absolute my-auto"
                onClick={() => setSearchvalue("")}
                style={{
                  visibility: searchvalue?.length <= 0 ? "hidden" : "visible",
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
        <div className="absolute flex flex-col md:gap-10 gap-[132px] items-center justify-start left-[2%] md:px-5 top-[30%] w-[4%]">
          <Img
            src="images/img_favorite.svg"
            className="h-8 w-8"
            alt="favorite"
          />
          <Img
            src="images/img_signal_blue_a700.svg"
            className="h-6"
            alt="signal_One"
          />
        </div>
        <Button
          className="bottom-[10%] cursor-pointer flex items-center justify-center left-[2%] min-w-[59px]"
          rightIcon={
            <Img
              src="images/img_arrowdown.svg"
              className="ml-[7px] left-[2%] absolute my-px inset-y-[0]"
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
      </div>
    </>
  );
};

export default HomePreviewPage;
