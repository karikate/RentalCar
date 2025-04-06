import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/favorites/slice";

export const useFavorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const isFavorite = (carId) => favorites.includes(carId);
  const toggle = (carId) => dispatch(toggleFavorite(carId));

  return { favorites, isFavorite, toggle };
};
