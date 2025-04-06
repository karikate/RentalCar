import { Link } from "react-router-dom";
import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Find your perfect rental car</h1>
      <p className={s.slogan}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link to="/catalog" className={s.bthView}>
        View Catalog
      </Link>
    </div>
  );
};
export default HomePage;
