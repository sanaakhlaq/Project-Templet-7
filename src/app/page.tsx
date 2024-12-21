import Header from "@/Components/Header";
import HeaderTop from "@/Components/HeaderTop";
import Hero from "@/Components/Hero";
import PickDropComponent from "@/Components/PickandDrop";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  const cars = [
    { id: 1, name: "Koenigsegg", price: 140, image: "/car1.png" },
    { id: 2, name: "Nissan GT - R", price: 120, image: "/car2.png" },
    { id: 3, name: "Rolls - Royce", price: 120, image: "/car3.png" },
    { id: 4, name: "Nissan GT - R", price: 120, image: "/car4.png" },
    { id: 5, name: "All New Rush", price: 120, image: "/car5.png" },
    { id: 6, name: "CR  - V", price: 120, image: "/car6.png" },
    { id: 7, name: "All New Terios", price: 120, image: "/car7.png" },
    { id: 8, name: "CR  - V", price: 120, image: "/car8.png" },
    { id: 9, name: "MG ZX Exclusice", price: 76, image: "/car9.png" },
    { id: 10, name: "New MG ZS", price: 80, image: "/car10.png" },
    { id: 11, name: "MG ZX Excite", price: 74, image: "/car8.png" },
    { id: 12, name: "New MG ZS", price: 80, image: "/car7.png" },
  ];

  return (
    <div>
      <HeaderTop />
      <Header />
      <Hero />
      <PickDropComponent/>
      
      
      <div className="w-[1312] h-[1356] p-14 bg-gray-100">
        

        <main className="container mx-auto py-10">
          <h2 className="text-2xl font-semibold mb-4">Popular Cars</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white shadow rounded-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Car Name */}
                <div className="p-4">
                  <h3 className="text-lg font-bold">{car.name}</h3>
                </div>

                {/* Car Image */}
                <div className="flex-1 flex items-end">
                  <Image
                    src={car.image}
                    width={300}
                    height={200}
                    alt={car.name}
                    className="w-full h-20 object-cover"
                  />
                </div>

                {/* Price and Button */}
                <div className="p-4 text-center ">
                  <p className="text-gray-600 font-bold    mr-20  mb-2">${car.price}/day</p>
                  <Link href={`/cars/${car.id}`}>
                    <button className="bg-blue-500 w-80px ml-20 text-white font-semibold py-2 rounded hover:bg-blue-600">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
