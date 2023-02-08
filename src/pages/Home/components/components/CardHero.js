import React from "react";

const CardHero = ({ cardDescProps, cardIconProps, cardTitleProps }) => {
  return (
    <div className="w-full lg:w-[75%] bg-white text-ourWork-100 font-bold m-2 shadow-xl rounded-2xl transition-all transform hover:scale-105 hover:cursor-pointer">
      <div className="px-6 flex flex-row flex-wrap justify-start items-center w-full h-36">
        <div className="fixed"> {cardIconProps} </div>
        <div className="ml-20 text-s sm:text-base md:lg:text-base font-normal ">
          <h1 className="font-bold text-[16px] md:text-[20px] ">
            {cardTitleProps}
          </h1>
          <p className=" text-sm text-[#766868] text-[16px] md:text-[17px] lg:text-[18px]">
            {cardDescProps}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHero;
