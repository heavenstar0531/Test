import React from "react";

import { Img } from "components";

type PricingPaymentmethods1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const PricingPaymentmethods1: React.FC<PricingPaymentmethods1Props> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        <Img src="images/img_vector.svg" className="h-1 my-0.5" alt="vector" />
      </div>
    </>
  );
};

PricingPaymentmethods1.defaultProps = {};

export default PricingPaymentmethods1;
