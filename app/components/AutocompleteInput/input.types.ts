import { InputHTMLAttributes } from "react";
import { TWSize } from "../components.types";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  className?: string;
  error?: string;
  touched?: boolean;
  wsize?: TWSize;
  onChoose?: (value: google.maps.places.AutocompletePrediction) => void;
}
