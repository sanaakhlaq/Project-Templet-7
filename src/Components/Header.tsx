import Image from "next/image";
import { FaSearch, FaSlidersH, FaHeart, FaBell, FaCog } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">MORENT</h1>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:w-1/3">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search something here"
            className="flex-grow bg-transparent outline-none text-gray-600"
          />
          <FaSlidersH className="text-gray-400 ml-2" />
        </div>

        {/* Icons & Avatar */}
        <div className="flex items-center justify-center space-x-4">
          {/* Icons */}
          <FaHeart className="text-gray-500 hover:text-blue-600 text-lg cursor-pointer" />
          <div className="relative">
            <FaBell className="text-gray-500 hover:text-blue-600 text-lg cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
          </div>
          <FaCog className="text-gray-500 hover:text-blue-600 text-lg cursor-pointer" />

          {/* User Avatar */}
          <Image
            src="/profil.png"
            width={24}
            height={24}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
        </div>
      </div>
    </nav>
  );
}
