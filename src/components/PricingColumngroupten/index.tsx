import React from "react";

import { Img } from "components";

type PricingColumngrouptenProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const PricingColumngroupten: React.FC<PricingColumngrouptenProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_group10_light_blue_600_01.svg"
          className="h-[5px] my-[3px]"
          alt="groupTen"
        />
      </div>
    </>
  );
};

PricingColumngroupten.defaultProps = {};

export default PricingColumngroupten;
