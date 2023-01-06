import React from "react";

const CardHero = ({ cardDescProps, cardIconProps, cardTitleProps }) => {
  return (
    <div class="w-full lg:w-[75%] bg-white text-ourWork-100 font-bold m-2 shadow-xl rounded-2xl transition-all transform hover:scale-105 hover:cursor-pointer">
      <div class="px-6 flex flex-row flex-wrap justify-start items-center w-full h-36">
        <div class="fixed"> {cardIconProps} </div>
        <div class="ml-20 text-s sm:text-base md:lg:text-base font-normal ">
          <h1 class="font-bold text-[1.3rem] mb-[0.3rem]">{cardTitleProps}</h1>
          <p class=" text-sm text-[#766868] text-[16px] lg:text-[18px]">
            {cardDescProps}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHero;
