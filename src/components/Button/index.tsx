import React from "react";

const shapes = {
  CircleBorder23: "rounded-[23px]",
  CircleBorder28: "rounded-[28px]",
  CustomBorderBR16: "rounded-br-[16px]",
  CircleBorder32: "rounded-[32px]",
  CircleBorder11: "rounded-[11px]",
  CircleBorder17: "rounded-[17px]",
  RoundedBorder4: "rounded",
  icbCircleBorder24: "rounded-[24px]",
  icbCircleBorder36: "rounded-[36px]",
  icbCircleBorder12: "rounded-[12px]",
  icbCircleBorder20: "rounded-[20px]",
  icbCircleBorder16: "rounded-[16px]",
} as const;
const variants = {
  FillBlueA700: "bg-blue_A700 text-white_A700",
  OutlineBlueA700: "border border-blue_A700 border-solid text-blue_A700",
  FillBluegray90002: "bg-blue_gray_900_02 text-white_A700",
  FillDeeppurple900: "bg-deep_purple_900 text-white_A700",
  FillBlueA200: "bg-blue_A200 text-white_A700",
  FillGray90008: "bg-gray_900_08 text-white_A700",
  FillBlack900: "bg-black_900 text-blue_gray_500",
  OutlineBlack90026: "bg-white_A700 shadow-bs1 text-black_900_03",
  FillBluegray9003f01: "bg-blue_gray_900_3f_01 text-white_A700",
  icbOutlineBlueA7007f: "bg-blue_A700 shadow-bs",
  icbOutlineDeeppurpleA200b2: "bg-blue_A700 shadow-bs2",
  icbFillBlue10003: "bg-blue_100_03",
  icbOutlineBlueA700: "bg-indigo_800_01 border border-blue_A700 border-solid",
  icbOutlineBlueA700_1: "bg-white_A700 border border-blue_A700 border-solid",
  icbFillDeeporange100: "bg-deep_orange_100",
  icbOutlineBlueA700_2: "bg-blue_A700 border border-blue_A700 border-solid",
  icbOutlineBlueA700_3:
    "bg-blue_A700 border border-blue_A700 border-solid shadow-bs4",
  icbOutlineBlueA7004c: "bg-blue_A700 shadow-bs3",
} as const;
const sizes = {
  sm: "p-1",
  md: "p-[7px]",
  lg: "p-[11px]",
  xl: "p-3.5",
  "2xl": "p-[17px]",
  "3xl": "p-[22px] sm:px-5",
  smIcn: "p-1",
  mdIcn: "p-[7px]",
  lgIcn: "p-3",
  xlIcn: "p-4",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "",
  size = "",
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

export { Button };
