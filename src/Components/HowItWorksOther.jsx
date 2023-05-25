import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Img, Text } from "../elementors";

// import { CloseSVG } from "../assets/images";

import "react-circular-progressbar/dist/styles.css";

const HowitworksOther = () => {
  // const [group2046value, setGroup2046value] = React.useState("");

  return (
    <>
      <div className="bg-[#090d1b] flex flex-col font-inter items-center justify-start mx-auto py-[16px] w-full">
        <div className="flex flex-col items-center justify-start mb-6 w-full">
          <div className="md:h-[600px] h-[647px] sm:h-[765px] mt-[121px] md:px-5 relative w-full">
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
              <Img
                src="/gamelist.png"
                className="absolute h-[643px] inset-y-[0] my-auto object-cover"
                alt="abstractFour_One"
              />
            </div>
          </div>
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1076px] mt-[118px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_abstract07.svg"
              className="h-[386px] w-[386px]"
              alt="abstractSeven"
            />
            <div className="flex sm:flex-1 flex-col gap-8 items-start justify-center w-auto sm:w-full">
              <Text
                className="font-bebasneue text-[#ffffff] tracking-[-0.34px] w-[516px]"
                as="h2"
                variant="h2"
              >
                MULTIPATH CONNECTION
              </Text>
              <Text
                className="font-inter font-normal leading-[140.00%] max-w-[538px] md:max-w-full text-[#e3e5e87f]"
                as="h5"
                variant="h5"
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
            <div className="flex flex-row md:gap-10 items-center justify-between w-[94%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col gap-8 items-start justify-center w-auto sm:w-full">
                  <Text
                    className="font-bebasneue text-[#ffffff] tracking-[-0.34px] w-[461px]"
                    as="h2"
                    variant="h2"
                  >
                    Worldwide Servers
                  </Text>
                  <Text
                    className="font-inter font-normal leading-[140.00%] text-[#e3e5e87f]"
                    as="h5"
                    variant="h5"
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
            <div className="md:h-[768px] sm:h-[427px] h-[784px] relative w-full">
              <div className=" sm:h-[399px] h-[784px] m-auto w-full">
                <div className="absolute h-[399px] left-[0] top-[0] w-[70%]">
                  <div className="absolute bg-[#0d1326] bottom-[0] flex flex-row inset-x-[0] items-start justify-between mx-auto px-2.5 rounded-[24px] w-full">
                    <div className="grid grid-rows-2">
                      <div className="py-9 px-4">
                        <img src="/01.png" alt="01"></img>
                      </div>
                      <div className="flex flex-col pt-[60px] px-4 gap-[22px] items-start justify-start md:ml-[0] ml-[23px] md:mt-0">
                        <Text
                          className="font-medium text-[#ffffff]"
                          as="h5"
                          variant="h5"
                        >
                          Multipath connection
                        </Text>
                        <Text
                          className="font-normal leading-[150.00%] text-[#e3e5e87f] w-full"
                          variant="body2"
                        >
                          <>
                            Your connection packets are simultaneously run
                            through different routes in order to ensure the
                            packet&#39;s delivery.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="h-[365px] relative w-[42%] md:w-full">
                      <Img
                        src="images/img_vector3015.svg"
                        className="absolute h-[365px] inset-y-[0] left-[0] my-auto"
                        alt="vector3015"
                      />
                      <Img
                        src="images/img_pngwing3.png"
                        className="absolute h-[399px] inset-y-[0] my-auto object-cover right-[1%]"
                        alt="pngwingThree"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[#0d1326] bottom-[0] flex flex-row items-start justify-end pt-[10px] px-[8px] right-[0] rounded-[24px] w-[70%]">
                  <div className="flex flex-col gap-[21px] items-start justify-start">
                    <div className="flex pt-[16px] pl-[16px]">
                      <img src="/04.png" alt="04"></img>
                    </div>
                    <div className="pt-[104px] pl-[16px]">
                      <Text
                        className="font-medium text-[#ffffff]"
                        as="h5"
                        variant="h5"
                      >
                        Trafic Shaping
                      </Text>
                      <Text
                        className="font-normal leading-[150.00%] text-[#e3e5e87f] w-full"
                        variant="body2"
                      >
                        <>
                          The games data traffic is prioritized so that your
                          connection isn&#39;t affected even while other devices
                          share the band-width.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-[#2c5dfe] h-[9px] mb-[268px] md:mt-0 mt-[71px] rounded w-[9px]"></div>
                  <div className="bg-[#2c5dfe] h-[5px] mb-[190px] md:ml-[0] ml-[41px] md:mt-0 mt-[153px] rounded-sm w-[5px]"></div>
                  <div className="bg-[#2c5dfe] h-[17px] mb-[295px] ml-1.5 md:ml-[0] md:mt-0 mt-9 rounded-lg w-[17px]"></div>
                  <div className="bg-[#2c5dfe] h-[341px] ml-5 md:ml-[0] md:mt-0 mt-[7px] rounded-[170px] w-[670px]"></div>
                </div>
                <div className="absolute bg-[#0d1326] flex flex-col gap-[22px] justify-center p-[30px] sm:px-5 right-[0] rounded-[24px] top-[4%] w-[29%]">
                  <div className="h-[162px] md:h-[174px] md:ml-[0] ml-[103px] mt-3 relative">
                    <div className="gird grid-cols-2">
                      <div className="absolute">
                        <img src="02.png" alt="02"></img>
                      </div>
                      <div className="ml-[88px]">
                        <img src="/99.png" alt="99"></img>
                      </div>
                      {/* <CircularProgressbar
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
                      ></CircularProgressbar> */}
                    </div>
                    {/* <Text
                      className="absolute bg-clip-text bg-gradient  h-max inset-[0] justify-center m-auto text-transparent w-max"
                      as="h3"
                      variant="h3"
                    >
                      99%
                    </Text> */}
                  </div>
                  <div className="flex flex-col gap-[23px] items-start justify-start mb-[7px]">
                    <Text
                      className="font-medium text-[#ffffff]"
                      as="h5"
                      variant="h5"
                    >
                      FPS Boost
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] text-[#e3e5e87f] w-full"
                      variant="body2"
                    >
                      Small tweaks in the operating system that enhance FPS
                      performance during gaming.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#0d1326] bottom-[0] flex flex-col gap-[34px] items-center justify-center left-[0] rounded-[24px] w-[29%]">
                <div className="bg-cover bg-no-repeat flex flex-col h-[106px] items-start justify-start mt-[16px] mb-[50px] p-[13px] w-full ml-[28px]">
                  <img src="/03.png" alt="search_One" />
                </div>
                <div className="flex flex-col gap-[22px] items-start justify-start mb-8 ml-[24px]">
                  <Text
                    className="font-medium text-[#ffffff]"
                    as="h5"
                    variant="h5"
                  >
                    Real-time optimization
                  </Text>
                  <Text
                    className="font-normal leading-[150.00%] text-[#e3e5e87f] w-full"
                    variant="body2"
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
                <div className="absolute bg-[#2c5dfe] bottom-1/4 h-[5px] left-[0] rounded-sm w-[5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowitworksOther;
