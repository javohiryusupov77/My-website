"use client";
import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <div>
      <TypeAnimation
        className="inline-block bg-gradient-to-r from-[#fff] to-[#fff] bg-clip-text text-transparent"
        sequence={[
          "Javohir Yusupov",
          500,
          " a frontend developer",
          500,
          "Graphic designer",
          500,
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: "3em",
          display: "inline-block",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        repeat={Infinity}
      />
    </div>
  );
};
export default Animation;
