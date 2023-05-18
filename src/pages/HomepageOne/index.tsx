import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import HomepageOneCheveronleftsol from "components/HomepageOneCheveronleftsol";
import HomepageOneItem1 from "components/HomepageOneItem1";
import HomepageOneItem11 from "components/HomepageOneItem11";
import HomepageOneLogin from "components/HomepageOneLogin";
import HomepageOneNavigation from "components/HomepageOneNavigation";
import HomepageOneRowicons8windowseight from "components/HomepageOneRowicons8windowseight";

import Navbar from "../../components/HomepageOneNavigation/Navbar";

const HomepageOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-inter items-center justify-start mx-auto py-[21px] w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mx-auto w-full">
            <div className="flex flex-col gap-[31px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[83%] md:w-full">
                <Img
                  src="images/img_group_white_a700.svg"
                  className="h-8"
                  alt="group"
                />
                <div className="bg-blue_gray_900_3f flex flex-col gap-3.5 items-start justify-end md:ml-[0] ml-[270px] pt-[18px] px-[18px] rounded-[28px] w-[39%] md:w-full">
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
                  className="flex flex-col items-center justify-end ml-28 md:ml-[0] p-4 rounded-[28px] sm:w-full"
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
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[167px] justify-start md:mt-0 mt-[111px] w-[48%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[140px] w-[82%] md:w-full">
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
                  <div className="flex flex-row items-start justify-start w-[30%] md:w-full">
                    <Img
                      src="images/img_shadowbackground.png"
                      className="h-[280px] md:h-auto object-cover w-[62%]"
                      alt="shadowbackgroun"
                    />
                    <Text
                      className="font-semibold mt-[54px] text-center text-gray_600 tracking-[-0.34px]"
                      variant="body5"
                    >
                      Scroll down
                    </Text>
                  </div>
                </div>
                <div className="md:h-[786px] h-[792px] relative w-[48%] md:w-full">
                  <div className="absolute flex flex-col items-center justify-start left-[0] top-[9%] w-[82%]">
                    <div className="flex flex-col gap-[54px] justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[87px] w-[86%] md:w-full">
                        <div className="bg-blue_A700 flex flex-col items-start justify-start mt-[18px] px-[11px] py-2 rounded-[17px] w-auto">
                          <Text
                            className="font-medium text-center text-white_A700 w-auto"
                            variant="body5"
                          >
                            10X Speed
                          </Text>
                        </div>
                        <div className="bg-gray_900_01 flex flex-col items-start justify-start mb-[18px] px-[11px] py-2 rounded-[17px] w-auto">
                          <Text
                            className="font-medium text-center text-white_A700 w-auto"
                            variant="body5"
                          >
                            1000+ Games
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray_900_3f flex flex-col items-start justify-start mr-[486px] px-[11px] py-2 rounded-[17px] w-auto">
                        <Text
                          className="font-medium text-center text-white_A700 w-auto"
                          variant="body5"
                        >
                          250+ Servers
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute md:h-[786px] h-[792px] inset-[0] justify-center m-auto w-[97%] md:w-full">
                    <div className="absolute h-[786px] inset-[0] justify-center m-auto w-[98%] md:w-full">
                      <Img
                        src="images/img_decorrectrange.svg"
                        className="absolute h-[786px] inset-y-[0] my-auto right-[16%]"
                        alt="decorrectrange"
                      />
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
                    <div className="absolute bg-gradient  bottom-[0] flex flex-col items-end justify-start p-[85px] md:px-10 sm:px-5 right-[0] w-[94%]">
                      <Img
                        src="images/img_decor.png"
                        className="h-[180px] md:h-auto mb-[218px] mr-[101px] object-cover"
                        alt="decor"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-bebasneue items-center justify-start mt-[-22.7px] mx-auto w-[63%] z-[1]">
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <Text
                className="text-center text-white_A700 tracking-[-0.34px]"
                as="h2"
                variant="h2"
              >
                FEATURES
              </Text>
              <List
                className="sm:flex-col flex-row font-inter gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-gray_900_02 flex flex-col h-[344px] md:h-auto items-center justify-center p-8 sm:px-5 rounded-[32px] w-[312px]">
                  <div className="flex flex-col md:gap-10 gap-[72px] items-start justify-center w-auto">
                    <div className="flex flex-col items-start justify-center w-20">
                      <div className="bg-blue_A700 border border-indigo_A100 border-solid flex flex-col h-20 md:h-auto items-center justify-center p-3 rounded-[16px] w-20">
                        <Img
                          src="images/img_computer.svg"
                          className="h-10 w-10"
                          alt="computer"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-center w-auto">
                      <Text
                        className="font-medium text-white_A700 w-auto"
                        variant="body2"
                      >
                        Multipath connection
                      </Text>
                      <Text
                        className="font-normal text-gray_300_7f w-auto"
                        variant="body7"
                      >
                        <>
                          Your connection packets aresimultaneously run through
                          differentroutes in order to ensure the
                          packet&#39;sdelivery.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_900_02 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-[32px] w-full">
                  <div className="flex flex-col md:gap-10 gap-[72px] items-start justify-start mb-5 w-full">
                    <div className="bg-blue_A700 border border-indigo_A100 border-solid flex flex-col h-20 md:h-auto items-center justify-center p-3 rounded-[16px] w-20">
                      <Img
                        src="images/img_contrast.svg"
                        className="h-10 w-10"
                        alt="contrast"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-center w-auto">
                      <Text
                        className="font-medium text-white_A700 w-auto"
                        variant="body2"
                      >
                        Real time optimization
                      </Text>
                      <Text
                        className="font-normal text-gray_300_7f w-auto"
                        variant="body7"
                      >
                        Small tweaks in the operating systemthat enhance FPS
                        performanceduring gaming.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_900_02 flex flex-col h-[344px] md:h-auto items-center justify-center p-8 sm:px-5 rounded-[32px] w-[312px]">
                  <div className="flex flex-col md:gap-10 gap-[72px] items-start justify-center w-auto">
                    <div className="bg-blue_A700 border border-indigo_A100 border-solid flex flex-col h-20 md:h-auto items-center justify-center p-3 rounded-[16px] w-20">
                      <Img
                        src="images/img_hugeicondevicesolidflash.svg"
                        className="h-10 w-10"
                        alt="hugeicondevices"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-center w-auto">
                      <Text
                        className="font-medium text-white_A700 w-auto"
                        variant="body2"
                      >
                        FPS Boost
                      </Text>
                      <Text
                        className="font-normal leading-[140.00%] max-w-[248px] md:max-w-full text-gray_300_7f"
                        variant="body7"
                      >
                        <>
                          The search for the optimal route is done in real-time
                          to make sure the gamer&#39;s always playing on the
                          best possible route.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center mt-[117px] md:px-5 w-auto sm:w-full">
          <div className="font-bebasneue h-[85px] relative w-[93%] sm:w-full">
            <Text
              className="absolute h-full inset-[0] m-auto text-center text-white_A700 tracking-[-0.34px] w-max"
              as="h2"
              variant="h2"
            >
              <span className="md:text-5xl text-white_A700 text-7xl font-bebasneue font-bold">
                GET ALL{" "}
              </span>
              <span className="md:text-5xl text-blue_A700 text-7xl font-bebasneue font-bold">
                FEATURES
              </span>
            </Text>
            <Img
              src="images/img_underline1.svg"
              className="absolute bottom-[0] h-2 right-[1%]"
              alt="underlineOne_One"
            />
          </div>
          <Text
            className="font-inter font-normal text-center text-gray_300_7f w-auto"
            variant="body5"
          >
            Create an account and test it for 7 days free!
          </Text>
        </div>
        <div className="md:h-[1111px] h-[363px] sm:h-[417px] max-w-[990px] mt-[54px] mx-auto md:px-5 relative w-full">
          <div className="border border-blue_A700 border-solid h-[362px] m-auto rounded-[12px] w-full"></div>
          <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="md:h-[352px] h-[353px] sm:h-[472px] relative w-3/5 md:w-full">
              <div className="absolute h-[352px] sm:h-[472px] inset-[0] justify-center m-auto w-full">
                <List
                  className="absolute sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-2 inset-y-[0] justify-center my-auto right-[0] w-[545px] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start sm:ml-[0] p-4 shadow-bs6 w-[282px]">
                    <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                      <HomepageOneItem1
                        className="flex flex-row gap-4 items-center justify-start w-full"
                        body="Fast Speed"
                      />
                      <HomepageOneItem1
                        className="flex flex-row gap-4 items-center justify-start w-full"
                        body="10X Connection"
                      />
                      <HomepageOneItem1
                        className="flex flex-row gap-4 items-center justify-start w-full"
                        body="1000+ Games"
                      />
                      <HomepageOneItem1
                        className="flex flex-row gap-4 items-center justify-start w-full"
                        body="Personal support"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:ml-[0] pl-4 py-4 shadow-bs6 w-[246px]">
                    <div className="flex flex-col gap-[22px] items-start justify-start w-[226px]">
                      <HomepageOneItem1
                        className="flex flex-row gap-4 items-center justify-start w-full"
                        body="Desktop app"
                      />
                      <HomepageOneItem1
                        className="flex flex-row gap-4 items-center justify-start w-full"
                        body="Trial Version 14 days"
                      />
                      <HomepageOneItem1
                        className="flex flex-row gap-4 items-center justify-start w-full"
                        body="New Features"
                      />
                      <HomepageOneItem1
                        className="flex flex-row gap-4 items-center justify-start w-full"
                        body="Comercial license"
                      />
                    </div>
                  </div>
                </List>
                <div className="absolute bg-gradient1  h-[352px] inset-y-[0] left-[0] my-auto rotate-[180deg] rounded-bl-[187px] rounded-br-[111px] rounded-tl-[176px] rounded-tr-[117px] w-[32%]"></div>
              </div>
              <Button
                className="absolute cursor-pointer font-normal left-[0] min-w-[100px] text-center text-sm text-white_A700 top-[0]"
                shape="CustomBorderBR16"
                size="md"
                variant="FillBlueA700"
              >
                FREE TRIAL
              </Button>
            </div>
            <Line className="bg-blue_A700 h-[363px] md:h-px md:w-full w-px" />
            <div className="flex flex-col gap-8 items-start justify-center w-[325px]">
              <div className="flex flex-col gap-10 items-start justify-center w-auto">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="font-normal text-center text-gray_300_7f w-auto"
                    variant="body2"
                  >
                    Basic
                  </Text>
                  <div className="flex flex-col gap-8 items-start justify-center w-auto">
                    <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="font-normal text-blue_A700 text-center w-auto"
                        variant="body5"
                      >
                        $
                      </Text>
                      <div className="flex flex-row gap-[18px] items-center justify-center w-auto">
                        <Text
                          className="text-center text-white_A700 tracking-[-0.34px] w-auto"
                          as="h4"
                          variant="h4"
                        >
                          8.32
                        </Text>
                        <Text
                          className="font-normal text-center text-gray_300_7f w-auto"
                          variant="body5"
                        >
                          /per month
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal text-gray_300_7f w-auto"
                      variant="body2"
                    >
                      For personal use only.
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_900_02 h-px w-full" />
              </div>
              <Button
                className="cursor-pointer font-semibold h-16 text-base text-center text-white_A700 tracking-[-0.34px] w-[315px]"
                shape="CircleBorder32"
                size="3xl"
                variant="FillBlueA700"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[157px] items-center justify-start max-w-[1320px] mb-4 mt-[117px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
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
          <div className="flex flex-col gap-10 items-center justify-start w-full">
            <Line className="bg-white_A700_19 h-px w-full" />
            <div className="flex flex-col items-center justify-start pl-[5px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-44 items-center justify-start w-[11%] md:w-full">
                  <Img
                    src="images/img_group_white_a700.svg"
                    className="h-8"
                    alt="group_One"
                  />
                  <Text
                    className="font-medium text-right text-white_A700_7f"
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
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[220px] w-1/4 md:w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
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
                  <Text
                    className="font-medium leading-[140.00%] mt-8 text-white_A700 w-full"
                    variant="body7"
                  >
                    Receive special offers and get our latest updates.
                  </Text>
                  <div className="flex flex-row gap-5 items-center justify-between mt-[19px] w-full">
                    <Input
                      wrapClassName=""
                      className="font-normal p-0 placeholder:text-gray_300_7f text-center text-gray_300_7f text-xs w-full"
                      type="email"
                      name="frameTwentySix"
                      placeholder="Enter your email"
                      shape="CircleBorder26"
                      size="lg"
                      variant="FillGray90002"
                    ></Input>
                    <Button
                      className="cursor-pointer font-semibold min-w-[92px] text-blue_A700 text-center text-xs tracking-[2.00px] uppercase"
                      shape="CircleBorder28"
                      size="2xl"
                      variant="OutlineBlueA700"
                    >
                      Join
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

export default HomepageOnePage;
