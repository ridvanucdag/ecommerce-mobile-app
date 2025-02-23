import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import CustomHeader from '@components/CustomHeader';
import CategoryProductList from '@components/CategoryProductList';
import ModalLayer from '@components/CustomBottomSheet/BottomSheet';
import ProductDetailScreen from '@screen/ProductDetailScreen';
import MainScreen from '@screen/MainScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <CustomHeader />,
        }}
        initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CategoryDetail"
          component={CategoryProductList}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Detail"
          component={ProductDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomSheet"
          component={ModalLayer}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'none',
          }}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
