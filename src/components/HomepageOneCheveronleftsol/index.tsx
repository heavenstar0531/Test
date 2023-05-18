import React from "react";

import { Button, Img } from "components";

type HomepageOneCheveronleftsolProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const HomepageOneCheveronleftsol: React.FC<HomepageOneCheveronleftsolProps> = (
  props
) => {
  return (
    <>
      <Button
        className={props.className}
        shape="icbCircleBorder16"
        size="lgIcn"
        variant="icbOutlineBlueA700_3"
      >
        <Img
          src="images/img_cheveronleftsolid.svg"
          className="h-8"
          alt="cheveronleftsol"
        />
      </Button>
    </>
  );
};

HomepageOneCheveronleftsol.defaultProps = {};

export default HomepageOneCheveronleftsol;
