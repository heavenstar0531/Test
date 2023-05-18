import React from "react";

import { Text } from "components";

type HomepageOneNavigationProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    home: string;
    games: string;
    howitworks: string;
    pricing: string;
    faq: string;
  }>;

const HomepageOneNavigation: React.FC<HomepageOneNavigationProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-medium text-center text-white_A700 tracking-[-0.34px] w-auto"
          variant="body5"
        >
          {props?.home}
        </Text>
        <Text
          className="font-inter font-medium text-center text-gray_600 tracking-[-0.34px] w-auto"
          variant="body5"
        >
          {props?.games}
        </Text>
        <Text
          className="font-inter font-medium text-center text-gray_600 tracking-[-0.34px] w-auto"
          variant="body5"
        >
          {props?.howitworks}
        </Text>
        <Text
          className="font-inter font-medium text-center text-gray_600 tracking-[-0.34px] w-auto"
          variant="body5"
        >
          {props?.pricing}
        </Text>
        <Text
          className="font-inter font-medium text-center text-gray_600 tracking-[-0.34px] w-auto"
          variant="body5"
        >
          {props?.faq}
        </Text>
      </div>
    </>
  );
};

HomepageOneNavigation.defaultProps = {
  home: "Home",
  games: "Games",
  howitworks: "How it works",
  pricing: "Pricing",
  faq: "FAQ",
};

export default HomepageOneNavigation;
