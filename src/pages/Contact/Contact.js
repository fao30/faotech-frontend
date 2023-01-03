import { useNavigate } from "react-router-dom";
import "../Home/components/custom.css";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col space-y-10 pb-20 sm:pb-96 px-[2.5rem] md:px-[5rem] lg:px-[9.5rem] border-b-2">
      <div className="text-end mt-5 z-20 ">
        <button
          className="rounded-tr-xl rounded-bl-xl  shadow-md px-6 py-2 hover:bg-[#4C6BDC] hover:text-white bg-[#FFFFFF]"
          onClick={() => navigate("/")}
        >
          Back to Homepage
        </button>
      </div>
      <div className="flex flex-col z-10 xl:mx-auto">
        <h3 className="text-[#4C6BDC] text-[3rem] font-bold">
          Let’s discuss your project with our team
        </h3>
        <p className="text-[#A1A1A1] text-[1.25rem]">
          We would love to hear from you! Send us an email and we will respond
          within 24 hours.
        </p>

        {/* Background  */}
        <div class="flex absolute w-6/12 right-0 lg:-right-10 sm:mr-10 h-[90%] top-20 bg-[#eaf0fa] blur-3xl -z-10 rounded-tl-full rounded-bl-full"></div>

        {/* FORM */}
        <form className="mt-10 z-10 xl:w-[60rem] xl:mx-auto">
          <div className="flex flex-col flex-wrap gap-x-10 gap-y-5">
            <div className="flex flex-col gap-[1rem] sm:flex-row sm:gap-[4rem]">
              {/* Your Name */}
              <div className="flex flex-col gap-y-1 sm:w-full">
                <label htmlFor="yourname" className="text-[#757575] ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-3 py-3 shadow-lg border-2 rounded-xl"
                />
              </div>
              {/* Company Name */}
              <div className="flex flex-col gap-y-1 sm:w-full">
                <label htmlFor="Companyname" className="text-[#757575] ml-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="px-3 py-3 shadow-lg border-2 rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[1rem] sm:flex-row sm:gap-[4rem]">
              {/* Email Adress */}
              <div className="flex flex-col gap-y-1 sm:w-full">
                <label htmlFor="email" className="text-[#757575] ml-1">
                  Email Adress
                </label>
                <input
                  type="text"
                  placeholder="Email Adress"
                  className="px-3 py-3 shadow-lg border-2 rounded-xl"
                />
              </div>
              {/* Your Budget */}
              <div className="flex flex-col gap-y-1 sm:w-full">
                <label htmlFor="yourbudget" className="text-[#757575] ml-1">
                  Your Budget
                </label>
                <input
                  type="text"
                  placeholder="Your Budget"
                  className="px-3 py-3 shadow-lg border-2 rounded-xl"
                />
              </div>
            </div>

            {/* Project Detail */}
            <div class="col-start-1 col-end-3">
              <div className="flex flex-col gap-y-1">
                <label htmlFor="projectdetail" className="text-[#757575] ml-1">
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
                className="text-[#FFFFFF] bg-[#4C6BDC] py-4 rounded-xl w-full sm:w-72 cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
