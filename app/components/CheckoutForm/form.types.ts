import { Form } from "@/app/Book";
import { Dispatch, SetStateAction } from "react";

export interface CheckoutFormProps {
  onSuccess: (key: string) => void;
  getProfile: (values: Partial<Form>) => void;
  loading?: boolean;
  setLoading?: Dispatch<SetStateAction<boolean>>;
  onBack?: (paymentId?: string) => void;
}
