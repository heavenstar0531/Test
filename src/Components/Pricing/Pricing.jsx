import Cards from "../Cards/Cards";

export default function Pricing() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <div className="scontainer mx-auto py-8 px-20">
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="text-[4rem]  font-bold">
            GET LAGX IN <span className="text-[#2C5DFE]">3 STEPS</span>
            <div className="flex justify-left pl-[32px]">
              <img src="./pricingunderline.svg" alt="line" />
            </div>
          </h1>
          <div>
            <span className="text-[#7C7C7C] text-[20px] text-center">
              Select a plan that works for you:
            </span>
          </div>
          <div className="flex items-center pt-[24px]">
            <span className="ml-3">Monthly</span>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                Switch
                defaultChecked
                onChange={onChange}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all toggle toggle_ball"></div>
              <span className="ml-3">
                Yearly{" "}
                <sup>
                  {" "}
                  <button className="saving-btn">12% Save</button>
                </sup>
              </span>
            </label>
          </div>
        </div>
        <Cards />
      </div>
    </>
  );
}
