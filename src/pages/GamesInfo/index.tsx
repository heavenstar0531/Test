import React from "react";

import { Img, Text } from "components";

const GamesInfoPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-bebasneue items-center justify-start mx-auto w-full">
        <div className="bg-black_900_01 flex flex-col items-start justify-start p-[67px] md:px-10 sm:px-5 rounded-[56px] w-full">
          <div className="flex flex-row gap-6 items-center justify-center mb-1 md:ml-[0] ml-[9px] w-auto sm:w-full">
            <Img src="images/img_games.svg" className="h-20 w-20" alt="games" />
            <Text className="text-white_A700 w-[203px]" as="h1" variant="h1">
              GAMES
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesInfoPage;
