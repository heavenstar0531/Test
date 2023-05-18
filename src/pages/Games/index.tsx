import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import HomepageOneCheveronleftsol from "components/HomepageOneCheveronleftsol";
import HomepageOneItem11 from "components/HomepageOneItem11";
import HomepageOneLogin from "components/HomepageOneLogin";
import HomepageOneNavigation from "components/HomepageOneNavigation";

const GamesPage: React.FC = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-inter items-end justify-end mx-auto sm:pl-5 pl-[21px] pt-[21px] w-full">
        <div className="flex flex-col items-start justify-end md:px-5 w-[93%] md:w-full">
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
                <Line className="bg-blue_A700 h-0.5 md:ml-[0] ml-[102px] mr-[311px] rounded-[1px] w-[12%]" />
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
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[63px] w-[91%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-36 w-[45%] md:w-full">
              <div className="font-bebasneue md:h-24 h-[187px] relative w-[95%] sm:w-full">
                <div className="flex flex-col m-auto w-full">
                  <div className="h-24 mx-auto w-full">
                    <Text
                      className="m-auto text-white_A700 tracking-[-0.34px]"
                      as="h1"
                      variant="h1"
                    >
                      <span className="md:text-5xl text-white_A700 text-8xl font-bebasneue text-left font-bold">
                        READY TO{" "}
                      </span>
                      <span className="md:text-5xl text-blue_A700 text-8xl font-bebasneue text-left font-bold">
                        SPEED UP
                      </span>
                    </Text>
                    <div className="absolute flex flex-col h-max inset-y-[0] justify-start my-auto right-[0] w-[49%]">
                      <div className="flex flex-row items-center justify-between w-[59%] md:w-full">
                        <div className="bg-black_900 h-3.5 w-[13px]"></div>
                        <div className="bg-black_900 h-3.5 w-[13px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[101px] mt-[15px] w-[63%] md:w-full">
                        <div className="bg-gray_900 h-3.5 w-[13px]"></div>
                        <div className="bg-black_900 h-3.5 w-[13px]"></div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-3 mx-auto w-[65%] md:w-full">
                        <div className="bg-black_900 h-3.5 mb-[7px] w-[13px]"></div>
                        <div className="bg-black_900 h-3.5 mt-[7px] w-[13px]"></div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="mt-[-5px] text-white_A700 tracking-[-0.34px] z-[1]"
                    as="h1"
                    variant="h1"
                  >
                    YOUR GAMES?
                  </Text>
                </div>
                <Line className="absolute bg-blue_A700 h-1 inset-y-[0] my-auto right-[0] w-[49%]" />
              </div>
              <Text
                className="font-inter font-normal leading-[140.00%] mt-[34px] text-gray_600 w-full"
                variant="body2"
              >
                Over 1000+ supported games so that you can have the best online
                gaming experience possible.
              </Text>
              <Input
                wrapClassName="flex mt-[43px] w-full"
                className="font-inter font-normal p-0 placeholder:text-gray_300_7f text-gray_300_7f text-left text-lg w-full"
                name="search"
                placeholder="Search a game..."
                prefix={
                  <Img
                    src="images/img_search_white_a700.svg"
                    className="mt-auto mb-px mr-4"
                    alt="search"
                  />
                }
                shape="RoundedBorder12"
                size="xl"
                variant="FillGray90002"
              ></Input>
            </div>
            <Img
              src="images/img_arrow15.svg"
              className="h-[86px] ml-6 md:ml-[0] md:mt-0 mt-[418px]"
              alt="arrowFifteen"
            />
            <div className="border border-blue_A700 border-solid flex flex-col items-center justify-end ml-11 md:ml-[0] pl-[13px] pt-[13px] rounded-[16px] w-[41%] md:w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start mt-0.5 w-full">
                <List
                  className="flex-col gap-[15px] grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between my-0 w-full">
                    <div className="flex flex-col gap-3 items-center justify-center w-auto">
                      <Img
                        src="images/img_rectangle1086.png"
                        className="h-[207px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[159px] sm:w-full"
                        alt="rectangle1086"
                      />
                      <Text
                        className="font-normal text-white_A700 w-auto"
                        variant="body7"
                      >
                        Diablo IV
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-center w-auto">
                      <Img
                        src="images/img_rectangle1086_207x159.png"
                        className="h-[207px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[159px] sm:w-full"
                        alt="rectangle1086_One"
                      />
                      <Text
                        className="font-normal text-white_A700 w-auto"
                        variant="body7"
                      >
                        Sons of the Forest
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-center w-auto">
                      <Img
                        src="images/img_rectangle1086_1.png"
                        className="h-[207px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[159px] sm:w-full"
                        alt="rectangle1086_Two"
                      />
                      <Text
                        className="font-normal text-white_A700 w-auto"
                        variant="body7"
                      >
                        COD: Modern Warfare 2
                      </Text>
                    </div>
                    <Line className="bg-blue_A700 sm:h-1.5 h-[87px] mb-[138px] sm:mt-0 mt-3 rounded-[3px] shadow-bs7 w-1.5 sm:w-full" />
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between mr-[18px] my-0 w-[97%] md:w-full">
                    <div className="flex flex-col gap-3 items-center justify-center w-auto">
                      <Img
                        src="images/img_rectangle1086_2.png"
                        className="h-[207px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[159px] sm:w-full"
                        alt="rectangle1086"
                      />
                      <Text
                        className="font-normal text-white_A700 w-auto"
                        variant="body7"
                      >
                        Fangs
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-center w-auto">
                      <Img
                        src="images/img_rectangle1086_3.png"
                        className="h-[207px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[159px] sm:w-full"
                        alt="rectangle1086_One"
                      />
                      <Text
                        className="font-normal text-white_A700 w-auto"
                        variant="body7"
                      >
                        Darktide
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-center w-auto">
                      <Img
                        src="images/img_rectangle1086_4.png"
                        className="h-[207px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[159px] sm:w-full"
                        alt="rectangle1086_Two"
                      />
                      <Text
                        className="font-normal text-white_A700 w-auto"
                        variant="body7"
                      >
                        FIFA23
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="md:h-[107px] h-[108px] sm:h-[340px] relative w-[97%] sm:w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <List
                      className="sm:flex-col flex-row gap-3.5 grid sm:grid-cols-1 grid-cols-3 justify-center w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-center justify-center sm:ml-[0] w-auto">
                        <Img
                          src="images/img_rectangle1086_104x159.png"
                          className="h-[104px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[159px] sm:w-full"
                          alt="rectangle1086"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center sm:ml-[0] w-auto">
                        <Img
                          src="images/img_rectangle1086_5.png"
                          className="h-[104px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[159px] sm:w-full"
                          alt="rectangle1086"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center sm:ml-[0] w-auto">
                        <Img
                          src="images/img_rectangle1086_6.png"
                          className="h-[104px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-[159px] sm:w-full"
                          alt="rectangle1086"
                        />
                      </div>
                    </List>
                  </div>
                  <div className="absolute bg-gradient2  h-[107px] inset-[0] justify-center m-auto rotate-[180deg] w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[109px] w-[91%] md:w-full">
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
          <div className="sm:h-[437px] h-[460px] md:h-[878px] mt-[157px] relative w-full">
            <div className="absolute flex flex-col gap-10 items-center justify-start left-[0] top-[0] w-[91%]">
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
            <Img
              src="images/img_shadowbackground_280x211.png"
              className="absolute bottom-[0] h-[280px] object-cover right-[0] w-[15%]"
              alt="shadowbackgroun"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesPage;
