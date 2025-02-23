import Image from '@components/Image';
import {useNavigation} from '@react-navigation/native';
import {Product} from '@utils/type';
import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import { ImageCarouselProps } from './imagecarousel.type';
import { styles } from './imagecarousel.style';

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  title,
  products,
  influencer,
}) => {
  const navigation = useNavigation();

  const handleImagePress = (product: Product) => {
    navigation.navigate('Detail', {product});
  };

  const renderItem = ({item}: {item: Product}) => {
    return (
      <TouchableOpacity
        onPress={() => handleImagePress(item)}
        style={[
          influencer ? styles.influencerImageContainer : styles.imageContainer,
        ]}>
        <Image uri={item?.imagelink} containerStyle={styles.image} />
        {influencer && (
          <View style={styles.overlay}>
            <Image
              uri={require('@assets/images/profile/ridvanucdag.jpg')}
              containerStyle={styles.thumbnail}
            />
            <Text style={styles.influencerText}>Rıdvan Ü.</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {influencer && (
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      <FlatList
        data={products}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
      />
    </View>
  );
};

export default ImageCarousel;
