// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[-40px] right-20 text-white bg-gray-800 p-2 rounded-full"
      title="Previous"
    >
      <FaArrowLeft />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[-40px] right-10 text-white bg-gray-800 p-2 rounded-full"
      title="Next"
    >
      <FaArrowRight />
    </button>
  );
};


function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="slider-container dark:text-white w-full max-w-lg mx-auto mb-16 text-center">
      <h1>Projects</h1>
      <Slider {...settings}>
        <div className="col-start-1 row-start-1 px-10">Lorem1 ipsum dolor sit, amet consectetur adipisicing elit. Id nobis vel ad omnis ea possimus, fuga quidem veritatis alias incidunt, autem eum quasi dolores odio dicta non? Sapiente, esse maxime.Lorem1 ipsum dolor sit, amet consectetur adipisicing elit. Id nobis vel ad omnis ea possimus, fuga quidem veritatis alias incidunt, autem eum quasi dolores odio dicta non? Sapiente, esse maxime.</div>
        <div className="col-start-2 row-start-1 px-10">Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Id nobis vel ad omnis ea possimus, fuga quidem veritatis alias incidunt, autem eum quasi dolores odio dicta non? Sapiente, esse maxime.</div>
        <div className="col-start-1 row-start-2 px-10">Lorem3 ipsum dolor sit, amet consectetur adipisicing elit. Id nobis vel ad omnis ea possimus, fuga quidem veritatis alias incidunt, autem eum quasi dolores odio dicta non? Sapiente, esse maxime.</div>
        <div className="col-start-2 row-start-2 px-10">Lorem4 ipsum dolor sit, amet consectetur adipisicing elit. Id nobis vel ad omnis ea possimus, fuga quidem veritatis alias incidunt, autem eum quasi dolores odio dicta non? Sapiente, esse maxime.</div>
      </Slider>
    </div>
  );
}

export default Projects;
