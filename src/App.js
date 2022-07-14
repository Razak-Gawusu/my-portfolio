import React, {useState} from "react";
import './styles/main.css'
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Footer from './components/Footer/Footer';
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";

function App() {
  const [theme, setTheme] = useState(false)

  const toggleTheme = () => {
    setTheme(prevState => !prevState)
  }
  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme}/> 
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
