/* eslint-disable */
"use client";
import { useController, type UseControllerProps } from "react-hook-form";
import Input from ".";
import { InputProps } from "./input.types";
import { JSX } from "react";

const InputForm = ({
  control,
  name,
  rules,
  ...rest
}: UseControllerProps<any> & InputProps): JSX.Element => {
  const { field, fieldState } = useController<any>({
    control,
    name,
    rules,
  });

  return (
    <Input
      onChange={(e) => {
        field.onChange(e.target.value);
      }}
      onBlur={field.onBlur}
      error={fieldState.error?.message}
      touched={fieldState.isTouched}
      value={field.value}
      {...rest}
    />
  );
};

export default InputForm;
