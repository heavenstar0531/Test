import React from "react";

import { Img } from "components";

type PricingColumnrefreshProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const PricingColumnrefresh: React.FC<PricingColumnrefreshProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_refresh.svg"
          className="h-3 w-[11px]"
          alt="refresh"
        />
      </div>
    </>
  );
};

PricingColumnrefresh.defaultProps = {};

export default PricingColumnrefresh;
