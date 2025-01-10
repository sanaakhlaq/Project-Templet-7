import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-auto flex flex-col gap-8 p-4 bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 h-[360px] p-6 bg-blue-400 rounded-2xl relative flex justify-center items-center overflow-hidden">
          {/* Ripple Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_10%,_transparent_10%)] bg-[length:100px_100px]"></div>

          {/* Content */}
          <div className="relative z-10 text-white p-4 text-left">
            <h1 className="text-xl md:text-3xl mb-8 font-bold text-left">
              The Best Platform <br /> for Car Rental
            </h1>
            <p className="text-sm md:text-lg mb-8 mt-5">
              Ease of doing a car rental safely and <br /> reliably. Of course
              at a low price.
            </p>
            <Link href="/payment">
            <button className="bg-blue-800 hover:bg-blue-600 text-white py-2 mb-16 px-4 rounded-lg shadow-lg">
              Rental Car
            </button>
            </Link>
          </div>

          {/* Car Image */}
          <Image
            src="/car1.png"
            width={250}
            height={150}
            alt="Car 1"
            className="absolute bottom-0 w-auto h-28 md:h-46 object-contain z-10"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-[360px] bg-blue-500 rounded-2xl relative flex justify-center items-center overflow-hidden">
          {/* Chevron Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_transparent_25%,_rgba(0,0,0,0.1)_25%,_rgba(0,0,0,0.1)_50%,_transparent_50%)] bg-[length:100px_100px] opacity-10"></div>

          {/* Content */}
          <div className="relative z-10 text-white text-center p-4">
            <h1 className="text-xl md:text-3xl font-bold mb-10 text-left">
              Easy way to rent a car at a low price
            </h1>
            <p className="text-sm mb-4 md:text-lg mt-5">
              Providing cheap car rental services <br /> and safe and
              comfortable facilities.
            </p>
            <Link href="/payment">
            <button className="bg-blue-400 hover:bg-blue-700 text-white py-2 mr-52 mb-6  px-4 rounded-lg shadow-lg">
              Rental Car
            </button>
            </Link>
          </div>

          {/* Car Image */}
          <Image
            src="/car2.png"
            width={150}
            height={100}
            alt="Car 2"
            className="absolute bottom-0 w-auto h-28 md:h-46 object-contain z-10"
          />
        </div>
      </div>

      {/* Pick and Drop Section */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mt-8 bg-white p-4 rounded-xl shadow-lg">
        {/* Pick-Up */}
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-gray-700 text-sm font-semibold mb-1">
            Pick-Up Location
          </label>
          <input
            type="text"
            placeholder="Enter location"
            className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date */}
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-gray-700 text-sm font-semibold mb-1">
            Date
          </label>
          <input
            type="date"
            className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Time */}
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-gray-700 text-sm font-semibold mb-1">
            Time
          </label>
          <input
            type="time"
            className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Center-Aligned Swap Button */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l5.25-5.25M4.5 12l5.25 5.25M4.5 12h15m0 0l-5.25-5.25M19.5 12l-5.25 5.25"
              />
            </svg>
          </button>
        </div>

        {/* Drop-Off */}
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-gray-700 text-sm font-semibold mb-1">
            Drop-Off Location
          </label>
          <input
            type="text"
            placeholder="Enter location"
            className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Drop-Off Date */}
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-gray-700 text-sm font-semibold mb-1">
            Date
          </label>
          <input
            type="date"
            className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Drop-Off Time */}
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-gray-700 text-sm font-semibold mb-1">
            Time
          </label>
          <input
            type="time"
            className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
