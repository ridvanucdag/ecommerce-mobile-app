import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { CheckBoxProps } from './checkBox.type';
import { styles } from './checkBox.style';


const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, onValueChange }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onValueChange(!checked)}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <View style={styles.innerCheckbox} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
