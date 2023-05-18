import React from "react";

import { Button, Img, Line, Text } from "components";
import HomepageOneLogin from "components/HomepageOneLogin";
import HomepageOneNavigation from "components/HomepageOneNavigation";
import HomepageOneRowicons8windowseight from "components/HomepageOneRowicons8windowseight";

const CookiesPage: React.FC = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[2399px] items-end justify-end mx-auto pt-[29px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center justify-end w-full">
            <div className="flex flex-col gap-[31px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1326px] mx-auto md:px-5 w-full">
                <Img
                  src="images/img_group_white_a700.svg"
                  className="h-8"
                  alt="group"
                />
                <div className="bg-blue_gray_900_3f flex md:flex-1 flex-col gap-3.5 items-start justify-end md:ml-[0] ml-[276px] pt-[18px] px-[18px] rounded-[28px] w-[38%] md:w-full">
                  <HomepageOneNavigation
                    className="flex flex-row gap-10 items-center justify-center md:ml-[0] ml-[17px] w-auto sm:w-full"
                    home="Home"
                    games="Games"
                    howitworks="How it works"
                    pricing="Pricing"
                    faq="FAQ"
                  />
                  <div className="bg-blue_A700 h-0.5 ml-4 md:ml-[0] rounded-[1px] w-[10%]"></div>
                </div>
                <HomepageOneLogin
                  className="flex sm:flex-1 flex-col items-center justify-end md:ml-[0] ml-[104px] p-4 rounded-[28px] sm:w-full"
                  freetrial="Log in"
                />
                <Button
                  className="cursor-pointer font-bold h-14 min-w-[142px] ml-2 md:ml-[0] text-base text-center text-white_A700 tracking-[-0.34px]"
                  shape="CircleBorder28"
                  size="2xl"
                  variant="FillBlueA700"
                >
                  Free Trial
                </Button>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[125px] justify-start md:mt-0 mt-[111px] md:px-5 w-[49%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[146px] w-[82%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-center w-auto md:w-full">
                        <div className="font-bebasneue md:h-[186px] h-[187px] relative w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-white_A700 tracking-[-0.34px]"
                                as="h1"
                                variant="h1"
                              >
                                <span className="md:text-5xl text-white_A700 text-8xl font-bebasneue text-left font-bold">
                                  GAME{" "}
                                </span>
                                <span className="md:text-5xl text-blue_A700 text-8xl font-bebasneue text-left font-bold">
                                  FASTER
                                </span>
                              </Text>
                              <Text
                                className="text-white_A700 tracking-[-0.34px]"
                                as="h1"
                                variant="h1"
                              >
                                LIKE A PRO WITH LAGX
                              </Text>
                            </div>
                          </div>
                          <div className="absolute flex flex-col items-center justify-start left-[27%] top-[3%] w-[36%]">
                            <Img
                              src="images/img_decoration.svg"
                              className="h-[83px]"
                              alt="decoration"
                            />
                            <Line className="bg-blue_A700 h-1 mt-0.5 w-[98%]" />
                          </div>
                        </div>
                        <Text
                          className="font-halyarddisplay font-normal leading-[140.00%] max-w-[586px] md:max-w-full text-gray_600"
                          variant="body2"
                        >
                          <span className="text-gray_600 text-xl font-inter text-left">
                            <>It&#39;s very easy to use </>
                          </span>
                          <span className="text-blue_A700 text-xl font-inter text-left font-semibold">
                            LagX
                          </span>
                          <span className="text-gray_600 text-xl font-inter text-left">
                            , with only one click, you optimize your game and
                            have a completely new gameplay experience!
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-start w-[64%] md:w-full">
                      <div className="md:h-16 h-[90px] relative w-[72%] sm:w-full">
                        <HomepageOneRowicons8windowseight
                          className="absolute bg-blue_A700 bottom-[0] flex flex-row gap-4 h-16 md:h-auto items-center justify-center left-[0] sm:px-5 px-6 py-[18px] rounded-[32px] w-auto sm:w-full"
                          downloadforwindOne="Download for Windows"
                        />
                        <Img
                          src="images/img_checkmark.svg"
                          className="absolute h-8 right-[0] top-[0]"
                          alt="checkmark"
                        />
                      </div>
                      <Text
                        className="font-semibold sm:mt-0 mt-12 text-center text-gray_600 tracking-[-0.34px]"
                        variant="body5"
                      >
                        Show more
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[31%] md:w-full">
                    <Img
                      src="images/img_shadowbackground_280x146.png"
                      className="h-[280px] md:h-auto object-cover w-[63%]"
                      alt="shadowbackgroun"
                    />
                    <Text
                      className="font-semibold mt-24 text-center text-gray_600 tracking-[-0.34px]"
                      variant="body5"
                    >
                      Scroll down
                    </Text>
                  </div>
                </div>
                <div className="sm:h-[1049px] h-[792px] md:h-[884px] mb-[98px] md:px-5 relative w-[47%] md:w-full">
                  <div className="absolute h-[786px] sm:h-[951px] inset-[0] justify-center m-auto w-[98%] md:w-full">
                    <div className="absolute flex sm:flex-col flex-row gap-[39px] h-full inset-y-[0] items-start justify-between left-[0] my-auto w-[85%]">
                      <div className="flex flex-col gap-[54px] justify-start sm:mt-0 mt-[89px] w-[32%] sm:w-full">
                        <div className="bg-blue_A700 flex flex-col items-start justify-start md:ml-[0] ml-[87px] px-[11px] py-2 rounded-[17px] w-auto">
                          <Text
                            className="font-medium text-center text-white_A700 w-auto"
                            variant="body5"
                          >
                            10X Speed
                          </Text>
                        </div>
                        <div className="bg-blue_gray_900_3f flex flex-col items-start justify-start mr-[65px] px-[11px] py-2 rounded-[17px] w-auto">
                          <Text
                            className="font-medium text-center text-white_A700 w-auto"
                            variant="body5"
                          >
                            250+ Servers
                          </Text>
                        </div>
                      </div>
                      <div className="h-[786px] relative w-[63%] sm:w-full">
                        <div className="bg-gray_900_01 flex flex-col h-full items-center justify-start ml-auto mr-1 mt-[71px] px-[11px] py-2 rounded-[17px] w-auto">
                          <Text
                            className="font-medium text-center text-white_A700 w-auto"
                            variant="body5"
                          >
                            1000+ Games
                          </Text>
                        </div>
                        <Img
                          src="images/img_decorrectrange.svg"
                          className="absolute h-[786px] inset-[0] justify-center m-auto"
                          alt="decorrectrange"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[0] h-[707px] inset-x-[0] mx-auto w-[707px] md:w-full">
                      <Img
                        src="images/img_game.png"
                        className="h-[707px] m-auto object-cover w-[707px]"
                        alt="game"
                      />
                      <Img
                        src="images/img_pngwing1.png"
                        className="absolute h-[316px] object-cover right-[22%] top-1/4 w-[44%]"
                        alt="pngwingOne"
                      />
                    </div>
                  </div>
                  <div className="absolute bg-gradient  bottom-[0] flex flex-col items-end justify-start p-[85px] md:px-10 sm:px-5 right-[0] w-[91%]">
                    <Img
                      src="images/img_decor.png"
                      className="h-[180px] md:h-auto mb-[218px] mr-24 object-cover"
                      alt="decor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_shadowbackground_280x165.png"
          className="h-[280px] md:h-auto object-cover w-[11%]"
          alt="shadowbackgroun_One"
        />
      </div>
    </>
  );
};

export default CookiesPage;
