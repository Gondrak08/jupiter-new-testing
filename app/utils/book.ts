import moment from "moment";
import { CarRequestBody, CarType } from "../interfaces/car";
import { Form } from "../Book";

export const getBookingRequestBody = (
  form: Form,
  type: CarType = "eco_sd"
): CarRequestBody => {
  const date = moment(form.date ?? 0);
  return {
    car_type: type,
    childseats: form.carseat?.value ?? "0",
    childseats_name: form.carseat?.label ?? "-select childseat-",
    coupon_id: "",
    dest_type: "dat_sa",
    email_address: form.email ?? "",
    email: "", // not used?
    email_alert: 1,
    hourly_hours: "0",
    hourly_service: "0",
    instructions: "",
    passenger_name: form.name ?? " ",
    pass_number: form.pass_number?.value ?? "1",
    pet: form.pet?.value ?? "0",
    pet_name: form.pet?.label ?? "-allow pets-",
    po_no: "",
    pri_code: "225",
    pri_code_label: "+1",
    pri_tel: form.phone ?? "1111111111",
    reservation: date && date.unix() !== 0 ? 1 : 0,
    sec_code: "225",
    sec_code_label: "+1",
    sec_tel: "",
    sms_alert: 1,
    trip_type: "tt_o",
    voucher_no: "",
    date: date.format("YYYY-MM-DD"),
    date_hr: (form.hour as string) ?? "",
    date_min: (form.minute as string) ?? "",
    date_mer: form.dayTime ?? "",
    dest_address: form.to?.description ?? "",
    dest_address_id: form.to?.place_id ?? "",
    pu_address: form.from?.description ?? "",
    pu_address_id: form.from?.place_id ?? "",
    ...(form.meet?.value === "1" && {
      meet_greet: form.meet?.value ?? "0",
      meet_greet_name: form.meet?.label ?? "No",
    }),
  };
};
