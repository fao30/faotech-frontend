import InputForm from "./InputForm";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  // Formik Logic
  const formik = useFormik({
    initialValues: {
      yourName: "",
      companyName: "",
      email: "",
      yourBudget: "",
      textarea: "",
    },
    validationSchema: Yup.object({
      yourName: Yup.string().required("Required"),
      companyName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      yourBudget: Yup.string().required("Required"),
      textarea: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs.send(
        process.env.REACT_APP_SERVICE_ID_EMAILJS,
        process.env.REACT_APP_TEMPLATE_ID_EMAILJS,
        values,
        process.env.REACT_APP_PUBLIC_KEY_EMAILJS
      );
      toast.loading("Sending...", {
        duration: 2000,
      });
      setTimeout(() => {
        toast.success("Message Sent!");
        resetForm();
      }, 2000);
    },
  });

  return (
    <>
      <Toaster />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col flex-wrap gap-x-10 gap-y-5">
          <div className="flex flex-col gap-[1rem] sm:flex-row sm:gap-[4rem] p text-[#757575]">
            {/* Your Name */}
            <div className="flex flex-col gap-y-1 sm:w-full">
              <InputForm
                label="Your Name"
                type="text"
                placeholder="Your Name"
                name="yourName"
                value={formik.values.yourName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                formikErrors={
                  formik.errors.yourName && formik.touched.yourName ? (
                    <p>{formik.errors.yourName}</p>
                  ) : null
                }
              />
            </div>
            {/* Company Name */}
            <div className="flex flex-col gap-y-1 sm:w-full">
              <InputForm
                label="Company Name"
                type="text"
                name="companyName"
                onChange={formik.handleChange}
                placeholder="Company Name"
                value={formik.values.companyName}
                onBlur={formik.handleBlur}
                formikErrors={
                  formik.errors.companyName && formik.touched.companyName ? (
                    <p>{formik.errors.companyName}</p>
                  ) : null
                }
              />
            </div>
          </div>
          {/* Email Adress */}
          <div className="flex flex-col gap-[1rem] sm:flex-row sm:gap-[4rem] p text-[#757575]">
            <div className="flex flex-col gap-y-1 sm:w-full">
              <InputForm
                label="Email"
                type="email"
                name="email"
                onChange={formik.handleChange}
                placeholder="Email Address"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                formikErrors={
                  formik.errors.email && formik.touched.email ? (
                    <p>{formik.errors.email}</p>
                  ) : null
                }
              />
            </div>
            {/* Your Budget */}
            <div className="flex flex-col gap-y-1 sm:w-full">
              <InputForm
                label="Your Budget"
                type="text"
                name="yourBudget"
                onChange={formik.handleChange}
                placeholder="Your Budget"
                value={formik.values.yourBudget}
                onBlur={formik.handleBlur}
                formikErrors={
                  formik.errors.yourBudget && formik.touched.yourBudget ? (
                    <p>{formik.errors.yourBudget}</p>
                  ) : null
                }
              />
            </div>
          </div>
          {/* Project Detail */}
          <div className="col-start-1 col-end-3">
            <div className="flex flex-col md:gap-y-2">
              <label htmlFor="projectDetail" className="p ml-1 text-[#757575]">
                Project Detail
              </label>
              <textarea
                type="text"
                className={`textAreaShadow h-[15rem] px-3 py-2  shadow-[1px_1px_5px_0px_#ababab] bg-white rounded-lg md:py-3 lg:py-3 focus:ring-0 lg:  outline-[#4C6BDC] `}
                name="textarea"
                value={formik.values.textarea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.textarea && formik.touched.textarea ? (
                <p className="mt-1 ml-1 text-red-600">
                  {formik.errors.textarea}
                </p>
              ) : null}
            </div>
          </div>
          {/* Submit Button */}
          <div className="sm:text-start">
            <button
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
              className="normal-case bg-[#4C6BDC] hover:bg-primary-400 rounded-xl w-full sm:w-72 cursor-pointer btn border-none relative overflow-hidden group"
            >
              <p>Submit Message</p>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormContact;
