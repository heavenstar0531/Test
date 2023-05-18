import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  UnderLineBluegray50071: "border-b border-blue_gray_500_71",
  FillGray90002: "bg-gray_900_02",
  FillGray90004: "bg-gray_900_04",
  OutlineGray30043: "border border-gray_300_43 border-solid",
  OutlineRed500: "border border-red_500 border-solid",
  OutlineGray90002: "border border-gray_900_02 border-solid",
  OutlineGray90006: "border border-gray_900_06 border-solid",
  FillGray90007: "bg-gray_900_07",
  srcFillGray90002: "bg-gray_900_02",
} as const;
const shapes = {
  CircleBorder26: "rounded-[26px]",
  RoundedBorder12: "rounded-[12px]",
  RoundedBorder20: "rounded-[20px]",
  RoundedBorder4: "rounded",
  RoundedBorder8: "rounded-lg",
  srcRoundedBorder12: "rounded-[12px]",
  srcRoundedBorder8: "rounded-lg",
} as const;
const sizes = {
  sm: "p-3",
  md: "p-4",
  lg: "px-[17px] py-[18px]",
  xl: "px-5 py-[21px]",
  "2xl": "p-[35px] sm:px-5",
  "3xl": "pb-[13px]",
  smSrc: "p-2.5",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape = "",
      variant = "",
      size = "",
      ...restProps
    },
    ref
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

export { Input };
