import React from "react";

import { Img } from "components";

type HomeGameClickChooseServerFlagsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const HomeGameClickChooseServerFlags: React.FC<
  HomeGameClickChooseServerFlagsProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_minimize_white_a700.svg"
          className="h-2.5 w-2.5"
          alt="minimize"
        />
      </div>
    </>
  );
};

HomeGameClickChooseServerFlags.defaultProps = {};

export default HomeGameClickChooseServerFlags;
