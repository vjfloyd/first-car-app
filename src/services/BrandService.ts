import { CarBrand } from "@/types/brand";

/**
 * Public REST endpoint used to list car brands (makes).
 *
 * By default we use the free NHTSA vPIC API, which exposes the makes for a
 * given vehicle type. It can be overridden with the NEXT_PUBLIC_BRANDS_API_URL
 * environment variable so it's easy to point at a different backend.
 *
 * Example response shape:
 * {
 *   "Count": 123,
 *   "Message": "Response returned successfully",
 *   "Results": [
 *     { "MakeId": 440, "MakeName": "ASTON MARTIN", "VehicleTypeId": 2, ... },
 *     ...
 *   ]
 * }
 */
const BRANDS_API_URL =
  process.env.NEXT_PUBLIC_BRANDS_API_URL ||
  "http://localhost:4001/cards-service/v1/car-brands";

interface NhtsaMake {
  id: number;
  name: string;
}

interface NhtsaResponse {
  Count: number;
  Message: string;
  Results: NhtsaMake[];
}

/**
 * A small offline fallback so the brand selector still works if the remote
 * service is unreachable (offline build, rate limiting, network error, ...).
 */
const FALLBACK_BRANDS: CarBrand[] = [
  { id: 1, name: "Audi" },
  { id: 2, name: "BMW" },
  { id: 3, name: "Chevrolet" },
  { id: 4, name: "Ford" },
  { id: 5, name: "Honda" },
  { id: 6, name: "Hyundai" },
  { id: 7, name: "Kia" },
  { id: 8, name: "Mercedes-Benz" },
  { id: 9, name: "Nissan" },
  { id: 10, name: "Tesla" },
  { id: 11, name: "Toyota" },
  { id: 12, name: "Volkswagen" },
];

/** Normalize an all-caps make name into a readable Title Case brand name. */
function toTitleCase(value: string): string {
  return value
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export class BrandService {
  /**
   * Fetches the list of car brands from the REST API.
   *
   * The results are de-duplicated and sorted alphabetically. If the request
   * fails for any reason, a small built-in fallback list is returned so the UI
   * keeps working.
   */
  static async getBrands(options: RequestInit = {}): Promise<CarBrand[]> {
    try {
      const response = await fetch(BRANDS_API_URL, {
        ...options,
        headers: {
          Accept: "application/json",
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Brand API Error: ${response.status} ${response.statusText}`,
        );
      }

      const data: NhtsaResponse = await response.json();

      const brands = (data.Results ?? [])
        .filter((make) => Boolean(make.name))
        .map<CarBrand>((make) => ({
          id: make.id,
          name: toTitleCase(make.name.trim()),
        }));

      // De-duplicate by name (the API can return repeated makes).
      const unique = Array.from(
        new Map(brands.map((brand) => [brand.name, brand])).values(),
      );

      unique.sort((a, b) => a.name.localeCompare(b.name));

      return unique.length > 0 ? unique : FALLBACK_BRANDS;
    } catch (error) {
      console.error("Failed to load car brands:", error);
      return FALLBACK_BRANDS;
    }
  }
}
