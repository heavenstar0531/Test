import React from "react";

import { Img } from "components";

type PricingColumnvisaProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const PricingColumnvisa: React.FC<PricingColumnvisaProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img src="images/img_visa.svg" className="h-1.5 my-0.5" alt="visa" />
      </div>
    </>
  );
};

PricingColumnvisa.defaultProps = {};

export default PricingColumnvisa;
