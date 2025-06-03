"use client";
import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { CheckoutForm } from "@/app/components";
import RoadInput from "../RoadInput";
import { StepProps } from "../components.types";
import CarRender from "../CarRender";
import classNames from "classnames";
import { cars } from "@/app/constants/cars";
import { Car } from "@/app/interfaces/car";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// const STRIPE_PUBLISHABLE_KEY = "STRIPE_PUBLISHABLE_KEY";
// const STRIPE_CLIENT_SECRET = "STRIPE_CLIENT_SECRET";
const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const STRIPE_CLIENT_SECRET = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;

const Step3 = ({
  onSubmit = () => {},
  form,
  updateForm,
  getProfile,
  setLoading,
  onBack = () => {},
  loading,
}: StepProps) => {
  const [secretKey, setSecretKey] = useState<string>();
  const [publicKey, setPublicKey] = useState<string>();

  useEffect(() => {
    // const sk = STRIPE_CLIENT_SECRET
    //   ? (document.getElementById(STRIPE_CLIENT_SECRET) as HTMLInputElement)
    //       ?.value
    //   : undefined;
    // const pk = STRIPE_PUBLISHABLE_KEY
    //   ? (document.getElementById(STRIPE_PUBLISHABLE_KEY) as HTMLInputElement)
    //       ?.value
    //   : undefined;
    const sk = STRIPE_PUBLISHABLE_KEY;
    const pk = STRIPE_CLIENT_SECRET;

    setPublicKey(pk);
    setSecretKey(sk);
  }, []);
  const options = {
    clientSecret: secretKey,
  };

  return publicKey && secretKey ? (
    <Elements stripe={loadStripe(publicKey)} options={options}>
      <div className={styles.step}>
        <RoadInput form={form} updateForm={updateForm} disabled />
        <CarRender
          className={classNames(styles.step__car, "showOn")}
          car={
            {
              ...cars.find((el) => el.cartype === form.car),
              ...form.cars?.[form.car ?? "eco_sd"],
            } as Car
          }
        />
        <div className={classNames(styles.step__title, "showOn")}>
          One more step!
        </div>

        <div className={classNames(styles.step__inputs)}>
          <CheckoutForm
            onSuccess={(paymentId) => {
              onSubmit(paymentId);
            }}
            getProfile={getProfile}
            loading={loading}
            setLoading={setLoading}
            onBack={onBack}
          />
        </div>
      </div>
    </Elements>
  ) : null;
};

export default Step3;
