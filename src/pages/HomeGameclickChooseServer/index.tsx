import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import HomeGameClickChooseServerFlags from "components/HomeGameClickChooseServerFlags";

import { CloseSVG } from "../../assets/images";

const HomeGameclickChooseServerPage: React.FC = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-black_900 flex sm:flex-col md:flex-col flex-row font-inter gap-[19px] items-center mx-auto pl-4 w-full">
        <div className="flex flex-col items-end justify-start md:px-5 w-[5%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
            <Img
              src="images/img_close_2.svg"
              className="common-pointer h-[34px]"
              alt="close"
              onClick={() => navigate(-1)}
            />
            <Img
              src="images/img_home_white_a700.svg"
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
          <div className="flex md:flex-col flex-row gap-8 h-full items-center justify-center ml-8 mt-[31px] w-auto">
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
          <div className="absolute h-[900px] inset-[0] justify-center m-auto w-full">
            <div className="h-[900px] m-auto w-full">
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
                      <Text
                        className="font-normal text-blue_A700"
                        variant="body11"
                      >
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
                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[11%] w-[95%]">
                  <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                    <Text
                      className="font-semibold text-white_A700"
                      variant="body2"
                    >
                      Choose Locations
                    </Text>
                    <Input
                      value={searchvalue}
                      onChange={(e) => setSearchvalue(e)}
                      wrapClassName="flex"
                      className="font-normal p-0 placeholder:text-gray_300_7f text-gray_300_7f text-left text-sm w-full"
                      name="search"
                      placeholder="Search a game..."
                      prefix={
                        <Img
                          src="images/img_search_white_a700.svg"
                          className="mt-auto mb-px cursor-pointer mr-4"
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
                              searchvalue?.length <= 0 ? "hidden" : "visible",
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
                  <div className="bg-gray_900_04 flex flex-row gap-[25px] items-center justify-start mt-[19px] p-0.5 rounded-[26px] w-[22%] md:w-full">
                    <Button
                      className="cursor-pointer font-normal min-w-[110px] text-center text-white_A700 text-xs"
                      shape="CircleBorder23"
                      size="2xl"
                      variant="FillBlueA700"
                    >
                      Recommended
                    </Button>
                    <Text
                      className="font-normal text-white_A700"
                      variant="body10"
                    >
                      All Locations
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start mt-5 w-[15%] md:w-full">
                    <Img
                      src="images/img_minimize.svg"
                      className="h-8 w-8"
                      alt="minimize"
                    />
                    <Text
                      className="font-semibold text-white_A700"
                      variant="body7"
                    >
                      Smart Locations
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px] mt-5 w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Img
                          src="images/img_flags_red_500_02.svg"
                          className="h-[18px] md:mt-0 mt-0.5 rounded-[3px]"
                          alt="flags"
                        />
                        <Text
                          className="font-medium ml-3 md:ml-[0] md:mt-0 mt-0.5 text-white_A700"
                          variant="body7"
                        >
                          UK - London
                        </Text>
                        <Img
                          src="images/img_arrowright_white_a700.svg"
                          className="h-5 md:ml-[0] ml-[972px] w-5"
                          alt="arrowright"
                        />
                      </div>
                      <Line className="bg-gray_900_04 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start mt-[23px] w-1/5 md:w-full">
                    <Img
                      src="images/img_volume_white_a700.svg"
                      className="h-8 w-8"
                      alt="volume_One"
                    />
                    <Text
                      className="font-semibold text-white_A700"
                      variant="body7"
                    >
                      Recommended locations
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[0] h-[823px] right-[0] w-[1%]">
                  <Line className="bg-gray_900_10 h-[823px] m-auto w-1.5" />
                  <Line className="absolute bg-blue_A700 h-[88px] inset-x-[0] mx-auto top-[0] w-1.5" />
                </div>
              </div>
              <div className="absolute bottom-[4%] flex flex-col md:gap-10 gap-[68px] inset-x-[0] justify-start mx-auto w-[95%]">
                <Img
                  src="images/img_cursor.svg"
                  className="h-[33px] md:ml-[0] ml-[108px] w-[33px]"
                  alt="cursor"
                />
                <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                  <List
                    className="flex-col gap-[11px] grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Img
                            src="images/img_flags_red_500_02.svg"
                            className="h-[18px] md:mt-0 mt-0.5 rounded-[3px]"
                            alt="flags"
                          />
                          <Text
                            className="font-medium ml-3 md:ml-[0] md:mt-0 mt-0.5 text-white_A700"
                            variant="body7"
                          >
                            UK - London
                          </Text>
                          <Img
                            src="images/img_arrowright_white_a700.svg"
                            className="h-5 md:ml-[0] ml-[972px] w-5"
                            alt="arrowright"
                          />
                        </div>
                        <Line className="bg-gray_900_04 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Img
                            src="images/img_menu.svg"
                            className="h-[18px] md:mt-0 mt-0.5 rounded-[3px]"
                            alt="menu"
                          />
                          <Text
                            className="font-medium ml-3 md:ml-[0] md:mt-0 mt-0.5 text-white_A700"
                            variant="body7"
                          >
                            United States
                          </Text>
                          <Img
                            src="images/img_arrowright_white_a700.svg"
                            className="h-5 md:ml-[0] ml-[964px] w-5"
                            alt="arrowright"
                          />
                        </div>
                        <Line className="bg-gray_900_04 h-px w-full" />
                      </div>
                    </div>
                  </List>
                  <div className="md:h-[34px] h-[37px] relative w-full">
                    <div className="absolute bottom-[0] md:h-[34px] h-[83px] inset-x-[0] mx-auto w-full">
                      <div className="absolute flex flex-row gap-3 items-start justify-start left-[0] top-[0] w-[9%]">
                        <div className="bg-gray_900_11 h-1.5 mb-3 w-[26%]"></div>
                        <Text
                          className="font-medium text-white_A700"
                          variant="body7"
                        >
                          Germany
                        </Text>
                      </div>
                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-full">
                        <div className="flex flex-row gap-3 items-end justify-start w-[9%] md:w-full">
                          <div className="bg-yellow_600 h-1.5 mt-2.5 w-[26%]"></div>
                          <Text
                            className="font-medium text-white_A700"
                            variant="body7"
                          >
                            Germany
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Line className="bg-gray_900_04 h-px w-full" />
                          </div>
                        </div>
                        <Line className="bg-gray_900_04 h-px w-full" />
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowright_white_a700.svg"
                      className="absolute h-5 right-[0] top-[0] w-5"
                      alt="arrowright_One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Img
                          src="images/img_flags.svg"
                          className="h-[18px] md:mt-0 mt-0.5 rounded-[3px]"
                          alt="flags_One"
                        />
                        <Text
                          className="font-medium ml-3 md:ml-[0] md:mt-0 mt-0.5 text-white_A700"
                          variant="body7"
                        >
                          France
                        </Text>
                        <Img
                          src="images/img_arrowright_white_a700.svg"
                          className="h-5 md:ml-[0] ml-[1010px] w-5"
                          alt="arrowright_Two"
                        />
                      </div>
                      <Line className="bg-gray_900_04 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                        <div className="h-[18px] md:h-[19px] mt-0.5 relative w-[11%]">
                          <div className="absolute flex flex-row gap-3 h-max inset-[0] items-end justify-center m-auto w-full">
                            <div className="bg-indigo_800_02 h-1.5 mt-[11px] w-[21%]"></div>
                            <Text
                              className="font-medium text-white_A700"
                              variant="body7"
                            >
                              Netherlands
                            </Text>
                          </div>
                          <div className="absolute flex flex-row gap-3 h-max inset-[0] items-start justify-center m-auto w-full">
                            <div className="bg-red_900 h-1.5 mb-[11px] w-[21%]"></div>
                            <Text
                              className="font-medium text-white_A700"
                              variant="body7"
                            >
                              Netherlands
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowright_white_a700.svg"
                          className="h-5 w-5"
                          alt="arrowright_Three"
                        />
                      </div>
                      <Line className="bg-gray_900_04 h-px w-full" />
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[11px] grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Img
                            src="images/img_computer_white_a700_18x25.svg"
                            className="h-[18px] md:mt-0 mt-0.5 rounded-[3px]"
                            alt="computer"
                          />
                          <Text
                            className="font-medium ml-3 md:ml-[0] md:mt-0 mt-0.5 text-white_A700"
                            variant="body7"
                          >
                            Ireland
                          </Text>
                          <Img
                            src="images/img_arrowright_white_a700.svg"
                            className="h-5 md:ml-[0] ml-[1010px] w-5"
                            alt="arrowright"
                          />
                        </div>
                        <Line className="bg-gray_900_04 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Img
                            src="images/img_flags_white_a700.svg"
                            className="h-[18px] md:mt-0 mt-0.5 rounded-[3px]"
                            alt="flags"
                          />
                          <Text
                            className="font-medium ml-3 md:ml-[0] md:mt-0 mt-0.5 text-white_A700"
                            variant="body7"
                          >
                            India
                          </Text>
                          <Img
                            src="images/img_arrowright_white_a700.svg"
                            className="h-5 md:ml-[0] ml-[1023px] w-5"
                            alt="arrowright"
                          />
                        </div>
                        <Line className="bg-gray_900_04 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <HomeGameClickChooseServerFlags className="bg-red_500_02 flex sm:flex-1 flex-col items-center justify-start md:mt-0 mt-0.5 p-[3px] rounded-[3px] sm:w-full" />
                          <Text
                            className="font-medium ml-3 md:ml-[0] md:mt-0 mt-0.5 text-white_A700"
                            variant="body7"
                          >
                            Switzerland
                          </Text>
                          <Img
                            src="images/img_arrowright_white_a700.svg"
                            className="h-5 md:ml-[0] ml-[977px] w-5"
                            alt="arrowright"
                          />
                        </div>
                        <Line className="bg-gray_900_04 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Img
                            src="images/img_computer_18x25.svg"
                            className="h-[18px] md:mt-0 mt-0.5 rounded-[3px]"
                            alt="computer"
                          />
                          <Text
                            className="font-medium ml-3 md:ml-[0] md:mt-0 mt-[3px] text-white_A700"
                            variant="body7"
                          >
                            Italy
                          </Text>
                          <Img
                            src="images/img_arrowright_white_a700.svg"
                            className="h-5 md:ml-[0] ml-[1027px] w-5"
                            alt="arrowright"
                          />
                        </div>
                        <Line className="bg-gray_900_04 h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Img
                            src="images/img_minimize_white_a700.svg"
                            className="h-[18px] md:mt-0 mt-0.5"
                            alt="minimize"
                          />
                          <Text
                            className="font-medium ml-3 md:ml-[0] md:mt-0 mt-0.5 text-white_A700"
                            variant="body7"
                          >
                            Denmark
                          </Text>
                          <Img
                            src="images/img_arrowright_white_a700.svg"
                            className="h-5 md:ml-[0] ml-[995px] w-5"
                            alt="arrowright"
                          />
                        </div>
                        <Line className="bg-gray_900_04 h-px w-full" />
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeGameclickChooseServerPage;
