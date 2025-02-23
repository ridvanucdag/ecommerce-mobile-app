import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FilterScreenProps } from '@screen/FilterScreen/filter.type';

const useFilter = ({ products, onApplyFilters }: FilterScreenProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('price');
  const [minCartAmount, setMinCartAmount] = useState<number>(0);
  const [selectedRating, setSelectedRating] = useState<string>('all');
    const navigation = useNavigation();
  const minPrice = Math.min(...products.map(product => product?.price));
  const maxPrice = Math.max(...products.map(product => product?.price));

  const handleApplyFilters = () => {
    let filteredData = [...products];

    if (selectedFilter === 'price') {
      filteredData?.sort((a, b) => a?.price - b?.price);
    } else if (selectedFilter === 'priceDesc') {
      filteredData?.sort((a, b) => b?.price - a?.price);
    } else if (selectedFilter === 'alphabet') {
      filteredData?.sort((a, b) => a?.title?.localeCompare(b?.title));
    } else if (selectedFilter === 'alphabetz') {
      filteredData?.sort((a, b) => b?.title?.localeCompare(a?.title));
    }

    if (selectedRating === '4') {
      filteredData = filteredData?.filter(
        product => product?.average_rating >= 4,
      );
    } else if (selectedRating === '3') {
      filteredData = filteredData?.filter(
        product => product?.average_rating >= 3,
      );
    } else if (selectedRating === '2') {
      filteredData = filteredData?.filter(
        product => product?.average_rating >= 2,
      );
    }

    filteredData = filteredData?.filter(
      product => product?.price >= minCartAmount,
    );
    onApplyFilters(filteredData);
    navigation.goBack();
  };

  return {
    selectedFilter,
    setSelectedFilter,
    minCartAmount,
    setMinCartAmount,
    selectedRating,
    setSelectedRating,
    minPrice,
    maxPrice,
    handleApplyFilters,
  };
};

export default useFilter;
