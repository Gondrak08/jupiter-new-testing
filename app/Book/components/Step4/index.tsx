import React from "react";
import styles from "./styles.module.scss";
import { Button } from "@/app/components";
import { StepProps } from "../components.types";
import classNames from "classnames";

const Step4 = ({ onSubmit = () => {}, onBack = () => {} }: StepProps) => {
  return (
    <div className={styles.step}>
      <div className={classNames(styles.step__title, "showOn")}>
        Your reservation has been successfully sent. If you have any questions
        please contact us at 718-499-2222
      </div>

      <div className={styles.step__actions}>
        <button
          className={classNames(styles.step__btn, styles.step__back, "showOn")}
          onClick={() => onBack()}
        >
          <div className={classNames(styles.step__backButton)}>←</div>
        </button>
        <Button
          className={classNames(styles.step__btn, "showOn")}
          onClick={() => onSubmit()}
          loading={false}
          disabled={false}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default Step4;
