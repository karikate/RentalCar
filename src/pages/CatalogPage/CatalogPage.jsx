import { useEffect, useState } from "react";
import { fetchCars } from "../../services/api";
import CatalogList from "../../components/CatalogList/CatalogList";

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getSearchCars = async () => {
      const data = await fetchCars();
      setCars(data);
    };
    getSearchCars();
  }, []);
  return (
    <div>
      <CatalogList cars={cars} />
    </div>
  );
};
export default CatalogPage;
