export default function Statistics() {
  return (
    <>
      <div>
        <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full h-full">
          <div className="flex justify-between">
            <p className="text-[#4D5E80] text-[13px] font-medium  flex  items-center">
              Statistics
            </p>
            <select
              id="language"
              class="bg-black flex justify-between items-center  p-2.5 text-[13px]"
            >
              <option selected>Period Selection</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <button className="bg-[#2C5DFE] rounded-[300px] px-[16px] py-[12px] text-[12px] mt-[24px]">
            View reports
          </button>
        </div>
      </div>
    </>
  );
}
