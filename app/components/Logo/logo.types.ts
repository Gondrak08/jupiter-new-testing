import { TColor, THSize } from "../components.types";

export interface LogoProps {
  color?: TColor;
  size?: THSize;
  className?: string;
  onClick?: () => void;
}
