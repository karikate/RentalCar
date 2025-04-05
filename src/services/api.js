import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const fetchCars = async () => {
  const { data } = await axios.get("/cars");
  return data.cars;
};

export const fetchCarById = async (carId) => {
  const { data } = await axios.get(`/cars/${carId}`);
  return data;
};
