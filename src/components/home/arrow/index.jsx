import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./styles.css"

const ArrowBounce = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set up stroke dash
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Animate drawing the arrow
    gsap.to(path, {
      delay: 5,
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        // Bounce after drawing is complete
        gsap.to(path, {
          y: 10,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });
  }, []);

  return (
    <div className="arrow-wrapper">
      
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <path
          ref={pathRef}
          d="
            M50 20 
            Q50 25, 50 30 
            L50 50 
            Q50 53, 58 53 
            L65 53 
            Q70 53, 62 63 
            L54 73 
            Q50 77, 46 73 
            L38 63 
            Q30 53, 35 53 
            L42 53 
            Q50 53, 50 50
          "
          stroke="var(--vdi-color)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

};

export default ArrowBounce;
