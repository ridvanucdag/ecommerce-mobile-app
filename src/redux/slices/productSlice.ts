
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@utils/type";

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action?.payload?.map((product) => ({
        ...product,
        quantity: 1,
      }));
    },
    toggleFavourite(state, action: PayloadAction<number>) {
      const product = state?.products?.find((c) => c?.id === action?.payload);
      if (product) {
        product.favourite = !product.favourite;
      }
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const product = state?.products?.find((c) => c.id === action?.payload?.id);
      if (product) {
        product.quantity = action?.payload?.quantity;
      }
    },
  },
});

export const { setProducts, toggleFavourite, updateQuantity } =
  productSlice.actions;
export default productSlice.reducer;
