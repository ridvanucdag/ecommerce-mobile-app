import {BottomSheetProps} from '@gorhom/bottom-sheet';
import {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Product} from '@utils/type';

export type TabNavigatorParamList = {
  AnaSayfa: {title: string};
  Search: {title?: string; placeHolderSearchText?: string};
  Sepet: {title: string; rightIconName?: string};
  Favoriler: {title: string};
  Profil: {title: string};
};

export type StackNavigatorParamList = {
  Main: undefined;
  CategoryDetail: {products: Product[]; title?: string};
  BottomSheet: {modalProps: BottomSheetProp};
  Detail: {product: Product};
  Filter: {
    products: Product[];
    onApplyFilters: (filteredProducts: Product[]) => void;
  };
  Tab: NavigatorScreenParams<TabNavigatorParamList>;
};

export type BottomSheetProp = Omit<BottomSheetProps, 'children'> & {
  children?: React.ReactNode;
};

export type RootStackScreenProps<T extends keyof StackNavigatorParamList> =
  NativeStackScreenProps<StackNavigatorParamList, T>;
