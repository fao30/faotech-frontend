import React from "react";

const CardCompany = ({ cardDescProps, cardTitleProps }) => {
  return (
    <div class="bg-[#FEFEFF] text-ourWork-100 font-bold mx-5 my-3 shadow-xl rounded-2xl">
      <div class="flex flex-row space-x-4 flex-wrap justify-start items-center w-[21rem] md:w-[34rem] h-52">
        <div class="mx-5 text-s sm:text-base md:lg:text-base font-normal ">
          <h1 class=" text-[#1363DF] text-center md:lg:text-3xl text-3xl font-[600]">
            {cardTitleProps}
          </h1>
          <p class=" text-[#757575] text-center mt-4 text-[16px] md:text-[18px]  font-[400]">
            {cardDescProps}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCompany;