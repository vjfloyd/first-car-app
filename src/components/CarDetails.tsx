"use client";

import Image from "next/image";
import Link from "next/link";
import { Car } from "@/types/car";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/LanguageProvider";

export default function CarDetails({ car }: { car: Car }) {
  const { t } = useI18n();
  const allImages = [car.image, ...(car.interiorImages || [])];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white dark:bg-zinc-950">
        <div className="container px-4 py-8 mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-6"
          >
            {t.carDetail.back}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Images */}
            <div className="space-y-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {allImages.slice(1, 4).map((img, index) => (
                  <div key={index} className="relative aspect-video overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-800">
                    <Image
                      src={img}
                      alt={`${car.name} - ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="flex flex-col space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">{car.name}</h1>
                <p className="text-3xl font-bold mt-2 text-zinc-900 dark:text-zinc-50">{car.price}</p>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {car.description}
                </p>
              </div>

              {car.specs && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-y dark:border-zinc-800">
                  {car.specs.year && (
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-semibold">{t.carDetail.year}</p>
                      <p className="font-medium">{car.specs.year}</p>
                    </div>
                  )}
                  {car.specs.mileage && (
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-semibold">{t.carDetail.mileage}</p>
                      <p className="font-medium">{car.specs.mileage}</p>
                    </div>
                  )}
                  {car.specs.fuelType && (
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-semibold">{t.carDetail.fuelType}</p>
                      <p className="font-medium">{car.specs.fuelType}</p>
                    </div>
                  )}
                  {car.specs.transmission && (
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-semibold">{t.carDetail.transmission}</p>
                      <p className="font-medium">{car.specs.transmission}</p>
                    </div>
                  )}
                  {car.specs.color && (
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-semibold">{t.carDetail.exteriorColor}</p>
                      <p className="font-medium">{car.specs.color}</p>
                    </div>
                  )}
                </div>
              )}

              {car.features && (
                <div>
                  <h3 className="text-lg font-bold mb-3">{t.carDetail.keyFeatures}</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {car.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Vendor & Contact */}
              <div className="rounded-2xl border p-6 bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">
                      {t.carDetail.soldBy} {car.vendor?.name || t.carDetail.privateSeller}
                    </h3>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-zinc-500">{t.carDetail.vendorRating}</span>
                      <span className="ml-2 text-sm font-bold text-yellow-500">★ {car.vendor?.rating || t.carDetail.na}</span>
                    </div>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={t.carDetail.yourName}
                      className="rounded-md border p-2 text-sm dark:bg-zinc-950 dark:border-zinc-800"
                      required
                    />
                    <input
                      type="email"
                      placeholder={t.carDetail.yourEmail}
                      className="rounded-md border p-2 text-sm dark:bg-zinc-950 dark:border-zinc-800"
                      required
                    />
                  </div>
                  <textarea
                    placeholder={t.carDetail.messagePlaceholder}
                    rows={3}
                    className="w-full rounded-md border p-2 text-sm dark:bg-zinc-950 dark:border-zinc-800"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-zinc-900 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    {t.carDetail.contactVendor}
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-xs text-zinc-500">{t.carDetail.disclaimer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
