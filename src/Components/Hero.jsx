export default function Hero() {
  return (
    <>
      <div className="lg:grid grid-cols-2 my-[30px]">
        <div className="font-family-[Bebas Neue] flex flex-col justify-between p-[30px]">
          <div>
            <span className="md:text-[68px] text-[30px] text-white font-semibold">
              GAME{" "}
              <span className="md:text-[68px] text-[30px] font-semibold text-[#2C5DFE]">
                FASTER
                <div className="flex justify-left pl-[198px]">
                  <img
                    src="./howitworksunderline.svg"
                    alt="underline"
                    className="w-[250px]"
                  />
                </div>
              </span>
            </span>
            <p className="md:text-[68px] text-[30px] font-semibold text-white">
              LIKE A PRO WITH LAGX
            </p>
            <span className="text-[#7C7C7C] text-[20px]">
              It's very easy to use <span className="text-[#2C5DFE]">LagX</span>
              , with only one click, you optimize your game and have a
              completely new gameplay experience!
            </span>
            <div className="flex items-center">
              <div className="relative flex mt-[40px]">
                <button className="flex px-[25px] py-[22.5px] justify-center items-center  bg-[#2C5DFE] text-white text-[16px] rounded-full ">
                  <img src="/window.png" className="mr-[10px]" alt="window" />
                  <span>Download for Windows</span>
                </button>
                <img
                  src="/doodles.png"
                  className="w-[28px] h-[28px] mt-[-18px]"
                  alt="doodles"
                />
              </div>
              <span className="text-[#7C7C7C] text-[16px] font-normal pt-[40px] ml-[32px]">
                Show more
              </span>
            </div>
          </div>
          <span className="text-[#7C7C7C] text-[16px] font-normal pt-[40px] ml-[32px]">
            Scroll down
          </span>
          <div className="w-[280px] h-[280px]  blur-[325px] bg-[#2C5DFE] absolute top-[80.66%] right-[90.87%]"></div>
        </div>
        <div>
          <button className="flex bg-[#2C5DFE] px-[14px] py-[4px] text-white text-[16px] rounded-[300px] absolute mt-[90px] ml-[50px] ">
            <span>10X Speed</span>
          </button>
          <button className="flex bg-[#212E39] px-[14px] py-[4px] text-white text-[16px] rounded-[300px] absolute mt-[80px] ml-[430px]">
            <span>1000+ Games</span>
          </button>
          <button className="flex bg-[#212E39] px-[14px] py-[4px] text-white text-[16px] rounded-[300px] absolute mt-[180px] ml-[10px]">
            <span>250+ Servers</span>
          </button>
          <div className="flex justify-end">
            <img src="/game.png" alt="game" />
          </div>
        </div>
      </div>
    </>
  );
}
