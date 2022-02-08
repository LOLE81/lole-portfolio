import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectsAndSkills from "./components/projectsAndSkills/ProjectsAndSkills"
import Contact from "./components/contact/Contact"
import { useSelector } from "react-redux";
import Toggle from "./components/toggle/Toggle";

const App = () => {
  
  const darkMode = useSelector(state => state.darkMode)

  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle />
      <Intro/>
      <About/>
      <ProjectsAndSkills/>
      <Contact/>
    </div>
    
  );
};

export default App;