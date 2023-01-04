import React from "react";

const CardCompany = ({ cardDescProps, cardTitleProps }) => {
  return (
    <div class="bg-[#FEFEFF] text-ourWork-100 font-bold mx-5 my-3 shadow-xl rounded-2xl">
      <div class="flex flex-row flex-wrap justify-start items-center w-80 lg:w-[25rem] h-32 ml-4">
        <div class="mr-5 text-s sm:text-base md:lg:text-base font-normal ml-5">
          <h1 class="font-intern text-[#1363DF] text-center text-xl">
            {cardTitleProps}
          </h1>
          <p class="font-inter text-[#757575] text-center mt-4 text-xs">
            {cardDescProps}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCompany;
