import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
// import required modules
import { Navigation } from "swiper";

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const sliderData = [
    {
      content:
        "This is the best service for games that use a vpn connection. Thanks to this service my game is more focused and there are no crashes from the game as it was before. Stable connection and reliability, that's what LAGX says about the service",
      avatar: "avatar.png",
      mark: "5.0",
      name: "Aleksandr Kostylev “s1mple”",
      player: "Natus Vincere",
    },
    {
      content:
        "This is the best service for games that use a vpn connection. Thanks to this service my game is more focused and there are no crashes from the game as it was before. Stable connection and reliability, that's what LAGX says about the service",
      avatar: "avatar_1.png",
      mark: "4.7",
      name: "Mathieu Herbaugh “ZywOo”",
      player: "Vitality",
    },
    {
      content:
        "This is the best service for games that use a vpn connection. Thanks to this service my game is more focused and there are no crashes from the game as it was before. Stable connection and reliability, that's what LAGX says about the service",
      avatar: "avatar.png",
      mark: "4.7",
      name: "Mathieu Herbaugh “ZywOo”",
      player: "Vitality",
    },
    {
      content:
        "This is the best service for games that use a vpn connection. Thanks to this service my game is more focused and there are no crashes from the game as it was before. Stable connection and reliability, that's what LAGX says about the service",
      avatar: "avatar_1.png",
      mark: "4.7",
      name: "Mathieu Herbaugh “ZywOo”",
      player: "Vitality",
    },
    {
      content:
        "This is the best service for games that use a vpn connection. Thanks to this service my game is more focused and there are no crashes from the game as it was before. Stable connection and reliability, that's what LAGX says about the service",
      avatar: "avatar_1.png",
      mark: "4.7",
      name: "Mathieu Herbaugh “ZywOo”",
      player: "Vitality",
    },
    {
      content:
        "This is the best service for games that use a vpn connection. Thanks to this service my game is more focused and there are no crashes from the game as it was before. Stable connection and reliability, that's what LAGX says about the service",
      avatar: "avatar.png",
      mark: "4.7",
      name: "Mathieu Herbaugh “ZywOo”",
      player: "Vitality",
    },
    {
      content:
        "This is the best service for games that use a vpn connection. Thanks to this service my game is more focused and there are no crashes from the game as it was before. Stable connection and reliability, that's what LAGX says about the service",
      avatar: "avatar.png",
      mark: "4.7",
      name: "Mathieu Herbaugh “ZywOo”",
      player: "Vitality",
    },
    {
      content:
        "This is the best service for games that use a vpn connection. Thanks to this service my game is more focused and there are no crashes from the game as it was before. Stable connection and reliability, that's what LAGX says about the service",
      avatar: "avatar_1.png",
      mark: "4.7",
      name: "Mathieu Herbaugh “ZywOo”",
      player: "Vitality",
    },
  ];
  const halfLength = Math.ceil(sliderData.length / 2);
  const element = Array(halfLength)
    .fill()
    .map((_, i) => sliderData.slice(i * 2, i * 2 + 2));
  return (
    <>
      <div className=" my-[120px]">
        <div>
          <p className="text-[44px] text-white font-bold text-center">
            REVIEWS
          </p>
          <p className="text-[16px] text-white opacity-50 text-center">
            We are trusted by those, below you can read the reviews
          </p>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {element.map((element) => (
            <SwiperSlide className="py-[50px] px-[150px]">
              <div className="">
                <div className=" grid grid-cols-2 gap-60">
                  {element.map((item) => {
                    return (
                      <div>
                        <span className="text-[18px] font-normal text-white">
                          {item.content}
                        </span>
                        <div className="flex items-center mt-[28px]">
                          <img
                            src={`./${item.avatar}`}
                            className="w-[64px] h-[64px] mr-[16px]"
                            alt="avatar"
                          />
                          <div className="flex flex-col">
                            <div className="text-white opacity-50 flex">
                              <span>{item.mark}</span>
                              <div className="flex items-center ml-[10px]">
                                <Rating
                                  style={{ width: "100px" }}
                                  value={rating}
                                  onChange={setRating}
                                />
                              </div>
                            </div>
                            <span className="text-[18px] font-normal text-white">
                              {item.name}
                            </span>
                            <span className="text-[18px] font-normal opacity-50 text-white">
                              Player - {item.player}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
