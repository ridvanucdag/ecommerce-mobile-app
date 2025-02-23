import React, {useCallback} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {RootState} from '@redux/store';
import {clearCart, updateQuantity} from '@redux/slices/basketSlice';
import {Product} from '@utils/type';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Image from '@components/Image';
import {formatCurrency} from '@utils/helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '@components/Button';
import ProductList from '@components/ProductList';
import { styles } from './basket.style';

const BasketScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state?.product?.products);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {t} = useTranslation();
  const handleIncrease = (id: number) => {
    dispatch(updateQuantity({id, quantity: 1}));
  };

  const handleDecrease = (id: number) => {
    dispatch(updateQuantity({id, quantity: -1}));
  };

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useFocusEffect(
    useCallback(() => {
      navigation.setParams({
        onPressRightButton: handleClearCart,
      });
    }, [navigation, handleClearCart]),
  );

  const handleCompleteOrder = () => {
    Alert.alert('Sipariş Tamamlandı!');
  };

  const getRandomProducts = (products: Product[], count: number) => {
    const shuffled = [...products]?.sort(() => Math.random() - 0.5);
    return shuffled?.slice(0, count);
  };

  const totalPrice = cartItems?.reduce((total, item) => {
    const itemTotal = item?.quantity * item?.price || 0;
    return total + itemTotal;
  }, 0);

  const totalDiscountPrice = cartItems?.reduce((total, item) => {
    const itemTotal = item?.quantity * item?.discounted_price || 0;
    return total + itemTotal;
  }, 0);

  const finalTotal = totalPrice - totalDiscountPrice;

  const renderItem = ({item}: {item: Product}) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {item?.imagelink && (
          <Image
            uri={item?.imagelink}
            containerStyle={styles.image}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.itemName} numberOfLines={1} ellipsizeMode="tail">{item?.title}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={13} color="gold" />
          <Text style={styles.rating}> {item?.average_rating}</Text>
        </View>
        <Text style={styles.itemDescription} numberOfLines={2} ellipsizeMode="tail">{item?.description}</Text>
        <View style={styles.priceContainer}>
          <View>
            <View style={styles.discountContainer}>
              <Text style={styles.discountedPrice1}>
                {formatCurrency(item?.discounted_price)}
              </Text>
              <Text style={styles.discountedPrice}>
                {formatCurrency(item?.price)}
              </Text>
              <Text style={styles.discountPercentage}>
                %{' '}
                {Math.round(
                  ((item?.price - item?.discounted_price) / item?.price) * 100,
                )}
              </Text>
            </View>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleDecrease(item?.id)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item?.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleIncrease(item?.id)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.basketContainer}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyMessage}>{t('basket.emptyMessage')}</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item?.id?.toString()}
            ListFooterComponent={
              <>
                <View style={styles.underlineSmall} />
                <View style={styles.product}>
                  <ProductList
                    title={t('basket.recommenderTitle')}
                    products={getRandomProducts(products, 10)}
                  />
                </View>
                <View style={styles.underlineSmall} />

                <View style={styles.summaryContainer}>
                  <Text style={styles.summaryTitle}>
                    {t('basket.cartSummary')}
                  </Text>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryText}>
                      {t('basket.cartFee')}
                    </Text>
                    <Text style={styles.summaryAmount}>
                      {formatCurrency(totalPrice)}
                    </Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={[styles.summaryText, styles.discountText]}>
                      {t('basket.discount')}
                    </Text>
                    <Text style={[styles.summaryAmount, styles.discountAmount]}>
                      {formatCurrency(finalTotal)}
                    </Text>
                  </View>
                  <View style={styles.underlineSmall} />
                  <View style={styles.summaryRowTotal}>
                    <Text style={styles.summaryTotal}>
                      {t('basket.totalFee')}
                    </Text>
                    <Text style={styles.summaryTotalAmount}>
                      {formatCurrency(totalDiscountPrice)}
                    </Text>
                  </View>
                </View>
                <View style={styles.underlineSmall} />
                <View style={styles.product}>
                  <Button
                    title={t('basket.completeOrder')}
                    onPress={handleCompleteOrder}
                  />
                </View>
              </>
            }
            contentContainerStyle={
              cartItems?.length === 0 ? styles.emptyContent : undefined
            }
          />
        </>
      )}
    </View>
  );
};

export default BasketScreen;
