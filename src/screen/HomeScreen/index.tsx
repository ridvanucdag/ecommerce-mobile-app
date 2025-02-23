import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {HomeScreenProps} from './home.type';
import categories from '@data/category';
import {styles} from './home.stye';
import ProductsData from '@data/product';
import CircularCategoryList from '@components/CircularCategoryList';
import {useDispatch, useSelector} from 'react-redux';
import {setProducts} from '@redux/slices/productSlice';
import ProductList from '@components/ProductList';
import ImageCarousel from '@components/ImageCarousel';
import ImageSlider from '@components/ImageSlider';
import {Product} from '@utils/type';
import {RootState} from '@redux/store';
import {useTranslation} from 'react-i18next';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const products = useSelector((state: RootState) => state?.product?.products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    dispatch(setProducts(ProductsData));
  }, [dispatch]);

  const filterProductsByCategory = (category: string | null) =>
    category
      ? products?.filter(product => product?.category === category)
      : products;

  const getCategoryImageLinks = (categoryIndex: number) =>
    categories
      ?.map(category => {
        const categoryProducts = products?.filter(
          product => product?.category === category?.title,
        );
        return categoryProducts?.length > categoryIndex
          ? categoryProducts?.[categoryIndex]
          : null;
      })
      ?.filter((product): product is Product => product !== null);

  const imageProduct = getCategoryImageLinks(2);
  const imageInfluencerProduct = getCategoryImageLinks(3);
  const imageSliderProduct = getCategoryImageLinks(4);

  const getRandomProducts = (count: number) => {
    const shuffled = [...products]?.sort(() => Math.random() - 0.5);
    return shuffled?.slice(0, count);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <CircularCategoryList
        data={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={category =>
          setSelectedCategory(prev => (prev === category ? null : category))
        }
      />
      <ImageSlider products={imageSliderProduct} />
      <ProductList
        title={
          selectedCategory ? selectedCategory : t('home.advantageousProducts')
        }
        products={filterProductsByCategory(selectedCategory)}
      />
      <ImageCarousel products={imageProduct} />
      <ProductList
        title={t('home.bestSellers')}
        products={getRandomProducts(10)}
      />
      <ImageCarousel
        influencer
        title={t('home.influencer')}
        products={imageInfluencerProduct}
      />
      <View style={styles.bottom}>
        <ProductList
          title={t('home.flashCampaings')}
          products={getRandomProducts(10)}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
