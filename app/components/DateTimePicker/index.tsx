"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { DateTimePickerProps, DateTimeValue } from "./picker.types";

import styles from "./styles.module.scss";
import { useOutsideClick } from "@/app/hooks";
import Calendar from "react-calendar";
// import EDTimePicker from "edtimepicker";

import "./calendar.scss";
import { dayTimes, hours, minutes } from "@/app/constants/time";
import Button from "../Button";

const DateTimePicker = ({
  className,
  value,
  children,
  disabled,
  onChange = () => {},
}: DateTimePickerProps) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [formData, setFormData] = useState<DateTimeValue>({
    date: value.date || new Date(),
    hour: value.hour || hours[0],
    minute: value.minute || minutes[0],
    dayTime: value.dayTime || dayTimes[0],
  });

  const toggleShow = () => setShowCalendar((prev) => !prev);

  const ref = useOutsideClick(toggleShow, showCalendar);

  useEffect(() => {
    document.body.style.overflow = showCalendar ? "hidden" : "unset";
    document.body.style.position = showCalendar ? "relative" : "static";

    if (!showCalendar) return;

    setFormData({
      date: value.date || new Date(),
      hour: value.hour || hours[0],
      minute: value.minute || minutes[0],
      dayTime: value.dayTime || dayTimes[0],
    });
  }, [showCalendar]);

  const setValue = () => {
    onChange(formData);
    toggleShow();
  };

  const handleChange = (newData: DateTimeValue) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleTimeChange(newDate: Date) {
    const [hour, dayTime] = newDate
      .toLocaleString("en-US", { hour: "numeric", hour12: true })
      .split(" ");

    handleChange({
      date: newDate,
      hour,
      minute: newDate.getMinutes(),
      dayTime: dayTime as DateTimeValue["dayTime"],
    });
  }

  return (
    <div className={classNames(styles.picker, className)} ref={ref}>
      <button
        className={styles.picker__btn}
        disabled={disabled}
        onClick={toggleShow}
        id="calendar-btn"
        aria-label="Schedule Date"
      >
        {children}
      </button>
      <div className={classNames(styles.popup, showCalendar && styles.show)}>
        <div className={styles.picker__desktop}>
          <Calendar
            className={classNames(styles.calendar)}
            onChange={(date) => {
              handleChange({ date: date as Date });
            }}
            value={formData.date}
            minDate={new Date()}
          />
          <div className={styles.picker__right}>
            <div className={styles.picker__list}>
              {hours.map((hour) => (
                <div
                  className={classNames(
                    styles["picker__list-item"],
                    formData.hour === hour && styles.active
                  )}
                  onClick={() => {
                    handleChange({ hour });
                  }}
                  key={hour}
                >
                  {hour}
                </div>
              ))}
            </div>
            <div className={styles.picker__list}>
              {minutes.map((minute) => (
                <div
                  className={classNames(
                    styles["picker__list-item"],
                    formData.minute === minute && styles.active
                  )}
                  onClick={() => {
                    handleChange({ minute });
                  }}
                  key={minute}
                >
                  {minute}
                </div>
              ))}
            </div>
            <div className={styles.picker__list}>
              {dayTimes.map((dayTime) => (
                <div
                  className={classNames(
                    styles["picker__list-item"],
                    formData.dayTime === dayTime && styles.active
                  )}
                  onClick={() => {
                    handleChange({ dayTime });
                  }}
                  key={dayTime}
                >
                  {dayTime}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.picker__mobile}>
          {/* <EDTimePicker
            options={{
              borderColor: "#11d99c",
              daysNameFormat: "DDD, MMM DD",
              timeFormat: "hh:mm A",
            }}
            currentDate={formData.date}
            onDateChange={handleTimeChange}
          /> */}
        </div>

        <div className={styles.picker__buttons}>
          <Button onClick={setValue}>Set</Button>
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;
