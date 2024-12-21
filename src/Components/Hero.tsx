import Image from "next/image";
export default function Hero() {
  return (
    <div className="h-360  flex flex-col md:flex-row   gap-8 p-4 bg-gray-100">
      {/* Left Section: Ripple Background */}
      <div className="w-[640px] h-[360px] p-14 bg-blue-400 rounded-2xl relative flex justify-center items-center overflow-hidden ">
        {/* Ripple Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_10%,_transparent_10%)] bg-[length:100px_100px] "></div>

        {/* Content */}
        <div className="relative z-10 text-white  p-4 text-left ">
          <h1 className="text-3xl font-bold -mt-34 text-left pr-64">The Best Platform <br/>for Car Rental</h1>
          <p className="text-lg mt-5 pr-20 flex justyfy-start ">Ease of doing a car rental safely and <br/> reliably. Of course at a low price.</p>
          <button className="bg-blue-800 hover:bg-blue-600 text-white py-2 mt-5 px-4 rounded-lg shadow-lg">
            Rental Car
          </button>
        </div>

        {/* Car Image */}
        <Image
          src="/car1.png"
          width={250}
          height={150}
          alt="Car 1"
          className="absolute bottom-0 w-auto h-46 object-contain z-10"
        />
      </div>

      {/* Right Section: Chevron Background */}
      <div className="w-[640px] h-[360px] bg-blue-500 rounded-2xl relative flex justify-center items-center overflow-hidden">
        {/* Chevron Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_transparent_25%,_rgba(0,0,0,0.1)_25%,_rgba(0,0,0,0.1)_50%,_transparent_50%)] bg-[length:100px_100px] opacity-10"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center p-4">
          <h1 className="text-3xl font-bold -mt-34 text-left pr-64">Easy way to rent a car at a low price</h1>
          <p className="text-lg mt-5 flex justify-start pr-20">
            Providing cheap car rental services <br/> and safe and comfortable facilities.
          </p>
          <button className="bg-blue-400 hover:bg-blue-700 text-white py-2 flex mt-5  px-4 rounded-lg shadow-lg">
            Rental Car
          </button>
        </div>

        {/* Car Image */}
        <Image
          src="/car2.png"
          width={150}
          height={100}
          alt="Car 2"
          className="absolute bottom-0 w-auto h-58 object-contain z-10"
        />
      </div>
    </div>
  );
}
