import React, { useEffect, useRef, useState } from "react";
import "../styles/aboutStyle.css";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = aboutRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="">
      <h1 className="title">About</h1>
      <div className="align">
        <div className="about">
          <div className="about-me">
            <p>
              <div>
                Hello! I'm{" "}
                <strong
                  className={isVisible ? "typewriter" : ""}
                  ref={aboutRef}
                >
                  Logakumaresan
                </strong>
              </div>
              I'm a passionate <strong>Web Developer</strong> with a knack for
              creating engaging and efficient solutions. With a strong
              foundation in web development, I enjoy transforming ideas into
              digital reality.
            </p>
          </div>
          <div className="about-img">
		  
            <img
              src="https://i.ibb.co/0pMnvksT/IMG-20250521-103600.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
