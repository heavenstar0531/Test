export default function SettingKey() {
  return (
    <>
      <div className="grid grid-rows-2 grid-cols-2 gap-4">
        <div class="row-span-2 col-span-1">
          <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full">
            <span className="text-[#4D5E80] text-[13px] font-medium mb-[24px] flex">
              Do you have a prepaid key?{" "}
              <span className="ml-[6px]">Insert below</span>
            </span>
            <input
              type="number"
              className="bg-[#0E1326] rounded-[12px] opacity-50 text-white p-[16px] flex justify-between items-center mr-[14px] w-full"
              placeholder="Serial number"
            ></input>
            <div>
              <button className="bg-[#2C5DFE] rounded-[300px] px-[16px] py-[12px] text-[12px] mt-[24px]">
                Insert Key
              </button>
              <button className="bg-[#171E38] rounded-[300px] px-[16px] py-[12px] text-[12px] mt-[24px] ml-[16px]">
                My Keys
              </button>
            </div>
          </div>
        </div>
        <div class="row-span-2 col-span-1">
          <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full">
            <span className="text-[#4D5E80] text-[13px] font-medium mb-[24px] flex">
              History activated
            </span>
            <span className="flex text-[14px] text-white justify-between h-[56px]">
              ABC-7672-696-315-83
              <span className="text-[#6DDC29]">Activated</span>
            </span>
            <button className="bg-[#2C5DFE] rounded-[300px] px-[16px] py-[12px] text-[12px] mt-[24px]">
              Change password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
