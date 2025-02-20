import { useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import useTheme from "../context/Context";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {themeMode}=useTheme()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // const mobileMenu = document.getElementById("mobileMenu");
    // mobileMenu?.classList.toggle("hidden");
  };
  return (
    <div className="flex justify-center">
      <nav className="w-full sm:w-full lg:w-3/5 h-12 dark:bg-navbar-black bg-gray-400 rounded-b-lg flex p-2 dark:text-navbar-text-color shadow-md dark:shadow-white shadow-black">
        {/* logo */}
        <div className="w-1/2 flex items-center pl-4 sm:pl-6">
          <a
            href="#home"
            onClick={() => {
              scrollToSection("home");
            }}
          >
            <img
              src={themeMode === "dark" ? "src/assets/logo-white.png" : "src/assets/logo-black.png"}
              alt="logo"
              className="h-8 sm:h-8"
            />
          </a>
        </div>
        {/* Desktop Menu (visible on large screens) */}
        <ul className="hidden sm:flex w-1/2 items-center justify-around">
          {/* <li className="hover:text-blue-500  cursor-pointer flex justify-center">
            <a
              href="#home"
              onClick={() => {
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li> */}
          <li className="dark:hover:text-blue-500 hover:text-white cursor-pointer flex justify-center">
            <a
              href="#timeline"
              onClick={() => {
                scrollToSection("timeline");
              }}
            >
              Timeline
            </a>
          </li>
          <li className="dark:hover:text-blue-500 hover:text-white cursor-pointer flex justify-center">
            <a
              href="#skills"
              onClick={() => {
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li className="dark:hover:text-blue-500  hover:text-white cursor-pointer flex justify-center">
            <a
              href="#projects"
              onClick={() => {
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          {/* <li className="hover:text-blue-500  cursor-pointer flex justify-center">
            <a
              href="#testimonials"
              onClick={() => {
                scrollToSection("testimonials");
              }}
            >
              Testimonials
            </a>
          </li> */}
          <li className="dark:hover:text-blue-500 hover:text-white cursor-pointer flex justify-center">
            <a
              href="#contact"
              onClick={() => {
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* mobile menu button (visible on small screens)*/}
        <div className="sm:hidden w-1/2 flex justify-end pr-4">
          <button
            className="sm:hidden dark:text-navbar-text-color dark:hover:text-blue-500"
            onClick={() => {
              toggleMobileMenu();
            }}
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        <ul
          id="mobileMenu"
          className={`sm:hidden bg-navbar-black text-navbar-text-color flex-col items-center justify-center rounded-lg mt-2 absolute top-12 right-4 w-28 h-28 ${
            isMobileMenuOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out rounded-lg`}
        >
          {/* <li className="hover:text-blue-500  cursor-pointer flex justify-center">
            <a
              href="#home"
              onClick={() => {
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li> */}
          <li className="hover:text-blue-500  cursor-pointer flex justify-center">
            <a
              href="#timeline"
              onClick={() => {
                scrollToSection("timeline");
              }}
            >
              TimeLine
            </a>
          </li>
          <li className="hover:text-blue-500  cursor-pointer flex justify-center">
            <a
              href="#skills"
              onClick={() => {
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li className="hover:text-blue-500  cursor-pointer flex justify-center">
            <a
              href="#projects"
              onClick={() => {
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          {/* <li className="hover:text-blue-500  cursor-pointer flex justify-center">
            <a
              href="#testimonials"
              onClick={() => {
                scrollToSection("testimonials");
              }}
            >
              Testimonials
            </a>
          </li> */}
          <li className="hover:text-blue-500  cursor-pointer flex justify-center">
            <a
              href="#contact"
              onClick={() => {
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <ThemeSwitcher/>
      </nav>
    </div>
  );
}

export default Navbar;
