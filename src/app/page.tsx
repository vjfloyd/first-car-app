"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterSection from "@/components/FilterSection";
import FeaturedCars from "@/components/FeaturedCars";
import InfiniteCarScroll from "@/components/InfiniteCarScroll";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  const [filters, setFilters] = useState<Record<string, string | number | undefined>>({});

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <FilterSection onFilterChange={setFilters} />
        <InfiniteCarScroll filters={filters} />
        <FeaturedCars />

        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
