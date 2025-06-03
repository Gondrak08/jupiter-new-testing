import React from "react";

import styles from "./styles.module.scss";
import { ClockSvg, MarkerSvg, SwitchSvg } from "@/app/assets/svg";
import { AutocompleteInput, DateTimePicker } from "@/app/components";
import { RoadInputProps } from "./roadinput.types";

import "react-calendar/dist/Calendar.css";
import classNames from "classnames";

const RoadInput = ({
  form,
  updateForm = () => {},
  disabled = false,
  animate = false,
}: RoadInputProps) => {
  const switchAddresses = () => {
    const temp = form.from;
    updateForm({
      from: form.to,
      to: temp,
    });
  };

  return (
    <div className={classNames(styles.input, animate && "showOn")}>
      <div className={styles.input__markers}>
        <MarkerSvg />
        <div className={styles["input__markers-bar"]} />
        <MarkerSvg className={styles.green} />
      </div>
      <div className={styles.input__main}>
        <AutocompleteInput
          className={styles["input__main-item"]}
          placeholder="From"
          value={form.from?.description}
          onChoose={(value) => {
            updateForm({ from: value });
          }}
          disabled={disabled}
        />
        <div className={styles["input__main-bar"]}>
          <span>
            <p>s</p>
          </span>
        </div>
        <AutocompleteInput
          className={classNames(styles["input__main-item"], styles.dest)}
          placeholder="To"
          value={form.to?.description}
          onChoose={(value) => {
            updateForm({ to: value });
          }}
          disabled={disabled}
        />
      </div>
      <div className={styles.input__icons}>
        <DateTimePicker
          className={styles.input__calendar}
          value={{
            date: form.date,
            hour: form.hour,
            minute: form.minute,
            dayTime: form.dayTime,
          }}
          disabled={disabled || form.isNow}
          onChange={(value) => {
            updateForm(value);
          }}
        >
          <ClockSvg
            className={classNames((disabled || form.isNow) && styles.disabled)}
          />
        </DateTimePicker>
        <SwitchSvg
          onClick={() => {
            if (!disabled) {
              switchAddresses();
            }
          }}
        />
      </div>
    </div>
  );
};

export default RoadInput;
