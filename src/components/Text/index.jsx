import React from "react";

const sizes = {
  xs: "text-xs font-medium",
  s: "text-[64px] font-normal md:text-5xl",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
