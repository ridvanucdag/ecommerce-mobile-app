import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screen/HomeScreen';
import FavoriteScreen from '@screen/FavoriteScreen';
import SearchScreen from '@screen/SearchScreen';
import ProfileScreen from '@screen/ProfileScreen';
import BasketScreen from '@screen/BasketScreen';
import CustomTabBar from '@components/CustomTabBar';
import CustomHeader from '@components/CustomHeader';
import { useTranslation } from 'react-i18next';


const Tab = createBottomTabNavigator();
const TabNavigator = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        header: () => <CustomHeader />,}}
    >
      <Tab.Screen
        name="home.title"
        component={HomeScreen}
        initialParams={{
          title:  t('home.title'),
          tabBarIconName: 'home',
          rightIconName: 'notifications',
          rightIcon:true,
          isCenterArea: true,
        }}

      />
      <Tab.Screen
        name="search.title"
        component={SearchScreen}
        initialParams={{
          placeHolderSearchText: 'Arama Yap',
          tabBarIconName: 'search',
          isCenterArea: true,
          isBackButton: true,
        }}

      />
      <Tab.Screen
        name="basket.title"
        component={BasketScreen}
        options={{
          tabBarButton: () => null,
        }}
        initialParams={{
          title:  t('basket.title'),
          rightIconName: 'trash',
          rightIcon:true,
          isCenterArea: true,
          isBackButton: true,
        }}

      />
            <Tab.Screen
        name="Sepets"
        component={BasketScreen}
        options={{
          tabBarButton: () => null,
        }}
        initialParams={{
          title: 'Sepets',
          rightIconName: 'cart',
          rightIcon:true,
          isCenterArea: true,
          isBackButton: true,
        }}

      />
      <Tab.Screen
        name="favorite.title"
        component={FavoriteScreen}
        initialParams={{
          title: t('favorite.title'),
          tabBarIconName: 'heart',
          rightIconName:'trash',
          rightIcon:true,
          isCenterArea: true,
          isBackButton: true,
        }}

      />
      <Tab.Screen
        name="profile.title"
        component={ProfileScreen}
        initialParams={{
          title: t('profile.title'),
          tabBarIconName: 'person',
          isCenterArea: true,
          isBackButton: true,
          rightIcon:true,
          Language:true,
        }}

      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
