import { React } from "react";
import CardCompany from "./CardCompany";

const CompanyProfile = () => {
  return (
    <div class="w-full px-[2rem] md:px-[6rem] lg:px-[8rem]">
      <div class="mt-12 flex justify-center flex-col items-center text-center md:mb-0">
        <h1 class="md:lg:text-5xl text-4xl font-bold text-[#1363DF] ">
          Our Company Philosophy
        </h1>
        <p class="w-[20rem] sm:w-[42rem] lg:w-[70%] text-[#757575] mt-4 text-[16px] lg:text-[20px]">
          We are obliged to fulfill the maximum potential of your enterprises
          and business. Conduct research on every variable that exists,
          determine the direction in solving problems, generate ideas in
          progress development, and create digital products as a complete
          solution.
        </p>
      </div>
      <div class="w-full mb-32 mt-2 sm:mt-12 lg:mt-36">
        <div class="flex justify-center flex-wrap items-center">
          <CardCompany
            cardDescProps={
              "Creating era of digitalization for industry at any level of society in order to develop together and living the  best future together"
            }
            cardTitleProps={"Vision"}
          />
          <CardCompany
            cardDescProps={
              "Becoming client partner in technology reformation in achieving the highest potential of company performance"
            }
            cardTitleProps={"Mission"}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
