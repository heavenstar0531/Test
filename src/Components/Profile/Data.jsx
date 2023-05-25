import { useState } from "react";

export default function Data() {
  const [state, setState] = useState(true);
  const handlePassword = () => {
    setState(!state);
  };
  return (
    <>
      <div className="grid grid-rows-2 grid-cols-2 gap-4">
        <div class="row-span-2 col-span-1">
          {state ? (
            <ul className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full">
              <li className="pb-[12px]">
                <p className="opacity-50 text-[13px] font-medium">My Data</p>
              </li>
              <li className="py-[10px]">
                <p className="text-[15px]">
                  <span className="opacity-50">Full Name</span>{" "}
                  <span className="ml-[5px] font-medium">Clayton Santos</span>
                </p>
              </li>
              <li className="py-[10px]">
                <p>
                  <span className="opacity-50">Email:</span>{" "}
                  <a className="ml-[5px] font-medium underline">
                    johny-perry@gmail.com
                  </a>
                </p>
              </li>
              <li className="pt-[12px]">
                <button
                  className="bg-[#2C5DFE] rounded-[300px] px-[16px] py-[12px] text-[12px]"
                  onClick={handlePassword}
                >
                  Change password
                </button>
              </li>
            </ul>
          ) : (
            <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full">
              <p className="text-[#4D5E80] text-[13px] font-medium mb-[24px]">
                Сhange Password
              </p>
              <div className="flex">
                <input
                  className="bg-[#0E1326] rounded-[12px] opacity-50 text-white p-[16px] flex justify-between items-center mr-[14px]"
                  placeholder="Old password"
                ></input>
                <input
                  className="bg-[#0E1326] rounded-[12px] opacity-50 text-white p-[16px] flex justify-between items-center"
                  placeholder="New password"
                ></input>
              </div>
              <button
                className="bg-[#2C5DFE] rounded-[300px] px-[16px] py-[12px] text-[12px] mt-[24px]"
                onClick={handlePassword}
              >
                Change password
              </button>
            </div>
          )}
        </div>
        <div class="row-span-1 col-span-1">
          <div className="flex justify-between items-center bg-[#0F1522] rounded-[16px] w-5/6">
            <img
              src="/diamond.png"
              className="w-[64px] h-[64px]"
              alt="diamond"
            />
            <div>
              <p className="text-[17px] font-medium">
                Subscription: Enterprise
              </p>
              <p className="text-[12px] opacity-50 mb-[10px]">
                Expires in: 17.04.2023
              </p>
              <a className="text-[#2C5DFE] underline ">Change</a>
            </div>
            <img
              src="/group1.png"
              className="w-[121px] h-[121px]"
              alt="group1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
