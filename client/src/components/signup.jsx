import * as Yup from "yup";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

const Signup = ({ navigateAuth }) => {
  const [error, setError] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/register",
        values
      );
      if (response.data.statusCode === 201) {
        setError("");
        resetForm();
        navigateAuth();
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="text" name="phone" placeholder="Phone" />
              <ErrorMessage name="phone" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Signup
            </button>

            {error && <p>{error}</p>}
          </Form>
        )}
      </Formik>

      <p className="text-center mt-1 text-white">
        Already have an account ?{" "}
        <span
          className="text-blue-700 cursor-pointer"
          onClick={() => navigateAuth()}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
