"use client";
import React, { useState } from "react";
import Image from "next/image";

function Projects() {
  const [images, setImages] = useState([]);

  const data = {
    all: ["/first.webp", "/second.webp", "/third.webp", "/four.webp"],
    web: ["/four.webp","/first.webp" ],
    mobile: ["/second.webp", "/third.webp"],
  };

  const handleClick = (category) => {
    setImages(data[category]);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          className="py-2 px-4 text-white bg-blue-500 border border-blue-600 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          onClick={() => handleClick("all")}
        >
          All
        </button>
        <button
          className="py-2 px-4 text-white bg-gray-700 border border-gray-800 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          onClick={() => handleClick("web")}
        >
          Web
        </button>
        <button
          className="py-2 px-4 text-white bg-green-500 border border-green-600 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          onClick={() => handleClick("mobile")}
        >
          Mobile
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((url, index) => (
          <Image
            width={200}
            height={200}
            key={index}
            src={url}
            alt={`Project ${index}`}
            className="w-full h-auto object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
