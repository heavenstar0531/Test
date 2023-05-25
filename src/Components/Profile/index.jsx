import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [image, setImage] = useState("url(http://i.pravatar.cc/500?img=7)");
  // const [component, setComponent] = useState("data");

  const readURL = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage(`url(${e.target.result})`);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  const handleComponent = async (key) => {
    // await setComponent(key);
    await navigate(key);
    // console.log(component, "!23123123");
  };

  const sidebar_profile = [
    {
      key: "data",
      icon: "person.png",
      title: "My Data",
      arrow: "arrow_forward.png",
    },
    {
      key: "settingkey",
      icon: "vpn_key.png",
      title: "Enter key",
      arrow: "arrow_forward.png",
    },
    {
      key: "personalInformation",
      icon: "account_box.png",
      title: "Personal information",
      arrow: "arrow_forward.png",
    },
  ];

  const sidebar_settings = [
    {
      key: "rewardProgram",
      icon: "whatshot.png",
      title: "Reward program",
      arrow: "arrow_forward.png",
    },
    {
      key: "writeTestimonials",
      icon: "question_answer.png",
      title: "Write Testimonials",
      arrow: "arrow_forward.png",
    },
    {
      key: "affiliate",
      icon: "supervisor_account.png",
      title: "Affiliate",
      arrow: "arrow_forward.png",
    },
    {
      key: "statistics",
      icon: "trending_up.png",
      title: "Statistics",
      arrow: "arrow_forward.png",
    },
    {
      key: "support",
      icon: "contact_support.png",
      title: "Support",
      arrow: "arrow_forward.png",
    },
    {
      key: "reccurence",
      icon: "how_to_vote.png",
      title: "Reccurence",
      arrow: "arrow_forward.png",
    },
    {
      key: "shareLink",
      icon: "share.png",
      title: "Share Link",
      arrow: "arrow_forward.png",
    },
    {
      key: "exit",
      icon: "exit_to_app.png",
      title: "Exit",
      arrow: "arrow_forward.png",
    },
  ];

  return (
    <>
      <div className="grid grid-rows-4 grid-flow-col gap-4 my-[100px]">
        <div className="row-span-1 w-max pl-[56px]">
          <div className="avatar-upload">
            <div className="avatar-edit">
              <input
                type="file"
                id="imageUpload"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => readURL(e.target)}
              />
              <label htmlFor="imageUpload">
                <img
                  src="/upload_icon.png"
                  className="w-[40px] h-[40px]"
                  alt="upload
                "
                />
              </label>
            </div>
            <div className="avatar-preview">
              <div
                id="imagePreview"
                style={{ backgroundImage: image }}
                className="origin-center -rotate-45"
              ></div>
            </div>
          </div>
          <h1 className="text-white">
            Clayton Santos <small>johny-perry@gmail.com</small>
          </h1>
        </div>
        <div className="row-span-3 w-max">
          <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl  py-[20px] px-[10px]">
            <ul>
              {sidebar_profile.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <button
                      // href={item.key}
                      onClick={() => handleComponent(item.key)}
                      className={` text-white opacity-50 focus:opacity-100 focus:text-white items-center rounded-full py-[10px] justify-between px-[22px] focus:ring-2  focus:bg-[#2C5DFE] shadow-lg flex w-full`}
                    >
                      <div className="flex justify-center">
                        <img src={`/${item.icon}`} alt="icon" />
                      </div>
                      <div className="">{item.title}</div>
                      <div className="flex justify-center">
                        <img src={`/${item.arrow}`} alt="arrow" />
                      </div>
                    </button>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
          <div className="rounded-[30px] mt-[14px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[20px] px-[10px]">
            <ul>
              {sidebar_settings.map((item) => {
                return (
                  <>
                    <button
                      id={item.key}
                      onClick={() => handleComponent(item.key)}
                      className="text-white opacity-50 focus:opacity-100 focus:text-white items-center rounded-full py-[10px] justify-between px-[22px] focus:ring-2 focus:bg-[#2C5DFE] shadow-lg flex w-full"
                    >
                      <div className="flex justify-center">
                        <img src={`/${item.icon}`} alt="icon" />
                      </div>
                      <div className="">{item.title}</div>
                      <div className="flex justify-center">
                        <img src={`/${item.arrow}`} alt="arrow" />
                      </div>
                    </button>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-span-8 row-span-5 text-white">
          <Outlet />
        </div>

        {/* <div class="row-span-2 col-span-2 ...">03</div> */}
      </div>
    </>
  );
}
