import React from "react";

const CardCompany = ({ cardDescProps, cardTitleProps }) => {
  return (
    <div class="p-4 w-[100%] md:w-[45%] h-[12rem] my-6 flex flex-row space-x-4 flex-wrap justify-start items-center bg-[#FEFEFF] text-ourWork-100 font-bold shadow-xl rounded-2xl">
      <div class="text-s sm:text-base md:lg:text-base font-normal ">
        <h1 class=" text-[#1363DF] text-center md:lg:text-3xl text-3xl font-[600] mb-4">
          {cardTitleProps}
        </h1>
        <p class=" text-[#757575] text-center text-[16px] md:text-[18px]  font-[400]">
          {cardDescProps}
        </p>
      </div>
    </div>
  );
};

export default CardCompany;
