import React from "react";

import { Button, Img, Text } from "components";

const HowItWorksItem1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-8 items-center justify-center rounded-[50%] w-8"
          size="smIcn"
          variant="icbOutlineBlueA700"
        >
          <Img
            src="images/img_checkmark_white_a700.svg"
            className="h-6"
            alt="checkmark"
          />
        </Button>
        <Text
          className="flex-1 font-inter text-white_A700"
          as="h6"
          variant="h6"
        >
          {props?.body}
        </Text>
      </div>
    </>
  );
};

HowItWorksItem1.defaultProps = { body: "Fast Speed" };

export default HowItWorksItem1;
