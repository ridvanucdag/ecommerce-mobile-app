import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './dropdown.style';
import { DropdownProps } from './dropdown.type';

const Dropdown = ({
  options,
  defaultSelected,
  onSelect,
}: DropdownProps) => {
  const [selected, setSelected] = useState<string>();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setSelected(defaultSelected);
  }, [defaultSelected]);

  const handleSelect = (value: string) => {
    setSelected(value);
    setVisible(false);
    onSelect(value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.dropdownButton}>
        <View style={styles.selectedTextContainer}>
          <Text style={styles.selectedText}>
            {options?.find(ops => ops?.value === selected)?.label || 'Seç'}
          </Text>
        </View>
      </TouchableOpacity>

      {visible && (
        <View style={styles.dropdownMenu}>
          {options?.map(ops => (
            <TouchableOpacity
              key={ops.value}
              onPress={() => handleSelect(ops.value)}
              style={styles.dropdownItem}>
              <View style={styles.dropdownItemContent}>
                <Text>{ops.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
