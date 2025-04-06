import { Navbar, Home, About, Skills, Projects, Contact, TimeLine, Testimonials } from "."
import  { ThemeProvider } from "./context/Context"

function App() {
  return (
    <ThemeProvider>
    <div className="dark:bg-black">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar/>
      </div>
      <div className="p-12">
        <div id="home" className="pt-12"><Home/></div>
        <div id="timeline" className=""><TimeLine/></div>
        {/* <div id="about" className="h-96"><About/></div> */}
        <div id="skills" className=""><Skills/></div>
        <div id="projects" className=""><Projects/></div>
        {/* will add testimonials later */}
        {/* <div id="testimonials" className=""><Testimonials/></div> */}
        <div id="contact" className=""><Contact/></div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
