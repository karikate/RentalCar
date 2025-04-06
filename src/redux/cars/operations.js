import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const goitApi = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});

export const fetchCarsThunk = createAsyncThunk(
  `fetchAll`,
  async (_, thunkApi) => {
    try {
      const { data } = await goitApi.get(`/cars`);
      return data.cars;
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
