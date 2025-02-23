import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveAsyncStorage } from "../../utils/AsyncStorage";
import { Product } from "@utils/type";


interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const basketSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product & { quantity: number }>) {
      const existingItem = state?.items?.find(
        (item) => item?.id === action?.payload?.id
      );
      if (existingItem) {
        existingItem.quantity += action?.payload?.quantity;
      } else {
        state?.items?.push({ ...action?.payload });
      }
      saveAsyncStorage("cart", state.items);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state?.items?.filter((item) => item?.id !== action?.payload);
      saveAsyncStorage("cart", state?.items);
    },
    clearCart(state) {
      state.items = [];
      saveAsyncStorage("cart", state.items);
    },
    setCart(state, action: PayloadAction<Product[]>) {
      state.items = action?.payload;
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const item = state?.items?.find((item) => item?.id === action?.payload?.id);
      if (item) {
        item.quantity += action?.payload?.quantity;
        if (item.quantity <= 0) {
          state.items = state?.items?.filter(
            (item) => item?.id !== action?.payload?.id
          );
        }
      }
      saveAsyncStorage("cart", state?.items);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCart, updateQuantity } =
  basketSlice.actions;
export default basketSlice.reducer;
