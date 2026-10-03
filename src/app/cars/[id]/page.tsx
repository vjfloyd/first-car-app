import { notFound } from "next/navigation";
import { CarService } from "@/services/CarService";
import CarDetails from "@/components/CarDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CarDetailPage({ params }: PageProps) {
  const { id } = await params;
  const car = await CarService.getCarById(parseInt(id));

  if (!car) {
    notFound();
  }

  return <CarDetails car={car} />;
}
