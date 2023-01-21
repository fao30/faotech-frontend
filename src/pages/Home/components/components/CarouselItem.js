import React from "react";

const CarouselItem = ({ carouselPictureProps }) => {
  return (
    <div className="carousel-item">
      <img
        alt=""
        src={carouselPictureProps}
        className="rounded-box w-[36rem] object-cover grayscale"
      />
    </div>
  );
};

export default CarouselItem;
