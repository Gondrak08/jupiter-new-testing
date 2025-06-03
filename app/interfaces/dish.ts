import { StaticImageData } from "next/image";

export interface Dish {
  id: number;
  name: string;
  img: StaticImageData;
  address: string;
  code: string;
  country: string;
  new: boolean;
}
