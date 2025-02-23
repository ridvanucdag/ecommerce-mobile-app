import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './tabbar.style';
import {RootState} from '@redux/store';
import {useSelector} from 'react-redux';
import {RouteParams} from './tabbar.type';
import {useTranslation} from 'react-i18next';

const CustomTabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  const cartItems = useSelector((state: RootState) => state?.cart?.items);
  const selectedLanguage = useSelector((state: RootState) => state.language.selectedLanguage);

  const {t} = useTranslation();
  const handleCartPress = () => {
    navigation.navigate('basket.title');
  };

  const isCartFocused = state?.routes[state?.index]?.name === 'basket.title';
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabBar}>
        {state?.routes?.map((route, index) => {
          if (route?.name === 'basket.title' || route?.name === 'Sepets') {
            return <View key={route.key} style={styles.tabItem} />;
          }

          const {tabBarIconName} = route?.params as RouteParams;
          const isFocused = state?.index === index;

          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };

          const textStyle = {color: isFocused ? '#007AFF' : 'gray'};
          return (
            <TouchableOpacity
              key={route?.key}
              onPress={onPress}
              style={styles.tabItem}>
              <Icon
                name={isFocused ? tabBarIconName : `${tabBarIconName}-outline`}
                size={28}
                color={textStyle.color}
              />
              <Text style={textStyle}>{t(route.name)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        onPress={handleCartPress}
        style={[
          styles.backCircle,
          (selectedLanguage === 'en' || selectedLanguage === 'es') && styles.backCircleLang,
        ]}
        >
        <View
          style={[
            styles.whiteCircle,
            isCartFocused && styles.whiteCircleBorder,
          ]}>
          <View
            style={[styles.redCircle, isCartFocused && styles.redCircleBorder]}>
            <Icon name="cart" size={25} color="white" />
          </View>
        </View>
        {cartItems?.length > 0 && (
          <View style={styles.cartLengthContainer}>
            <Text style={styles.cartLengthText}>{cartItems?.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabBar;
