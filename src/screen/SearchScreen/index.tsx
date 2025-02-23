import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {styles} from './search.style';
import ProductList from '@components/ProductList';
import debounce from 'lodash/debounce';
import { useTranslation } from 'react-i18next';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
    const {t} = useTranslation();
  const [searchText, setSearchText] = useState('');
  const allProducts = useSelector((state: RootState) => state.product.products);

  const debouncedSearch = useMemo(
    () => debounce((text: string) => setSearchText(text), 300),
    [],
  );

  useFocusEffect(
    useCallback(() => {
      navigation.setParams({
        placeHolderSearchText: t('search.placeholder'),
        onChangeSearchText: debouncedSearch,
        onSearchFocus: () => {},
      });
    }, [navigation, debouncedSearch]),
  );

  const uniqueCategories = useMemo(() => {
    if (!allProducts || allProducts?.length === 0) return [];
    const filteredCategories = allProducts?.filter(
      p =>
        p?.title?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
        p?.category?.toLowerCase()?.includes(searchText?.toLowerCase()),
    );
    return [...new Set(filteredCategories?.map(p => p?.category))];
  }, [allProducts, searchText]);

  const filteredProducts = useMemo(() => {
    if (!allProducts || allProducts?.length === 0 || !uniqueCategories?.length)
      return [];
    return allProducts?.filter(
      p =>
        uniqueCategories?.includes(p?.category) &&
        (searchText === '' ||
          p?.title?.toLowerCase()?.includes(searchText?.toLowerCase())),
    );
  }, [allProducts, uniqueCategories, searchText]);

  const renderItem = ({item}: {item: string}) => {
    const categoryProducts = filteredProducts?.filter(
      p => p?.category === item,
    );
    if (!categoryProducts?.length) return null;
    return (
      <View key={item} style={styles.categoryContainer}>
        <ProductList title={item} products={categoryProducts} />
      </View>
    );
  };

  if (allProducts.length === 0) {
    return <Text>{t('search.loading')}</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      {searchText && (
        <View style={styles.header}>
          <Text style={styles.title}>{t('search.title')}: {searchText}</Text>
          <Text style={styles.productCount}>
            {filteredProducts.length} {t('search.product')}
          </Text>
        </View>
      )}

      {uniqueCategories?.length > 0 ? (
        <FlatList
          data={uniqueCategories}
          renderItem={renderItem}
          keyExtractor={item => item}
          ListEmptyComponent={<Text>{t('search.empty')}</Text>}
        />
      ) : (
        <Text>{t('search.empty2')}</Text>
      )}
    </View>
  );
};

export default SearchScreen;
