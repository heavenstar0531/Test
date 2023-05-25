import { useState } from "react";

export default function Exit(modal) {
  const [state, setState] = useState();
  const handleModal = () => {
    modal = setState(false);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" w-[480px] h-[375px] bg-[#0D0E12] rounded-[12px] text-white flex flex-col py-[24px] items-center">
        <div className="w-full flex justify-end pr-[40px]">
          <img
            src="/Close.svg"
            onClick={handleModal}
            className="absolute"
            alt="close"
          />
        </div>
        <img src="/modal_check.png" className=" mb-[30px]" alt="modalcheck" />
        <span className="text-[20px] font-normal mb-[20px]">
          Already leaving?
        </span>
        <span className="text-[14px] font-light mb-[24px] flex text-center opacity-70">
          We're sorry you want out of the account. <br />
          Do you really want to log out?
        </span>
        <button className="bg-[#F23838] rounded-[12px] py-[22px] px-[33px] mb-[31px]">
          Yes, Log out
        </button>
        <button onClick={handleModal} className="text-[14px] font-normal">
          No, I am staying
        </button>
      </div>
    </div>
  );
}
