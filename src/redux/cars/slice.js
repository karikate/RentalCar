import { createAction, createSlice } from "@reduxjs/toolkit";
import { fetchCarByIdThunk, fetchCarsThunk } from "../cars/operations";

const initialState = {
  items: [],
  current: null,
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
      state.items = action.payload;
    });
    builder.addCase(fetchCarByIdThunk.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

export default carsSlice.reducer;
