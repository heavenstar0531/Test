import React from "react";

import { Img } from "components";

type MyDataAvatarimageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const MyDataAvatarimage: React.FC<MyDataAvatarimageProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_image.png"
          className="h-[110px] md:h-auto rounded-[50%] w-[110px]"
          alt="image_One"
        />
      </div>
    </>
  );
};

MyDataAvatarimage.defaultProps = {};

export default MyDataAvatarimage;
