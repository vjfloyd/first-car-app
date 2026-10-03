import { Car } from "@/types/car";

export const CARS_DATA: Car[] = [
  {
    id: 1,
    name: "Tesla Model S",
    price: "$89,990",
    description: "Experience the future of driving with unparalleled performance and range. This Model S features Autopilot, a premium interior, and Ludicrous Mode for breath-taking acceleration.",
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=800&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Autopilot", "Premium Audio", "Heated Seats", "Glass Roof"],
    specs: {
      mileage: "15,000 miles",
      fuelType: "Electric",
      transmission: "Automatic",
      year: 2022,
      color: "White"
    },
    vendor: {
      name: "Tesla Certified Pre-Owned",
      phone: "+1 (555) 123-4567",
      email: "sales@tesla.com",
      rating: 4.9
    }
  },
  {
    id: 2,
    name: "Porsche 911",
    price: "$101,200",
    description: "The timeless sports car that combines luxury with legendary performance. A perfect example of German engineering and design excellence.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Sport Chrono Package", "Bose Sound System", "Leather Interior"],
    specs: {
      mileage: "5,000 miles",
      fuelType: "Gasoline",
      transmission: "PDK",
      year: 2023,
      color: "Grey"
    },
    vendor: {
      name: "Porsche Center West",
      phone: "+1 (555) 987-6543",
      email: "info@porschewest.com",
      rating: 4.8
    }
  },
  {
    id: 3,
    name: "Audi Q7",
    price: "$59,200",
    description: "Spacious, powerful, and sophisticated SUV for the whole family. Includes Quattro all-wheel drive and the latest MMI touch response system.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1606155667753-43033879f54b?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Virtual Cockpit", "Panoramic Sunroof", "Adaptive Air Suspension"],
    specs: {
      mileage: "22,000 miles",
      fuelType: "Hybrid",
      transmission: "Tiptronic",
      year: 2021,
      color: "Black"
    },
    vendor: {
      name: "Luxury Motors Inc",
      phone: "+1 (555) 456-7890",
      email: "contact@luxurymotors.com",
      rating: 4.5
    }
  },
  {
    id: 4,
    name: "Mercedes-Benz G-Class",
    price: "$139,900",
    description: "Iconic off-road capability meets uncompromising luxury and style. The G-Wagon remains the ultimate status symbol with unmatched presence.",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Burmester Surround Sound", "Ambient Lighting", "Off-road Package"],
    specs: {
      mileage: "12,000 miles",
      fuelType: "Gasoline",
      transmission: "9G-TRONIC",
      year: 2022,
      color: "Olive Green"
    },
    vendor: {
      name: "Elite Auto Group",
      phone: "+1 (555) 222-3333",
      email: "sales@eliteauto.com",
      rating: 4.7
    }
  },
  {
    id: 5,
    name: "Ford Mustang",
    price: "$27,470",
    description: "The classic American muscle car, reinvented for the modern era. Features a powerful engine and iconic styling that turns heads everywhere.",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=800&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1547744152-14d985cb937f?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Performance Exhaust", "Sync 4 Infotainment", "Track Apps"],
    specs: {
      mileage: "35,000 miles",
      fuelType: "Gasoline",
      transmission: "Manual",
      year: 2020,
      color: "Red"
    },
    vendor: {
      name: "John's Ford Dealership",
      phone: "+1 (555) 111-2222",
      email: "john@johnsford.com",
      rating: 4.2
    }
  },
  {
    id: 6,
    name: "BMW M4",
    price: "$78,100",
    description: "Precision engineering and aggressive styling for the ultimate driving machine. High-performance coupe with track-ready capabilities.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d82662?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Carbon Fiber Trim", "M Sport Differential", "Head-up Display"],
    specs: {
      mileage: "8,000 miles",
      fuelType: "Gasoline",
      transmission: "M Steptronic",
      year: 2023,
      color: "Yas Marina Blue"
    },
    vendor: {
      name: "BMW Performance Center",
      phone: "+1 (555) 444-5555",
      email: "sales@bmwperf.com",
      rating: 4.9
    }
  }
];
