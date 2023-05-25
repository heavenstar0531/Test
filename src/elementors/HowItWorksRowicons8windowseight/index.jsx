import React from "react";

import { Img, Text } from "components";

const HowItWorksRowicons8windowseight = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_icons8windows8.svg"
          className="h-6 w-6"
          alt="icons8windowsEight"
        />
        <Text
          className="font-inter font-semibold text-center text-white_A700 tracking-[-0.34px] w-auto"
          variant="body1"
        >
          {props?.downloadforwindOne}
        </Text>
      </div>
    </>
  );
};

HowItWorksRowicons8windowseight.defaultProps = {
  downloadforwindOne: "Download for Windows",
};

export default HowItWorksRowicons8windowseight;
