import React, {  useState } from "react";
import { Formik, Form, Field } from "formik";
import { Requests } from "../../utils/Index";
import { toast } from "react-toastify";

const Upload = (props) => {
  const [loading, setLoading] = useState(false);
  const defautValue = "";
  const [data, setData] = useState("");

  return (
    <>
      <>
        <Formik
          initialValues={{
            carbohydrates: "",
            protiens: "",
            fats: "",
            vitamins: "",
          }}
          onSubmit={async (values) => {
            setLoading(true);
            Requests.uploadData(values)
              .then((res) => {
                toast.success("Uploaded Successfully");
                setData(res.data);
                console.log(res.data);
                setLoading(false);
              })
              .catch((err) => {
                setLoading(false);
                toast.error(err.response.data.error.message);
              });
          }}
        >
          {(formik) => (
            <div className="w-full h-screen py-4">
              <div className="w-80 md:w-[400px] text-center m-auto py-14 justify-center h-min">
                <h1 className="text-4xl p-4">Upload Food Nutrient Values</h1>
                <Form
                  className="p-4 space-y-4 mx-auto "
                  onSubmit={formik.handleSubmit}
                >
                  <div className="flex">
                    <div className="p-3">
                      <Field
                        className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder={"Carbohydrates"}
                        name={"carbohydrates"}
                        type={"carbohydrates"}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="p-3">
                      <Field
                        className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder={"Protiens"}
                        name={"protiens"}
                        type={"protiens"}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="p-3">
                      <Field
                        className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder={"Fats"}
                        name={"fats"}
                        type={"fats"}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="p-3">
                      <Field
                        className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder={"Vitamins"}
                        name={"vitamins"}
                        type={"vitamins"}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-center py-3">
                    <button
                      className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="button"
                      onClick={formik.handleSubmit}
                      disabled={loading ? true : false}
                    >
                      {loading ? <>loading..</> : "Upload"}
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </>
    </>
  );
};

export default Upload;
