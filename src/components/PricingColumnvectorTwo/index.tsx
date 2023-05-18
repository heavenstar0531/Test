import React from "react";

import { Img } from "components";

type PricingColumnvectorTwoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const PricingColumnvectorTwo: React.FC<PricingColumnvectorTwoProps> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_vector_12x11.png"
          className="h-3 md:h-auto md:ml-[0] ml-[3px] object-cover w-[11px] sm:w-full"
          alt="vector_Two"
        />
      </div>
    </>
  );
};

PricingColumnvectorTwo.defaultProps = {};

export default PricingColumnvectorTwo;
