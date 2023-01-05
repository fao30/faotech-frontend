import React from "react";

const CardTech = ({ cardIconProps, cardTitleProps }) => {
  return (
    <div class="flex justify-between items-center transition-all transform hover:scale-105 hover:cursor-pointer">
      <div class="bg-white text-ourWork-100 font-bold m-3 shadow-xl rounded-2xl">
        <div class="flex flex-row justify-start items-center w-[7rem] h-12 sm:h-16 sm:w-40 lg:h-16 lg:w-52 ml-4">
          <div class="fixed"> {cardIconProps} </div>
          <div class="text-[#4D4646] ml-10 text-[16px] lg:text-[20px] font-normal">
            {cardTitleProps}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTech;
