import React from "react";

import styles from "./styles.module.scss";
import { Button } from "@/app/components";
import RoadInput from "../RoadInput";
import { StepProps } from "../components.types";

const Step1 = ({
  onSubmit = () => {},
  form,
  updateForm,
  loading,
}: StepProps) => {
  return (
    <div className={styles.step}>
      <h3>
        Book with confidence <br /> No Cancelation fee <br />{" "}
        <b>No surge fares</b>
      </h3>

      <RoadInput form={form} updateForm={updateForm} />

      <div className={styles.step__btns}>
        <Button
          className={styles["step__btns-item"]}
          color="ghost"
          onClick={() => {
            updateForm({
              isNow: true,
              date: undefined,
              hour: undefined,
              minute: undefined,
              dayTime: undefined,
            });
          }}
        >
          Now
        </Button>
        <Button
          className={styles["step__btns-item"]}
          color="ghost"
          onClick={() => {
            updateForm({
              isNow: false,
            });
            const btn = document.getElementById("calendar-btn");
            btn?.click();
          }}
        >
          Later
        </Button>
      </div>

      <Button
        className={styles.step__btn}
        disabled={(!form.date && !form.isNow) || !form.from || !form.to}
        loading={loading}
        onClick={() => onSubmit()}
      >
        Next
      </Button>
    </div>
  );
};

export default Step1;
