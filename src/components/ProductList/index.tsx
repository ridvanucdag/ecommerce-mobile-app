import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {styles} from './product.style';
import {toggleFavourite} from '@redux/slices/productSlice';
import {Product} from '@utils/type';
import {
  addToCart,
} from '@redux/slices/basketSlice';
import {formatCurrency} from '@utils/helpers';
import {ProductListProps} from './product.type';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigatorParamList} from '@navigators/navigator.types';
import Image from '@components/Image';
import { useTranslation } from 'react-i18next';

const ProductList: React.FC<ProductListProps> = ({
  title,
  products,
  favorite,
  categorylist,
}) => {
  const dispatch = useDispatch();
      const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<StackNavigatorParamList>>();

  const handleProductPress = (item: Product) => {
    navigation.navigate('Detail', {
      product:item,
    });
  };

  const handleToggleFavourite = (id: number) => {
    dispatch(toggleFavourite(id));
  };

  const [cartItems, setCartItems] = useState<number[]>([]);

  const handleAddToCart = (item: Product) => {
    dispatch(addToCart({...item}));
    setCartItems(
      prev => (prev.includes(item?.id) ? prev : [...prev, item?.id]),
    );
    Alert.alert(`1 ${item?.title} sepete eklendi!`);
  };

  const handleNavigateToCategory = () => {
    navigation.navigate('CategoryDetail', {
      products,
      title,
    });
  };

  const renderItem = ({item}: {item: Product}) => {

    return (
      <TouchableOpacity onPress={() => handleProductPress(item)}>
        <View style={[styles.itemContainer, favorite && styles.favourite]}>
          <Image uri={item?.imagelink} containerStyle={styles.image} />
          <Text style={styles.name}>{t(item.title)}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="gold" />
            <Text style={styles.rating}> {item?.average_rating}</Text>
          </View>
          <View style={styles.priceContainer}>
            <View>
              <View style={styles.discountContainer}>
                <Text style={styles.discountedPrice}>
                  {formatCurrency(item?.price)}
                </Text>
                <Text style={styles.discountPercentage}>
                  %
                  {Math.round(
                    ((item?.price - item?.discounted_price) / item?.price) *
                      100,
                  )}
                </Text>
              </View>
              <Text style={styles.price}>
                {formatCurrency(item?.discounted_price)}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => handleAddToCart(item)}>
              <Icon
                name="cart"
                size={20}
                color={cartItems.includes(item?.id) ? 'green' : 'black'}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.favouriteIcon}
            onPress={() => handleToggleFavourite(item?.id)}>
            <Icon
              name={item?.favourite ? 'heart' : 'heart-outline'}
              style={styles.iconHeart}
              size={20}
              color={item?.favourite ? 'red' : 'black'}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {!categorylist && (
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{t(title || '')}</Text>
          <TouchableOpacity onPress={handleNavigateToCategory}>
            <Text style={styles.allText}>{t('general.all')}</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item?.id?.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        style={{paddingLeft: 4}}
      />
    </View>
  );
};

export default ProductList;
