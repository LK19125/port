import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Intern from "./components/Intern";
import Contact from "./components/Contact";
import Myapp from "./components/Myapp";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Navbar />
    <About />
    <Skill />
    <Project />
    <Intern />
    <Contact /> */}
    {/* <Navbar /> */}
    {/* <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<About />} />
        <Route path="skill" element={<Skill />} />
        <Route path="project" element={<Project />} />
        <Route path="intern" element={<Intern />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes> */}
    {/* <App /> */}
    <Myapp />
  </BrowserRouter>
);
