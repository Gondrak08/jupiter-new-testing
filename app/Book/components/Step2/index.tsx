import React from "react";

import styles from "./styles.module.scss";
import { Button, Select } from "@/app/components";
import RoadInput from "../RoadInput";
import { StepProps } from "../components.types";
import CarRender from "../CarRender";
import {
  cars,
  carseatList,
  meetList,
  passList,
  petList,
} from "@/app/constants/cars";
import classNames from "classnames";

const Step2 = ({
  onSubmit = () => {},
  onBack = () => {},
  form,
  updateForm,
  loading,
}: StepProps) => {
  return (
    <div className={styles.step}>
      <RoadInput form={form} disabled animate />
      <div className={classNames(styles.step__title, "showOn")}>
        Choose a car
      </div>
      <div className={classNames(styles.step__cars, "showOn")}>
        {cars.map((el) => (
          <CarRender
            car={{ ...el, ...form.cars?.[el.cartype] }}
            active={el.cartype === form.car}
            key={el.name}
            onClick={() => {
              updateForm({
                car: el.cartype,
              });
            }}
          />
        ))}
      </div>
      <div className={classNames(styles.step__selects, "showOn")}>
        <Select
          className={classNames(styles["step__selects-item"], styles.sm)}
          list={passList}
          active={form.pass_number}
          placeholder="Pass"
          setActive={(value) => updateForm({ pass_number: value })}
        />
        <Select
          className={classNames(styles["step__selects-item"])}
          list={meetList}
          active={form.meet}
          placeholder="Luggage"
          setActive={(value) => updateForm({ meet: value })}
        />
        <Select
          className={classNames(styles["step__selects-item"], styles.sm)}
          list={petList}
          active={form.pet}
          placeholder="Pet"
          setActive={(value) => updateForm({ pet: value })}
        />
        <Select
          className={classNames(styles["step__selects-item"], styles.md)}
          list={carseatList}
          active={form.carseat}
          placeholder="Carseat"
          setActive={(value) => updateForm({ carseat: value })}
        />
      </div>
      <div className={styles.step__actions}>
        {/* Back Button */}
        <button
          className={classNames(styles.step__btn, styles.step__back, "showOn")}
          onClick={() => onBack()}
        >
          <div className={classNames(styles.step__backButton)}>←</div>
        </button>
        <Button
          className={classNames(styles.step__btn, "showOn")}
          onClick={() => onSubmit()}
          loading={loading}
          disabled={
            !form.car ||
            !form.pass_number ||
            !form.pet ||
            !form.carseat ||
            !form.meet
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;
