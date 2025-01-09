"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import CarCard from "@/components/CarCard"; // Assuming you've already made the CarCard component
import { useRouter } from "next/navigation"; // For navigation

export default function CategoryPage() {
  const [filters, setFilters] = useState({
    types: [],
    capacities: [],
    price: 100,
  });

  const router = useRouter(); // Initialize router

  const cars = [
    { id: 1, name: "Car 1", price: 50, type: "SUV", capacity: "4 Person", image: "/car1.png" },
    { id: 2, name: "Car 2", price: 70, type: "Sedan", capacity: "2 Person", image: "/car2.png" },
    { id: 3, name: "Car 3", price: 40, type: "Sport", capacity: "2 Person", image: "/car3.png" },
    { id: 4, name: "Car 4", price: 90, type: "MPV", capacity: "6 Person", image: "/car4.png" },
    { id: 5, name: "Car 5", price: 60, type: "Hatchback", capacity: "4 Person", image: "/car5.png" },
    { id: 6, name: "Car 6", price: 45, type: "SUV", capacity: "8 or More", image: "/car6.png" },
    { id: 7, name: "Car 7", price: 55, type: "Sedan", capacity: "6 Person", image: "/car7.png" },
    { id: 8, name: "Car 8", price: 75, type: "Coupe", capacity: "2 Person", image: "/car8.png" },
    { id: 9, name: "Car 9", price: 80, type: "Sport", capacity: "4 Person", image: "/car9.png" },
    { id: 10, name: "Car 10", price: 35, type: "SUV", capacity: "2 Person", image: "/car10.png" },
    { id: 11, name: "Car 11", price: 85, type: "Hatchback", capacity: "8 or More", image: "/car8.png" },
    { id: 12, name: "Car 12", price: 95, type: "MPV", capacity: "6 Person", image: "/car10.png" },
  ];

  const filteredCars = cars.filter((car) => {
    const matchesType =
      filters.types.length === 0 || filters.types.includes(car.type);
    const matchesCapacity =
      filters.capacities.length === 0 || filters.capacities.includes(car.capacity);
    const matchesPrice = car.price <= filters.price;

    return matchesType && matchesCapacity && matchesPrice;
  });

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar
        onFilterChange={(newFilters) => setFilters(newFilters)}
        className="w-full md:w-1/4 bg-gray-50 p-4"
      />

      {/* Car Listings */}
      <div className="w-full md:w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Available Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))
          ) : (
            <p className="text-gray-500">No cars match your filters.</p>
          )}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => router.push("/cardetail")} // Redirect to category or another page
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            Show More Cars
          </button>
        </div>
      </div>
    </div>
  );
}
