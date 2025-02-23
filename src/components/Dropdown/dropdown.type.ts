export interface DropdownProps {
    options: { label: string; value: string }[];
    defaultSelected?: string;
    onSelect: (value: string) => void;
  }
  