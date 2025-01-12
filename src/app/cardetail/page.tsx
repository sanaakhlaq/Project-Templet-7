"use client";

import Image from "next/image";
import Link from "next/link";

const CarDetailPage = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 lg:px-20 py-8 gap-8">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Type</h3>
          <ul className="space-y-2">
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type, index) => (
              <li key={index} className="text-gray-700">
                <input type="checkbox" id={`type-${type}`} className="mr-2" />
                <label htmlFor={`type-${type}`}>{type} (10)</label>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Capacity</h3>
          <ul className="space-y-2">
            {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity, index) => (
              <li key={index} className="text-gray-700">
                <input type="checkbox" id={`capacity-${capacity}`} className="mr-2" />
                <label htmlFor={`capacity-${capacity}`}>{capacity}</label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Price</h3>
          <input type="range" min="0" max="100" className="w-full" />
          <p className="text-gray-600 mt-2">Max. $100.00</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4">
        {/* Car Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div>
            <Image
              src="/car2.png"
              alt="Car Image"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div className="grid grid-cols-2 mt-3">
             
               
              
              <Image
               
                  src={"/View 3.png"}
                  alt={`Thumbnail `}
                  width={100}
                  height={100}
                  className="rounded-lg  cursor-pointer"
                />
                 <Image
               
               src={"/View 2.png"}
               alt={`Thumbnail `}
               width={100}
               height={100}
               className="rounded-lg  cursor-pointer"
             />
           
              
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">Nissan GT - R</h1>
            <p className="text-gray-600 mb-4">
              NISMO has become the embodiment of Nissan&#39;s outstanding performance, inspired by the
              most unforgiving proving ground, the &ldquo;race track.&#34;
            </p>
            <div className="text-gray-700 mb-4">
              <p>
                <span className="font-semibold">Type:</span> Sport
              </p>
              <p>
                <span className="font-semibold">Steering:</span> Manual
              </p>
              <p>
                <span className="font-semibold">Capacity:</span> 2 Person
              </p>
              <p>
                <span className="font-semibold">Gasoline:</span> 70L
              </p>
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-4">$80.00/day</div>
            <Link href="payment">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rent Now
            </button>
            </Link>
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Reviews</h2>
          <div className="space-y-6">
            {[1, 2].map((review) => (
              <div key={review} className="flex items-start">
                
                <Image
                  src={`/profil.png`}
                  alt="Reviewer Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />

             
                <div className="ml-4">
                  <h3 className="font-semibold">Reviewer Name</h3>
                  <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
                  <p className="text-gray-600">
                    This car was amazing to drive and exceeded my expectations!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
