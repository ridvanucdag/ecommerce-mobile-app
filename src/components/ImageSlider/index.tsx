import Image from '@components/Image';
import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './imageslider.style';
import {ImageSliderProps} from './imageslider.type';
import {Product} from '@utils/type';

const {width} = Dimensions.get('window');

const ImageSlider: React.FC<ImageSliderProps> = ({products}) => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImagePress = (product: Product) => {
    navigation.navigate('Detail', {product});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleImagePress(item)}
            style={styles.imageContainer}>
            <Image uri={item.imagelink} containerStyle={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        snapToInterval={width}
        snapToAlignment="center"
        onScroll={e =>
          setActiveIndex(Math.round(e.nativeEvent.contentOffset.x / width))
        }
      />
      <View style={styles.pagination}>
        {products?.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;