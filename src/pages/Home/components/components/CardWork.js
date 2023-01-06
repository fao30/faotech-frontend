import React from "react";

const CardWork = ({ cardIconProps, cardTitleProps }) => {
  return (
    <div class="flex justify-between items-center  transition-all transform hover:scale-105 hover:cursor-pointer">
      <div class="bg-white text-ourWork-100 font-bold m-3 shadow-xl rounded-2xl">
        <div class="flex flex-row justify-start items-center w-[8rem] h-12 sm:h-16 sm:w-40 lg:h-16 lg:w-72 ml-4">
          <div class="absolute"> {cardIconProps} </div>
          <div class="text-[#333333] ml-10 text-[12px] sm:text-base md:lg:text-base font-normal">
            {cardTitleProps}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWork;
