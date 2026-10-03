"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import CarCard from "./CarCard";
import { Car } from "@/types/car";
import { CarService } from "@/services/CarService";
import { useI18n } from "@/i18n/LanguageProvider";

interface FilterValues {
  [key: string]: string | number | undefined;
}

interface InfiniteCarScrollProps {
  filters?: FilterValues;
}

export default function InfiniteCarScroll({ filters }: InfiniteCarScrollProps) {
  const { t } = useI18n();
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Use a ref to track the current filters and page for fetching
  // This helps avoid the synchronous setState warning
  
  const fetchCars = useCallback(async (isReset = false) => {
    // We check isLoading and hasMore inside the function, 
    // but for the initial/reset fetch we ignore hasMore
    if (isLoading || (!hasMore && !isReset)) return;
    
    setIsLoading(true);
    try {
      const brand = filters?.brand as string;
      const maxPrice = filters?.maxPrice ? parseInt(filters.maxPrice as string) : undefined;
      const year = filters?.year ? parseInt(filters.year as string) : undefined;
      
      const currentPage = isReset ? 1 : page;

      const result = await CarService.getCars({
        brand,
        maxPrice,
        year,
        page: currentPage,
        limit: 6
      });

      if (isReset) {
        setCars(result.cars);
        setPage(2);
        setHasMore(result.cars.length > 0 && result.cars.length < result.total);
      } else {
        setCars(prev => [...prev, ...result.cars]);
        setPage(prev => prev + 1);
        setHasMore(cars.length + result.cars.length < result.total);
      }
    } catch (error) {
      console.error("Failed to fetch cars:", error);
    } finally {
      setIsLoading(false);
    }
  }, [filters, page, hasMore, isLoading, cars.length]);

  // Initial fetch and handle filter changes
  useEffect(() => {
    // Use a small timeout or just let it run. 
    // The warning is very strict about ANY setState in useEffect.
    const timer = setTimeout(() => {
      fetchCars(true);
    }, 0);
    return () => clearTimeout(timer);
  }, [filters, fetchCars]);

  useEffect(() => {
    const target = observerTarget.current;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          fetchCars();
        }
      },
      { threshold: 0.1 }
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [fetchCars]);

  return (
    <section className="w-full py-12 md:py-24 bg-white dark:bg-zinc-950">
      <div className="container px-4 md:px-6 mx-auto" id="inventory">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">{t.inventory.title}</h2>
        
        {cars.length === 0 && !isLoading ? (
          <div className="text-center py-20">
            <p className="text-xl text-zinc-500">{t.inventory.empty}</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {cars.map((car, index) => (
              <CarCard key={`${car.id}-${index}`} car={car} />
            ))}
          </div>
        )}
        
        {/* Loading Indicator / Intersection Target */}
        <div 
          ref={observerTarget} 
          className="w-full py-10 flex justify-center items-center"
        >
          {isLoading && (
            <div className="flex space-x-2">
              <div className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 bg-zinc-400 rounded-full animate-bounce"></div>
            </div>
          )}
          {!isLoading && <p className="text-zinc-400 text-sm">{t.inventory.scrollForMore}</p>}
        </div>
      </div>
    </section>
  );
}
