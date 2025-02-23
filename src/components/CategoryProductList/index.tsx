import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import ProductList from '@components/ProductList';
import {Product} from '@utils/type';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackNavigatorParamList} from '@navigators/navigator.types';
import FilterScreen from '@screen/FilterScreen';
import {useTranslation} from 'react-i18next';
import {CategoryProductListChildrenProps} from './categortproductslist.type';
import {styles} from './categortproductslist.stye';

const CategoryProductList: React.FC = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const route =
    useRoute<RouteProp<StackNavigatorParamList, 'CategoryDetail'>>();
  const {products, title} = route?.params as CategoryProductListChildrenProps;
  const tt = t(title);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const handleApplyFilters = (filteredData: Product[]) => {
    setFilteredProducts(filteredData);
  };

  const handleOpenBottomSheet = useCallback(() => {
    navigation.navigate('BottomSheet', {
      modalProps: {
        children: (
          <FilterScreen
            products={products}
            onApplyFilters={handleApplyFilters}
          />
        ),
      },
    });
  }, [navigation, products]);

  useFocusEffect(
    useCallback(() => {
      navigation.setParams({
        title: tt,
        rightIconName: 'filter',
        isCenterArea: true,
        isBackButton: true,
        rightIcon: true,
        onPressRightButton: handleOpenBottomSheet,
      });
    }, [tt]),
  );

  useEffect(() => {
    setFilteredProducts([...products]);
  }, [products]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item?.id?.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <ProductList categorylist favorite products={[item]} />
          </View>
        )}
        numColumns={products?.length === 1 ? 1 : 2}
      />
    </View>
  );
};

export default CategoryProductList;
