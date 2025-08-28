import React, { useEffect, useRef, useState } from "react";
import "../styles/skillStyle.css";

const SkillDonut = ({ skill, percent, color = "#3b82f6" }) => {
  const [current, setCurrent] = useState(0);
  const [inView, setInView] = useState(false);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const circleRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let progress = 0;
    const interval = setInterval(() => {
      if (progress <= percent) {
        setCurrent(progress);
        const offset = circumference - (progress / 100) * circumference;
        if (circleRef.current) {
          circleRef.current.style.strokeDashoffset = offset;
        }
        progress++;
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [inView, percent, circumference]);

  return (
    <div className="donut-chart" ref={chartRef}>
      <svg width="150" height="150">
        <circle className="donut-bg" cx="75" cy="75" r={radius} />
        <circle
          ref={circleRef}
          className="donut-progress"
          cx="75"
          cy="75"
          r={radius}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
        />
      </svg>
      <div className="donut-label">
        <h3>{skill}</h3>
        <span>{current}%</span>
      </div>
    </div>
  );
};

export default SkillDonut;
