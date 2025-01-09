// src/Components/CarListing.tsx
"use client"

import { useRouter } from "next/navigation";
import CarCard from "./CarCard";



const cars = [
  { id: 1, name: "Tesla Model S", price: 120, image: "/car1.png" },
  { id: 2, name: "BMW i8", price: 150, image: "/car2.png" },
  { id: 3, name: "Audi R8", price: 180, image: "/car3.png" },
  { id: 4, name: "Mercedes AMG", price: 200, image: "/car2.png" },
  { id: 5, name: "Mercedes AMG", price: 200, image: "/car4.png" },
  { id: 6, name: "Mercedes AMG", price: 200, image: "/car5.png" },
  { id: 7, name: "Mercedes AMG", price: 200, image: "/car6.png" },
  { id: 8, name: "Mercedes AMG", price: 200, image: "/car7.png" },
  { id: 9, name: "Mercedes AMG", price: 200, image: "/car8.png" },
  { id: 10, name: "Mercedes AMG", price: 200, image: "/car9.png" },
  { id: 11, name: "Mercedes AMG", price: 200, image: "/car8.png" },
  { id: 12, name: "Mercedes AMG", price: 200, image: "/car10.png" },
];

export default function CarListing() {
  const router = useRouter(); // Initialize the router

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Popular Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => router.push("/category")} // Navigate to category page
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
        >
          Show More Cars
        </button>
      </div>
    </div>
  );
}
