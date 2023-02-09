import InputForm from "./InputForm";
import LabelForm from "./LabelForm";

const FormContact = () => {
  return (
    <form className="mt-10 z-10 xl:w-[60rem] xl:mx-auto">
      <div className="flex flex-col flex-wrap gap-x-10 gap-y-5">
        <div className="flex flex-col gap-[1rem] sm:flex-row sm:gap-[4rem]">
          {/* Your Name */}
          <div className="flex flex-col gap-y-1 sm:w-full">
            <LabelForm
              htmlFor="yourName"
              className="text-[#757575] ml-1"
              text="Your Name"
            />
            <InputForm
              type="text"
              id="yourName"
              name="yourName"
              placeholder="Your Name"
              className="px-3 py-3 shadow-lg border-2 rounded-xl w-full"
            />
          </div>
          {/* Company Name */}
          <div className="flex flex-col gap-y-1 sm:w-full">
            <LabelForm
              htmlFor="companyName"
              className="text-[#757575] ml-1"
              text="Company Name"
            />
            <InputForm
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
              className="px-3 py-3 shadow-lg border-2 rounded-xl w-full"
            />
          </div>
        </div>

        {/* Email Adress */}
        <div className="flex flex-col gap-[1rem] sm:flex-row sm:gap-[4rem]">
          <div className="flex flex-col gap-y-1 sm:w-full">
            <LabelForm
              htmlFor="email"
              className="text-[#757575] ml-1"
              text="Email Address"
            />
            <InputForm
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="px-3 py-3 shadow-lg border-2 rounded-xl w-full"
            />
          </div>
          {/* Your Budget */}
          <div className="flex flex-col gap-y-1 sm:w-full">
            <LabelForm
              htmlFor="yourBudget"
              className="text-[#757575] ml-1"
              text="Your Budget"
            />
            <InputForm
              type="text"
              id="yourBudget"
              name="yourBudget"
              placeholder="Your Budget"
              className="px-3 py-3 shadow-lg border-2 rounded-xl w-full"
            />
          </div>
        </div>

        {/* Project Detail */}
        <div className="col-start-1 col-end-3">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="projectDetail" className="text-[#757575] ml-1">
              Project Detail
            </label>
            <textarea
              type="text"
              className="h-[13rem] shadow-lg border-2 rounded-xl px-3 py-3"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="sm:text-start">
          <input
            type="submit"
            value="Submit Message"
            className=" md:text-lg text-[#FFFFFF] bg-[#4C6BDC] hover:bg-primary-400  rounded-xl w-full sm:w-72 cursor-pointer btn border-none normal-case"
          />
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
        </div>
      </div>
    </form>
  );
};

export default FormContact;
