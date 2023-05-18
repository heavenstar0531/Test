import React from "react";

import { Img } from "components";

type PricingPaymentmethods2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const PricingPaymentmethods2: React.FC<PricingPaymentmethods2Props> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_vector_blue_800.svg"
          className="h-2 rounded-tl-sm rounded-tr-sm"
          alt="vector_One"
        />
      </div>
    </>
  );
};

PricingPaymentmethods2.defaultProps = {};

export default PricingPaymentmethods2;
