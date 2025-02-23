import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {languageOptions, RightAreaProps} from './header.type';
import Icon from 'react-native-vector-icons/Ionicons';
import Dropdown from '@components/Dropdown';
import i18next from 'i18next';
import useLanguage from '@hooks/useLocation';
import { setLanguage } from '@redux/slices/languageSlice';
import { useDispatch } from 'react-redux';

const RightArea = ({
  rightIconName,
  rightIconColor,
  Language,
  onPressRightButton,
}: RightAreaProps): JSX.Element => {
  const dispatch = useDispatch();
  const {selectedLanguage, changeLanguage} = useLanguage();

  const changeLanguages = (lang: string) => {
    i18next.changeLanguage(lang);
    changeLanguage(lang);
    dispatch(setLanguage(lang));
  };

  return (
    <View>
      {rightIconName && (
        <TouchableOpacity onPress={onPressRightButton}>
          <Icon
            name={rightIconName}
            size={25}
            color={rightIconColor ?? 'black'}
          />
        </TouchableOpacity>
      )}
      {Language && (
        <Dropdown
          options={languageOptions}
          defaultSelected={selectedLanguage}
          onSelect={changeLanguages}
        />
      )}
    </View>
  );
};

export default RightArea;
