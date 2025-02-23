import React, {memo} from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationProp, useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {HeaderProps} from './header.type';
import {styles} from './header.style';
import RightArea from './RightArea';
import CenterArea from './CenterArea';
import LeftArea from './LeftArea';
import {TabNavigatorParamList} from '@navigators/navigator.types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomHeader = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<TabNavigatorParamList>>();
  const route: HeaderProps = useRoute();
  const insets = useSafeAreaInsets();

  const {
    textColor,
    isCenterArea,
    isBackButton,
    isLogoArea,
    title,
    placeHolderSearchText,
    onSearchFocus,
    onChangeSearchText,
    rightIcon,
    rightIconName,
    rightIconColor,
    Language,
    onPressRightButton,
  } = route?.params || {};
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={[styles.headerContainer, {marginTop: insets.top}]}>
      <View style={styles.container}>
        <View style={styles.rowFlex}>
          {isBackButton && ( <LeftArea onPressBackButton={goBack} /> )}
          {isCenterArea && (
            <CenterArea
              textColor={textColor}
              title={title}
              isLogoArea={isLogoArea}
              placeHolderSearchText={placeHolderSearchText}
              onChangeSearchText={onChangeSearchText}
              onSearchFocus={onSearchFocus}
            />
          )}
          {rightIcon && (
            <RightArea
              rightIconName={rightIconName}
              Language={Language}
              rightIconColor={rightIconColor}
              onPressRightButton={onPressRightButton}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(CustomHeader);
