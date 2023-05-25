import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder28: "rounded-[28px]",
  CustomBorderBR16: "rounded-br-[16px]",
  CircleBorder32: "rounded-[32px]",
  CircleBorder23: "rounded-[23px]",
  icbCircleBorder24: "rounded-[24px]",
  icbCircleBorder16: "rounded-[16px]",
};
const variants = {
  FillBlueA700: "bg-blue_A700 text-white_A700",
  icbOutlineDeeppurpleA200b2: "bg-blue_A700 shadow-bs",
  icbOutlineBlueA700: "bg-blue_A700 border border-blue_A700 border-solid",
};
const sizes = {
  sm: "p-[7px]",
  md: "p-[11px]",
  lg: "p-[18px]",
  xl: "p-[22px] sm:px-5",
  smIcn: "p-1",
  mdIcn: "p-3",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder28",
    "CustomBorderBR16",
    "CircleBorder32",
    "CircleBorder23",
    "icbCircleBorder24",
    "icbCircleBorder16",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA700",
    "icbOutlineDeeppurpleA200b2",
    "icbOutlineBlueA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
