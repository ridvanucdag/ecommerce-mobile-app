import React from 'react';
import {View, Text} from 'react-native';
import {CenterAreaProps} from './header.type';

import Icon from '../Icon/icon';
import SearchInput from './SearchInput';
import {styles} from './header.style';

const CenterArea = ({
  title,
  isLogoArea,
  placeHolderSearchText,
  onChangeSearchText,
  onSearchFocus,
}: CenterAreaProps): JSX.Element => {
  return (
    <View>
      {title && <Text style={styles.textCenter}>{title}</Text>}
      {isLogoArea && <Icon name="logo" />}
      {placeHolderSearchText && onChangeSearchText && (
        <View style={styles.rowFlex}>
          {onChangeSearchText && (
            <SearchInput
              onChangeSearchText={onChangeSearchText}
              placeholder={placeHolderSearchText}
              onFocus={onSearchFocus}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default CenterArea;
