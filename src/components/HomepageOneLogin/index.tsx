import React from "react";

import { Text } from "components";

type HomepageOneLoginProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ freetrial: string }>;

const HomepageOneLogin: React.FC<HomepageOneLoginProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-bold font-inter mt-0.5 text-center text-white_A700 tracking-[-0.34px]"
          variant="body5"
        >
          {props?.freetrial}
        </Text>
      </div>
    </>
  );
};

HomepageOneLogin.defaultProps = { freetrial: "Log in" };

export default HomepageOneLogin;
