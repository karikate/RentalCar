import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const goitApi = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export const fetchCarsThunk = createAsyncThunk(
  `fetchAll`,
  async ({ page = 1, filters = {} }, thunkApi) => {
    try {
      const params = new URLSearchParams({
        ...filters,
        page,
        limit: 12,
      });

      const response = await goitApi.get(`/cars?${params.toString()}`);
      const { cars, totalCars, totalPages } = response.data;

      return {
        items: cars,
        hasMore: page < totalPages,
        page,
        total: totalCars,
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCarByIdThunk = createAsyncThunk(
  `fetchBuId`,
  async (carId, thunkApi) => {
    try {
      const { data } = await goitApi.get(`/cars/${carId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
