import React from "react";

import styles from "./styles.module.scss";
import { InputProps } from "./input.types";
import classNames from "classnames";
const Input = ({
  className,
  value,
  onValueChange = () => {},
  error,
  ...rest
}: InputProps) => {
  return (
    <div className={classNames(styles.input, className)}>
      <input
        value={value}
        onChange={(e) => {
          onValueChange(e.target.value);
        }}
        {...rest}
      />
      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default Input;
