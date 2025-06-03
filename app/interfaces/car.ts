import { StaticImageData } from "next/image";

export interface Car {
  img: StaticImageData;
  name: string;
  travel_time: string;
  seats: number;
  text: string;
  price: string;
  cartype: CarType;
}

export type CarType = "eco_sd" | "eco_mv" | "eco_suv";

export interface CarQuote {
  price: string;
  travel_time: string;
}

export interface CarRequestBody {
  car_type: CarType;
  childseats: string;
  childseats_name: string;
  coupon_id: string;
  dest_type: string;
  email_address: string;
  email_alert: number;
  hourly_hours: string;
  hourly_service: string;
  instructions: string;
  passenger_name: string;
  pass_number: string;
  pet: string;
  pet_name: string;
  po_no: string;
  pri_code: string;
  pri_code_label: string;
  pri_tel: string;
  reservation: number;
  sec_code: string;
  sec_code_label: string;
  sec_tel: string;
  sms_alert: number;
  trip_type: string;
  voucher_no: string;
  date: string;
  date_hr: string;
  date_min: string;
  email: string;
  date_mer: string;
  dest_address: string;
  dest_address_id: string;
  pu_address: string;
  pu_address_id: string;
  meet_greet?: string;
  meet_greet_name?: string;
}
