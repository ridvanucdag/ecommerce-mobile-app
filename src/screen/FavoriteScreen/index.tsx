import React from "react";
import {
  View,
  Text,
  FlatList,
  StatusBar,
} from "react-native";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ProductList from "@components/ProductList";
import { RootState } from "@redux/store";
import { styles } from "./favorite.style";


const FavoriteScreen: React.FC = () => {
  const { t } = useTranslation();
  const products = useSelector((state: RootState) =>
    state?.product?.products
    ?.filter((c) => c?.favourite)
    ?.sort((a, b) => a?.title?.localeCompare(b?.title))
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      {products?.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyMessage}>{t("favorite.emptyMessage")}</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <ProductList categorylist favorite products={[item]} />
            </View>
          )}
          numColumns={products?.length === 1 ? 1 : 2}
        />
      )}
    </View>
  );
};

export default FavoriteScreen;
