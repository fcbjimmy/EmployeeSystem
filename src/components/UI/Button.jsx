import React from "react";
import css from "./Button.module.css";
import clsx from "clsx";

const Button = (props) => {
  const { children, type, outline, ...rest } = props;

  return (
    <button
      type={type}
      className={`${css.button} ${outline ? css.outline : css.default}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
