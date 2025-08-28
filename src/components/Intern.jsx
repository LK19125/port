import React, { useRef, useEffect, useState } from "react";
import "../styles/internStyle.css";
//import image from "../assets/xplocode.jpeg";

const internData = [
  {
    internTitle: "Python Development",
    discription:"I successfully completed a one-month internship at Xplocode Infotech, where I developed a Python project titled “Billing Software (Console Application)”. The software automates the billing process by allowing users to enter product details and instantly generating itemized invoices with totals, discounts, and taxes. Designed as a lightweight console application, it eliminates manual errors and ensures accuracy. Through this project, I strengthened my knowledge of Python fundamentals, logical problem-solving, and clean coding practices. The internship provided valuable real-world exposure and boosted my confidence to work on advanced applications like GUI-based systems and database-driven projects.",
    picture: "data:image/jpeg;base64,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",
  },
];

const Intern = () => {
  const internRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = internRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <>
      <h1 className="title">Internship</h1>
      {internData.map((inten, id) => (
        <div key={id}>
          <h1 className="title">{inten.internTitle}</h1>
          <div className="align intern" ref={internRef}>
            <p className={isVisible ? "animated-box" : ""}>
              {inten.discription}
            </p>
            <img
              src={inten.picture}
              alt={inten.internTitle}
              className={isVisible ? "animated-box-img" : ""}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Intern;
