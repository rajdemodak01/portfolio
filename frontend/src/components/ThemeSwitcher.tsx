// import React from 'react'

import useTheme from "../context/Context"

function ThemeSwitcher() {
    console.log("themeSwitcher rendered")
    const { setTheme } = useTheme(); // Ensure this is correctly imported
  
    const themeContext = useTheme();
    console.log("Theme Context:", themeContext); // Check if context is available
  
    if (!themeContext) {
      console.error("ThemeSwitcher is not inside ThemeProvider!");
      return null;
    }
    
    return (
      <div className="fixed right-20 lg:p-2 lg:top-2 sm:top-16 p-1 sm:right-4 bg-gray-700 rounded-lg z-50">
        <button onClick={() => { console.log("clicked"); setTheme("light"); }} className="sm:px-2 px-1">☀️</button>
        <button onClick={() => { setTheme("dark"); }} className="sm:px-2 px-1">🌙</button>
        <button onClick={() => {
          const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          setTheme(systemPrefersDark ? "dark" : "light");
        }} className="sm:px-2 px-1">🖥️</button>
        {/* <button onClick={() => console.log("Test button clicked")} className="p-4 bg-blue-500 text-white">Test</button> */}
      </div>
    );
  }

export default ThemeSwitcher