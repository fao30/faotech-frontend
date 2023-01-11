import React from "react";

const CarouselItem = ({ carouselPictureProps }) => {
  return (
    <div className="carousel-item">
      <img
        alt=""
        src={carouselPictureProps}
        className="rounded-box w-[36rem]"
      />
    </div>
  );
};

export default CarouselItem;
