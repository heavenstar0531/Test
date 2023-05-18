import React from "react";

import { Img } from "components";

type PricingColumnclockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const PricingColumnclock: React.FC<PricingColumnclockProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img src="images/img_clock.svg" className="h-3 w-3" alt="clock" />
      </div>
    </>
  );
};

PricingColumnclock.defaultProps = {};

export default PricingColumnclock;
