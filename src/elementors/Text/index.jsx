import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-8xl",
  h2: "font-bold sm:text-5xl md:text-5xl text-7xl",
  h3: "font-bold md:text-5xl sm:text-[42px] text-[56px]",
  h4: "font-semibold text-5xl sm:text-[38px] md:text-[44px]",
  h5: "text-xl",
  h6: "font-medium text-lg",
  body1: "text-base",
  body2: "text-sm",
  body3: "text-xs",
  body4: "font-normal text-[10px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
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
