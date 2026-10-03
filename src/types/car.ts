export interface Car {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  interiorImages?: string[];
  features?: string[];
  specs?: {
    mileage?: string;
    fuelType?: string;
    transmission?: string;
    year?: number;
    color?: string;
  };
  vendor?: {
    name: string;
    phone: string;
    email: string;
    rating: number;
  };
}
