import React from "react";

const Header = () => {
  return (
    <div className="bg-dark-gray text-white flex justify-between items-center ">
      <h1 className="pl-2">EPIC GAMES</h1>
      <button
        className="bg-light-blue flex items-center justify-center w-16 h-12 relative"
        type="button"
      >
        <span className="w-1/2 h-[3px] bg-white absolute -mt-4 rounded-md"></span>
        <span className="w-1/2 h-[3px] bg-white absolute rounded-md"></span>
        <span className="w-1/2 h-[3px] bg-white absolute mt-4 rounded-md"></span>
      </button>
    </div>
  );
};

export default Header;
