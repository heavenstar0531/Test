import React from "react";

import { Text } from "components";

const HowItWorksLogin = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-bold font-inter mt-0.5 text-center text-white_A700 tracking-[-0.34px]"
          variant="body1"
        >
          {props?.freetrial}
        </Text>
      </div>
    </>
  );
};

HowItWorksLogin.defaultProps = { freetrial: "Log in" };

export default HowItWorksLogin;
