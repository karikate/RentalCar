import { useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./DetailsCar.module.css";
import {
  BsGeoAlt,
  BsCheckCircle,
  BsCalendar2Week,
  BsCarFront,
  BsFuelPump,
  BsGear,
} from "react-icons/bs";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCar } from "../../redux/cars/selectors";
import { fetchCarByIdThunk } from "../../redux/cars/operations";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

const DetailsCar = () => {
  const { id } = useParams();

  const initialValues = {
    username: "",
    email: "",
    date: "",
    comment: "",
  };
  const handleSubmit = (values, options) => {
    toast.success("Car booked successfully!");
    options.resetForm();
  };

  const validationSchema = Yup.object({
    username: Yup.string().min(2, "Too short").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    date: Yup.string().required("Booking date is required"),
    comment: Yup.string(),
  });

  const dispatch = useDispatch();
  const car = useSelector(selectCurrentCar);
  useEffect(() => {
    dispatch(fetchCarByIdThunk(id));
  }, [dispatch, id]);

  if (!car) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={s.carDetailsWrapper}>
      <div className={s.imgBookWrapper}>
        <img src={car.img} alt="poster" />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={s.form}>
            <Field type="text" name="username" placeholder="Name*" />
            <Field type="email" name="email" placeholder="Email*" />
            <Field type="text" name="date" placeholder="Booking date" />
            <Field as="textarea" name="comment" placeholder="Comment" />
            <button type="submit">Send</button>
          </Form>
        </Formik>
      </div>
      <Toaster position="top-center" />
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
export default DetailsCar;
