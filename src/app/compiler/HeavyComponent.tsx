import React from "react";

const HeavyComponent: React.FC<{
  size?: {
    width: number;
    height: number;
  };
}> = () => {
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const cells = Array.from({ length: 10000 }, (_, index) => (
    <div
      key={index}
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: generateRandomColor(),
        display: "inline-block",
      }}
    ></div>
  ));

  return (
    <div>
      <h2>Heavy component</h2>
      {cells}
    </div>
  );
};

export default HeavyComponent;
