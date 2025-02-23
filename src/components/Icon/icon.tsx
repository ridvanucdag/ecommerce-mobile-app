import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconProps} from './icon.type';

const Icon = ({
  name,
  color,
  style = {},
  size = {},
  onPress,
}: IconProps): JSX.Element => (
  <TouchableOpacity
    disabled={!onPress}
    onPress={onPress}
    style={style}>
    <Icon name={name} size={size} color={color} />
  </TouchableOpacity>
);

export default Icon;
