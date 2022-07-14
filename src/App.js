import React from "react";
import './styles/main.css'
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Footer from './components/Footer/Footer';
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
