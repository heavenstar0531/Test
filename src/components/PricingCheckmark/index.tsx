import React from "react";

import { Button, Img } from "components";

type PricingCheckmarkProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ checkmark: string }>;

const PricingCheckmark: React.FC<PricingCheckmarkProps> = (props) => {
  return (
    <>
      {!!props?.checkmark ? (
        <Button
          className={props.className}
          size="smIcn"
          variant="icbOutlineBlueA700_2"
        >
          <Img src={props?.checkmark} className="h-6" alt="checkmark" />
        </Button>
      ) : null}
    </>
  );
};

PricingCheckmark.defaultProps = {};

export default PricingCheckmark;
