import { StyleProp, ViewStyle } from "react-native";
import { ImageStyle as FastImageStyle, ResizeMode } from 'react-native-fast-image';

export interface ImageProps {
    uri: string | number;
    containerStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<FastImageStyle>;
    resizeMode?: ResizeMode;
  }