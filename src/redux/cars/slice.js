import { createAction, createSlice } from "@reduxjs/toolkit";
import { fetchCarByIdThunk, fetchCarsThunk } from "../cars/operations";

const initialState = {
  items: [],
  current: null,
  currentPage: 1,
  hasMore: true,
};

export const clearCars = createAction("cars/clearCars");
const carsSlice = createSlice({
  name: "cars",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(clearCars, (state) => {
      state.items = [];
      state.current = null;
    });
    builder.addCase(fetchCarsThunk.fulfilled, (state, action) => {
      const { items, hasMore, page } = action.payload;
      state.hasMore = hasMore;
      state.currentPage = page;
      if (page === 1) {
        state.items = items;
      } else {
        state.items = [...state.items, ...items];
      }
    });
    builder.addCase(fetchCarByIdThunk.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

export default carsSlice.reducer;
