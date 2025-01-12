
"use client";

import Hero from "@/components/Hero";
import CarListing from "@/components/CarListing";

export default function Home() {
  const filters = {
    types: [],
    capacities: [],
    price: 100,
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Car Listing */}
      <div className="w-full mt-8">
        <CarListing filters={filters} />
      </div>
    </div>
  );
}
