export interface LeftAreaProps {
  isBackButton?: boolean;
  onPressBackButton?: () => void;
}

export interface CenterAreaProps {
  textColor?: string;
  isCenterArea?: boolean;
  isLogoArea?: boolean;
  title?: string;
  placeHolderSearchText?: string;
  onChangeSearchText?: (value: string) => void;
  onSearchFocus?: () => void;
}

export interface RightAreaProps {
  rightIcon?: boolean;
  rightIconName?: string;
  rightIconColor?: string;
  Language?: boolean;
  onPressRightButton?: () => void;
}

export interface HeaderProps {
  key: string;
  name: string;
  params: LeftAreaProps & CenterAreaProps & RightAreaProps;
}

export interface SearchInputProps {
  placeholder?: string;
  onChangeSearchText: (value: string) => void;
  onFocus?: () => void;
}

export const languageOptions = [
  {label: '🇹🇷 TR', value: 'tr'},
  {label: '🇬🇧 EN', value: 'en'},
  {label: '🇪🇸 ES', value: 'es'},
];
