import type {NavigationProp} from '@react-navigation/native';
import {HeaderProps} from '@components/CustomHeader/header.type';
import {StackNavigatorParamList} from '@navigators/navigator.types';

declare module '@react-navigation/native' {
  interface RootParamList extends StackNavigatorParamList {}
  export function useNavigation<
    T extends NavigationProp<HeaderProps & RootParamList>,
  >(): T;
}
