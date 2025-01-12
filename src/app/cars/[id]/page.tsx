"use client";

import Sidebar from "@/components/Sidebar";
import CarCard from "@/components/CarCard"; // Importing CarCard
import { useRouter } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import category from "@/app/category/page";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import paymentPage from "@/app/payment/page";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dashboard from "@/app/dashboard/page";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import cardetailPage from "@/app/cardetail/page";
const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    price: 150,
    image: "/car1.png",
    description: "Tesla Model S is an electric sedan with advanced features.",
  },
  {
    id: 2,
    name: "BMW X5",
    price: 120,
    image: "/car2.png",
    description: "BMW X5 is a luxury SUV with spacious seating.",
  },
  {
    id: 3,
    name: "Audi A6",
    price: 100,
    image: "/car3.png",
    description: "Audi A6 is a high-performance luxury sedan.",
  },
  {
    id: 4,
    name: "Audi A6",
    price: 100,
    image: "/car2.png",
    description: "Audi A6 is a high-performance luxury sedan.",
  },
  {
    id: 5,
    name: "Audi A6",
    price: 100,
    image: "/car4.png",
    description: "Audi A6 is a high-performance luxury sedan.",
  },
  {
    id: 6,
    name: "Audi A6",
    price: 100,
    image: "/car5.png",
    description: "Audi A6 is a high-performance luxury sedan.",
  },
  {
    id: 7,
    name: "Audi A6",
    price: 100,
    image: "/car6.png",
    description: "Audi A6 is a high-performance luxury sedan.",
  },
  {
    id: 8,
    name: "Audi A6",
    price: 100,
    image: "/car7.png",
    description: "Audi A6 is a high-performance luxury sedan.",
  },
  {
    id: 9,
    name: "Audi A6",
    price: 100,
    image: "/car8.png",
    description: "Audi A6 is a high-performance luxury sedan.",
  },
  {
    id: 10,
    name: "Audi A6",
    price: 100,
    image: "/car9.png",
    description: "Audi A6 is a high-performance luxury sedan.",
  },
  {
    id: 11,
    name: "Audi A6",
    price: 100,
    image: "/car8.png",
    description: "Audi A6 is a high-performance luxury sedan.",
  },
  {
    id: 12,
    name: "Audi A6",
    price: 100,
    image: "/car10.png",
    description: "Audi A6 is a high-performance luxury sedan.",
  },

];

export default function CarDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const carId = params.id;

  // Find the specific car based on the ID
  const carDetail = cars.find((car) => car.id === Number(carId));

  if (!carDetail) {
    return <p>Car not found!</p>; // Handle invalid ID
  }

  const handleRentNow = () => {
    router.push("/payment"); // Redirect to payment page
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar onFilterChange={(filters) => console.log(filters)} />

      {/* Main Content */}
      <div className="w-3/4 p-8">
        {/* Using CarCard */}
        <CarCard car={carDetail} />

        {/* Additional Details */}
        <p className="text-lg mb-4 mt-4">{carDetail.description}</p>

        {/* Rent Now Button */}
        <button
          onClick={handleRentNow}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}
