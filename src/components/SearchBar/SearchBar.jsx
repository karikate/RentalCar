import s from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchFilters, setFilters } from "../../redux/filters/slice";

import { selectFilters } from "../../redux/filters/selectors";
import { selectAllCars } from "../../redux/cars/selectors";
import { clearCars } from "../../redux/cars/slice";
import { fetchCarsThunk } from "../../redux/cars/operations";

const SearchBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const cars = useSelector(selectAllCars);

  const brands = [...new Set(cars.map((car) => car.brand))].sort();
  const prices = [...new Set(cars.map((car) => Number(car.rentalPrice)))].sort(
    (a, b) => a - b
  );
  const mileages = [...new Set(cars.map((car) => car.mileage))].sort(
    (a, b) => a - b
  );

  const handleChange = (field) => (e) => {
    dispatch(setFilters({ [field]: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(clearCars());
    dispatch(searchFilters());
    dispatch(fetchCarsThunk());
  };

  return (
    <div className={s.wrapper}>
      <div className={s.variant}>
        <label>Car brand</label>
        <select
          value={filters.brand}
          className={s.select}
          onChange={handleChange("brand")}
        >
          <option value="" disabled hidden>
            Choose a brand
          </option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className={s.variant}>
        <label>Price / 1 hour</label>
        <select
          value={filters.price}
          className={s.select}
          onChange={handleChange("price")}
        >
          <option value="" disabled hidden>
            Choose a price
          </option>
          {prices.map((price) => (
            <option key={price} value={price}>
              To {price}
            </option>
          ))}
        </select>
      </div>

      <div className={s.variant}>
        <label>Car mileage / km</label>
        <div className={s.mileage}>
          <select
            value={filters.mileageFrom}
            className={s.select}
            onChange={handleChange("mileageFrom")}
          >
            <option value="" disabled hidden>
              From
            </option>
            {mileages.map((mileage) => (
              <option key={mileage} value={mileage}>
                From {mileage.toLocaleString()}
              </option>
            ))}
          </select>
          <select
            value={filters.mileageTo}
            className={s.select}
            onChange={handleChange("mileageTo")}
          >
            <option value="" disabled hidden>
              To
            </option>
            {mileages.map((mileage) => (
              <option key={mileage} value={mileage}>
                To {mileage.toLocaleString()} km
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className={s.btn} onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
export default SearchBar;
