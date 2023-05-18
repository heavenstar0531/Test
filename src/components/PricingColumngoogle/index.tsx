import React from "react";

import { Img } from "components";

type PricingColumngoogleProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const PricingColumngoogle: React.FC<PricingColumngoogleProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_google.svg"
          className="h-[7px] my-0.5"
          alt="google"
        />
      </div>
    </>
  );
};

PricingColumngoogle.defaultProps = {};

export default PricingColumngoogle;
