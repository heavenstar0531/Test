export default function AllFeatures() {
  const data = [
    "Fast Speed",
    "10X Connection",
    "1000+ Games",
    "Personal support",
    "Desktop app",
    "Trial Version 14 days",
    "New Features",
    "Comercial license",
  ];
  return (
    <>
      <div className=" my-[120px]">
        <div>
          <span className="text-[44px] text-white font-bold justify-center flex">
            <p>GET ALL </p> <p className="text-[#2C5DFE] ml-[10px]">FEATURES</p>
          </span>
          <div className="flex justify-center pl-[165px]">
            <img src="./underline.svg" alt="underline" />
          </div>
          <span className="text-[#E3E5E8] opacity-50 mt-[14px] flex justify-center">
            Create an account and test it for 7 days free!
          </span>
        </div>
        <div className="lg:grid block grid-cols-3 text-white mt-[57px] ">
          <div className="border-[#2C5DFE] text-center py-[80px] px-[70px] justify-around col-span-2 border-[1px] grid grid-rows-4 grid-flow-col gap-4">
            {data.map((item, key) => {
              return (
                <div class="col-span-1 flex text-[18px]">
                  <img
                    src="/blue-check.png"
                    className="mr-[14px] w-[32px] h-[32px]"
                    alt="blue-check"
                  />
                  {item}
                </div>
              );
            })}
          </div>
          <div className="border-[#2C5DFE] text-center justify-around col-span-1 border-[1px] p-[32px]">
            <div className="border-b-2 border-[#0E1326]">
              <p className="text-[#E3E5E8] opacity-50 text-[20px] font-medium flex items-center">
                Basic
              </p>
              <div className="flex mt-[24px]">
                <p className="text-[#2C5DFE] text-[16px] pt-[10px]">$</p>
                <p className="text-[48px] text-white font-semibold ml-[6px] mr-[18px]">
                  8.32
                </p>
                <p className="text-[#E3E5E8] opacity-50 text-[16px] flex items-center">
                  /per month
                </p>
              </div>
              <p className="text-[#E3E5E8] opacity-50 text-[20px] font-medium flex items-center mt-[32px] mb-[40px]">
                For personal use only.
              </p>
            </div>
            <button className="py-[22.5px] px-[114px] w-full bg-[#2C5DFE] text-white text-[16px] rounded-full mt-[32px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
