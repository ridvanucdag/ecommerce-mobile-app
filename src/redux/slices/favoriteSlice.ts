
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveAsyncStorage } from "../../utils/AsyncStorage";

interface FavoriteState {
  favoriteIds: number[];
}

const initialState: FavoriteState = {
  favoriteIds: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<number>) {
      if (!state?.favoriteIds?.includes(action?.payload)) {
        state?.favoriteIds?.push(action?.payload);
        saveAsyncStorage("favorites", state?.favoriteIds);
      }
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favoriteIds = state?.favoriteIds?.filter(
        (id) => id !== action?.payload
      );
      saveAsyncStorage("favorites", state?.favoriteIds);
    },
    setFavorites(state, action: PayloadAction<number[]>) {
      state.favoriteIds = action?.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
