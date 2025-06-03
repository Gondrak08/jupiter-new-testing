export interface SelectItem {
  label: string;
  value?: string;
}

export interface SelectProps {
  list: SelectItem[];
  active?: SelectItem;
  setActive?: (value: SelectItem) => void;
  placeholder?: string;
  className?: string;
}
