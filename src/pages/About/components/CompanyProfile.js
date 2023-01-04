import { React } from "react";
import CardCompany from "./CardCompany";

const CompanyProfile = () => {
  return (
    <div class="w-full">
      <div class="mt-20 flex justify-center flex-col items-center text-center mx-10 md:mx-20 lg:mx-[9.6rem] md:mb-0">
        <h1 class="md:lg:text-5xl text-4xl font-bold text-[#1363DF] ">
          Our Company Philosophy
        </h1>
        <p class="w-[82%] text-[#757575] mt-4 indent-8 text-[16px]">
          we are obliged to fulfill the maximum potential of your enterprises
          and business. Conduct research on every variable that exists,
          determine the direction in solving problems, generate ideas in
          progress development, and create digital products as a complete
          solution.
        </p>
      </div>
      <div class="w-full mb-32 mt-12 md:mt-48">
        <div class="flex justify-center min-[1280px]:justify-between flex-wrap items-center mx-10 lg:mx-[9.6rem]">
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
