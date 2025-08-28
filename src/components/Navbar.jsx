import React, { useState, useEffect } from "react";
import "../styles/navbarStyle.css";
import {
  BsBox,
  BsBriefcase,
  BsLightning,
  BsList,
  BsPersonCircle,
  BsPhone,
  BsX,
} from "react-icons/bs";

function Navbar({ scrollToSection, refs }) {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="top-left">
        <span className="typewrite">Loga Kumaresan</span>
      </div>

      <div className="menu-button" onClick={toggleMenu}>
        {menuOpen ? <BsX /> : <BsList />}
      </div>

      <div className={`nav-theme-wrapper ${menuOpen ? "show" : ""}`}>
        <div className="top-right">
          <nav>
            <span onClick={() => handleNavClick(refs.aboutRef)}>
              <BsPersonCircle /> About
            </span>
            <span onClick={() => handleNavClick(refs.skillRef)}>
              <BsLightning /> Skill
            </span>
            <span onClick={() => handleNavClick(refs.projectRef)}>
              {" "}
              <BsBox /> Projects
            </span>
            <span onClick={() => handleNavClick(refs.internRef)}>
              <BsBriefcase /> Internship
            </span>
            <span onClick={() => handleNavClick(refs.contactRef)}>
              <BsPhone /> Contact
            </span>
          </nav>
        </div>

        <div className="theme-toggle">
          <button onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
