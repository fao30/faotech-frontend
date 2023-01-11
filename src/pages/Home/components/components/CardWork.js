import React from "react";

const CardWork = ({ cardIconProps, cardTitleProps }) => {
  return (
    <div className="items-center flex h-[4rem] m-2 bg-white text-ourWork-100 font-bold shadow-xl border-2 rounded-2xl w-[45%] md:w-[25%] lg:w-[20%] transition-all transform hover:scale-105 hover:cursor-pointer">
      <div className="px-2 lg:px-4 flex flex-row flex-wrap justify-start items-center w-full h-12">
        <div className="fixed"> {cardIconProps} </div>
        <div className="text-[#333333] ml-9 md:text-[16px] text-[14px] font-normal">
          {cardTitleProps}
        </div>
      </div>
    </div>
  );
};

export default CardWork;
