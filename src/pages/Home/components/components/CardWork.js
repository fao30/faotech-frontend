import React from "react";

const CardWork = ({ cardIconProps, cardTitleProps }) => {
  return (
    <div className="items-center flex h-[4rem] m-2 bg-white text-ourWork-100  shadow-xl border-2 rounded-2xl w-[45%] md:w-[25%] lg:w-[20%] transition-all transform hover:scale-105 hover:cursor-pointer">
      <div className="px-2 lg:px-4 flex flex-row flex-wrap justify-start items-center w-full h-12">
        <div className="fixed ml-1"> {cardIconProps} </div>
        <p className="text-[#333333] ml-10 pSmaller max-sm:text-sm">
          {cardTitleProps}
        </p>
      </div>
    </div>
  );
};

export default CardWork;
