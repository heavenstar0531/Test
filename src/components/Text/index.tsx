import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-8xl",
  h2: "font-bold sm:text-5xl md:text-5xl text-7xl",
  h3: "font-bold md:text-5xl sm:text-[42px] text-[56px]",
  h4: "font-semibold text-5xl sm:text-[38px] md:text-[44px]",
  h5: "text-4xl sm:text-[32px] md:text-[34px]",
  h6: "md:text-3xl sm:text-[28px] text-[32px]",
  body1: "font-semibold text-2xl md:text-[22px] sm:text-xl",
  body2: "text-xl",
  body3: "text-lg",
  body4: "font-semibold text-[17px]",
  body5: "text-base",
  body6: "text-[15px]",
  body7: "text-sm",
  body8: "text-[13px]",
  body9: "font-bold sm:text-5xl md:text-5xl text-9xl",
  body10: "text-xs",
  body11: "text-[10px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
