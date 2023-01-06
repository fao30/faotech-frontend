import { motion } from "framer-motion";
import React from "react";

const CardWork = ({ cardIconProps, cardTitleProps }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 0 }}
      whileTap={{
        rotate: 5,
        scaleY: 1,
        borderRadius: "100%",
      }}
    >
      <div class="flex justify-between items-center  hover:cursor-pointer">
        <div class="bg-white text-ourWork-100 font-bold m-3 shadow-xl rounded-2xl">
          <div class="flex flex-row justify-start items-center w-[8rem] h-12 sm:h-16 sm:w-40 lg:h-16 lg:w-72 ml-4">
            <div class="fixed"> {cardIconProps} </div>
            <div class="text-[#333333] ml-10 text-[12px] sm:text-base md:lg:text-base font-normal">
              {cardTitleProps}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardWork;
