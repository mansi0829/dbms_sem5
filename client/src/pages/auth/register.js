import React, { useEffect, useState } from "react";
import { Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { Formik } from "formik";
import { Requests } from "../../utils/Index";
import { login } from "../../store/actions";
import { toast } from "react-toastify";

const college = [
  "G.H.RAISONI COLLEGE OF ENGINEERING & MANAGEMENT",
  "SYMBIOSIS INSTITUTE OF TECHNOLOGY",
  "DR.D.Y.PATL COLLEGE OF ENGINEERING",
  "SCTR'S Pune Institute Of Computer Technology",
  "Indian Institute of Technology",
  "College of Engineering Pune",
  "National Institute of Technology",
];
const admissionyear = [
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
];
const gender = ["Male", "Female", "Other"];
const user_type = ["Student", "Teacher", "Admin", "Super"];

const Register = (props) => {
  const [data, setData] = useState("");
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        college: "SCTR'S Pune Institute Of Computer Technology",
        user_type: "Student",
        phone: "",
        gender: "Male",
      }}
      onSubmit={async (values) => {
        setLoading(true);
        Requests.register(values)
          .then((res) => {
            setLoading(false);
            navigate("/auth/login");
          })
          .catch((err) => {
            setLoading(false);
            toast.warn(err);
            console.log(err);
          });
      }}
    >
      {(formik) => (
        <div className="w-full min-h-screen ">
          <div className="w-80 md:w-[400px] text-center m-auto py-14 justify-center h-min">
            <h1 className="text-4xl p-4">Register</h1>
            <Form
              className="p-4 space-y-4 mx-auto "
              onSubmit={formik.handleSubmit}
            >
              <div className="">
                <Field
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={"First Name"}
                  name={"first_name"}
                  type={"first_name"}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <Field
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={"Last Name"}
                  name={"last_name"}
                  type={"last_name"}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="">
                <Field
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={"email"}
                  name={"email"}
                  type={"email"}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <div className="text-red-500 font-bold">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="">
                <Field
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={"Password"}
                  name={"password"}
                  type={"password"}
                  onChange={formik.handleChange}
                />
                {formik.errors.password && (
                  <div className="text-red-500 font-bold">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="">
                <Field
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={"College Name"}
                  component="select"
                  name={"college"}
                  type={"college"}
                  onChange={formik.handleChange}
                >
                  {college.map((val, id) => (
                    <option value={val}>{val}</option>
                  ))}
                </Field>
              </div>
              <div className="">
                <Field
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={"Admission year"}
                  component="select"
                  name={"admission_year"}
                  type={"admission_year"}
                  onChange={formik.handleChange}
                >
                  {admissionyear.map((val, id) => (
                    <option value={val}>{val}</option>
                  ))}
                </Field>
              </div>
              <div className="">
                <Field
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={"Gender"}
                  component="select"
                  name={"gender"}
                  type={"gender"}
                  onChange={formik.handleChange}
                >
                  {gender.map((val, id) => (
                    <option value={val}>{val}</option>
                  ))}
                </Field>
              </div>
              <div className="">
                <Field
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={"Phone number"}
                  name={"phone"}
                  type={"phone"}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="">
                <Field
                  className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder={"user type"}
                  component="select"
                  name={"user_type"}
                  type={"user_type"}
                  onChange={formik.handleChange}
                >
                  {user_type.map((val, id) => (
                    <option value={val}>{val}</option>
                  ))}
                </Field>
              </div>
              <div className="flex items-baseline justify-center py-3">
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="button"
                  onClick={formik.handleSubmit}
                  disabled={loading ? true : false}
                >
                  {loading ? "Loading" : "Register"}
                </button>
              </div>
            </Form>

            <div className="link p-1 flex space-x-2 justify-center text-white">
              <div>Dont have an account ? </div>
              <Link to="/auth/login" className="text-cyan-500">
                login
              </Link>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
