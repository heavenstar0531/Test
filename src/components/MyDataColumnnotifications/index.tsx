import React from "react";

import { Img, Text } from "components";

type MyDataColumnnotificationsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ user: string; notifications: string; arrowright: string }>;

const MyDataColumnnotifications: React.FC<MyDataColumnnotificationsProps> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-start w-[98%] md:w-full">
          <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
            {!!props?.user ? (
              <Img src={props?.user} className="h-[30px] w-[30px]" alt="user" />
            ) : null}
          </div>
          {!!props?.notifications ? (
            <Text
              className="font-bold font-inter ml-5 text-white_A700"
              variant="body10"
            >
              {props?.notifications}
            </Text>
          ) : null}
          {!!props?.arrowright ? (
            <Img
              src={props?.arrowright}
              className="h-[30px] ml-[47px]"
              alt="arrowright"
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

MyDataColumnnotifications.defaultProps = {};

export default MyDataColumnnotifications;
