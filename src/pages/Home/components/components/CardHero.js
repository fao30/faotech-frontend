import React from "react";

const CardHero = ({ cardDescProps, cardIconProps, cardTitleProps }) => {
  return (
    <div className="w-full md:w-[75%] lg:w-full xl:w-[80%] bg-white text-ourWork-100  my-2 shadow-xl rounded-2xl transition-all transform hover:scale-105 hover:cursor-pointer">
      <div className="p-6 lg:h-[9rem] flex flex-row flex-wrap justify-start items-center w-full">
        <div className="fixed"> {cardIconProps} </div>
        <div className="ml-20 flex flex-col">
          <p className="font-semibold">{cardTitleProps}</p>
          <p className="text-[#766868] pSmaller">{cardDescProps}</p>
        </div>
      </div>
    </div>
  );
};

export default CardHero;
