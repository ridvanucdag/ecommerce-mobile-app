import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import {Product} from '@utils/type';
import {addToCart} from '@redux/slices/basketSlice';
import {toggleFavourite} from '@redux/slices/productSlice';
import Image from '@components/Image';
import {StackNavigatorParamList} from '@navigators/navigator.types';
import CustomerReviews from '@components/CustomerReviews';
import Button from '@components/Button';
import {RootState} from '@redux/store';
import {styles} from './productdetail.style';
import {formatCurrency} from '@utils/helpers';

const ProductDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<StackNavigatorParamList, 'Detail'>>();
  const {product} = route?.params as {product: Product};
  const {t} = useTranslation();
  const products = useSelector((state: RootState) => state.product.products);
  const [quantity, setQuantity] = useState<number>(1);
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);
  const [price, setPrice] = useState<number>(product?.discounted_price || 0);
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const selectedPrice = product?.discounted_price || 0;
    setPrice(selectedPrice);
  }, [product?.discounted_price]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product?.id,
        quantity,
        title: product?.title,
        description: product?.description,
        imagelink: product?.imagelink,
        category: product?.category,
        price: product?.price,
        discounted_price: product?.discounted_price,
        average_rating: product?.average_rating,
        ratings_count: product?.ratings_count,
        favourite: product?.favourite,
        index: product?.index,
      }),
    );
    Alert.alert(`${quantity} ${product.title} sepete eklendi!`);
  };

  const changeQuantity = (change: number) => {
    setQuantity(prevQuantity => Math.max(prevQuantity + change, 1));
  };

  useEffect(() => {
    const currentProduct = products?.find(p => p?.id === product?.id);
    if (currentProduct) {
      setIsFavourite(currentProduct?.favourite || false);
    }
  }, [products, product?.id]);

  const handleToggleFavourite = (id: number) => {
    dispatch(toggleFavourite(id));
    setIsFavourite(prevState => !prevState);
  };

  const fvrIcon = isFavourite ? 'heart' : 'heart-outline';
  const fvrColor = isFavourite ? 'red' : 'black';

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => handleToggleFavourite(product?.id)}>
          <Icon name={fvrIcon} size={30} color={fvrColor} />
        </TouchableOpacity>
        <Image
          uri={product?.imagelink}
          containerStyle={styles.image}
          resizeMode="stretch"
        />
      </View>
      <FlatList
        data={[product]}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.scrollContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item?.title}</Text>
              <View style={styles.ratingContainer}>
                <Icon name="star" size={20} color="gold" />
                <Text style={styles.rating}>
                  {item?.average_rating?.toFixed(1)}
                </Text>
                <Text style={styles.point}>(21)</Text>
              </View>
            </View>
            <View style={styles.underline} />
            <Text style={styles.titleDescription}>
              {t('productDetails.description')}
            </Text>
            <Text
              style={styles.description}
              numberOfLines={showFullDescription ? undefined : 3}>
              {item?.description}
            </Text>
            <TouchableOpacity
              onPress={() => setShowFullDescription(!showFullDescription)}>
              <Text style={styles.showMore}>
                {showFullDescription
                  ? t('productDetails.hide')
                  : t('productDetails.showAll')}
              </Text>
            </TouchableOpacity>
            <View style={styles.customerReviews}>
              <CustomerReviews />
            </View>
          </View>
        )}
      />
      <View style={styles.quantityContainer}>
        <View style={styles.leftSide}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{formatCurrency(price * quantity)}</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => changeQuantity(-1)}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => changeQuantity(1)}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.addToCartContainer}>
          <Button
            style={styles.addToCartButton}
            title={t('productDetails.addtoCart')}
            onPress={handleAddToCart}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
