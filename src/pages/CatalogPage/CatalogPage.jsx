import { useEffect } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import { fetchCarsThunk } from "../../redux/cars/operations";

import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import { selectSearchFilters } from "../../redux/filters/selectors";
import { clearCars } from "../../redux/cars/slice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, currentPage, hasMore } = useSelector((state) => state.cars);
  const filters = useSelector(selectSearchFilters);

  useEffect(() => {
    if (filters) {
      dispatch(clearCars());
      dispatch(fetchCarsThunk({ page: 1, filters }));
    }
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(fetchCarsThunk({ page: currentPage + 1, filters }));
  };

  return (
    <div>
      <SearchBar />
      <CatalogList cars={items} />
      {hasMore && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
};
export default CatalogPage;
