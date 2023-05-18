import React from "react";

import { Text } from "components";

type HomepageOneItem11Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    header: string;
    text: string;
    textOne: string;
    textTwo: string;
    textThree: string;
    textFour: string;
  }>;

const HomepageOneItem11: React.FC<HomepageOneItem11Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-normal text-white_A700_7f w-full"
          variant="body5"
        >
          {props?.header}
        </Text>
        <Text
          className="font-inter font-medium text-white_A700 w-full"
          variant="body5"
        >
          {props?.text}
        </Text>
        <Text
          className="font-inter font-medium text-white_A700 w-full"
          variant="body5"
        >
          {props?.textOne}
        </Text>
        <Text
          className="font-inter font-medium text-white_A700 w-full"
          variant="body5"
        >
          {props?.textTwo}
        </Text>
        {!!props?.textThree ? (
          <Text
            className="font-inter font-medium text-white_A700 w-full"
            variant="body5"
          >
            {props?.textThree}
          </Text>
        ) : null}
        {!!props?.textFour ? (
          <Text
            className="font-inter font-medium text-white_A700 w-full"
            variant="body5"
          >
            {props?.textFour}
          </Text>
        ) : null}
      </div>
    </>
  );
};

HomepageOneItem11.defaultProps = {
  header: "Homepage",
  text: "Games",
  textOne: "How it works",
  textTwo: "Pricing",
};

export default HomepageOneItem11;
