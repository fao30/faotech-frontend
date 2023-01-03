import React from "react";
import "./custom.css";

const CardMini = ({ cardIconProps, cardTitleProps, cardDescProps }) => {
  return (
    <div class="flex fle-row p-3 rounded justify-between items-center transition-all transform hover:scale-105 hover:cursor-pointer">
      <div class="bg-white text-ourWork-100 font-bold mx-5 my-3 shadow-2xl rounded-2xl">
        <div class="flex flex-row justify-start items-center w-24 h-12 sm:h-16 sm:w-40 lg:h-16 lg:w-52 ml-4">
          <div class="fixed"> {cardIconProps} </div>
          <div class="ml-10 text-s sm:text-base md:lg:text-base font-normal">
            {cardTitleProps}
            {cardDescProps}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMini;
