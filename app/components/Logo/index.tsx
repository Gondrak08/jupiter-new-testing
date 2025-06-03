import React from "react";

import styles from "./styles.module.scss";
import { LogoSvg } from "@/app/assets/svg";
import { LogoProps } from "./logo.types";
import classNames from "classnames";

const Logo = ({
  color = "primary",
  size = "h-auto",
  className,
  onClick = () => {},
}: LogoProps) => {
  return (
    <div
      className={classNames(
        styles.logo,
        styles[color],
        styles[size],
        className
      )}
      onClick={onClick}
    >
      <LogoSvg />
      <span>Westride</span>
    </div>
  );
};

export default Logo;
