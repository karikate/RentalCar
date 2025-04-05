import { Link } from "react-router-dom";

const CatalogList = ({ cars }) => {
  return (
    <div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <Link to={`/catalog/${car.id}`}>
              <p>{car.brand}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CatalogList;
