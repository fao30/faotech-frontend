import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col px-[1rem] sm:px-[3rem] md:px-[9.5rem] space-y-10">
      <div className="text-end p-5">
        <button
          className="rounded-tr-xl rounded-bl-xl  shadow-md px-6 py-2 hover:bg-[#4C6BDC] hover:text-white"
          onClick={() => navigate("/")}
        >
          Back to Homepage
        </button>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[#4C6BDC] text-[3rem] font-bold">
          Let’s discuss your project with our team
        </h3>
        <p className="text-[#A1A1A1] text-[1.25rem]">
          We would love to hear from you! Send us an email and we will respond
          within 24 hours.
        </p>
        {/* FORM */}
        <form className="mt-10">
          <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-5">
            {/* Your Name */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="yourname" className="text-[#757575]">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="px-3 py-3 shadow-lg border-2 rounded-xl"
              />
            </div>
            {/* Company Name */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="Companyname" className="text-[#757575]">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="px-3 py-3 shadow-lg border-2 rounded-xl"
              />
            </div>
            {/* Email Adress */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="Companyname" className="text-[#757575]">
                Email Adress
              </label>
              <input
                type="text"
                placeholder="Email Adress"
                className="px-3 py-3 shadow-lg border-2 rounded-xl"
              />
            </div>
            {/* Your Budget */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="Companyname" className="text-[#757575]">
                Your Budget
              </label>
              <input
                type="text"
                placeholder="Your Budget"
                className="px-3 py-3 shadow-lg border-2 rounded-xl"
              />
            </div>
            {/* Project Detail */}
            <div class="col-start-1 col-end-3">
              <div className="flex flex-col gap-y-1">
                <label htmlFor="Companyname" className="text-[#757575]">
                  Project Detail
                </label>
                <textarea
                  type="text"
                  className="h-[13rem] shadow-lg border-2 rounded-xl px-3 py-3"
                />
              </div>
            </div>
            {/* Submit Button */}
            <input
              type="submit"
              value="Submit Message"
              className="text-[#FFFFFF] bg-[#4C6BDC] p-3 rounded-xl"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
