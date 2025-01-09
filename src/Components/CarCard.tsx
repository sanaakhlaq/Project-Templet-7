// CarCard.tsx
import Link from "next/link";
import Image from "next/image";

const CarCard = ({ car }: { car: { id: number; name: string; price: number; image: string } }) => {
  return (
    <div className="car-card border bg-white rounded-lg p-4">
      <Image src={car.image} width={80} height={50} alt={car.name} className="w-full h-30 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-bold">{car.name}</h2>
      <p className="text-gray-600">${car.price}/day</p>
      <Link href={`/cars/${car.id}`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700">
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default CarCard;
