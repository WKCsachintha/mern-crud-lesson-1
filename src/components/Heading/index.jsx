import React from "react";

const sizes = {
  "3xl": "text-[35px] font-extrabold md:text-[33px] sm:text-[31px]",
  "2xl": "text-[32px] font-extrabold md:text-3xl sm:text-[28px]",
  xl: "text-[25px] font-extrabold md:text-[23px] sm:text-[21px]",
  "4xl": "text-[40px] font-extrabold md:text-[38px] sm:text-4xl",
  s: "text-xl font-extrabold",
  md: "text-[22px] font-bold",
  xs: "text-xs font-bold",
  lg: "text-2xl font-extrabold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-sen ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
