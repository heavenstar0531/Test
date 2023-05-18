import React from "react";

import { Button, CheckBox, Img, Input, SelectBox, Text } from "components";

const enOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LoginEightPage: React.FC = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1255px] mx-auto md:px-5 w-full">
          <div className="bg-blue_A700 flex md:flex-1 flex-col font-halyarddisplay items-center justify-start p-[60px] md:px-10 sm:px-5 w-[55%] md:w-full">
            <div className="bg-blue_200_26 flex flex-col gap-[47px] justify-end mb-[37px] mt-[11px] pt-8 sm:px-5 px-8 rounded-[24px] w-[96%] md:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[31px] mr-48 mt-4 w-[53%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[248px]"
                  leftIcon={
                    <Img
                      src="images/img_hugeicon_interface_solid_like.svg"
                      className="mb-1 mr-2"
                      alt="Huge-icon/interface/solid/like"
                    />
                  }
                  shape="CircleBorder17"
                  size="lg"
                  variant="OutlineBlack90026"
                >
                  <div className="font-normal text-black_900_03 text-left text-lg">
                    1000+ Games Support
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[197px]"
                  leftIcon={
                    <Img
                      src="images/img_hugeicon_interface_solid_speed_test.svg"
                      className="mt-px mb-[3px] mr-2"
                      alt="Huge-icon/interface/solid/speed test"
                    />
                  }
                  shape="CircleBorder17"
                  size="xl"
                  variant="OutlineBlack90026"
                >
                  <div className="font-normal text-black_900_03 text-left text-lg">
                    10X More faster
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[180px]"
                  leftIcon={
                    <Img
                      src="images/img_hugeicon_interface_solid_smileellipse.svg"
                      className="mb-1 mr-2"
                      alt="Huge-icon/interface/solid/smile-ellipse"
                    />
                  }
                  shape="CircleBorder17"
                  size="lg"
                  variant="OutlineBlack90026"
                >
                  <div className="font-normal text-black_900_03 text-left text-lg">
                    24/7 Support
                  </div>
                </Button>
              </div>
              <div className="md:h-[376px] h-[432px] md:ml-[0] ml-[9px] relative w-[99%] sm:w-full">
                <Img
                  src="images/img_group_white_a700_303x452.svg"
                  className="absolute h-[303px] inset-x-[0] mx-auto top-[0]"
                  alt="group"
                />
                <Img
                  src="images/img_overwatchport.png"
                  className="absolute bottom-[0] h-[376px] object-cover right-[0] w-[95%]"
                  alt="overwatchport"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:ml-[0] ml-[99px] md:mt-0 mt-[126px] w-[31%] md:w-full">
            <Img
              src="images/img_group_white_a700.svg"
              className="h-[43px]"
              alt="group_One"
            />
            <Text
              className="font-semibold mt-[54px] text-white_A700"
              as="h6"
              variant="h6"
            >
              Log in
            </Text>
            <div className="flex flex-col font-halyarddisplay items-center justify-start mt-9 w-full">
              <Input
                wrapClassName="w-full"
                className="font-normal p-0 placeholder:text-gray_300_7f text-gray_300_7f text-left text-sm w-full"
                type="email"
                name="group2033"
                placeholder="Type your Email..."
                shape="RoundedBorder12"
                size="lg"
                variant="OutlineGray90002"
              ></Input>
              <Input
                wrapClassName="flex mt-5 w-full"
                className="font-normal p-0 placeholder:text-gray_300_7f text-gray_300_7f text-left text-sm w-full"
                type="password"
                name="group2034"
                placeholder="Password"
                suffix={
                  <div className="h-6 ml-[35px] w-6 border-gray_900_02 border border-solid py-[5px] px-0.5 flex justify-center items-center">
                    <Img
                      src="images/img_eye.svg"
                      className="my-auto"
                      alt="eye"
                    />
                  </div>
                }
                shape="RoundedBorder12"
                size="md"
                variant="OutlineGray90002"
              ></Input>
              <div className="flex flex-row items-start justify-between mt-6 w-full">
                <CheckBox
                  className="font-normal text-left text-white_A700 text-xs"
                  inputClassName="h-6 mr-[5px] w-6"
                  name="rememberme"
                  id="rememberme"
                  label="Remember me"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillGray90006_1"
                ></CheckBox>
                <a
                  href="javascript:"
                  className="font-normal mt-1 text-white_A700 underline"
                >
                  <Text variant="body10">Forgot password?</Text>
                </a>
              </div>
              <Button
                className="cursor-pointer font-normal min-w-[386px] sm:min-w-full mt-6 text-center text-sm text-white_A700"
                shape="CircleBorder11"
                size="2xl"
                variant="FillBlueA200"
              >
                Log in
              </Button>
              <div className="flex flex-row items-start justify-between mt-[22px] w-full">
                <Text className="font-normal text-white_A700" variant="body7">
                  <span className="text-white_A700 text-sm font-halyarddisplay text-left">
                    Not registred yet?{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-blue_A200 text-sm font-halyarddisplay text-left underline"
                  >
                    Create an account
                  </a>
                </Text>
                <Text
                  className="font-normal text-white_A700 underline"
                  variant="body7"
                >
                  HELP
                </Text>
              </div>
              <div className="bg-blue_A200 flex flex-col font-inter items-end justify-start mt-[106px] sm:pl-5 pl-6 rounded-[16px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="font-semibold text-white_A700"
                        variant="body5"
                      >
                        7 DAYS FREE TRIAL
                      </Text>
                      <Text
                        className="font-normal mt-[5px] text-center text-white_A700_7f tracking-[-0.34px]"
                        variant="body10"
                      >
                        We let our users test our app for free
                      </Text>
                      <Text
                        className="font-semibold mt-5 text-center text-white_A700 tracking-[-0.34px]"
                        variant="body10"
                      >
                        Activate
                      </Text>
                    </div>
                    <div className="h-[119px] md:h-[91px] pl-1 relative rotate-[-32deg] rounded-[16px] w-[32%]">
                      <div className="absolute bottom-[32%] flex flex-col items-center justify-start left-[3%] w-[15%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-white_A700 h-3.5 rounded-[50%] w-3.5"></div>
                          <div className="bg-white_A700 h-[13px] ml-1 md:ml-[0] rounded-md w-[13px]"></div>
                        </div>
                      </div>
                      <div className="absolute h-[119px] md:h-[91px] inset-y-[0] my-auto right-[0] w-[81%]">
                        <div className="absolute bottom-[0] md:h-[78px] h-[91px] inset-x-[0] mx-auto w-[92px]">
                          <div className="md:h-[78px] h-[91px] m-auto w-[92px]">
                            <div className="md:h-[78px] h-[91px] m-auto w-[92px]">
                              <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-evenly mx-auto w-[97%]">
                                <div className="md:h-[74px] h-[78px] relative w-[93%]">
                                  <div className="absolute flex flex-col h-full inset-y-[0] justify-start left-[0] my-auto w-[78px]">
                                    <div className="flex flex-col items-start justify-start mr-[39px] w-1/2 md:w-full">
                                      <div className="bg-white_A700 h-3.5 rounded-[50%] w-3.5"></div>
                                      <div className="flex flex-row gap-2 items-start justify-between md:ml-[0] ml-[3px] w-[93%] md:w-full">
                                        <div className="bg-white_A700 h-[13px] mb-0.5 rounded-md w-[13px]"></div>
                                        <div className="bg-white_A700 h-3.5 rounded-[50%] w-3.5"></div>
                                      </div>
                                    </div>
                                    <div className="md:h-8 h-[30px] ml-3.5 md:ml-[0] mr-[25px] mt-[3px] relative w-1/2">
                                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                        <div className="flex flex-col items-start justify-start w-full">
                                          <div className="bg-white_A700 h-3.5 rounded-[50%] w-3.5"></div>
                                          <div className="flex flex-row gap-[7px] items-start justify-between ml-1 md:ml-[0] w-[90%] md:w-full">
                                            <div className="bg-white_A700 h-[13px] mb-0.5 rounded-md w-[13px]"></div>
                                            <div className="bg-white_A700 h-3.5 rounded-[50%] w-3.5"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute bg-white_A700 h-[13px] right-[8%] rounded-md top-[7%] w-[13px]"></div>
                                    </div>
                                    <div className="flex flex-row items-start justify-end md:ml-[0] ml-[52px] mt-0.5 w-[34%] md:w-full">
                                      <div className="bg-white_A700 h-2 mt-[3px] rounded w-1/2"></div>
                                      <div className="bg-white_A700 h-[11px] rounded-[5px] w-1/2"></div>
                                    </div>
                                  </div>
                                  <div className="absolute bg-white_A700 h-3.5 inset-y-[0] my-auto right-[21%] rounded-[50%] w-3.5"></div>
                                  <div className="absolute bg-white_A700 bottom-[26%] h-3.5 right-[0] rounded-[50%] w-3.5"></div>
                                </div>
                                <div className="bg-white_A700 h-3.5 mb-2.5 mt-[53px] rounded-sm w-[5%]"></div>
                              </div>
                              <div className="absolute bg-white_A700 h-[13px] left-[0] rounded-md top-[0] w-[13px]"></div>
                              <div className="absolute bg-white_A700 h-[13px] left-[27%] rounded-md top-[16%] w-[13px]"></div>
                              <div className="absolute bg-white_A700 h-3 right-[30%] rounded-[50%] top-[35%] w-3"></div>
                              <div className="absolute bg-white_A700 bottom-[26%] h-3 right-[0] rounded-[3px] w-[7%]"></div>
                            </div>
                            <Img
                              src="images/img_arrowleft_white_a700.svg"
                              className="absolute h-[29px] right-[26%] rounded-[50%] top-[3%] w-[29px]"
                              alt="arrowleft"
                            />
                          </div>
                          <div className="absolute bg-white_A700 h-5 right-[5%] rounded-[10px] top-[31%] w-1/4"></div>
                        </div>
                        <div className="absolute bg-white_A700 h-[13px] right-[18%] rounded-md top-[35%] w-[13px]"></div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[92px] items-end justify-start p-[19px] right-[0] rounded-[16px] top-[0] w-[95%]"
                          style={{
                            backgroundImage: "url('images/img_group132.svg')",
                          }}
                        >
                          <div className="bg-white_A700 h-3.5 mb-[30px] mt-[9px] rounded-[50%] w-3.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SelectBox
            className="md:flex-1 font-inter font-normal mb-[846px] ml-1 md:ml-[0] md:mt-0 mt-[23px] text-center text-white_A700 text-xs tracking-[-0.34px] w-[7%] md:w-full"
            placeholderClassName="text-white_A700"
            indicator={
              <Img
                src="images/img_flags_us.png"
                className="h-[13px] w-[18px]"
                alt="flags / US"
              />
            }
            size="sm"
            isSearchable={false}
            placeholder="EN"
            shape="RoundedBorder4"
            isMulti={false}
            options={enOptionsList}
            name="frame2042"
            variant="FillBluegray9003f01"
          />
        </div>
      </div>
    </>
  );
};

export default LoginEightPage;
