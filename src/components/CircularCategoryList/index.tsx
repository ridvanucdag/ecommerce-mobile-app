import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './circularcategory.style';
import {CategoryListProps} from './circularcategory.type';
import Image from '@components/Image';
import { useTranslation } from 'react-i18next';

const CircularCategoryList: React.FC<CategoryListProps> = ({
  data,
  selectedCategory,
  onCategorySelect,
}) => {
    const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{t('category.title')}</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          const isSelected = item.title === selectedCategory;

          return (
            <TouchableOpacity onPress={() => onCategorySelect(item.title)}>
              <View style={styles.categoryContainer}>
                <View
                  style={[
                    styles.imageContainer,
                    isSelected && styles.selectedImageContainer,
                  ]}>
                  <Image uri={item?.image} containerStyle={styles.image} />
                </View>
                <Text style={styles.title}>{t(item.title)}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CircularCategoryList;
