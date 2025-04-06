import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      const index = state.indexOf(carId);
      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(carId);
      }
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    setFavorites: (_, action) => {
      localStorage.setItem("favorites", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
