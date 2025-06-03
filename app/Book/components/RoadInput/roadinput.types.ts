import { Form } from "../..";

export interface RoadInputProps {
  updateForm?: (data: Partial<Form>) => void;
  form: Form;
  disabled?: boolean;
  animate?: boolean;
}
