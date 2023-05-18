import React from "react";

import { Text } from "components";

const WEBCABINETPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-bebasneue items-center justify-start mx-auto w-full">
        <div className="bg-black_900_01 flex flex-col items-start justify-end p-[47px] md:px-10 sm:px-5 rounded-[56px] w-full">
          <div className="flex flex-col items-center justify-center md:ml-[0] ml-[29px] mt-[25px] w-auto">
            <Text className="text-white_A700 w-auto" as="h1" variant="h1">
              WEB
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default WEBCABINETPage;
