import React from "react";
import { ButtonProps } from "./button.types";

import styles from "./styles.module.scss";
import classNames from "classnames";
const Button = ({
  children,
  className,
  loading,
  disabled,
  color = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, styles[color], className)}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
