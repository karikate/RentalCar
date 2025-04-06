import { Link } from "react-router-dom";
import s from "./CatalogList.module.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useFavorites } from "../../hooks/useFavorites";

const CatalogList = ({ cars }) => {
  const { isFavorite, toggle } = useFavorites();

  return (
    <div className={s.wrapper}>
      <ul className={s.wrapperList}>
        {cars.map((car) => (
          <li key={car.id} className={s.carCard}>
            <div className={s.imgWrapper}>
              <img src={car.img} alt="poster" className={s.image} />
              {isFavorite(car.id) ? (
                <BsHeartFill
                  className={`${s.icon} ${s.active}`}
                  onClick={() => toggle(car.id)}
                />
              ) : (
                <BsHeart className={s.icon} onClick={() => toggle(car.id)} />
              )}
            </div>

            <div className={s.titleWrapper}>
              <h2 className={s.title}>
                {car.brand} <span>{car.model}</span> {car.year}
              </h2>
              <p className={s.price}>{car.rentalPrice}$</p>
            </div>
            <div className={s.info}>
              <div>
                <p>{car.address.split(", ").slice(-2).join(" | ")}</p>
                <p>{car.rentalCompany}</p>
              </div>
              <div>
                <p>{car.type}</p>
                <p>
                  {car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  km
                </p>
              </div>
            </div>
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
