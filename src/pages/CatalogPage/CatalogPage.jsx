import { useEffect } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import { fetchCarsThunk } from "../../redux/cars/operations";

import { useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <CatalogList />
    </div>
  );
};
export default CatalogPage;
