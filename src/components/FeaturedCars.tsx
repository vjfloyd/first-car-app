"use client";

import { useEffect, useState } from "react";
import { Car } from "@/types/car";
import { CarService } from "@/services/CarService";
import Link from "next/link";
import { useI18n } from "@/i18n/LanguageProvider";

export default function FeaturedCars() {
  const { t } = useI18n();
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const result = await CarService.getCars({ limit: 3 });
        setCars(result.cars);
      } catch (error) {
        console.error("Failed to fetch featured cars:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  if (isLoading) {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <p>{t.featured.loading}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">{t.featured.title}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div key={car.id} className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-zinc-950">
              <div className="flex flex-col space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {car.specs?.fuelType || t.featured.badge}
                </span>
                <h3 className="text-xl font-bold">{car.name}</h3>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{car.price}</p>
                <Link 
                  href={`/cars/${car.id}`}
                  className="mt-4 w-full rounded-md bg-zinc-900 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 text-center block"
                >
                  {t.featured.viewDetails}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
