import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import Slider from '@react-native-community/slider';
import CheckBox from '@components/Checkbox';
import {formatCurrency} from '@utils/helpers';
import useFilter from '@hooks/useFilter';
import Button from '@components/Button';
import {FilterScreenProps} from './filter.type';
import {styles} from './filter.style';
import {useTranslation} from 'react-i18next';

const FilterScreen: React.FC<FilterScreenProps> = ({
  products,
  onApplyFilters,
}) => {
  const {t} = useTranslation();
  const {
    selectedFilter,
    setSelectedFilter,
    minCartAmount,
    setMinCartAmount,
    selectedRating,
    setSelectedRating,
    minPrice,
    maxPrice,
    handleApplyFilters,
  } = useFilter({products, onApplyFilters});

  const renderSortItem = (title: string, filterKey: string) => (
    <TouchableOpacity
      style={styles.filterOption}
      onPress={() => setSelectedFilter(filterKey)}>
      <View style={styles.filterItemContainer}>
        <CheckBox
          label={title}
          checked={selectedFilter === filterKey}
          onValueChange={() => setSelectedFilter(filterKey)}
        />
      </View>
    </TouchableOpacity>
  );

  const renderRatingItem = (title: string, ratingKey: string) => (
    <TouchableOpacity
      style={styles.filterOption}
      onPress={() => setSelectedRating(ratingKey)}>
      <CheckBox
        label={title}
        checked={selectedRating === ratingKey}
        onValueChange={() => setSelectedRating(ratingKey)}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <Text style={styles.filterTitle}>{t('filter.desc')}</Text>
      {renderSortItem(`${t('filter.price')}`, 'price')}
      {renderSortItem(`${t('filter.priceDesc')}`, 'priceDesc')}
      {renderSortItem(`${t('filter.alphabet')}`, 'alphabet')}
      {renderSortItem(`${t('filter.alphabetz')}`, 'alphabetz')}

      <Text style={styles.filterTitle}>{t('filter.minimumAmount')}</Text>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>{formatCurrency(minPrice)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={minPrice}
          maximumValue={maxPrice}
          step={1}
          value={minCartAmount}
          onValueChange={value => setMinCartAmount(value)}
          minimumTrackTintColor="#3498db"
          maximumTrackTintColor="#ddd"
          thumbTintColor="#3498db"
        />
        <Text style={styles.sliderLabel}>{formatCurrency(maxPrice)}</Text>
      </View>
      <Text style={styles.minCartAmount}>{`${t(
        'filter.minimumAmount',
      )}: ${formatCurrency(minCartAmount)}`}</Text>

      <Text style={styles.filterTitle}>{t('filter.star')}</Text>
      {renderRatingItem(`${t('filter.all')}`, 'all')}
      {renderRatingItem(`${4} ${t('filter.star')}`, '4')}
      {renderRatingItem(`${3} ${t('filter.star')}`, '3')}
      {renderRatingItem(`${2} ${t('filter.star')}`, '2')}
      <Button title={t('filter.button')} onPress={handleApplyFilters} />
    </View>
  );
};

export default FilterScreen;
