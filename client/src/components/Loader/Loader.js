import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 ">
      <div className="loader-wrapper">
        <svg>
          <circle cx="70" cy="70" r="50"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
