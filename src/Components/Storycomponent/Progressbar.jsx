import React, { useEffect, useState } from "react";
import "./Progressbar.css";

const Progressbar = ({ index, activeIndex, duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (index !== activeIndex) return; 

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(interval); 
        return prevProgress;
      });
    }, duration / 100);

    return () => {
      clearInterval(interval); 
    };
  }, [index, activeIndex, duration]);

 
  useEffect(() => {
    if (index === activeIndex) {
      setProgress(0);
    }
  }, [activeIndex, index]);

  const isActive = index === activeIndex;

  return (
    <div className={`progress-bar-container  ${isActive ? "active" : ""}`}>
     
      <div
        className={`${isActive ? "progress-bar" : ""}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Progressbar;
