import React, { useEffect, useState } from "react";

//create your first component
const Trafficlight = () => {
const colors = ["red", "yellow", "green"];
const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light">
      {colors.map((color, index) => (
        <div
          key={color}
          className={`light ${color} ${index === currentColorIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};


export default Trafficlight;