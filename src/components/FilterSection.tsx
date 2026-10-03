"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

export interface FilterDefinition {
  id: string;
  label: string;
  type: "text" | "number" | "select";
  options?: { label: string; value: string }[];
  placeholder?: string;
}

interface FilterValues {
  [key: string]: string | number | undefined;
}

interface FilterSectionProps {
  onFilterChange: (filters: FilterValues) => void;
  additionalFilters?: FilterDefinition[];
}

export default function FilterSection({ onFilterChange, additionalFilters = [] }: FilterSectionProps) {
  const { t } = useI18n();
  const [filters, setFilters] = useState<FilterValues>({
    brand: "",
    maxPrice: "",
    year: "",
  });

  const baseFilters: FilterDefinition[] = [
    { id: "brand", label: t.filters.brand, type: "text", placeholder: t.filters.brandPlaceholder },
    { id: "maxPrice", label: t.filters.maxPrice, type: "number", placeholder: t.filters.maxPricePlaceholder },
    { id: "year", label: t.filters.year, type: "number", placeholder: t.filters.yearPlaceholder },
  ];

  const allFilters = [...baseFilters, ...additionalFilters];

  const handleChange = (id: string, value: string) => {
    const newFilters = { ...filters, [id]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <section className="w-full py-8 bg-zinc-50 dark:bg-zinc-900 border-b">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-xl font-bold mb-6">{t.filters.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allFilters.map((filter) => (
            <div key={filter.id} className="flex flex-col space-y-2">
              <label htmlFor={filter.id} className="text-sm font-medium">
                {filter.label}
              </label>
              {filter.type === "select" ? (
                <select
                  id={filter.id}
                  className="rounded-md border border-zinc-200 bg-white p-2 text-sm dark:border-zinc-800 dark:bg-zinc-950"
                  value={filters[filter.id] || ""}
                  onChange={(e) => handleChange(filter.id, e.target.value)}
                >
                  <option value="">{t.filters.all} {filter.label}</option>
                  {filter.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={filter.id}
                  type={filter.type}
                  placeholder={filter.placeholder}
                  className="rounded-md border border-zinc-200 bg-white p-2 text-sm dark:border-zinc-800 dark:bg-zinc-950"
                  value={filters[filter.id] || ""}
                  onChange={(e) => handleChange(filter.id, e.target.value)}
                />
              )}
            </div>
          ))}
          <div className="flex items-end">
            <button
              onClick={() => {
                const reset = Object.keys(filters).reduce((acc, key) => ({ ...acc, [key]: "" }), {});
                setFilters(reset);
                onFilterChange(reset);
              }}
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {t.filters.clear}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
