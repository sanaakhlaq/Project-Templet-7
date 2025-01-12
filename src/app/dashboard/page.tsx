import React from "react";
import Image from "next/image";


const Dashboard = () => {
  return (
    <div className="flex bg-gray-50 h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 h-screen  flex flex-col p-4">
        
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-blue-500 font-medium">
            Dashboard
          </a>
          <a href="#" className="block text-gray-600">Car Rent</a>
          <a href="#" className="block text-gray-600">Reimburse</a>
          <a href="#" className="block text-gray-600">Inbox</a>
          <a href="#" className="block text-gray-600">Calendar</a>
          <a href="#" className="block text-gray-600">Settings</a>
          <a href="#" className="block text-gray-600">Help & Center</a>
          <a href="#" className="block text-gray-600">Dark Mode</a>
          <a href="#" className="block text-red-500">Log Out</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Details Rental */}
          <div className="bg-white shadow-md  rounded-lg p-4">
            <h3 className="text-lg font-bold mb-4">Details Rental</h3>
            <Image src="/map.3.jpg" width={300} height={250} alt="map"/>
            <div className="text-sm space-y-2">
              <p><strong>Pick-Up:</strong> Kota Semarang</p>
              <p><strong>Date:</strong> 20 July 2022</p>
              <p><strong>Time:</strong> 07:00</p>
              <p><strong>Drop-Off:</strong> Kota Semarang</p>
              <p><strong>Date:</strong> 21 July 2022</p>
              <p><strong>Time:</strong> 01:00</p>
              <p className="font-bold"><strong>Total Rental Price:</strong> $80.00</p>
            </div>
          </div>

          {/* Top 5 Car Rental */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold mb-4">Top 5 Car Rental</h3>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold text-lg">72k</div>
              <ul className="text-sm space-y-1">
                <li>SUV: 19839</li>
                <li>Coupe: 4967</li>
                <li>Hatchback: 12117</li>
                <li>MPV: 10367</li>
              </ul>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <Image src="/car1.png" width={12} height={12} alt="Car" className="w-12 h-8 object-cover rounded" />
                <span className="flex-1 ml-2">Nissan GT - R</span>
                <span>$80.00</span>
              </li>
              <li className="flex justify-between items-center">
                <Image src="/car2.png" width={12} height={12} alt="Car" className="w-12 h-8 object-cover rounded" />
                <span className="flex-1 ml-2">Koenigsegg</span>
                <span>$99.00</span>
              </li>
              <li className="flex justify-between items-center">
                <Image src="/car3.png" width={12} height={12}alt="Car" className="w-12 h-8 object-cover rounded" />
                <span className="flex-1 ml-2">Rolls-Royce</span>
                <span>$96.00</span>
              </li>
              <li className="flex justify-between items-center">
                <Image src="/car4.png" width={12} height={12} alt="Car" className="w-12 h-8 object-cover rounded" />
                <span className="flex-1 ml-2">CR - V</span>
                <span>$80.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
