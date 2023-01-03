import React from "react";

const CardMini = ({ cardDescProps, cardIconProps, cardTitleProps }) => {
  return (
    <div class="flex justify-between items-center transition-all transform hover:scale-105 hover:cursor-pointer">
      <div class="bg-white text-ourWork-100 font-bold mx-5 my-3 shadow-2xl rounded-2xl">
        <div class="flex flex-row flex-wrap justify-start items-center w-80 lg:w-[25rem] h-32 ml-4">
          <div class="fixed pl-4"> {cardIconProps} </div>
          <div class="ml-24 text-s sm:text-base md:lg:text-base font-normal mr-5">
            <h1 class="font-bold text-lg">{cardTitleProps}</h1>
            <p class=" text-sm text-[#766868]">{cardDescProps}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMini;
