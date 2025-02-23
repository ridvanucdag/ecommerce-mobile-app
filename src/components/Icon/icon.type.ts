import {ViewStyle} from 'react-native';

export interface IconProps {
 name: string;
  color?: string;
  style?: ViewStyle;
  size?: {width?: number; height?: number};
  onPress?: () => void;
}