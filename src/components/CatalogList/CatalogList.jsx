import { Link } from "react-router-dom";
import s from "./CatalogList.module.css";

const CatalogList = ({ cars }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.wrapperList}>
        {cars.map((car) => (
          <li key={car.id} className={s.carCard}>
            <img src={car.img} alt="poster" className={s.image} />
            <div className={s.titleWrapper}>
              <h2 className={s.title}>
                {car.brand}
                {car.model}
                {car.year}
              </h2>
              <p className={s.price}>{car.rentalPrice}$</p>
            </div>

            <p>{car.address}</p>
            <p>{car.rentalCompany}</p>
            <p>{car.type}</p>
            <p>{car.mileage}</p>

            <Link to={`/catalog/${car.id}`} className={s.btnReadMore}>
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CatalogList;
