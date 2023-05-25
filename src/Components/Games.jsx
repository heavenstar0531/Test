import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const onSearch = (value) => console.log(value);

export default function Games() {
  return (
    <>
      <div className="lg:grid grid-cols-2 my-[30px]">
        <div className="font-family-[Bebas Neue] flex flex-col justify-between p-[30px]">
          <div className="pt-[130px]">
            <span className="text-[66px] text-white font-semibold justify-center flex">
              <p>READY TO</p>{" "}
              <p className="text-[#2C5DFE] ml-[10px]">SPEED UP</p>
            </span>
            <div className="flex justify-center pl-[318px]">
              <img
                src="./howitworksunderline.svg"
                alt="underline"
                className="w-[292px]"
              />
            </div>
            <span className="text-[66px] text-white font-semibold justify-left flex">
              <p>YOUR GAMES? </p>
            </span>

            <span className="text-[#7C7C7C] text-[20px]">
              Over 1000+ supported games so that you can have the best online
              gaming experience possible.!
            </span>
            <div className="flex items-center w-full">
              <div className="relative flex mt-[40px]">
                <Input
                  placeholder="input search text"
                  onSearch={onSearch}
                  enterButton
                  prefix={<SearchOutlined className="site-form-item-icon" />}
                  className="!bg-[#0E1326] !p-[10px] border-none text-white placeholder:text-gray-400 game_search"
                  style={{
                    width: 600,
                  }}
                />
              </div>
              <img
                src="./arrow.svg"
                className="w-[148px] h-[200px] mt-[-18px] pl-[30px] pb-[30px]"
                alt="arrow"
              />
            </div>
          </div>
          <div className="w-[280px] h-[280px]  blur-[325px] bg-[#2C5DFE] absolute top-[80.66%] right-[90.87%]"></div>
        </div>
        <div>
          <div className="flex justify-end">
            <img src="/games.png" alt="games" />
          </div>
        </div>
      </div>
    </>
  );
}
