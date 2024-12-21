import React from "react";
import { FiSearch,} from "react-icons/fi";
import { AiOutlineHeart, AiOutlineBell } from "react-icons/ai";


import Image from "next/image"; // Importing Next.js Image Component


const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
         
          <span className="text-xl font-bold text-blue-600">
            MOR<span className="text-blue-600">ENT</span>
          </span>
        </div>
        <div className="relative flex items-center pl-14">
          <input
            type="text"
            placeholder="Search something here"
            className="w-[492px] h-[44px] p-2 pl-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 text-blue-500">
            <FiSearch size={18} />
          </button>
        </div>

        {/* Navigation (hidden for mobile) */}
        <div className="relative flex items-center pl-14">
          
        {/* Icons */}
        <div className="flex items-center space-x-4">
        <AiOutlineHeart className="text-gray-600 cursor-pointer" size={22} />
        <AiOutlineBell className="text-gray-600" size={22} />
        
          {/* Heart Icon */}
          <button
            className="p-2 text-gray-700 hover:text-blue-600"
            aria-label="Favorites"
             
          >
            <Image src="/settings.png" alt="Favorites" width={24} height={24} />
          </button>
          {/* User Profile Icon */}
          <button
            className="p-2 text-gray-700 hover:text-blue-600"
            aria-label="User Profile"
          >
            <Image src="/profil.png" alt="User Profile" width={24} height={24} />
          </button>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
