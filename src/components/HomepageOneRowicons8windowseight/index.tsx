import React from "react";

import { Img, Text } from "components";

type HomepageOneRowicons8windowseightProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ downloadforwindOne: string }>;

const HomepageOneRowicons8windowseight: React.FC<
  HomepageOneRowicons8windowseightProps
> = (props) => {
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
          variant="body5"
        >
          {props?.downloadforwindOne}
        </Text>
      </div>
    </>
  );
};

HomepageOneRowicons8windowseight.defaultProps = {
  downloadforwindOne: "Download for Windows",
};

export default HomepageOneRowicons8windowseight;
