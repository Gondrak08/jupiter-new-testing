import React from "react";
import styles from "./styles.module.scss";
import { CarProps } from "./car.types";
import classNames from "classnames";
const CarRender = ({ car, className, onClick, active = false }: CarProps) => {
  return (
    <div
      className={classNames(styles.car, active && styles.active, className)}
      onClick={onClick}
    >
      <img alt={car.name} src={car.img.src} />
      <div className={styles.car__content}>
        <p>
          {car.name} <b>{car.travel_time}</b>
        </p>
        {/* <span>{`${car.seats} seats / ${car.text}`}</span> */}
        <span>{`${car.seats} seats / ${car.seats} Luggages`}</span>
      </div>
      <div className={styles.car__price}>{`$${
        car.price ? (+car.price).toFixed(2) : "N/A"
      }`}</div>
    </div>
  );
};

export default CarRender;
