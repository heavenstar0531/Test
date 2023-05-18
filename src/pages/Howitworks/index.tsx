import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Input, Line, List, Text } from "components";
import HomepageOneItem1 from "components/HomepageOneItem1";
import HomepageOneItem11 from "components/HomepageOneItem11";
import HomepageOneLogin from "components/HomepageOneLogin";
import HomepageOneNavigation from "components/HomepageOneNavigation";
import HomepageOneRowicons8windowseight from "components/HomepageOneRowicons8windowseight";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const HowitworksPage: React.FC = () => {
  const [group2046value, setGroup2046value] = React.useState<string>("");

  return (
    <>
      <div className="bg-black_900 flex flex-col font-inter items-center justify-start mx-auto py-[21px] w-full">
        <div className="flex flex-col items-center justify-start mb-6 w-full">
          <div className="flex flex-col justify-start max-w-[1320px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Img
                src="images/img_group_white_a700.svg"
                className="h-8"
                alt="group"
              />
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[70%] md:w-full">
                <div className="bg-blue_gray_900_3f flex flex-col gap-3.5 items-center justify-end pt-[18px] px-[18px] rounded-[28px]">
                  <HomepageOneNavigation
                    className="flex flex-row gap-10 items-center justify-center w-auto sm:w-full"
                    home="Home"
                    games="Games"
                    howitworks="How it works"
                    pricing="Pricing"
                    faq="FAQ"
                  />
                  <Line className="bg-blue_A700 h-0.5 rounded-[1px] w-[21%]" />
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
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-72 md:ml-[0] mt-32 w-[45%] md:w-full">
              <div className="bg-black_900 h-3.5 mb-[74px] sm:mt-0 mt-[88px] w-[13px]"></div>
              <div className="flex flex-col gap-[30px] justify-start">
                <div className="font-bebasneue md:h-24 h-[98px] relative w-full">
                  <div className="absolute h-24 inset-y-[0] my-auto right-[0] w-[96%] sm:w-full">
                    <Text
                      className="m-auto text-blue_A700 tracking-[-0.34px]"
                      as="h1"
                      variant="h1"
                    >
                      HOW IT WORKS
                    </Text>
                    <div className="absolute flex flex-row items-end justify-between right-[1%] top-[4%] w-[90%]">
                      <div className="bg-black_900 h-3.5 mt-[63px] w-[13px]"></div>
                      <div className="bg-black_900 h-3.5 mb-[7px] mt-14 w-[13px]"></div>
                      <div className="flex flex-col justify-start">
                        <div className="bg-black_900 h-3.5 md:ml-[0] ml-[30px] mr-[219px] w-[13px]"></div>
                        <div className="flex flex-row items-start justify-start mt-[17px] w-full">
                          <div className="bg-black_900 h-3.5 mt-3.5 w-[13px]"></div>
                          <div className="bg-black_900 h-3.5 mb-3.5 ml-40 w-[13px]"></div>
                          <div className="bg-black_900 h-3.5 mb-3.5 ml-[63px] w-[13px]"></div>
                        </div>
                        <div className="bg-black_900 h-3.5 md:ml-[0] ml-[148px] mr-[101px] mt-1 w-[13px]"></div>
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-blue_A700 bottom-[0] h-1 inset-x-[0] mx-auto w-[99%]" />
                </div>
                <Text
                  className="font-inter font-normal leading-[120.00%] md:ml-[0] ml-[70px] text-center text-gray_300_7f w-[73%] sm:w-full"
                  variant="body2"
                >
                  Never again, suffer with lag, ping, packet loss or jitter.
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-center md:ml-[0] ml-[447px] mt-6 w-[31%] md:w-full">
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
                className="font-semibold sm:mt-0 mt-[47px] text-center text-gray_600 tracking-[-0.34px]"
                variant="body5"
              >
                Show more
              </Text>
            </div>
          </div>
          <div className="md:h-[1621px] h-[645px] sm:h-[765px] mt-[121px] md:px-5 relative w-full">
            <div className="absolute h-[643px] inset-[0] justify-center m-auto w-full">
              <Img
                src="images/img_abstract04.png"
                className="absolute h-[643px] inset-y-[0] left-[0] my-auto object-cover"
                alt="abstractFour"
              />
              <Img
                src="images/img_abstract04_643x1211.png"
                className="absolute h-[643px] inset-y-[0] my-auto object-cover right-[0]"
                alt="abstractFour_One"
              />
            </div>
            <div className="absolute md:h-[1500px] sm:h-[644px] h-[645px] inset-[0] justify-center m-auto w-[69%] md:w-full">
              <div className="bg-gray_900_02 h-[644px] my-auto rounded-bl-[24px] rounded-tl-[24px] w-[7%]"></div>
              <div className="absolute bg-black_900 border border-gray_900_02 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto pt-3 px-3 rounded-[24px] w-full">
                <div className="flex flex-col gap-[7px] items-center justify-start w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[10%] md:w-full">
                      <div className="flex flex-row gap-1.5 items-center justify-start md:ml-[0] ml-[5px] w-[35%] md:w-full">
                        <div className="bg-red_A200 h-2 rounded-[50%] w-2"></div>
                        <div className="bg-orange_300 h-2 rounded-[50%] w-2"></div>
                        <div className="bg-green_500 h-2 rounded-[50%] w-2"></div>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Img
                          src="images/img_group.svg"
                          className="h-[25px] mt-[17px]"
                          alt="group_One"
                        />
                        <Img
                          src="images/img_frame.svg"
                          className="h-6 w-6"
                          alt="frame"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-3 md:ml-[0]">
                      <Text
                        className="font-medium text-gray_600_01"
                        variant="body10"
                      >
                        Hello, Oleksandr Yeromin
                      </Text>
                      <Text
                        className="font-normal mt-[3px] text-blue_gray_100"
                        variant="body11"
                      >
                        Choose the best servers for a comfortable game
                      </Text>
                    </div>
                    <Input
                      value={group2046value}
                      onChange={(e) => setGroup2046value(e)}
                      wrapClassName="flex md:flex-1 mb-[9px] ml-20 md:ml-[0] md:mt-0 mt-3.5 w-[42%] md:w-full"
                      className="font-normal p-0 placeholder:text-gray_300_7f text-gray_300_7f text-left text-xs w-full"
                      name="group2046"
                      placeholder="Search a game"
                      prefix={
                        <Img
                          src="images/img_search_white_a700.svg"
                          className="cursor-pointer mr-2 my-auto"
                          alt="search"
                        />
                      }
                      suffix={
                        <CloseSVG
                          fillColor="#7fe3e5e8"
                          className="cursor-pointer my-auto"
                          onClick={() => setGroup2046value("")}
                          style={{
                            visibility:
                              group2046value?.length <= 0
                                ? "hidden"
                                : "visible",
                          }}
                          height={18}
                          width={18}
                          viewBox="0 0 18 18"
                        />
                      }
                      shape="srcRoundedBorder8"
                      size="smSrc"
                      variant="srcFillGray90002"
                    ></Input>
                    <div className="flex md:flex-1 flex-col items-end justify-start ml-7 md:ml-[0] w-[11%] md:w-full">
                      <Text
                        className="font-semibold text-white_A700"
                        variant="body10"
                      >
                        Alexander Yeromin
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-[3px] w-[91%] md:w-full">
                        <Img
                          src="images/img_starpurple500.svg"
                          className="h-3 w-3"
                          alt="starpurple500"
                        />
                        <Text
                          className="font-normal text-blue_A700"
                          variant="body11"
                        >
                          Premium member
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_ellipse10.png"
                      className="h-10 md:h-auto ml-2 md:ml-[0] rounded-[50%] w-10"
                      alt="ellipseTen"
                    />
                  </div>
                  <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-6 items-center justify-start md:mt-0 mt-6 w-[3%] md:w-full">
                        <Img
                          src="images/img_home_white_a700.svg"
                          className="h-6 w-6"
                          alt="home_One"
                        />
                        <Img
                          src="images/img_settingssuggest.svg"
                          className="h-6 w-6"
                          alt="settingssuggest"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[93%] md:w-full">
                        <Text
                          className="font-bold text-white_A700"
                          variant="body7"
                        >
                          Latest game
                        </Text>
                        <div className="flex flex-col items-center justify-center mt-3.5 w-auto">
                          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                            <Img
                              src="images/img_rectangle1086.png"
                              className="h-[149px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                              alt="rectangle37083"
                            />
                            <Text
                              className="font-normal text-white_A700"
                              variant="body10"
                            >
                              Diablo IV
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="font-bold mt-6 text-white_A700"
                          variant="body7"
                        >
                          All Games 1000+
                        </Text>
                        <List
                          className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-center mt-[15px] w-auto md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                            <Img
                              src="images/img_rectangle1086.png"
                              className="h-[149px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                              alt="rectangle37083"
                            />
                            <Text
                              className="font-normal text-white_A700"
                              variant="body10"
                            >
                              Diablo IV
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                            <Img
                              src="images/img_rectangle1086_207x159.png"
                              className="h-[149px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                              alt="rectangle37083"
                            />
                            <Text
                              className="font-normal text-white_A700"
                              variant="body10"
                            >
                              Sons of the Forest
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                            <Img
                              src="images/img_rectangle37083.png"
                              className="h-[149px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                              alt="rectangle37083"
                            />
                            <Text
                              className="font-normal text-white_A700"
                              variant="body10"
                            >
                              Shatterline
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3 items-center justify-start w-full">
                            <Img
                              src="images/img_rectangle1086_2.png"
                              className="h-[149px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                              alt="rectangle37083"
                            />
                            <Text
                              className="font-normal text-white_A700"
                              variant="body10"
                            >
                              Fangs
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
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
                          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                            <Img
                              src="images/img_rectangle1086_1.png"
                              className="h-[149px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                              alt="rectangle37083"
                            />
                            <Text
                              className="font-normal text-white_A700"
                              variant="body10"
                            >
                              COD:MW2
                            </Text>
                          </div>
                          <div className="flex flex-col gap-3 items-center justify-start w-full">
                            <Img
                              src="images/img_rectangle1086_5.png"
                              className="h-[149px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                              alt="rectangle37083"
                            />
                            <Text
                              className="font-normal text-white_A700"
                              variant="body10"
                            >
                              Gotham Knights
                            </Text>
                          </div>
                        </List>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
                      <Img
                        src="images/img_exittoapp.svg"
                        className="h-6 md:mt-0 mt-[53px] w-6"
                        alt="exittoapp"
                      />
                      <div className="h-[101px] sm:h-[1223px] md:h-[328px] relative w-[93%] md:w-full">
                        <List
                          className="absolute sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 inset-[0] justify-center m-auto w-auto"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-center justify-end w-full">
                            <Img
                              src="images/img_rectangle37083_149x112.png"
                              className="h-[149px] md:h-auto object-cover w-full"
                              alt="rectangle37083"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-end w-full">
                            <Img
                              src="images/img_rectangle37083_1.png"
                              className="h-[149px] md:h-auto object-cover w-full"
                              alt="rectangle37083"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-end w-full">
                            <Img
                              src="images/img_rectangle37083_2.png"
                              className="h-[149px] md:h-auto object-cover w-full"
                              alt="rectangle37083"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-end w-full">
                            <Img
                              src="images/img_rectangle37083_3.png"
                              className="h-[149px] md:h-auto object-cover w-full"
                              alt="rectangle37083"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-end w-full">
                            <Img
                              src="images/img_rectangle37083_4.png"
                              className="h-[149px] md:h-auto object-cover w-full"
                              alt="rectangle37083"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-end w-full">
                            <Img
                              src="images/img_rectangle37083_5.png"
                              className="h-[149px] md:h-auto object-cover w-full"
                              alt="rectangle37083"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-end w-full">
                            <Img
                              src="images/img_rectangle37083_6.png"
                              className="h-[149px] md:h-auto object-cover w-full"
                              alt="rectangle37083"
                            />
                          </div>
                        </List>
                        <div className="absolute md:h-12 h-[53px] inset-y-[0] my-auto right-[0] w-[6%]">
                          <Button
                            className="absolute flex h-12 items-center justify-center left-[0] rounded-[50%] top-[0] w-12"
                            size="lgIcn"
                            variant="icbOutlineDeeppurpleA200b2"
                          >
                            <Img
                              src="images/img_supportagent.svg"
                              className="h-6"
                              alt="supportagent"
                            />
                          </Button>
                          <Img
                            src="images/img_ticket.svg"
                            className="absolute bottom-[0] h-[22px] right-[0] w-[22px]"
                            alt="ticket"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1076px] mt-[120px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_abstract07.svg"
              className="h-[386px] w-[386px]"
              alt="abstractSeven"
            />
            <div className="flex sm:flex-1 flex-col gap-8 items-start justify-center w-auto sm:w-full">
              <Text
                className="font-bebasneue text-white_A700 tracking-[-0.34px] w-[516px]"
                as="h2"
                variant="h2"
              >
                MULTIPATH CONNECTION
              </Text>
              <Text
                className="font-inter font-normal leading-[140.00%] max-w-[538px] md:max-w-full text-gray_300_7f"
                variant="body2"
              >
                Through the Multipath Connection, technology employed only by
                ExitLag, connection packets are sent simultaneously through
                different routes. Should one route become unstable, the others
                keep the connection running smoothly to make sure your data
                packet always gets delivered.
              </Text>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[74px] items-center justify-start max-w-[1099px] mt-24 mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[94%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col gap-8 items-start justify-center w-auto sm:w-full">
                  <Text
                    className="font-bebasneue text-white_A700 tracking-[-0.34px] w-[461px]"
                    as="h2"
                    variant="h2"
                  >
                    Worldwide Servers
                  </Text>
                  <Text
                    className="font-inter font-normal leading-[140.00%] text-gray_300_7f"
                    variant="body2"
                  >
                    <>
                      LAGX counts on a worldwide server network spread over all
                      continents that optimize connections from anywhere to
                      anywhere. <br />
                      That way, no one gets cheated on a poor connection and you
                      guarantee a fair game from anywhere in the world.
                    </>
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_abstract06.svg"
                className="h-[360px]"
                alt="abstractSix"
              />
            </div>
            <div className="md:h-[1352px] sm:h-[427px] h-[784px] relative w-full">
              <div className="md:h-[1352px] sm:h-[399px] h-[784px] m-auto w-full">
                <div className="absolute h-[399px] md:h-[515px] left-[0] top-[0] w-[70%] md:w-full">
                  <div className="absolute bg-gray_900_02 bottom-[0] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto px-2.5 rounded-[24px] w-full">
                    <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[23px] md:mt-0 mt-[222px]">
                      <Text
                        className="font-medium text-white_A700"
                        variant="body2"
                      >
                        Multipath connection
                      </Text>
                      <Text
                        className="font-normal leading-[150.00%] text-gray_300_7f w-full"
                        variant="body7"
                      >
                        <>
                          Your connection packets are simultaneously run through
                          different routes in order to ensure the packet&#39;s
                          delivery.
                        </>
                      </Text>
                    </div>
                    <div className="h-[365px] relative w-[42%] md:w-full">
                      <Img
                        src="images/img_vector3015.svg"
                        className="absolute h-[365px] inset-y-[0] left-[0] my-auto"
                        alt="vector3015"
                      />
                      <Img
                        src="images/img_pngwing2.png"
                        className="absolute h-[365px] inset-y-[0] my-auto object-cover right-[0] rounded-[24px] w-[77%]"
                        alt="pngwingTwo"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_pngwing3.png"
                    className="absolute h-[399px] inset-y-[0] my-auto object-cover right-[1%] w-[31%]"
                    alt="pngwingThree"
                  />
                </div>
                <div className="absolute bg-gray_900_02 bottom-[0] flex md:flex-col flex-row md:gap-5 items-start justify-end pt-[17px] px-[17px] right-[0] rounded-[24px] w-[70%]">
                  <div className="flex flex-col gap-[21px] items-start justify-start md:mt-0 mt-[184px]">
                    <Text
                      className="font-medium text-white_A700"
                      variant="body2"
                    >
                      Trafic Shaping
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] text-gray_300_7f w-full"
                      variant="body7"
                    >
                      <>
                        The games data traffic is prioritized so that your
                        connection isn&#39;t affected even while other devices
                        share the band-width.
                      </>
                    </Text>
                  </div>
                  <div className="bg-blue_A700 h-[9px] mb-[268px] md:mt-0 mt-[71px] rounded w-[9px]"></div>
                  <div className="bg-blue_A700 h-[5px] mb-[190px] md:ml-[0] ml-[41px] md:mt-0 mt-[153px] rounded-sm w-[5px]"></div>
                  <div className="bg-blue_A700 h-[17px] mb-[295px] ml-1.5 md:ml-[0] md:mt-0 mt-9 rounded-lg w-[17px]"></div>
                  <div className="bg-blue_A700 h-[341px] ml-5 md:ml-[0] md:mt-0 mt-[7px] rounded-[170px] w-[341px]"></div>
                </div>
                <div className="absolute bg-gray_900_02 flex flex-col gap-[22px] justify-center p-[25px] sm:px-5 right-[0] rounded-[24px] top-[4%] w-[29%]">
                  <div className="h-[162px] md:h-[174px] md:ml-[0] ml-[103px] mt-3 relative w-[162px]">
                    <div className="!w-[162px] h-[162px] m-auto overflow-visible">
                      <CircularProgressbar
                        className="!w-[162px] h-[162px] m-auto overflow-visible"
                        value={41}
                        strokeWidth={4}
                        styles={{
                          trail: { strokeWidth: 4, stroke: "#2c5dfe" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(6deg)",
                            stroke: "#2c5dfe",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                    <Text
                      className="absolute bg-clip-text bg-gradient3  h-max inset-[0] justify-center m-auto text-transparent w-max"
                      as="h3"
                      variant="h3"
                    >
                      99%
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[23px] items-start justify-start mb-[7px]">
                    <Text
                      className="font-medium text-white_A700"
                      variant="body2"
                    >
                      FPS Boost
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] text-gray_300_7f w-full"
                      variant="body7"
                    >
                      Small tweaks in the operating system that enhance FPS
                      performance during gaming.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray_900_02 bottom-[0] flex flex-col gap-[21px] items-center justify-center left-[0] rounded-[24px] w-[29%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[106px] items-start justify-start mt-[72px] p-[13px] w-full"
                  style={{ backgroundImage: "url('images/img_group115.svg')" }}
                >
                  <Img
                    src="images/img_search.svg"
                    className="h-3 mb-1 mt-16 w-3"
                    alt="search_One"
                  />
                </div>
                <div className="flex flex-col gap-[22px] items-start justify-start mb-8">
                  <Text className="font-medium text-white_A700" variant="body2">
                    Real-time optimization
                  </Text>
                  <Text
                    className="font-normal leading-[150.00%] text-gray_300_7f w-full"
                    variant="body7"
                  >
                    <>
                      The search for the optimal route is done in real-time to
                      make sure the gamer&#39;s always playing on the best
                      possible route.
                    </>
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[0] h-[427px] right-[3%] w-[32%]">
                <Img
                  src="images/img_pngwing5.png"
                  className="h-[427px] m-auto object-cover w-full"
                  alt="pngwingFive"
                />
                <div className="absolute bg-blue_A700 bottom-1/4 h-[5px] left-[0] rounded-sm w-[5px]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-center mt-[110px] md:px-5 w-auto sm:w-full">
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
            <div className="absolute border border-blue_A700 border-solid h-[362px] inset-[0] justify-center m-auto rounded-[12px] w-full"></div>
            <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto w-[97%]">
              <div className="md:h-[352px] h-[353px] sm:h-[472px] relative w-3/5 md:w-full">
                <div className="absolute h-[352px] sm:h-[472px] inset-[0] justify-center m-auto w-full">
                  <List
                    className="absolute sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-2 inset-y-[0] justify-center my-auto right-[0] w-auto"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start sm:ml-[0] p-4 shadow-bs6 w-[283px]">
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
                    <div className="flex flex-col items-center justify-start sm:ml-[0] pl-4 py-4 shadow-bs6 w-[247px]">
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
                  <div className="absolute bg-gradient1  h-[352px] inset-y-[0] left-[0] my-auto rotate-[180deg] rounded-bl-[181px] rounded-br-[111px] rounded-tl-[176px] rounded-tr-[114px] w-[32%]"></div>
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
              <div className="flex flex-col gap-8 items-start justify-center w-auto">
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
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1320px] mt-[113px] mx-auto md:px-5 w-full">
            <Line className="bg-white_A700_19 h-px w-full" />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[173px] items-start justify-start md:mt-0 mt-1 w-[11%] md:w-full">
                  <Img
                    src="images/img_group_white_a700.svg"
                    className="h-8"
                    alt="group_Two"
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
        </div>
      </div>
    </>
  );
};

export default HowitworksPage;
