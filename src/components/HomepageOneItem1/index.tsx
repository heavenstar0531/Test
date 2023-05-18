import React from "react";

import { Button, Img, Text } from "components";

type HomepageOneItem1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ body: string }>;

const HomepageOneItem1: React.FC<HomepageOneItem1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-8 items-center justify-center rounded-[50%] w-8"
          size="smIcn"
          variant="icbOutlineBlueA700_2"
        >
          <Img
            src="images/img_checkmark_white_a700.svg"
            className="h-6"
            alt="checkmark"
          />
        </Button>
        <Text
          className="flex-1 font-inter font-medium text-white_A700"
          variant="body3"
        >
          {props?.body}
        </Text>
      </div>
    </>
  );
};

HomepageOneItem1.defaultProps = { body: "Fast Speed" };

export default HomepageOneItem1;
