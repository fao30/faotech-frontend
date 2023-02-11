import { React } from "react";
import CardCompany from "./components/CardCompany";

const CompanyProfile = () => {
  return (
    <div className="flex flex-col justify-around">
      <div className="flex flex-wrap items-center justify-center lg:justify-around">
        <div className="grid items-end place-items-center">
          <div className="z-10 my-24 lg:mb-12 md:w-4/5 lg:w-full">
            <div className="flex flex-col flex-wrap items-center justify-center mb-6">
              <h1 className=" md:lg:  #1363DF] text-center">
                Our Company Philosophy
              </h1>
              <p className="md:w-96 lg:w-[872px] sm:text-center text-center #757575] w-96 sm:w-5/12 mt-4 indent-8 text-m">
                we are obliged to fulfill the maximum potential of your
                enterprises and business. Conduct research on every variable
                that exists, determine the direction in solving problems,
                generate ideas in progress development, and create digital
                products as a complete solution.
              </p>
            </div>

            {/* card */}
            <div className="flex justify-between flex-wrap items-center mx-10 md:mx-20 lg:mx-[9.5rem] mb-12 md:mb-24">
              <div className="flex object-center my-14 sm:justify-center lg:justify-items-center lg:flex-row sm:w-full mx:w-full position-absolute">
                <div className="flex flex-wrap items-center justify-center">
                  <div>
                    <CardCompany
                      cardDescProps={
                        "Creating era of digitalization for industry at any level of society in order to develop together and living the  best future together"
                      }
                      cardTitleProps={"Vision"}
                    />
                  </div>
                  {/* <div className="z-10 flex flex-wrap items-end justify-center w-full mx-10 bg-transparent lg:pr-12 rounded-box md:w-4/5 sm:w-full lg:w-2/5 lg:justify-end"> */}
                  <div>
                    <CardCompany
                      cardDescProps={
                        "Becoming client partner in technology reformation in achieving the highest potential of company performance"
                      }
                      cardTitleProps={"Mission"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
