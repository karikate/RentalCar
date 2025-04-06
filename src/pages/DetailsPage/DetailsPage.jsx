import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCarById } from "../../services/api";
import s from "./DetailsPage.module.css";
import {
  BsGeoAlt,
  BsCheckCircle,
  BsCalendar2Week,
  BsCarFront,
  BsFuelPump,
  BsGear,
} from "react-icons/bs";
import { Field, Form, Formik } from "formik";

const DetailsPage = () => {
  const { id } = useParams();

  const initialValues = {
    username: "",
    email: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

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
    <div className={s.carDetailsWrapper}>
      <div className={s.imgBookWrapper}>
        <img src={car.img} alt="poster" />
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <Field type="text" name="username" placeholder="Name*" />
            <Field type="email" name="email" placeholder="Email*" />
            <Field type="text" name="date" placeholder="Booking date" />
            <Field as="textarea" name="comment" placeholder="Comment" />
            <button type="submit">Send</button>
          </Form>
        </Formik>
      </div>

      <div className={s.infoWrapper}>
        <div className={s.title}>
          <h2>
            {car.brand} {car.model}, {car.year}
          </h2>
          <p>Id: {car.img.split("/").pop().split("-")[0]}</p>
        </div>

        <div className={s.subTitle}>
          <p>
            <BsGeoAlt />
            {car.address.split(", ").slice(-2).join(", ")}
          </p>
          <p>Mileage: {car.mileage}</p>
        </div>

        <p className={s.price}>{car.rentalPrice}$</p>

        <p>{car.description}</p>
        <div>
          <h3>Rental Conditions:</h3>
          <ul>
            {car.rentalConditions.map((condition, index) => (
              <li key={index}>
                <BsCheckCircle /> {condition}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3> Car Specifications:</h3>
          <ul>
            <li>
              <BsCalendar2Week />
              Year: {car.year}
            </li>
            <li>
              <BsCarFront /> Type: {car.type}
            </li>
            <li>
              <BsFuelPump />
              Fuel Consumption: {car.fuelConsumption}
            </li>
            <li>
              <BsGear />
              Engine Size: {car.engineSize}
            </li>
          </ul>
        </div>

        <div>
          <h3>Accessories and functionalities:</h3>
          <ul>
            {car.accessories.map((condition, index) => (
              <li key={index}>
                <BsCheckCircle /> {condition}
              </li>
            ))}
            {car.functionalities.map((condition, index) => (
              <li key={index}>
                <BsCheckCircle /> {condition}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DetailsPage;
