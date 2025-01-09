"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CarDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const carId = params.id;

  // Dummy data (Replace with actual API or state data)
  const carDetail = {
    id: carId,
    name: `Car ${carId}`,
    price: 100 + parseInt(carId) * 12,
    description: `Details of Car ${carId}. It's an amazing car!`,
    image: "/car-thumbnail.png", // Replace with actual image path
  };

  const handleRentNow = () => {
    router.push("/payment"); // Redirect to payment page
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{carDetail.name}</h1>
      <Image
        src={"/car2.png"}
        width={100}
        height={50}
        alt={carDetail.name}
        className="w-300 h-250 object-cover rounded-lg mb-4"
      />
      <p className="text-lg mb-4">{carDetail.description}</p>
      <p className="text-blue-600 font-bold text-xl mb-6">
        Price: ${carDetail.price}/day
      </p>
      <button
        onClick={handleRentNow}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Rent Now
      </button>
    </div>
  );
}
