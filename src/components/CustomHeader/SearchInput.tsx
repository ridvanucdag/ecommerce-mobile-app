import React, {useState} from 'react';
import {TextInput, Keyboard, View, TouchableOpacity} from 'react-native';
import {SearchInputProps} from './header.type';
import {styles} from './header.style';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = ({
  placeholder = '',
  onChangeSearchText,
  onFocus,
}: SearchInputProps): JSX.Element => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const onChangeText = (searchText: string): void => {
    setValue(searchText);
    onChangeSearchText(searchText);
  };

  const clearInput = (): void => {
    setValue('');
    onChangeSearchText('');
  };

  return (
    <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
      <Icon name="search" size={20} color="#888" style={styles.leftIcon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#666"
        style={styles.searchInput}
        onFocus={() => {
          setIsFocused(true);
          onFocus?.();
        }}
        onBlur={() => setIsFocused(false)}
        keyboardType="default"
        returnKeyType="search"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        blurOnSubmit={true}
        autoFocus
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      {value?.length > 0 && (
        <TouchableOpacity onPress={clearInput}>
          <Icon name="close-circle" size={20} color="#888" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
