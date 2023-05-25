import React from "react";

import { Text } from "components";

const HowItWorksNavigation = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-medium text-center text-gray_300_7f tracking-[-0.34px] w-auto"
          variant="body1"
        >
          {props?.home}
        </Text>
        <Text
          className="font-inter font-medium text-center text-gray_300_7f tracking-[-0.34px] w-auto"
          variant="body1"
        >
          {props?.games}
        </Text>
        <Text
          className="font-inter font-medium text-center text-white_A700 tracking-[-0.34px] w-auto"
          variant="body1"
        >
          {props?.howitworks}
        </Text>
        <Text
          className="font-inter font-medium text-center text-gray_600 tracking-[-0.34px] w-auto"
          variant="body1"
        >
          {props?.pricing}
        </Text>
        <Text
          className="font-inter font-medium text-center text-gray_600 tracking-[-0.34px] w-auto"
          variant="body1"
        >
          {props?.faq}
        </Text>
      </div>
    </>
  );
};

HowItWorksNavigation.defaultProps = {
  home: "Home",
  games: "Games",
  howitworks: "How it works",
  pricing: "Pricing",
  faq: "FAQ",
};

export default HowItWorksNavigation;
