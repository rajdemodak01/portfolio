// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
// import photo from "../assets/photo2.jpg"
import photo from "../assets/photo2.webp"

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[-40px] right-auto text-white bg-gray-800 p-2 rounded-full"
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
      className="absolute bottom-[-40px] right-0  text-white bg-gray-800 p-2 rounded-full"
      title="Next"
    >
      <FaArrowRight />
    </button>
  );
};

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0); 

  const handleBeforeChange = (newIndex: number) => {
    setCurrentSlide(newIndex);  
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,  
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (i: number) => (
      <div
        className={`absolute -bottom-3 w-2.5 h-2.5 rounded-full cursor-pointer
          ${currentSlide === i ? 'bg-blue-500 ' : 'bg-gray-500'}
           transition-all duration-300 ease-in-out`}
      ></div>
    ),
    
  };
  return (
    <div className="slider-container dark:text-white ">
      <h1 className="text-2xl font-semibold mb-6 text-center">Projects</h1>
      <Slider {...settings} className="max-w-96 mx-auto mb-16 pb-4">
        <div className="flex flex-col rounded-lg bg-slate-500 h-full">
          <div className="relative ml-4 mr-4 mt-4">
            <a
              href="https://github.com/rajdemodak01/the-weather-forecasting"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute m-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 20 20"
                className="fill-black dark:fill-white"
              >
                <path d="M10 1C4.477 1 0 5.477 0 11c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.704-2.782.603-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.07-.608.07-.608 1.003.07 1.53 1.031 1.53 1.031.892 1.53 2.34 1.088 2.91.833.092-.647.35-1.087.636-1.338-2.222-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.985 1.03-2.683-.103-.253-.446-1.268.098-2.64 0 0 .84-.269 2.75 1.025a9.564 9.564 0 0 1 2.5-.336 9.56 9.56 0 0 1 2.5.336c1.91-1.294 2.75-1.025 2.75-1.025.544 1.372.201 2.387.098 2.64.64.698 1.03 1.592 1.03 2.683 0 3.843-2.337 4.687-4.565 4.937.36.31.682.923.682 1.86 0 1.342-.013 2.423-.013 2.75 0 .268.18.58.688.482C17.135 19.167 20 15.42 20 11c0-5.523-4.477-10-10-10z"></path>
              </svg>
            </a>
            <img
              src={photo}
              alt="picture"
              className="rounded-lg w-full h-72 object-cover object-top"
            />
          </div>

          <div className="flex flex-col text-start p-4 gap-2">
            <a
              className="text-start font-bold underline"
              href="https://online-weather-forecasting-system.onrender.com/"
              target="blank"
            >
              Weather Forecasting System
            </a>
            <ul className="list-disc px-5">
              <li>
                Built a real-time weather forecasting system with live weather
                updates.
              </li>
              <li>Integrated APIs for accurate weather data retrieval.</li>
              <li>
                Optimized performance for faster data loading and smooth user
                experience.
              </li>
            </ul>
            <h3>#ReactJS #Node.js #MongoDB</h3>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-slate-500 h-full">
          <div className="relative ml-4 mr-4 mt-4">
            <a
              
              href="https://github.com/rajdemodak01/bitverse"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute m-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 20 20"
                className="fill-black dark:fill-white"
              >
                <path d="M10 1C4.477 1 0 5.477 0 11c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.704-2.782.603-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.07-.608.07-.608 1.003.07 1.53 1.031 1.53 1.031.892 1.53 2.34 1.088 2.91.833.092-.647.35-1.087.636-1.338-2.222-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.985 1.03-2.683-.103-.253-.446-1.268.098-2.64 0 0 .84-.269 2.75 1.025a9.564 9.564 0 0 1 2.5-.336 9.56 9.56 0 0 1 2.5.336c1.91-1.294 2.75-1.025 2.75-1.025.544 1.372.201 2.387.098 2.64.64.698 1.03 1.592 1.03 2.683 0 3.843-2.337 4.687-4.565 4.937.36.31.682.923.682 1.86 0 1.342-.013 2.423-.013 2.75 0 .268.18.58.688.482C17.135 19.167 20 15.42 20 11c0-5.523-4.477-10-10-10z"></path>
              </svg>
            </a>
            <img
              src={photo}
              alt="picture"
              className="rounded-lg w-full h-72 object-cover object-top"
            />
          </div>

          <div className="flex flex-col text-start p-4 gap-2">
            <a
              className="text-start font-bold underline"
              href="https://bitverse-eight.vercel.app/"
              target="blank"
            >
              CareerBaba
            </a>
            <ul className="list-disc px-5">
              <li>Developed CareerBaba for career guidance.</li>
              <li>Integrated AI chatbot for career advice.</li>
              <li>Implemented mentorship booking and quizzes.</li>
            </ul>
            <h3>#Next js #Socket.io #Clerk #Google Gen AI API </h3>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-slate-500 h-full">
          <div className="relative ml-4 mr-4 mt-4">
            <a
              href="https://github.com/rajdemodak01/Telegram-Bot"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute m-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 20 20"
                className="fill-black dark:fill-white"
              >
                <path d="M10 1C4.477 1 0 5.477 0 11c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.704-2.782.603-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.07-.608.07-.608 1.003.07 1.53 1.031 1.53 1.031.892 1.53 2.34 1.088 2.91.833.092-.647.35-1.087.636-1.338-2.222-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.985 1.03-2.683-.103-.253-.446-1.268.098-2.64 0 0 .84-.269 2.75 1.025a9.564 9.564 0 0 1 2.5-.336 9.56 9.56 0 0 1 2.5.336c1.91-1.294 2.75-1.025 2.75-1.025.544 1.372.201 2.387.098 2.64.64.698 1.03 1.592 1.03 2.683 0 3.843-2.337 4.687-4.565 4.937.36.31.682.923.682 1.86 0 1.342-.013 2.423-.013 2.75 0 .268.18.58.688.482C17.135 19.167 20 15.42 20 11c0-5.523-4.477-10-10-10z"></path>
              </svg>
            </a>
            <img
              src={photo}
              alt="picture"
              className="rounded-lg w-full h-72 object-cover object-top"
            />
          </div>


          <div className="flex flex-col text-start p-4 gap-2">
            <a
              className="text-start font-bold underline"
              href="https://github.com/rajdemodak01/Telegram-Bot"
              target="blank"
            >
              Expense Manager Telegram Bot
            </a>
            <ul className="list-disc px-5">
              <li>
              Integrated MongoDB for secure and persistent data storage.
              </li>
              <li>Built a Telegram bot for expense tracking with real-time logging.
              </li>
            </ul>
            <h3>#Express #Telegram Bot API #MongoDB</h3>
          </div>
        </div>

        {/* <div className="col-start-2 row-start-2 px-10">Lorem4 ipsum dolor sit, amet consectetur adipisicing elit. Id nobis vel ad omnis ea possimus, fuga quidem veritatis alias incidunt, autem eum quasi dolores odio dicta non? Sapiente, esse maxime.</div> */}
      </Slider>
    </div>
  );
}

export default Projects;
