import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/userSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = ({ navigateAuth }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const {
        data: { data, statusCode },
      } = await axios.post("http://localhost:5000/api/v1/users/login", values);

      const { accessToken, refreshToken, user } = data;

      if (statusCode === 200) {
        dispatch(setUser(user));
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        setError("");
        resetForm();
        navigate("/");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>

            {error && <p>{error}</p>}
          </Form>
        )}
      </Formik>

      <p className="text-center text-white mt-1">
        Don't have an account ?{" "}
        <span
          className="text-blue-700  cursor-pointer"
          onClick={() => navigateAuth()}
        >
          Signup
        </span>
      </p>
    </div>
  );
};

export default Login;
