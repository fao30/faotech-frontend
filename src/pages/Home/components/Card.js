import React from "react";

const Card = ({ cardDescProps, cardIconProps, cardTitleProps }) => {
  return (
    <div class="card w-32 xl:w-96 lg:w-64 md:w-52 sm:w-52 shadow-xl mt-2 from-accent to-base-300 bg-gradient-to-t">
      <div class="card-body text-left">
        <h2 class="card-title text-sm md:text-xl lg:text-2xl">
          {cardTitleProps}
        </h2>
        <p class="hidden md:flex lg:flex">{cardDescProps}</p>
        <div class="card-actions justify-start lg:justify-end">
          <img src={cardIconProps} class="w-12 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Card;
