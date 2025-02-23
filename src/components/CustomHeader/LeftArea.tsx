import React from 'react';
import {LeftAreaProps} from './header.type';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LeftAreas = ({onPressBackButton}: LeftAreaProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPressBackButton}>
      <Icon name="arrow-back" size={25} color="black" />
    </TouchableOpacity>
  );
};

export default LeftAreas;
