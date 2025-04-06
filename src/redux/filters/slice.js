import { createSlice } from "@reduxjs/toolkit";

const filterState = {
  brand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
};
const sliceFilters = createSlice({
  name: "filters",
  initialState: {
    filters: { ...filterState },
    search: { ...filterState },
  },

  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    searchFilters(state) {
      state.search = { ...state.filters };
    },
    resetFilters(state) {
      state.filters = { ...filterState };
      state.search = { ...filterState };
    },
  },
});

export const { setFilters, searchFilters, resetFilters } = sliceFilters.actions;

export default sliceFilters.reducer;
