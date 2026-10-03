import { Car } from "@/types/car";

// Base API URL - could be an environment variable in a real app
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(path: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async post<T>(path: string, data: unknown, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }
}

export const apiClient = new ApiClient(API_BASE_URL);

export interface GetCarsParams {
  brand?: string;
  maxPrice?: number;
  year?: number;
  page?: number;
  limit?: number;
}

export class CarService {
  static async getCars(params: GetCarsParams = {}): Promise<{ cars: Car[], total: number }> {
    // Construct query parameters
    const query = new URLSearchParams();
    if (params.brand) query.append("brand", params.brand);
    if (params.maxPrice) query.append("maxPrice", params.maxPrice.toString());
    if (params.year) query.append("year", params.year.toString());
    if (params.page) query.append("page", params.page.toString());
    if (params.limit) query.append("limit", params.limit.toString());

    // In a real scenario, this would be:
    // return apiClient.get(`/cars?${query.toString()}`);
    
    // For now, since there's no real API yet, let's simulate it 
    // but use the structure we'd expect from a REST API
    return new Promise((resolve) => {
      // Import CARS_DATA dynamically or we could have just kept it in a data file
      // for the simulation.
      import("@/data/cars").then(({ CARS_DATA }) => {
        let filtered = [...CARS_DATA];
        
        if (params.brand) {
          filtered = filtered.filter(c => c.name.toLowerCase().includes(params.brand!.toLowerCase()));
        }
        if (params.maxPrice) {
          filtered = filtered.filter(c => parseInt(c.price.replace(/[^0-9]/g, '')) <= params.maxPrice!);
        }
        if (params.year) {
          filtered = filtered.filter(c => c.specs?.year === params.year);
        }

        const page = params.page || 1;
        const limit = params.limit || 10;
        const start = (page - 1) * limit;
        const end = start + limit;
        
        resolve({
          cars: filtered.slice(start, end),
          total: filtered.length
        });
      });
    });
  }

  static async getCarById(id: number): Promise<Car | null> {
    // return apiClient.get(`/cars/${id}`);
    
    return new Promise((resolve) => {
      import("@/data/cars").then(({ CARS_DATA }) => {
        const car = CARS_DATA.find(c => c.id === id);
        resolve(car || null);
      });
    });
  }

  static async submitCarListing(carData: Partial<Car>): Promise<Car> {
    // return apiClient.post("/cars", carData);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...carData, id: Math.floor(Math.random() * 1000) } as Car);
      }, 1000);
    });
  }
}
