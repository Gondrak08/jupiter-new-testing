import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | Array<ReactNode>;
  className?: string;
  loading?: boolean;
}
