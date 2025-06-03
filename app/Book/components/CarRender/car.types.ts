import { Car } from "@/app/interfaces/car";

export interface CarProps {
  car: Car;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}
