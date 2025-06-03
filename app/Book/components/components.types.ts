import { Dispatch, SetStateAction } from "react";
import { Form } from "..";

export interface StepProps {
  onSubmit?: (paymentId?: string) => void;
  onBack?:(paymentId?: string) => void;
  form: Form;
  updateForm: (data: Partial<Form>) => void;
  loading?: boolean;
  setLoading?: Dispatch<SetStateAction<boolean>>;
  getProfile: (values: Partial<Form>) => void;
}
