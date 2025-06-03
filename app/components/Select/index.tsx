"use client";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { SelectProps } from "./select.types";
import classNames from "classnames";
import { useOutsideClick } from "@/app/hooks";
import { ArrowSvg } from "@/app/assets/svg";
const Select = ({
  list,
  active,
  placeholder,
  setActive = () => {},
  className,
}: SelectProps) => {
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const ref = useOutsideClick(toggleShow, show);
  return (
    <button
      className={classNames(
        styles.select,
        active && styles.active,
        active?.label === "" && styles.empty,
        className
      )}
      onClick={toggleShow}
    >
      <span>
        {active?.label?.replace(" including 1 hour", "") || placeholder}
      </span>
      <ArrowSvg />

      <div
        className={classNames(styles.select__list, show && styles.show)}
        ref={ref}
      >
        <div className={styles["select__list-item"]}>{placeholder}</div>
        {list.map((el) => (
          <div
            className={classNames(
              styles["select__list-item"],
              el.label === active?.label && styles.active
            )}
            onClick={() => {
              setActive(el);
            }}
            key={el.label}
          >
            {el.label}
          </div>
        ))}
      </div>
    </button>
  );
};

export default Select;
