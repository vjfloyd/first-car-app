"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/LanguageProvider";
import { BrandService } from "@/services/BrandService";
import { CarBrand } from "@/types/brand";

export default function Hero() {
  const { t } = useI18n();

  const [brands, setBrands] = useState<CarBrand[]>([]);
  const [brandsLoading, setBrandsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    BrandService.getBrands()
      .then((data) => {
        if (active) setBrands(data);
      })
      .finally(() => {
        if (active) setBrandsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const stats = [
    { value: "12,000+", label: t.hero.stats.carsListed },
    { value: "8,500+", label: t.hero.stats.happySellers },
    { value: "150-pt", label: t.hero.stats.inspection },
  ];

  const steps = [
    { title: t.hero.sellCard.step1Title, desc: t.hero.sellCard.step1Desc },
    { title: t.hero.sellCard.step2Title, desc: t.hero.sellCard.step2Desc },
    { title: t.hero.sellCard.step3Title, desc: t.hero.sellCard.step3Desc },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-28">
        {/* Search & filter — first section, always at the top */}
        <div className="mx-auto mb-14 w-full max-w-4xl text-center md:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl/[1.05]">
            {t.hero.title}
          </h1>

          <p className="mx-auto mt-4 max-w-[620px] text-zinc-400 md:text-lg">
            {t.hero.subtitle}
          </p>

          {/* Search + filter bar */}
          <form
            action="/#inventory"
            className="mx-auto mt-8 w-full rounded-2xl border border-zinc-800 bg-zinc-900/50 p-3 shadow-2xl backdrop-blur"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="search"
                  name="q"
                  placeholder={t.hero.searchPlaceholder}
                  className="h-12 w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-4 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-zinc-950 shadow transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300"
                >
                  {t.hero.searchButton}
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <select
                  name="brand"
                  defaultValue=""
                  disabled={brandsLoading}
                  aria-label={t.hero.brandPlaceholder}
                  className="h-11 w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-4 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <option value="">
                    {brandsLoading ? t.hero.brandLoading : t.hero.brandAllOption}
                  </option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.name}>
                      {brand.name}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder={t.hero.maxPricePlaceholder}
                  className="h-11 w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-4 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500"
                />
                <input
                  type="number"
                  name="year"
                  placeholder={t.hero.yearPlaceholder}
                  className="h-11 w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-4 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy + CTAs */}
          <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t.hero.buyTitle}
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {t.hero.sellTitle}
              </span>
            </h2>

            <p className="max-w-[560px] text-zinc-400 md:text-lg">
              {t.hero.description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-800 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300"
                href="/#inventory"
              >
                {t.hero.browseInventory}
              </Link>
              <Link
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-sm font-medium text-white shadow transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                href="/sell"
              >
                {t.hero.listYourCar}
              </Link>
            </div>

            {/* Stats */}
            <dl className="grid w-full max-w-[560px] grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <dt className="text-2xl font-bold text-white">{stat.value}</dt>
                  <dd className="text-xs text-zinc-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: "sell in 3 steps" card */}
          <div className="mx-auto w-full max-w-md lg:mx-0">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-2xl backdrop-blur md:p-8">
              <h2 className="text-lg font-semibold text-white">
                {t.hero.sellCard.title}
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                {t.hero.sellCard.subtitle}
              </p>

              <ol className="mt-6 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-white">{step.title}</p>
                      <p className="text-sm text-zinc-400">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <Link
                href="/sell"
                className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-zinc-950 shadow transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300"
              >
                {t.hero.sellCard.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
