"use client";

import Image from "next/image";
import Link from "next/link";
import { Car } from "@/types/car";
import { useI18n } from "@/i18n/LanguageProvider";

export default function CarCard({ car }: { car: Car }) {
  const { t } = useI18n();

  return (
    <div className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md dark:bg-zinc-950">
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{car.name}</h3>
          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{car.price}</span>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
          {car.description}
        </p>
        <Link 
          href={`/cars/${car.id}`}
          className="mt-2 w-full rounded-md bg-zinc-900 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 text-center block"
        >
          {t.car.viewDetails}
        </Link>
      </div>
    </div>
  );
}
