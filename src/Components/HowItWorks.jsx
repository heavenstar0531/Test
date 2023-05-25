import React from "react";
import HowitworksOther from "./HowItWorksOther";

export default function HowItWorks() {
  return (
    <>
      <div className="lg:grid grid-cols-1 my-[30px]">
        <div className="font-family-[Bebas Neue] flex flex-col justify-between p-[30px]">
          <span className="md:text-[68px] text-[30px] text-white font-semibold text-center">
            HOW IT{" "}
            <span className="md:text-[68px] text-[30px] font-semibold text-[#2C5DFE]">
              WORKS
              <div className="flex justify-left pl-[376px]">
                <img
                  src="./howitworksunderline.svg"
                  alt="line"
                  className="w-[508px]"
                />
              </div>
            </span>
          </span>
          <div className="flex items-center pl-[512px] pt-[32px]">
            <span className="text-[#7C7C7C] text-[20px] text-center">
              Never again, suffer with lag,
              <br /> ping, packet loss or jitter.
            </span>
          </div>
          <div className="flex items-center px-[400px]">
            <div className="relative flex mt-[40px]">
              <button className="flex px-[25px] py-[22.5px] justify-center items-center  bg-[#2C5DFE] text-white text-[16px] rounded-full ">
                <img src="/window.png" className="mr-[10px]" alt="window" />
                <span>Download for Windows</span>
              </button>
              <img
                src="/doodles.png"
                className="w-[28px] h-[28px] mt-[-18px]"
                alt="doodles"
              />
            </div>
            <span className="text-[#7C7C7C] text-[16px] font-normal pt-[40px] ml-[32px]">
              Show more
            </span>
          </div>
          <div className="w-[280px] h-[280px]  blur-[325px] bg-[#2C5DFE] absolute top-[80.66%] right-[90.87%]"></div>
        </div>
      </div>
      <HowitworksOther />
    </>
  );
}
