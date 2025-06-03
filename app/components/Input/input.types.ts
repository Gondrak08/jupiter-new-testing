import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";
import { TWSize } from "../components.types";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  className?: string;
  error?: string;
  touched?: boolean;
  wsize?: TWSize;
  onValueChange?: Dispatch<SetStateAction<string>>;
}
