"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Correctly importing useRouter

export default function PaymentPage() {
  const router = useRouter(); // Initialize the router

  return (
    <div className="p-6 md:p-8 lg:p-16 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Complete Your Booking
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Billing Info & Forms */}
        <div className="lg:col-span-2 space-y-8">
          {/* Billing Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-bold mb-4">Billing Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
          </div>

          {/* Rental Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-bold mb-4">Rental Info</h2>
            <div className="space-y-4">
              {/* Pick-Up Info */}
              <div>
                <h3 className="font-semibold mb-2">Pick-Up</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Location"
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                  <input
                    type="date"
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                  <input
                    type="time"
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                </div>
              </div>

              {/* Drop-Off Info */}
              <div>
                <h3 className="font-semibold mb-2">Drop-Off</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Location"
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                  <input
                    type="date"
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                  <input
                    type="time"
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-bold mb-4">Confirmation</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>I agree to receive marketing and newsletter emails.</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-5 h-5" />
                <span>
                  I agree with all terms and conditions and privacy policy.
                </span>
              </label>
            </div>
            <button
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              onClick={() => router.push("/dashboard")} // Navigate to Dashboard
            >
              Rent Now
            </button>
          </div>
        </div>

        {/* Right Section: Rental Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-bold mb-4">Rental Summary</h2>
          <div className="flex items-center space-x-4 mb-4">
            <Image
              src="/car2.png"
              width={60}
              height={40}
              alt="Car"
              className="w-24 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-bold">Nissan GT - R</h3>
              <p className="text-gray-500 text-sm">440+ Reviewer</p>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$80.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Rental Price</span>
              <span>$80.00</span>
            </div>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              onClick={() => router.push("/dashboard")} // Navigate to Dashboard
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
