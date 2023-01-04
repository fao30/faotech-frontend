import { React } from "react";
import CardCompany from "./components/CardCompany";

const CompanyProfile = () => {
  return (
    <div class="grid place-items-center items-end">
      <div class="mt-6 lg:mb-12  z-10 md:w-4/5 lg:w-full">
        <div class="flex flex-col justify-center flex-wrap items-center mb-6">
          <h1 class="text-3xl md:lg:text-2xl font-intern text-[#1363DF] text-center">
            Our Company Philosophy
          </h1>
          <p class="md:w-96 lg:w-[872px] text-center text-[#757575] w-96 sm:w-5/12 mt-4 indent-8 text-m">
            we are obliged to fulfill the maximum potential of your enterprises
            and business. Conduct research on every variable that exists,
            determine the direction in solving problems, generate ideas in
            progress development, and create digital products as a complete
            solution.
          </p>
        </div>

        {/* card */}

        <div class="flex  sm:justify-center  flex-row sm:w-full  space-x-4 object-center position-absolute">
          {/* <div class="lg:pr-12 z-10 mx-10 rounded-box w-full md:w-4/5 sm:w-full lg:w-2/5 bg-transparent flex justify-center lg:justify-end flex-wrap items-start"> */}
          <div>
            <CardCompany
              cardDescProps={
                "Creating era of digitalization for industry at any level of society in order to develop together and living the  best future together"
              }
              cardTitleProps={"Vision"}
            />
          </div>
          {/* </div> */}
          {/* <div class="lg:pr-12 z-10 mx-10 rounded-box w-full md:w-4/5 sm:w-full lg:w-2/5 bg-transparent flex justify-center lg:justify-end flex-wrap items-end"> */}
          <div>
            <CardCompany
              cardDescProps={
                "Becoming client partner in technology reformation in achieving the highest potential of company performance"
              }
              cardTitleProps={"Mission"}
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
