import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCarById } from "../../services/api";

const DetailsPage = () => {
  const { id } = useParams();

  const [car, setCar] = useState();
  useEffect(() => {
    if (!id) return;
    const getSearchCarById = async () => {
      const data = await fetchCarById(id);
      setCar(data);
    };
    getSearchCarById();
  }, [id]);

  if (!car) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <img src={car.img} alt="poster" />
      <h2>
        {car.brand}
        {car.model}
        {car.year}
      </h2>
      <p>{car.address}</p>
      <p>Mileage: {car.mileage}</p>
      <p>{car.rentalPrice}$</p>
      <p>{car.description}$</p>
    </div>
  );
};
export default DetailsPage;
