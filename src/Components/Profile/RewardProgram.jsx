export default function RewardProgram() {
  return (
    <>
      <div class="row-span-2 col-span-2">
        <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full">
          <span className="text-[#4D5E80] text-[13px] font-medium mb-[24px] flex">
            Reward program
          </span>
          <div className="bg-[#0F1522] rounded-[16px] flex justify-between">
            <div className="p-[24px]">
              <p className="text-white text-[16px] font-normal mb-[7px]">
                Play more often thanks to{" "}
                <span className="text-[#2C5DFE]">LAGX</span> and get guaranteed
                prizes
              </p>
              <p className="text-[#4D5E80] text-[14px] font-light">
                Gift keys for activation, personalized T-shirts for the most
                active and other
              </p>
              <button className="bg-[#2C5DFE] rounded-[300px] px-[16px] py-[12px] text-[12px] mt-[24px]">
                Play Games
              </button>
            </div>
            <div className="flex items-center mr-[50px]">
              <div className="w-[6px] h-[6px] rounded-full absolute left-[1206px] top-[235px] bg-[#2C5DFE]" />
              <div className="w-[6px] h-[6px] rounded-full absolute left-[700px] top-[235px] bg-[#2C5DFE]" />
              <div className="w-[6px] h-[6px] rounded-full absolute left-[500px] top-[235px] bg-[#2C5DFE]" />
              <div className="w-[11px] h-[11px] rounded-full absolute left-[1206px] top-[235px] bg-[#2C5DFE]" />
              <img src="/box.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
