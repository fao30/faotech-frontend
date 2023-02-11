import React from "react";

const CardHero = ({ cardDescProps, cardIconProps, cardTitleProps }) => {
  return (
    <div className="w-full md:w-[75%] lg:w-[95%] xl:w-[90%] 2xl:w-[80%] bg-white text-ourWork-100  my-2 shadow-xl rounded-2xl transition-all transform hover:scale-105 hover:cursor-pointer">
      <div className="p-6 2xl:h-[10rem] flex flex-row flex-wrap justify-start items-center w-full">
        <div className="fixed"> {cardIconProps} </div>
        <div className="ml-20 flex flex-col">
          <p className="font-semibold pBigger">{cardTitleProps}</p>
          <p className="text-[#766868]">{cardDescProps}</p>
        </div>
      </div>
    </div>
  );
};

export default CardHero;
