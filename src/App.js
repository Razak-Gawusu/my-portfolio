import React from "react";
import './styles/main.css'
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Footer from './components/Footer/Footer';
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import ThemeProvider from "./contexts/ThemeProvider";

function App() {
  
  return (
    <div className="App">
      <ThemeProvider>
        <Header/> 
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
