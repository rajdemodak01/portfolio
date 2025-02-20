// import React from 'react'

import useTheme from "../context/Context"

function TimeLine() {
  const {themeMode}=useTheme()
  return (
    <div className='dark:text-white grid md:grid-cols-2 auto-rows-auto md:pl-64 md:pr-64 pt-10 pl-5 pr-5'>
      <div className="col-start-1 row-start-1 px-10 py-4 border-l-2 md:border-l-0 md:border-r-2 dark:border-white border-black md:text-end relative">
        <h1 >Timeline 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad dolore quam placeat distinctio, odit, repellat quis temporibus deserunt aspernatur similique numquam tempore sapiente reprehenderit deleniti mollitia iste minima nam.</p>
        <div className="hidden md:flex size-10 bg-black dark:bg-white rounded-full absolute top-[-8px] right-[-20px]  items-center justify-center">
          <img src={themeMode==="dark" ? "src/assets/logo-black.png":"src/assets/logo-white.png"} alt="image" className="size-7"/>
        </div>
        <div className="md:hidden flex size-10 bg-black dark:bg-white rounded-full absolute top-[-8px] left-[-20px] items-center justify-center">
          <img src={themeMode==="dark" ? "src/assets/logo-black.png":"src/assets/logo-white.png"} alt="image" className="size-7"/>
        </div>
      </div>
      <div className="md:col-start-2 row-start-2 px-10 py-4 border-l-2 md:border-r-0 md:border-l-2 dark:border-white border-black md:m-[-1px]  relative">
        <h1>Timeline 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad dolore quam placeat distinctio, odit, repellat quis temporibus deserunt aspernatur similique numquam tempore sapiente reprehenderit deleniti mollitia iste minima nam.</p>
        <div className="size-10 bg-black dark:bg-white rounded-full absolute top-3 left-[-20px] flex items-center justify-center">
          <img src={themeMode==="dark" ? "src/assets/logo-black.png":"src/assets/logo-white.png"} alt="image" className="size-7"/>
        </div>
      </div>
      <div className="col-start-1 row-start-3 px-10 py-4 border-l-2 md:border-l-0 md:border-r-2 dark:border-white border-black relative md:text-end">
        <h1>Timeline 3</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad dolore quam placeat distinctio, odit, repellat quis temporibus deserunt aspernatur similique numquam tempore sapiente reprehenderit deleniti mollitia iste minima nam.</p>
        <div className="hidden md:flex size-10 bg-black dark:bg-white rounded-full absolute top-3 right-[-20px]  items-center justify-center">
          <img src={themeMode==="dark" ? "src/assets/logo-black.png":"src/assets/logo-white.png"} alt="image" className="size-7"/>
        </div>
        <div className="md:hidden flex size-10 bg-black dark:bg-white rounded-full absolute top-3 left-[-20px]  items-center justify-center">
          <img src={themeMode==="dark" ? "src/assets/logo-black.png":"src/assets/logo-white.png"} alt="image" className="size-7"/>
        </div>
      </div>
    </div>
  )
}

export default TimeLine