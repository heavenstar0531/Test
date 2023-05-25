import React from "react";

import { Text } from "components";

const HowItWorksItem11 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-normal text-white_A700_7f w-full"
          variant="body1"
        >
          {props?.header}
        </Text>
        <Text
          className="font-inter font-medium text-white_A700 w-full"
          variant="body1"
        >
          {props?.text}
        </Text>
        <Text
          className="font-inter font-medium text-white_A700 w-full"
          variant="body1"
        >
          {props?.textOne}
        </Text>
        <Text
          className="font-inter font-medium text-white_A700 w-full"
          variant="body1"
        >
          {props?.textTwo}
        </Text>
        {!!props?.textThree ? (
          <Text
            className="font-inter font-medium text-white_A700 w-full"
            variant="body1"
          >
            {props?.textThree}
          </Text>
        ) : null}
        {!!props?.textFour ? (
          <Text
            className="font-inter font-medium text-white_A700 w-full"
            variant="body1"
          >
            {props?.textFour}
          </Text>
        ) : null}
      </div>
    </>
  );
};

HowItWorksItem11.defaultProps = {
  header: "Homepage",
  text: "Games",
  textOne: "How it works",
  textTwo: "Pricing",
};

export default HowItWorksItem11;
