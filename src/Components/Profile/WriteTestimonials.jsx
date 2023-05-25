export default function WriteTestimonials() {
  return (
    <>
      <div class="row-span-2 col-span-2">
        <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full">
          <span className="text-[#4D5E80] text-[13px] font-medium mb-[24px] flex">
            Testimonials
          </span>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <label
                for="language"
                class="block mb-2 text-sm font-medium text-white"
              >
                Language
              </label>
              <select
                id="language"
                class="bg-[#0E1326] rounded-[12px] opacity-50 text-white h-[56px] flex justify-between items-center mr-[14px] w-full p-2.5"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <label
                for="nickname"
                class="block mb-2 text-sm font-medium text-white"
              >
                Nickname
              </label>
              <input
                id="nickname"
                className="bg-[#0E1326] rounded-[12px] opacity-50 text-white p-[16px] flex justify-between items-center mr-[14px] w-full"
                placeholder="KillenXfzy"
              ></input>
            </div>
            <div>
              <label
                for="game"
                class="block mb-2 text-sm font-medium text-white"
              >
                Game
              </label>
              <select
                id="game"
                class="bg-[#0E1326] rounded-[12px] opacity-50 text-white h-[56px] flex justify-between items-center mr-[14px] w-full p-2.5"
              >
                <option selected>CS:GO</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <label
                for="testimonials"
                class="block mb-2 text-sm font-medium text-white"
              >
                Testimonials
              </label>
              <input
                id="testimonials"
                className="bg-[#0E1326] rounded-[12px] opacity-50 text-white p-[16px] flex justify-between items-center mr-[14px] w-full mb-[14px]"
                placeholder="Write your testimonials..."
              ></input>
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 bg-[#0E1326] rounded-[4px] focus:bg-[#0E1326] text-white p-[16px] mr-[14px] "
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-white"
                >
                  Default checkbox
                </label>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#2C5DFE] rounded-[300px] px-[16px] py-[12px] text-[12px] mt-[24px]">
              Send review
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
