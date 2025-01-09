"use client";

import { useState } from "react";

interface Filters {
  types: string[];
  capacities: string[];
  price: number;
}

export default function Sidebar({ onFilterChange }: { onFilterChange: (filters: Filters) => void }) {
  const [types, setTypes] = useState<string[]>([]);
  const [capacities, setCapacities] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(100);

  const handleTypeChange = (type: string) => {
    const newTypes = types.includes(type)
      ? types.filter((t) => t !== type)
      : [...types, type];
    setTypes(newTypes);
    onFilterChange({ types: newTypes, capacities, price });
  };

  const handleCapacityChange = (capacity: string) => {
    const newCapacities = capacities.includes(capacity)
      ? capacities.filter((c) => c !== capacity)
      : [...capacities, capacity];
    setCapacities(newCapacities);
    onFilterChange({ types, capacities: newCapacities, price });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(e.target.value);
    setPrice(newPrice);
    onFilterChange({ types, capacities, price: newPrice });
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <h3 className="font-bold text-lg mb-4">Filters</h3>
      
      {/* Types */}
      <div className="mb-4">
        <h4 className="font-bold mb-2">Type</h4>
        {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
          <div key={type} className="flex items-center">
            <input
              type="checkbox"
              id={type}
              value={type}
              onChange={() => handleTypeChange(type)}
              className="mr-2"
            />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}
      </div>

      {/* Capacities */}
      <div className="mb-4">
        <h4 className="font-bold mb-2">Capacity</h4>
        {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity) => (
          <div key={capacity} className="flex items-center">
            <input
              type="checkbox"
              id={capacity}
              value={capacity}
              onChange={() => handleCapacityChange(capacity)}
              className="mr-2"
            />
            <label htmlFor={capacity}>{capacity}</label>
          </div>
        ))}
      </div>

      {/* Price Slider */}
      <div className="mb-4">
        <h4 className="font-bold mb-2">Price</h4>
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={handlePriceChange}
          className="w-full"
        />
        <p>Max: ${price}.00</p>
      </div>
    </div>
  );
}
