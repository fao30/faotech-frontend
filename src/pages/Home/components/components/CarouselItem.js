import React from "react";

const CarouselItem = ({ carouselPictureProps }) => {
  return (
    <div className="carousel-item">
      <img
        alt=""
        src={carouselPictureProps}
        className="rounded-box w-[35rem] h-[25rem] md:h-[30rem] lg:h-[32rem] xl:h-[30rem] object-cover grayscale"
      />
    </div>
  );
};

export default CarouselItem;
