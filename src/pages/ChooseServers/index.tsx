import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ChooseServersPage: React.FC = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-black_900 flex sm:flex-col md:flex-col flex-row font-inter gap-[19px] items-center mx-auto pl-4 w-full">
        <div className="flex flex-col items-end justify-start md:px-5 w-[5%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
            <Img
              src="images/img_close_5.svg"
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
            <div className="h-10 md:h-[53px] mt-5 relative w-[90%]">
              <Img
                src="images/img_cut.svg"
                className="absolute h-8 left-[0] top-[0] w-8"
                alt="cut"
              />
              <Img
                src="images/img_cursor.svg"
                className="absolute bottom-[0] h-[33px] right-[0] w-[33px]"
                alt="cursor"
              />
            </div>
            <Img
              src="images/img_favorite.svg"
              className="h-8 mt-3 w-8"
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
              alt="signal"
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
            <div className="h-[900px] m-auto w-full">
              <div className="h-[900px] m-auto w-full">
                <div className="h-[900px] m-auto w-full">
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
                  <Text
                    className="absolute font-semibold left-[3%] text-white_A700 top-[12%]"
                    variant="body2"
                  >
                    Choose Servers
                  </Text>
                  <div className="absolute bottom-[0] h-[701px] right-[3%] w-[1%]">
                    <Line className="bg-gray_900_10 h-[701px] m-auto w-1" />
                    <Line className="absolute bg-blue_A700 h-[88px] inset-x-[0] mx-auto rounded-sm top-[0] w-1" />
                  </div>
                </div>
                <div className="absolute border border-gray_900_02 border-solid bottom-[6%] flex flex-col inset-x-[0] items-center justify-start mx-auto pl-[7px] py-[7px] rounded-[12px] w-[95%]">
                  <div className="flex flex-col items-center justify-start mb-[565px] mt-[18px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <Text
                        className="font-semibold text-white_A700"
                        variant="body3"
                      >
                        Select the server
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[385px] w-[14%] md:w-full">
                        <Img
                          src="images/img_refresh_blue_gray_500.svg"
                          className="h-8 w-8"
                          alt="refresh"
                        />
                        <Text
                          className="font-medium text-blue_gray_500"
                          variant="body7"
                        >
                          Refresh servers
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center ml-8 md:ml-[0] w-[12%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-medium text-blue_gray_500"
                            variant="body7"
                          >
                            Other Servers
                          </Text>
                        </div>
                        <Img
                          src="images/img_arrowdown_blue_gray_500.svg"
                          className="h-6 ml-1 w-6"
                          alt="arrowdown"
                        />
                      </div>
                      <Input
                        value={searchvalue}
                        onChange={(e) => setSearchvalue(e)}
                        wrapClassName="flex ml-10 md:ml-[0] w-[18%] md:w-full"
                        className="font-normal p-0 placeholder:text-gray_300_7f text-gray_300_7f text-left text-sm w-full"
                        name="search"
                        placeholder="Search server"
                        prefix={
                          <Img
                            src="images/img_search_white_a700.svg"
                            className="cursor-pointer mr-4 my-auto"
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
                    <Line className="bg-blue_gray_500_71 h-px mt-3.5 w-full" />
                    <div className="flex flex-row md:gap-10 gap-[116px] items-start justify-between mt-[19px] w-auto md:w-full">
                      <Text
                        className="font-normal text-blue_gray_500 w-auto"
                        variant="body7"
                      >
                        Servers
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_500 w-auto"
                        variant="body7"
                      >
                        Game Server
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_500 w-auto"
                        variant="body7"
                      >
                        Protocol
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_500 w-auto"
                        variant="body7"
                      >
                        Sent
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_500 w-auto"
                        variant="body7"
                      >
                        Received
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_500 w-auto"
                        variant="body7"
                      >
                        Ping
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_500 w-auto"
                        variant="body7"
                      >
                        Activity
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[5%] flex flex-col gap-6 inset-x-[0] items-center justify-start mx-auto w-[90%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <List
                    className="flex-col gap-[23px] grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row md:gap-[54px] items-start justify-between my-0 w-full">
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-0.5 w-[86%] md:w-full">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body5"
                        >
                          LAGX Servers
                        </Text>
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            SG Singapore
                          </Text>
                          <Text
                            className="font-normal mt-0.5 text-blue_gray_500"
                            variant="body7"
                          >
                            13.251.157.231:35461
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            UDP
                          </Text>
                          <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[142px]">
                            <Text
                              className="font-normal text-white_A700"
                              variant="body7"
                            >
                              0 B
                            </Text>
                            <Text
                              className="font-normal mt-1 text-blue_gray_500"
                              variant="body7"
                            >
                              0 B/S
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[111px] w-[41%] sm:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="font-normal text-white_A700"
                                  variant="body7"
                                >
                                  0 B
                                </Text>
                                <Text
                                  className="font-normal text-white_A700"
                                  variant="body7"
                                >
                                  34 ms
                                </Text>
                              </div>
                              <Text
                                className="font-normal mt-1 text-blue_gray_500"
                                variant="body7"
                              >
                                0 B/S
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-between w-[9%] md:w-full">
                        <Img
                          src="images/img_favorite.svg"
                          className="h-10 w-10"
                          alt="favorite"
                        />
                        <Img
                          src="images/img_avplaycirclefilled.svg"
                          className="h-10 w-10"
                          alt="avplaycirclefil"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-0.5 w-[86%] md:w-full">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body5"
                        >
                          LAGX Servers
                        </Text>
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            SG Singapore
                          </Text>
                          <Text
                            className="font-normal mt-0.5 text-blue_gray_500"
                            variant="body7"
                          >
                            13.251.157.231:35461
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            UDP
                          </Text>
                          <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[142px]">
                            <Text
                              className="font-normal text-white_A700"
                              variant="body7"
                            >
                              0 B
                            </Text>
                            <Text
                              className="font-normal mt-1 text-blue_gray_500"
                              variant="body7"
                            >
                              0 B/S
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[111px] w-[41%] sm:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="font-normal text-white_A700"
                                  variant="body7"
                                >
                                  0 B
                                </Text>
                                <Text
                                  className="font-normal text-white_A700"
                                  variant="body7"
                                >
                                  34 ms
                                </Text>
                              </div>
                              <Text
                                className="font-normal mt-1 text-blue_gray_500"
                                variant="body7"
                              >
                                0 B/S
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_favorite.svg"
                        className="h-10 md:ml-[0] ml-[54px] w-10"
                        alt="favorite"
                      />
                      <Img
                        src="images/img_avplaycirclefilled.svg"
                        className="h-10 ml-3.5 md:ml-[0] w-10"
                        alt="avplaycirclefil"
                      />
                    </div>
                  </List>
                </div>
                <List
                  className="flex-col gap-[21px] grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-0.5 w-[86%] md:w-full">
                      <Text
                        className="font-normal text-white_A700"
                        variant="body5"
                      >
                        LAGX Servers
                      </Text>
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body7"
                        >
                          SG Singapore
                        </Text>
                        <Text
                          className="font-normal mt-0.5 text-blue_gray_500"
                          variant="body7"
                        >
                          13.251.157.231:35461
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body7"
                        >
                          UDP
                        </Text>
                        <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[142px]">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            0 B
                          </Text>
                          <Text
                            className="font-normal mt-1 text-blue_gray_500"
                            variant="body7"
                          >
                            0 B/S
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[111px] w-[41%] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="font-normal text-white_A700"
                                variant="body7"
                              >
                                0 B
                              </Text>
                              <Text
                                className="font-normal text-white_A700"
                                variant="body7"
                              >
                                34 ms
                              </Text>
                            </div>
                            <Text
                              className="font-normal mt-1 text-blue_gray_500"
                              variant="body7"
                            >
                              0 B/S
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-10 md:ml-[0] ml-[54px] w-10"
                      alt="favorite"
                    />
                    <Img
                      src="images/img_avplaycirclefilled.svg"
                      className="h-10 ml-3.5 md:ml-[0] w-10"
                      alt="avplaycirclefil"
                    />
                  </div>
                  <div className="md:h-[254px] sm:h-[41px] h-[43px] relative w-full">
                    <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto w-full">
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-0.5 w-[86%] md:w-full">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body5"
                        >
                          LAGX Servers
                        </Text>
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            SG Singapore
                          </Text>
                          <Text
                            className="font-normal mt-0.5 text-blue_gray_500"
                            variant="body7"
                          >
                            13.251.157.231:35461
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            UDP
                          </Text>
                          <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[142px]">
                            <Text
                              className="font-normal text-white_A700"
                              variant="body7"
                            >
                              0 B
                            </Text>
                            <Text
                              className="font-normal mt-1 text-blue_gray_500"
                              variant="body7"
                            >
                              0 B/S
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[111px] w-[41%] sm:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="font-normal text-white_A700"
                                  variant="body7"
                                >
                                  0 B
                                </Text>
                                <Text
                                  className="font-normal text-white_A700"
                                  variant="body7"
                                >
                                  34 ms
                                </Text>
                              </div>
                              <Text
                                className="font-normal mt-1 text-blue_gray_500"
                                variant="body7"
                              >
                                0 B/S
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_avplaycirclefilled.svg"
                        className="h-10 w-10"
                        alt="avplaycirclefil"
                      />
                    </div>
                    <Img
                      src="images/img_favorite.svg"
                      className="absolute h-10 right-[5%] top-[0] w-10"
                      alt="favorite"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-0.5 w-[86%] md:w-full">
                      <Text
                        className="font-normal text-white_A700"
                        variant="body5"
                      >
                        LAGX Servers
                      </Text>
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body7"
                        >
                          SG Singapore
                        </Text>
                        <Text
                          className="font-normal mt-0.5 text-blue_gray_500"
                          variant="body7"
                        >
                          13.251.157.231:35461
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body7"
                        >
                          UDP
                        </Text>
                        <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[142px]">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            0 B
                          </Text>
                          <Text
                            className="font-normal mt-1 text-blue_gray_500"
                            variant="body7"
                          >
                            0 B/S
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[111px] w-[41%] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="font-normal text-white_A700"
                                variant="body7"
                              >
                                0 B
                              </Text>
                              <Text
                                className="font-normal text-white_A700"
                                variant="body7"
                              >
                                34 ms
                              </Text>
                            </div>
                            <Text
                              className="font-normal mt-1 text-blue_gray_500"
                              variant="body7"
                            >
                              0 B/S
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-10 md:ml-[0] ml-[54px] w-10"
                      alt="favorite"
                    />
                    <Img
                      src="images/img_avplaycirclefilled.svg"
                      className="h-10 ml-3.5 md:ml-[0] w-10"
                      alt="avplaycirclefil"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-0.5 w-[86%] md:w-full">
                      <Text
                        className="font-normal text-white_A700"
                        variant="body5"
                      >
                        LAGX Servers
                      </Text>
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body7"
                        >
                          SG Singapore
                        </Text>
                        <Text
                          className="font-normal mt-0.5 text-blue_gray_500"
                          variant="body7"
                        >
                          13.251.157.231:35461
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body7"
                        >
                          UDP
                        </Text>
                        <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[142px]">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            0 B
                          </Text>
                          <Text
                            className="font-normal mt-1 text-blue_gray_500"
                            variant="body7"
                          >
                            0 B/S
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[111px] w-[41%] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="font-normal text-white_A700"
                                variant="body7"
                              >
                                0 B
                              </Text>
                              <Text
                                className="font-normal text-white_A700"
                                variant="body7"
                              >
                                34 ms
                              </Text>
                            </div>
                            <Text
                              className="font-normal mt-1 text-blue_gray_500"
                              variant="body7"
                            >
                              0 B/S
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-10 md:ml-[0] ml-[54px] w-10"
                      alt="favorite"
                    />
                    <Img
                      src="images/img_avplaycirclefilled.svg"
                      className="h-10 ml-3.5 md:ml-[0] w-10"
                      alt="avplaycirclefil"
                    />
                  </div>
                  <div className="md:h-[254px] sm:h-[41px] h-[42px] relative w-full">
                    <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-start justify-center m-auto w-full">
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-0.5 w-[86%] md:w-full">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body5"
                        >
                          LAGX Servers
                        </Text>
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            SG Singapore
                          </Text>
                          <Text
                            className="font-normal mt-0.5 text-blue_gray_500"
                            variant="body7"
                          >
                            13.251.157.231:35461
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            UDP
                          </Text>
                          <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[142px]">
                            <Text
                              className="font-normal text-white_A700"
                              variant="body7"
                            >
                              0 B
                            </Text>
                            <Text
                              className="font-normal mt-1 text-blue_gray_500"
                              variant="body7"
                            >
                              0 B/S
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[111px] w-[41%] sm:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="font-normal text-white_A700"
                                  variant="body7"
                                >
                                  0 B
                                </Text>
                                <Text
                                  className="font-normal text-white_A700"
                                  variant="body7"
                                >
                                  34 ms
                                </Text>
                              </div>
                              <Text
                                className="font-normal mt-1 text-blue_gray_500"
                                variant="body7"
                              >
                                0 B/S
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_avplaycirclefilled.svg"
                        className="h-10 w-10"
                        alt="avplaycirclefil"
                      />
                    </div>
                    <Img
                      src="images/img_favorite.svg"
                      className="absolute bottom-[0] h-10 right-[5%] w-10"
                      alt="favorite"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-0.5 w-[86%] md:w-full">
                      <Text
                        className="font-normal text-white_A700"
                        variant="body5"
                      >
                        LAGX Servers
                      </Text>
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body7"
                        >
                          SG Singapore
                        </Text>
                        <Text
                          className="font-normal mt-0.5 text-blue_gray_500"
                          variant="body7"
                        >
                          13.251.157.231:35461
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body7"
                        >
                          UDP
                        </Text>
                        <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[142px]">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            0 B
                          </Text>
                          <Text
                            className="font-normal mt-1 text-blue_gray_500"
                            variant="body7"
                          >
                            0 B/S
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[111px] w-[41%] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="font-normal text-white_A700"
                                variant="body7"
                              >
                                0 B
                              </Text>
                              <Text
                                className="font-normal text-white_A700"
                                variant="body7"
                              >
                                34 ms
                              </Text>
                            </div>
                            <Text
                              className="font-normal mt-1 text-blue_gray_500"
                              variant="body7"
                            >
                              0 B/S
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-10 md:ml-[0] ml-[54px] w-10"
                      alt="favorite"
                    />
                    <Img
                      src="images/img_avplaycirclefilled.svg"
                      className="h-10 ml-3.5 md:ml-[0] w-10"
                      alt="avplaycirclefil"
                    />
                  </div>
                  <div className="md:h-[254px] sm:h-[41px] h-[42px] relative w-full">
                    <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-start justify-center m-auto w-full">
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-0.5 w-[86%] md:w-full">
                        <Text
                          className="font-normal text-white_A700"
                          variant="body5"
                        >
                          LAGX Servers
                        </Text>
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            SG Singapore
                          </Text>
                          <Text
                            className="font-normal mt-0.5 text-blue_gray_500"
                            variant="body7"
                          >
                            13.251.157.231:35461
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body7"
                          >
                            UDP
                          </Text>
                          <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[142px]">
                            <Text
                              className="font-normal text-white_A700"
                              variant="body7"
                            >
                              0 B
                            </Text>
                            <Text
                              className="font-normal mt-1 text-blue_gray_500"
                              variant="body7"
                            >
                              0 B/S
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[111px] w-[41%] sm:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="font-normal text-white_A700"
                                  variant="body7"
                                >
                                  0 B
                                </Text>
                                <Text
                                  className="font-normal text-white_A700"
                                  variant="body7"
                                >
                                  34 ms
                                </Text>
                              </div>
                              <Text
                                className="font-normal mt-1 text-blue_gray_500"
                                variant="body7"
                              >
                                0 B/S
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_avplaycirclefilled.svg"
                        className="h-10 w-10"
                        alt="avplaycirclefil"
                      />
                    </div>
                    <Img
                      src="images/img_favorite.svg"
                      className="absolute bottom-[0] h-10 right-[5%] w-10"
                      alt="favorite"
                    />
                  </div>
                </List>
              </div>
            </div>
            <div className="absolute bg-gradient2  bottom-[5%] flex flex-col inset-x-[0] items-end justify-end mx-auto pl-[3px] py-[3px] w-[94%]">
              <div className="md:h-16 h-[53px] mt-4 relative w-[5%]">
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
      </div>
    </>
  );
};

export default ChooseServersPage;
