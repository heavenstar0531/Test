export default function Footer() {
  return (
    <>
      <div className="border-t-2 border-[#0E1326] pt-[40px]">
        <div className="lg:grid grid-cols-4 grid-flow-row gap-4">
          <div className="col-span-1 flex flex-col justify-between">
            <img src="/logo.png" className="w-[150px]" alt="logo" />
            <span className="text-white opacity-50">© 2023 LAGXVPN</span>
          </div>
          <div className="col-span-1">
            <ul className="max-w-md space-y-3 text-white list-none list-inside dark:text-gray-400">
              <li className="text-white opacity-50">Homepage</li>
              <li>Games</li>
              <li>How it works</li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li>Free trial</li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="max-w-md space-y-3 text-white list-none list-inside dark:text-gray-400">
              <li className="text-white opacity-50">Account</li>
              <li>Log in</li>
              <li>Register</li>
              <li>Terms of use</li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="max-w-md space-y-3 text-white list-none list-inside dark:text-gray-400">
              <li className="text-white opacity-50">
                <span className="text-white opacity-50">Get the app</span>
              </li>
              <li>
                <button className="flex px-[74px] py-[22.5px] w-full justify-center items-center  bg-[#2C5DFE] text-white text-[16px] rounded-full ">
                  <img src="/window.png" className="mr-[10px]" alt="window" />
                  <span>Download for Windows</span>
                </button>
              </li>
              <li>
                <span className="mt-[10px]">
                  Receive special offers and get our latest
                  <br /> updates.
                </span>
              </li>
              <li>
                <div className="flex justify-between w-full">
                  <input
                    className="bg-[#0E1326] w-[200px] rounded-[32px] py-[16px] pl-[24px] text-white"
                    placeholder="Enter your email"
                  />
                  <button className="rounded-[300px] border-[#2C5DFE] text-[#2C5DFE] border-[1px] px-[28px] py-[16px] ">
                    JOIN
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
