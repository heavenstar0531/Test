export default function PersonalInformation() {
  return (
    <>
      <div class="row-span-2 col-span-2">
        <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full">
          <span className="text-[#4D5E80] text-[13px] font-medium mb-[24px] flex">
            Personal information
          </span>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-white"
              >
                Country
              </label>
              <select
                id="countries"
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
                for="zipcode"
                class="block mb-2 text-sm font-medium text-white"
              >
                Zip Code
              </label>
              <input
                id="zipcode"
                className="bg-[#0E1326] rounded-[12px] opacity-50 text-white p-[16px] flex justify-between items-center mr-[14px] w-full"
                placeholder="Zip Code"
              ></input>
            </div>
            <div>
              <label
                for="complement"
                class="block mb-2 text-sm font-medium text-white"
              >
                Complement
              </label>
              <select
                id="complement"
                class="bg-[#0E1326] rounded-[12px] opacity-50 text-white h-[56px] flex justify-between items-center mr-[14px] w-full p-2.5"
              >
                <option selected>Complement</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <label
                for="address"
                class="block mb-2 text-sm font-medium text-white"
              >
                Address
              </label>
              <input
                id="address"
                className="bg-[#0E1326] rounded-[12px] opacity-50 text-white p-[16px] flex justify-between items-center mr-[14px] w-full"
                placeholder="Type your Adress..."
              ></input>
            </div>
            <div>
              <label
                for="phonenumber"
                class="block mb-2 text-sm font-medium text-white"
              >
                Phone number
              </label>
              <input
                id="phonenumber"
                type="tel"
                className="bg-[#0E1326] rounded-[12px] opacity-50 text-white p-[16px] flex justify-between items-center mr-[14px] w-full"
                placeholder="+38 (068) 021 - 83 -22"
              />
            </div>
            <div>
              <label
                for="whatsapp"
                class="block mb-2 text-sm font-medium text-white"
              >
                What’s App
              </label>
              <input
                id="whatsapp"
                type="tel"
                className="bg-[#0E1326] rounded-[12px] opacity-50 text-white p-[16px] flex justify-between items-center mr-[14px] w-full"
                placeholder="+38 (068) 021 - 83 -22"
              />
            </div>
            <div>
              <label
                for="game1"
                class="block mb-2 text-sm font-medium text-white"
              >
                Favourite Games
              </label>
              <input
                id="game1"
                className="bg-[#0E1326] rounded-[12px] opacity-50 text-white p-[16px] flex justify-between items-center mr-[14px] w-full"
                placeholder="Type your Game"
              />
            </div>
            <div>
              <label
                for="game2"
                class="block mb-2 text-sm font-medium text-white"
              >
                Favourite Games
              </label>
              <input
                id="game2"
                className="bg-[#0E1326] rounded-[12px] opacity-50 text-white p-[16px] flex justify-between items-center mr-[14px] w-full"
                placeholder="Type your Game"
              ></input>
            </div>
          </div>
          <div>
            <button className="bg-[#2C5DFE] rounded-[300px] px-[16px] py-[12px] text-[12px] mt-[24px]">
              Update information
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
