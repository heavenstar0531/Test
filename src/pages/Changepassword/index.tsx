import React from "react";

import { Button, Img, Line, List, Text } from "components";
import HomepageOneItem11 from "components/HomepageOneItem11";
import HomepageOneLogin from "components/HomepageOneLogin";
import HomepageOneNavigation from "components/HomepageOneNavigation";
import MyDataAvatarimage from "components/MyDataAvatarimage";
import MyDataColumnnotifications from "components/MyDataColumnnotifications";
import MyDataPlus from "components/MyDataPlus";

const ChangepasswordPage: React.FC = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-inter items-center justify-start mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1320px] mb-8 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              src="images/img_group_white_a700.svg"
              className="h-8"
              alt="group"
            />
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[70%] md:w-full">
              <div className="bg-blue_gray_900_3f flex flex-col items-center justify-end p-4 rounded-[28px]">
                <HomepageOneNavigation
                  className="flex flex-row gap-10 items-center justify-center w-auto sm:w-full"
                  home="Home"
                  games="Games"
                  howitworks="How it works"
                  pricing="Pricing"
                  faq="FAQ"
                />
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
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[92px] w-full">
            <div className="flex md:flex-1 flex-col gap-11 items-center justify-start w-[24%] md:w-full">
              <div className="flex flex-col items-start justify-start w-1/2 md:w-full">
                <div className="flex md:ml-[0] ml-[5px] relative w-[97%]">
                  <div className="h-[130px] my-auto w-[130px]">
                    <div className="flex flex-col h-full items-center justify-start m-auto outline outline-[1px] outline-gray_900_07 rounded-[50%] w-[130px]">
                      <Img
                        src="images/img_proggress.svg"
                        className="h-[130px] rounded-tl-[50%] rounded-tr-[50%] w-[130px]"
                        alt="proggress"
                      />
                    </div>
                    <MyDataAvatarimage className="absolute bg-amber_200 flex flex-col h-max inset-[0] items-center justify-center m-auto rounded-[50%] w-[110px] sm:w-full" />
                  </div>
                  <MyDataPlus className="bg-blue_A700 flex h-10 items-center justify-center ml-[-19px] my-auto p-1.5 rounded-[50%] shadow-bs3 w-10 z-[1]" />
                </div>
                <Text
                  className="font-bold md:ml-[0] ml-[11px] mt-6 text-center text-white_A700"
                  variant="body5"
                >
                  Clayton Santos
                </Text>
                <Text
                  className="font-bold mt-[11px] text-center text-gray_300_7f"
                  variant="body8"
                >
                  johny-perry@gmail.com
                </Text>
              </div>
              <div className="md:h-[200px] h-[202px] relative w-full">
                <div className="h-[200px] m-auto outline outline-[1px] outline-gray_900_02 rounded-[20px] w-full"></div>
                <div className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto top-[7%] w-[90%]">
                  <MyDataColumnnotifications className="bg-blue_A700 flex flex-row items-center justify-start p-[15px] rounded-[30px] shadow-bs5 w-full" />
                  <div className="flex flex-col gap-5 items-center justify-start w-[90%] md:w-full">
                    <div className="flex flex-row items-start justify-start w-full">
                      <Img
                        src="images/img_videocamera.svg"
                        className="h-[30px] w-[30px]"
                        alt="videocamera"
                      />
                      <Text
                        className="font-bold ml-5 mt-2 text-blue_gray_500"
                        variant="body10"
                      >
                        Enter key
                      </Text>
                      <Img
                        src="images/img_arrowright_blue_gray_500.svg"
                        className="h-[30px] ml-[114px] w-[30px]"
                        alt="arrowright_One"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start w-[98%] md:w-full">
                      <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                        <Img
                          src="images/img_user_blue_gray_500.svg"
                          className="h-[30px] w-[30px]"
                          alt="user_One"
                        />
                      </div>
                      <Text
                        className="font-bold ml-5 text-blue_gray_500"
                        variant="body10"
                      >
                        Personal information
                      </Text>
                      <Img
                        src="images/img_arrowright_blue_gray_500.svg"
                        className="h-[30px] ml-[47px]"
                        alt="arrowright_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-52 sm:h-[271px] relative w-[41%] md:w-full">
              <Text
                className="font-bold ml-6 mt-[29px] text-blue_gray_600"
                variant="body8"
              >
                Сhange Password
              </Text>
              <div className="absolute border border-gray_900_02 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col gap-6 items-start justify-start mt-[38px] w-[88%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-[49%] sm:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="bg-gray_900_04 flex flex-row items-center justify-between p-[15px] rounded-[12px] w-full">
                            <Text
                              className="font-normal text-gray_300_7f"
                              variant="body10"
                            >
                              Old password
                            </Text>
                            <Img
                              src="images/img_hugeicon_interface_solid_eye.svg"
                              className="h-[18px] w-[18px]"
                              alt="hugeiconinterfa"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-[49%] sm:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="bg-gray_900_04 font-normal h-[49px] justify-center pl-4 sm:pr-5 pr-[35px] py-4 rounded-[12px] text-gray_300_7f w-52"
                            variant="body10"
                          >
                            New password
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold min-w-[137px] text-center text-white_A700 text-xs"
                    shape="CircleBorder23"
                    size="2xl"
                    variant="FillBlueA700"
                  >
                    Change password
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[7px] w-[33%] md:w-full">
              <div className="bg-gray_900_07 flex flex-col items-center justify-start pl-1.5 rounded-[16px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                    <Img
                      src="images/img_diamond_blue_a700.svg"
                      className="h-[78px] rounded-[16px] w-[78px]"
                      alt="diamond"
                    />
                    <div className="flex flex-col items-start justify-start ml-3.5 sm:ml-[0]">
                      <Text
                        className="text-center text-white_A700 tracking-[-0.34px]"
                        variant="body4"
                      >
                        Subscription: Enterprise
                      </Text>
                      <Text
                        className="font-normal mt-1.5 text-center text-gray_300_7f tracking-[-0.34px]"
                        variant="body10"
                      >
                        Expires in: 17.04.2023
                      </Text>
                      <Text
                        className="font-normal mt-[19px] text-blue_A700 text-center tracking-[-0.34px] underline"
                        variant="body7"
                      >
                        Change
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-end justify-start ml-11 sm:ml-[0] pl-1 rotate-[-32deg] rounded-[16px] w-[22%] sm:w-full">
                      <div className="h-[103px] md:h-[90px] relative w-[99%]">
                        <div className="absolute bottom-[23%] flex flex-col items-center justify-start left-[0] w-1/5">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="bg-blue_A700 h-3.5 rounded-[50%] w-3.5"></div>
                            <div className="bg-blue_A700 h-[13px] ml-1 md:ml-[0] rounded-md w-[13px]"></div>
                          </div>
                        </div>
                        <div className="absolute h-[103px] md:h-[90px] inset-y-[0] my-auto right-[0] w-[81%]">
                          <div className="absolute bottom-[0] md:h-[62px] h-[77px] inset-x-[0] mx-auto w-full">
                            <div className="absolute md:h-[62px] h-[77px] inset-[0] justify-center m-auto w-[98%]">
                              <div className="md:h-[62px] h-[77px] m-auto w-full">
                                <div className="md:h-[62px] h-[77px] m-auto w-full">
                                  <div className="absolute bottom-[0] h-16 md:h-[62px] left-[4%] w-[78%]">
                                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                      <div className="flex flex-col gap-[19px] justify-start w-full">
                                        <div className="bg-blue_A700 h-3.5 mr-[39px] rounded-[50%] w-3.5"></div>
                                        <div className="flex flex-col items-start justify-start ml-3.5 md:ml-[0] w-[74%] md:w-full">
                                          <div className="bg-blue_A700 h-3.5 rounded-[50%] w-3.5"></div>
                                          <div className="flex flex-row gap-[7px] items-start justify-between ml-1 md:ml-[0] w-[90%] md:w-full">
                                            <div className="bg-blue_A700 h-[13px] mb-0.5 rounded-md w-[13px]"></div>
                                            <div className="bg-blue_A700 h-3.5 rounded-[50%] w-3.5"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute flex flex-col gap-1.5 h-max inset-[0] justify-center m-auto w-[89%]">
                                      <div className="flex flex-row gap-2 items-start justify-start mr-2.5 w-[77%] md:w-full">
                                        <div className="bg-blue_A700 h-[13px] mb-0.5 rounded-md w-[13px]"></div>
                                        <div className="bg-blue_A700 h-3.5 rounded-[50%] w-3.5"></div>
                                      </div>
                                      <div className="bg-blue_A700 h-[13px] md:ml-[0] ml-[34px] rounded-md w-[13px]"></div>
                                    </div>
                                  </div>
                                  <div className="absolute bg-blue_A700 bottom-[22%] h-3.5 right-[0] rounded-[50%] w-3.5"></div>
                                  <div className="absolute bg-blue_A700 h-[13px] left-[0] rounded-md top-[0] w-[13px]"></div>
                                </div>
                                <div className="absolute bg-blue_A700 h-[13px] left-[37%] rounded-md top-[19%] w-[13px]"></div>
                                <div className="absolute bg-blue_A700 h-3 inset-y-[0] my-auto right-[6%] rounded-[50%] w-3"></div>
                              </div>
                              <Img
                                src="images/img_rewind.svg"
                                className="absolute h-[29px] right-[0] rounded-[50%] top-[4%] w-[29px]"
                                alt="rewind"
                              />
                            </div>
                            <div className="absolute bg-blue_A700 h-5 inset-y-[0] my-auto right-[0] rounded-[3px] w-[9%]"></div>
                          </div>
                          <div className="absolute bg-blue_A700 h-[13px] right-[0] rounded top-[40%] w-[12%]"></div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-[91px] items-end justify-start sm:pl-5 pl-[27px] py-[27px] right-[0] rounded-[16px] top-[0] w-[93%]"
                            style={{
                              backgroundImage: "url('images/img_group44.svg')",
                            }}
                          >
                            <div className="bg-blue_A700 h-3.5 mb-[22px] rounded-[5px] w-[29%]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-end mt-0.5 w-[16%] md:w-full">
                        <div className="bg-blue_A700 h-1.5 mt-[3px] rounded-[3px] w-full"></div>
                        <div className="bg-blue_A700 h-[9px] rounded-[1px] w-[8%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[439px] md:h-[450px] mt-3 relative w-[24%]">
            <div className="h-[438px] m-auto outline outline-[1px] outline-gray_900_02 rounded-[20px] w-full"></div>
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[81%]">
              <List
                className="flex-col gap-5 grid items-center pt-[50px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      src="images/img_computer_blue_gray_500.svg"
                      className="h-[30px] w-[30px]"
                      alt="computer"
                    />
                    <Text
                      className="font-bold ml-5 text-blue_gray_500"
                      variant="body10"
                    >
                      Write Testimonials
                    </Text>
                    <Img
                      src="images/img_arrowright_blue_gray_500.svg"
                      className="h-[30px] ml-[60px] w-[30px]"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <Img
                    src="images/img_fire.svg"
                    className="h-[30px] w-[30px]"
                    alt="fire"
                  />
                  <Text
                    className="font-black ml-5 text-blue_gray_500"
                    variant="body10"
                  >
                    Reward program
                  </Text>
                  <Img
                    src="images/img_arrowright_blue_gray_500.svg"
                    className="h-[30px] ml-[71px] w-[30px]"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <Img
                    src="images/img_user_blue_gray_500_30x30.svg"
                    className="h-[30px] w-[30px]"
                    alt="user"
                  />
                  <Text
                    className="font-bold ml-5 text-blue_gray_500"
                    variant="body10"
                  >
                    Affiliate
                  </Text>
                  <Img
                    src="images/img_arrowright_blue_gray_500.svg"
                    className="h-[30px] ml-[123px] w-[30px]"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <Img
                    src="images/img_checkmark_blue_gray_500.svg"
                    className="h-[30px] w-[30px]"
                    alt="checkmark"
                  />
                  <Text
                    className="font-bold ml-5 text-blue_gray_500"
                    variant="body10"
                  >
                    Statistics
                  </Text>
                  <Img
                    src="images/img_arrowright_blue_gray_500.svg"
                    className="h-[30px] ml-[114px] w-[30px]"
                    alt="arrowright"
                  />
                </div>
                <div className="flex md:flex-1 flex-row items-start justify-start mr-[7px] my-0 w-[98%] md:w-full">
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      src="images/img_question.svg"
                      className="h-[30px] w-[30px]"
                      alt="question"
                    />
                  </div>
                  <Text
                    className="font-bold ml-5 mt-2 text-blue_gray_500"
                    variant="body10"
                  >
                    Support
                  </Text>
                  <Img
                    src="images/img_arrowright_blue_gray_500.svg"
                    className="h-[30px] ml-[122px]"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <Img
                    src="images/img_close.svg"
                    className="h-[30px] w-[30px]"
                    alt="close"
                  />
                  <Text
                    className="font-bold ml-5 text-blue_gray_500"
                    variant="body10"
                  >
                    Reccurence
                  </Text>
                  <Img
                    src="images/img_arrowright_blue_gray_500.svg"
                    className="h-[30px] ml-[100px] w-[30px]"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <Img
                    src="images/img_share.svg"
                    className="h-[30px] w-[30px]"
                    alt="share"
                  />
                  <Text
                    className="font-bold ml-5 text-blue_gray_500"
                    variant="body10"
                  >
                    Share Link
                  </Text>
                  <Img
                    src="images/img_arrowright_blue_gray_500.svg"
                    className="h-[30px] ml-[108px] w-[30px]"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <Img
                    src="images/img_volume_blue_gray_500.svg"
                    className="h-[30px] w-[30px]"
                    alt="volume"
                  />
                  <Text
                    className="font-bold ml-5 text-blue_gray_500"
                    variant="body10"
                  >
                    Exit
                  </Text>
                  <Img
                    src="images/img_arrowright_blue_gray_500.svg"
                    className="h-[30px] ml-[147px] w-[30px]"
                    alt="arrowright"
                  />
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[106px] w-full">
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <Line className="bg-white_A700_19 h-px w-full" />
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[174px] items-start justify-start md:mt-0 mt-[3px] w-[11%] md:w-full">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangepasswordPage;
