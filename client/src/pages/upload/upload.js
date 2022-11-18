import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Requests } from "../../utils/Index";
import { toast } from "react-toastify";
import Processing from "../../components/Processing/Processing";

const Upload = (props) => {
  const [loading, setLoading] = useState(false);
  const defautValue = "";
  const [data, setData] = useState("");

  return (
    <>
      <>
        <Formik
          initialValues={{
            grams: "",
            calories: "",
            protiens: "",
            fats: "",
            saturated_fats: "",
            fiber: "",
            carbohydrates: "",
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
                        placeholder={"grams"}
                        name={"grams"}
                        type={"grams"}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="p-3">
                      <Field
                        className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder={"calories"}
                        name={"calories"}
                        type={"calories"}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="p-3">
                      <Field
                        className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder={"protein"}
                        name={"protein"}
                        type={"protein"}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="p-3">
                      <Field
                        className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder={"fats"}
                        name={"fats"}
                        type={"fats"}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="p-3">
                      <Field
                        className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder={"Saturated Fats"}
                        name={"saturated_fats"}
                        type={"saturated_fats"}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="p-3">
                      <Field
                        className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder={"Fiber"}
                        name={"fiber"}
                        type={"fiber"}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <div className="p-3">
                    <Field
                      className="w-full text-gray-500 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder={"Carbohydrates"}
                      name={"carbohydrates"}
                      type={"carbohydrates"}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="flex items-baseline justify-center py-3">
                    {/* <button
                      className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="button"
                      onClick={formik.handleSubmit}
                      disabled={loading ? true : false}
                    >
                      {loading ? <>loading..</> : "Upload"}
                    </button> */}
                    <Processing/>
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
