import { useState } from "react";
import photo from "../assets/photo2.webp";

function Projects() {
  const projectsData = [
    {
      title: "Smart Reception",
      url: "https://technosmart.ai/",
      github: "https://technosmart.ai/",
      description: [
        "Built an AI-powered voice reception system for clinics.",
        "Automated appointment booking and routine queries.",
        "Reduced dependency on manual call handling.",
      ],
      technologies: "#Node.js #Express #MongoDB #AI-Voice",
    },
    {
      title: "WorkMojo",
      url: "https://workmojo.ai/",
      github: "https://workmojo.ai/",
      description: [
        "Built an AI-chat HR management platform for employee operations.",
        "Developed backend services and real-time features.",
        "Automated HR workflows through conversational interactions.",
      ],
      technologies: "#Next.js #Node.js #Express #PostgreSQL #Firebase",
    },
    {
      title: "WattWealth",
      url: "https://wattwealth.energy/",
      github: "https://wattwealth.energy/",
      description: [
        "Built backend for a solar panel installation platform using FastAPI & PostgreSQL.",
        "Developed the mobile app frontend with React Native for installers and admins.",
        "Designed scalable REST APIs to support installation workflows and data management.",
      ],
      technologies: "#Python #FastAPI #PostgreSQL",
    },
    {
      title: "Campus Care",
      url: "https://mindmates-njuk.onrender.com/",
      github: "https://github.com/ANISHAGRWAL/SIH_25",
      description: [
        "Handled backend development with secure APIs and PostgreSQL integration.",
        "Built the mobile app using Capacitor for cross-platform access.",
        "Added core features like clinical assessments, counselor booking, and admin analytics.",
      ],
      technologies:
        "#Next.js #Node.js #Express.js #PostgreSQL #Transformer #JWT",
    },
    // {
    //   title: "Weather Forecasting System",
    //   url: "https://online-weather-forecasting-system.onrender.com/",
    //   github: "https://github.com/rajdemodak01/the-weather-forecasting",
    //   description: [
    //     "Built a real-time weather forecasting system with live weather updates.",
    //     "Integrated APIs for accurate weather data retrieval.",
    //     "Optimized performance for faster data loading and smooth user experience.",
    //   ],
    //   technologies: "#ReactJS #Node.js #MongoDB",
    // },
    {
      title: "CareerBaba",
      url: "https://bitverse-eight.vercel.app/",
      github: "https://github.com/rajdemodak01/bitverse",
      description: [
        "Developed CareerBaba for career guidance.",
        "Integrated AI chatbot for career advice.",
        "Implemented mentorship booking and quizzes.",
      ],
      technologies: "#Next js #Socket.io #Clerk #Google Gen AI API",
    },
    {
      title: "Expense Manager Telegram Bot",
      url: "https://github.com/rajdemodak01/Telegram-Bot",
      github: "https://github.com/rajdemodak01/Telegram-Bot",
      description: [
        "Integrated MongoDB for secure and persistent data storage.",
        "Built a Telegram bot for expense tracking with real-time logging.",
      ],
      technologies: "#Express #Telegram Bot API #MongoDB",
    },
  ];

  return (
    <div className="dark:text-white">
      <h1 className="text-2xl font-semibold mb-6 text-center">Projects</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg bg-slate-500 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto"
          >
            <div className="relative mx-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute m-2 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 20 20"
                  className="fill-black dark:fill-white hover:fill-blue-500 transition-colors duration-200"
                >
                  <path d="M10 1C4.477 1 0 5.477 0 11c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.704-2.782.603-3.369-1.34-3.369-1.34-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.07-.608.07-.608 1.003.07 1.53 1.031 1.53 1.031.892 1.53 2.34 1.088 2.91.833.092-.647.35-1.087.636-1.338-2.222-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.985 1.03-2.683-.103-.253-.446-1.268.098-2.64 0 0 .84-.269 2.75 1.025a9.564 9.564 0 0 1 2.5-.336 9.56 9.56 0 0 1 2.5.336c1.91-1.294 2.75-1.025 2.75-1.025.544 1.372.201 2.387.098 2.64.64.698 1.03 1.592 1.03 2.683 0 3.843-2.337 4.687-4.565 4.937.36.31.682.923.682 1.86 0 1.342-.013 2.423-.013 2.75 0 .268.18.58.688.482C17.135 19.167 20 15.42 20 11c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </a>
              <img
                src={photo}
                alt={`${project.title} screenshot`}
                className="rounded-lg w-full h-40 object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col text-start p-3 gap-2 flex-grow">
              <a
                className="text-start font-bold underline hover:text-blue-400 transition-colors duration-200"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
              <ul className="list-disc px-4 flex-grow">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-1 text-xs leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="text-xs text-gray-300 mt-2">
                {project.technologies}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
