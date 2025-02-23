import React from 'react';
import FastImage, { ImageStyle as FastImageStyle } from 'react-native-fast-image';
import { View} from 'react-native';
import { ImageProps } from './image.type';
import { styles } from './image.style';

const Image: React.FC<ImageProps> = ({
  uri,
  containerStyle,
  imageStyle,
  resizeMode = FastImage.resizeMode.cover,
}) => {
  const source = typeof uri === 'string' ? { uri } : uri;

  return (
    <View style={[styles.container, containerStyle]}>
      <FastImage
        source={source}
        style={[styles.image, imageStyle as FastImageStyle]}
        resizeMode={resizeMode}
      />
    </View>
  );
};

export default Image;
