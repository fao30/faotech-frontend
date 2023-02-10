import InputForm from "./InputForm";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const serviceKey = firebase.config().config.react_app_service_id_emailjs;
const templateKey = firebase.config().config.react_app_template_id_emailjs;
const publicKey = firebase.config().config.react_app_public_key_emailjs;

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
      yourName: Yup.string().required("Required field"),
      companyName: Yup.string().required("Required field"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required field"),
      yourBudget: Yup.number()
        .positive()
        .integer()
        .typeError("This field must only contain number")
        .required("Required field"),
      textarea: Yup.string().required("Required field"),
    }),
    onSubmit: (actions, { resetForm, setSubmitting }) => {
      console.log(formik.values);
      // emailjs send
      emailjs.send(serviceKey, templateKey, values, publicKey);
      resetForm();
    },
  });

  return (
    <>
      <form
        className="mt-10 z-10 xl:w-[60rem] xl:mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col flex-wrap gap-x-10 gap-y-5">
          <div className="flex flex-col gap-[1rem] sm:flex-row sm:gap-[4rem] text-[#757575]">
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
          <div className="flex flex-col gap-[1rem] sm:flex-row sm:gap-[4rem] text-[#757575]">
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
              <label
                htmlFor="projectDetail"
                className="ml-1 lg:text-xl text-[#757575]"
              >
                Project Detail
              </label>
              <textarea
                type="text"
                className={`textAreaShadow h-[15rem] px-3 py-2 text-sm shadow-[1px_1px_5px_0px_#ababab] bg-white rounded-lg md:py-3 lg:py-3 focus:ring-0 lg:text-lg text-black outline-[#4C6BDC] `}
                name="textarea"
                value={formik.values.textarea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.textarea && formik.touched.textarea ? (
                <p className="mt-1 ml-1 text-sm text-red-600 md:text-base">
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
              className="normal-case md:text-base text-[#FFFFFF] bg-[#4C6BDC] hover:bg-primary-400 rounded-xl w-full sm:w-72 cursor-pointer btn border-none relative overflow-hidden group"
            >
              Submit Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormContact;
