export interface SearchProps {
  placeholder?: string;
  list?: string[];
  onChoose?: (item: string) => void;
  className?: string;
  initSearch?: string;
}
