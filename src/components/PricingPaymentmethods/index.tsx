import React from "react";

import { Img } from "components";

type PricingPaymentmethodsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const PricingPaymentmethods: React.FC<PricingPaymentmethodsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img src="images/img_volume.svg" className="h-3" alt="volume" />
      </div>
    </>
  );
};

PricingPaymentmethods.defaultProps = {};

export default PricingPaymentmethods;
