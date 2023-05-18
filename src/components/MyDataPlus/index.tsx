import React from "react";

import { Button, Img } from "components";

type MyDataPlusProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const MyDataPlus: React.FC<MyDataPlusProps> = (props) => {
  return (
    <>
      <Button
        className={props.className}
        size="mdIcn"
        variant="icbOutlineBlueA7004c"
      >
        <Img src="images/img_plus.svg" className="h-7" alt="plus" />
      </Button>
    </>
  );
};

MyDataPlus.defaultProps = {};

export default MyDataPlus;
