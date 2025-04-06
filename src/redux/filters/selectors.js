import { createSelector } from "@reduxjs/toolkit";
import { selectAllCars } from "../cars/selectors";

export const selectCars = (state) => state.cars.items;
export const selectSearchFilters = (state) => state.filters.search;
export const selectFilters = (state) => state.filters.filters;

export const selectFilteredCars = createSelector(
  [selectAllCars, selectSearchFilters],
  (cars, filters) => {
    return cars.filter((car) => {
      const matchesBrand = filters.brand
        ? car.brand.toLowerCase().includes(filters.brand.toLowerCase())
        : true;

      const matchesPrice = filters.price
        ? Number(car.rentalPrice) <= Number(filters.price)
        : true;

      const matchesMileage =
        (filters.mileageFrom
          ? car.mileage >= Number(filters.mileageFrom)
          : true) &&
        (filters.mileageTo ? car.mileage <= Number(filters.mileageTo) : true);

      return matchesBrand && matchesPrice && matchesMileage;
    });
  }
);
