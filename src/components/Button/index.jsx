import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[11px]",
};
const variants = {
  fill: {
    deep_purple_A200: "bg-deep_purple-A200 backdrop-opacity-[0.5] blur-[20.00px] text-white-A700",
  },
};
const sizes = {
  sm: "h-[48px] px-[35px] text-3xl",
  xs: "h-[23px] px-[11px] text-xs",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "deep_purple_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-white-A700 bg-deep_purple-A200 ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["deep_purple_A200"]),
};

export { Button };
