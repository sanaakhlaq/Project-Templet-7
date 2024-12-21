import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center  p-4 bg-white shadow-md ">
        <Image
          src="/command.png"
          alt="logo"
          width={22}
          height={11}
          className="w-30 h-22"
        />
      {/* Left Side */}
      <div className="text-lg font-bold text-gray-800 flex-1 pl-80 ">
        High Fidelity Dashboard - Home Rent
        </div>
      {/* Right Side */}
      
      <div className="text-sm text-gray-600">
        Last Updated: <span className="font-medium">8 August 2022</span>
        
      </div>

      
      
   
    </header>
    
  );
};

export default Header;
