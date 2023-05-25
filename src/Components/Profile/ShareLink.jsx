export default function ShareLink() {
  return (
    <>
      <div>
        <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full h-full">
          <div className="flex justify-between">
            <p className="text-[#4D5E80] text-[13px] font-medium  flex  items-center">
              Share link
            </p>
          </div>
          <div>
            <span className="text-white text-[18px] font-normal">
              Share link and get some rewards
            </span>
          </div>
          <div className="flex justify-between items-center mt-[24px]">
            <form className="w-5/6">
              <div class="relative">
                <input
                  id="url"
                  class="block w-full p-4 text-sm text-gray-900 bg-[#0F1522] rounded-[8px]"
                  placeholder="http://lagx.game/referral&id=23422416"
                  required
                />
                <img
                  className="absolute right-2.5 bottom-3.5"
                  src="/file_copy.png"
                />
              </div>
            </form>
            <button className="bg-[#2C5DFE] rounded-[300px] px-[16px] py-[16px] text-[12px]">
              Generate URL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
