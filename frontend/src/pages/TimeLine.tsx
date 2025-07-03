// import React from 'react'

import useTheme from "../context/Context";
import logoBlack from "../assets/logo-black.png";
import logoWhite from "../assets/logo-white.png";

function TimeLine() {
  const { themeMode } = useTheme();
  return (
    <div className="dark:text-white grid md:grid-cols-2 auto-rows-auto md:pl-64 md:pr-64 pt-10 pl-5 pr-5">
      <div className="col-start-1 row-start-1 border-l-2 md:border-l-0 md:border-r-2 dark:border-white border-black relative cursor-pointer" onClick={() => window.open('https://groweasy.ai/', '_blank')}>
        <div className="relative rounded-lg bg-slate-500 px-6 py-4 md:mr-10 ml-10">
          <div className="hidden md:block absolute border-8 border-transparent border-l-slate-500 left-full"></div>
          <div className="block md:hidden absolute border-8 border-transparent border-r-slate-500 right-full -mt-2"></div>
          <h1>Fullstack Intern</h1>
          <p>GrowEasy</p>
          <ul className="list-disc pl-5">
            <li>
              API Development: Built and integrated 10+ RESTful endpoints using
              Node.js and Express to support key product features.
            </li>
            <li>
              Tech Stack: Worked with various SDKs and third-party integrations
              to extend backend functionality.
            </li>
            <li>
              Debugging: Identified and resolved issues across services to
              improve performance and stability.
            </li>
            <li>
              Collaboration: Used GitHub for version control and team
              coordination through pull requests and code reviews.
            </li>
          </ul>
          <p className="md:hidden block">April 2025- Present</p>
        </div>
        <div className="hidden md:flex size-10 bg-black dark:bg-white rounded-full absolute top-[-8px] right-[-20px]  items-center justify-center">
          <img
            src={themeMode === "dark" ? logoBlack : logoWhite}
            alt="image"
            className="size-7"
          />
        </div>
        <div className="md:hidden flex size-10 bg-black dark:bg-white rounded-full absolute top-[-8px] left-[-20px] items-center justify-center">
          <img
            src={themeMode === "dark" ? logoBlack : logoWhite}
            alt="image"
            className="size-7"
          />
        </div>
      </div>
      <div className="hidden md:block md:col-start-2 row-start-1 pl-10">
        April 2025- Present
      </div>

      <div className="md:col-start-2 row-start-2 py-4 border-l-2 md:border-r-0 md:border-l-2 dark:border-white border-black md:m-[-1px]  relative  ">
        <div className="relative rounded-lg bg-slate-500 px-6 py-4 md:mr-10 ml-10">
          <div className="hidden md:block absolute border-8 border-transparent border-r-slate-500 right-full"></div>
          <div className="block md:hidden absolute border-8 border-transparent border-r-slate-500 right-full"></div>
          <h1>Education wing co-head</h1>
          <p>Samarth</p>
          <ul className="list-disc pl-5">
            <li>
              Facilitate and oversee various activities and initiatives within
              the educational society.
            </li>
            <li>
              Collaborate with students and faculty to organize engaging events,
              workshops, and seminars.
            </li>
            <li>
              Strategic planning to inspire active participation and
              contribution.
            </li>
            <li>
              Foster a culture of inclusivity, innovation, and lifelong learning
              among members.
            </li>
          </ul>
          <p className="md:hidden block">July 2024- Present</p>
        </div>
        <div className="size-10 bg-black dark:bg-white rounded-full absolute top-3 left-[-20px] flex items-center justify-center">
          <img
            src={themeMode === "dark" ? logoBlack : logoWhite}
            alt="image"
            className="size-7"
          />
        </div>
      </div>
      <div className="hidden md:block md:col-start-1 row-start-2 py-4 text-end pr-10">
        July 2024- Present
      </div>

      <div className="col-start-1 row-start-3  py-4 border-l-2 md:border-l-0 md:border-r-2 dark:border-white border-black relative">
        <div className="relative rounded-lg bg-slate-500 px-6 py-4 md:mr-10 ml-10">
          <div className="hidden md:block absolute border-8 border-transparent border-l-slate-500 left-full"></div>
          <div className="block md:hidden absolute border-8 border-transparent border-r-slate-500 right-full"></div>
          <h1>B.TECH in CSE</h1>
          <p>Techno Main Salt Lake</p>
          <ul className="list-disc pl-5">
            <li>Browsing Tools & Technologies</li>
            <li>Exploring Technologies.</li>
            <li>Engaged in various extracurricular activities and events.</li>
            <li>Participating in code reviews</li>
          </ul>
          <p className="md:hidden block">June 2020 - Present</p>
        </div>
        <div className="hidden md:flex size-10 bg-black dark:bg-white rounded-full absolute top-3 right-[-20px]  items-center justify-center">
          <img
            src={themeMode === "dark" ? logoBlack : logoWhite}
            alt="image"
            className="size-7"
          />
        </div>
        <div className="md:hidden flex size-10 bg-black dark:bg-white rounded-full absolute top-3 left-[-20px]  items-center justify-center">
          <img
            src={themeMode === "dark" ? logoBlack : logoWhite}
            alt="image"
            className="size-7"
          />
        </div>
      </div>
      <div className="hidden md:block md:col-start-2 row-start-3 pl-10 py-4">
        June 2020 - Present
      </div>

      <div className="md:col-start-2 row-start-4  py-4 border-l-2 md:border-r-0 md:border-l-2 dark:border-white border-black md:m-[-1px]  relative  ">
        <div className="relative rounded-lg bg-slate-500 px-6 py-4 md:mr-10 ml-10">
          <div className="hidden md:block absolute border-8 border-transparent border-r-slate-500 right-full"></div>
          <div className="block md:hidden absolute border-8 border-transparent border-r-slate-500 right-full"></div>
          <h1>Schooling</h1>
          <p>Bikna KPS Vidyapith | WBCHSE</p>
          <ul className="list-disc pl-5">
            <li>Studied PCMB (Physics, Chemistry, Mathematics, Biology).</li>
            <li>Engaged in various extracurricular activities and events.</li>
          </ul>
          <p className="md:hidden block">April 2018- March 2020</p>
        </div>
        <div className="size-10 bg-black dark:bg-white rounded-full absolute top-3 left-[-20px] flex items-center justify-center">
          <img
            src={themeMode === "dark" ? logoBlack : logoWhite}
            alt="image"
            className="size-7"
          />
        </div>
      </div>
      <div className="hidden md:block md:col-start-1 row-start-4 py-4 text-end pr-10">
        April 2018- March 2020
      </div>
    </div>
  );
}

export default TimeLine;
