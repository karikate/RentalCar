import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters/slice";
import carsReducer from "./cars/slice";
import favoritesReducer from "./favorites/slice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cars: carsReducer,
    favorites: favoritesReducer,
  },
});
