import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Intern from "../components/Intern";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const internRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ aboutRef, skillRef, projectRef, internRef, contactRef }}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillRef}>
        <Skill />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={internRef}>
        <Intern />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer
        scrollToSection={scrollToSection}
        refs={{ aboutRef, skillRef, projectRef, internRef, contactRef }}
      />
    </>
  );
}

export default App;
