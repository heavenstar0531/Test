import React from "react";

import { Img } from "components";

type PricingPaymentmethods3Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const PricingPaymentmethods3: React.FC<PricingPaymentmethods3Props> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_ticket_light_blue_900.svg"
          className="h-3"
          alt="ticket"
        />
      </div>
    </>
  );
};

PricingPaymentmethods3.defaultProps = {};

export default PricingPaymentmethods3;
