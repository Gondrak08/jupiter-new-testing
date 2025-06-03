import { minivan, sedan, suv } from "../assets/images";
import { Car } from "../interfaces/car";

export const cars: Car[] = [
  {
    img: sedan,
    name: "Sedan",
    travel_time: "10 mins",
    seats: 3,
    text: "Affordable - Expires soon",
    price: "",
    cartype: "eco_sd",
  },
  {
    img: minivan,
    name: "Minivan",
    travel_time: "37 mins",
    seats: 6,
    text: "Comfort - Expires soon",
    price: "",
    cartype: "eco_mv",
  },
  {
    img: suv,
    name: "SUV",
    travel_time: "37 mins",
    seats: 5,
    text: "More space",
    price: "",
    cartype: "eco_suv",
  },
];

export const passList = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
];
export const petList = [
  { label: "No", value: "0" },
  {
    label: "Yes(+$10)",
    value: "1",
  },
];
export const carseatList = [
  { label: "Booster seat", value: "1I" },
  { label: "Rear facing", value: "1T" },
  { label: "Front facing", value: "1B" },
];
export const meetList = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
];
