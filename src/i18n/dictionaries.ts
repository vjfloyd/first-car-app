export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

const en = {
  header: {
    marketplace: "Marketplace",
    nav: {
      browseCars: "Browse Cars",
      howItWorks: "How It Works",
      financing: "Financing",
      about: "About",
    },
    signIn: "Sign in",
    sellYourCar: "Sell Your Car",
    language: "Language",
  },
  hero: {
    badge: "The marketplace to buy & sell cars",
    title: "Find your next car.",
    subtitle:
      "Search and filter thousands of listings from trusted sellers to find the perfect match.",
    searchPlaceholder: "Search by make, model or keyword...",
    searchButton: "Search Cars",
    brandPlaceholder: "Brand (e.g. Tesla)",
    brandAllOption: "All brands",
    brandLoading: "Loading brands...",
    maxPricePlaceholder: "Max price (e.g. 50000)",
    yearPlaceholder: "Year (e.g. 2022)",
    buyTitle: "Buy your next car.",
    sellTitle: "Sell yours in minutes.",
    description:
      "Browse thousands of listings from trusted sellers, or list your own car for free. Upload your photos, add the details, and reach buyers near you.",
    browseInventory: "Browse Inventory",
    listYourCar: "List Your Car — Free",
    stats: {
      carsListed: "Cars listed",
      happySellers: "Happy sellers",
      inspection: "Inspection",
    },
    sellCard: {
      title: "Sell your car in 3 easy steps",
      subtitle: "No dealership fees. You're in control.",
      step1Title: "Upload photos",
      step1Desc: "Snap a few clear shots of your car, inside and out.",
      step2Title: "Add the details",
      step2Desc: "Make, model, mileage, price and condition.",
      step3Title: "Get offers",
      step3Desc: "Connect directly with interested buyers near you.",
      cta: "Start selling now",
    },
  },
  filters: {
    title: "Filter Inventory",
    brand: "Brand",
    maxPrice: "Max Price",
    year: "Year",
    brandPlaceholder: "e.g. Tesla",
    maxPricePlaceholder: "e.g. 50000",
    yearPlaceholder: "e.g. 2022",
    all: "All",
    clear: "Clear Filters",
  },
  inventory: {
    title: "All Vehicles",
    empty: "No cars found matching your criteria.",
    scrollForMore: "Scroll for more...",
  },
  featured: {
    loading: "Loading featured inventory...",
    title: "Featured Inventory",
    badge: "Featured",
    viewDetails: "View Details",
  },
  car: {
    viewDetails: "View Details",
  },
  whyChooseUs: {
    title: "Why Buy From CarBuy?",
    reason1Title: "Certified Vehicles",
    reason1Desc:
      "Every car in our inventory undergoes a rigorous 150-point inspection.",
    reason2Title: "Easy Financing",
    reason2Desc:
      "Get pre-approved in minutes with our network of trusted lenders.",
    reason3Title: "7-Day Return",
    reason3Desc:
      "Not in love with your new ride? Return it within 7 days for a full refund.",
  },
  footer: {
    rights: "© 2026 CarBuy Inc. All rights reserved.",
    terms: "Terms of Service",
    privacy: "Privacy",
  },
  sell: {
    successTitle: "Listing Submitted!",
    successMessage: "Your car has been successfully listed for sale.",
    sellAnother: "Sell Another Car",
    title: "Sell Your Car",
    subtitle:
      "Fill out the form below to list your vehicle on CarBuy. Reach thousands of potential buyers instantly.",
    makeModel: "Make & Model",
    makeModelPlaceholder: "e.g. BMW M3",
    year: "Year",
    yearPlaceholder: "2023",
    price: "Price ($)",
    pricePlaceholder: "45,000",
    mileage: "Mileage",
    mileagePlaceholder: "12,000 miles",
    description: "Description",
    descriptionPlaceholder:
      "Describe your car's condition, features, and history...",
    photos: "Photos",
    uploadFile: "Upload a file",
    dragDrop: "or drag and drop",
    fileHint: "PNG, JPG, GIF up to 10MB",
    submitting: "Listing...",
    submit: "List My Car",
    error: "Something went wrong. Please try again.",
  },
  carDetail: {
    back: "← Back to Inventory",
    year: "Year",
    mileage: "Mileage",
    fuelType: "Fuel Type",
    transmission: "Transmission",
    exteriorColor: "Exterior Color",
    keyFeatures: "Key Features",
    soldBy: "Sold by",
    privateSeller: "Private Seller",
    vendorRating: "Vendor Rating:",
    na: "N/A",
    yourName: "Your Name",
    yourEmail: "Your Email",
    messagePlaceholder: "I'm interested in this vehicle...",
    contactVendor: "Contact Vendor",
    disclaimer:
      'By clicking "Contact Vendor", you agree to our terms of service and privacy policy.',
  },
  metadata: {
    title: "CarBuy - Find Your Perfect Car",
    description:
      "Browse, buy, and finance your next vehicle with CarBuy. Quality certified cars at the best prices.",
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  header: {
    marketplace: "Mercado",
    nav: {
      browseCars: "Ver Coches",
      howItWorks: "Cómo Funciona",
      financing: "Financiación",
      about: "Nosotros",
    },
    signIn: "Iniciar sesión",
    sellYourCar: "Vende tu Coche",
    language: "Idioma",
  },
  hero: {
    badge: "El mercado para comprar y vender coches",
    title: "Encuentra tu próximo coche.",
    subtitle:
      "Busca y filtra miles de anuncios de vendedores de confianza para encontrar la opción perfecta.",
    searchPlaceholder: "Busca por marca, modelo o palabra clave...",
    searchButton: "Buscar Coches",
    brandPlaceholder: "Marca (p. ej. Tesla)",
    brandAllOption: "Todas las marcas",
    brandLoading: "Cargando marcas...",
    maxPricePlaceholder: "Precio máx. (p. ej. 50000)",
    yearPlaceholder: "Año (p. ej. 2022)",
    buyTitle: "Compra tu próximo coche.",
    sellTitle: "Vende el tuyo en minutos.",
    description:
      "Explora miles de anuncios de vendedores de confianza o publica tu propio coche gratis. Sube tus fotos, añade los detalles y llega a compradores cerca de ti.",
    browseInventory: "Ver Inventario",
    listYourCar: "Publica tu Coche — Gratis",
    stats: {
      carsListed: "Coches publicados",
      happySellers: "Vendedores satisfechos",
      inspection: "Inspección",
    },
    sellCard: {
      title: "Vende tu coche en 3 sencillos pasos",
      subtitle: "Sin comisiones de concesionario. Tú tienes el control.",
      step1Title: "Sube fotos",
      step1Desc: "Haz algunas fotos claras de tu coche, por dentro y por fuera.",
      step2Title: "Añade los detalles",
      step2Desc: "Marca, modelo, kilometraje, precio y estado.",
      step3Title: "Recibe ofertas",
      step3Desc: "Conecta directamente con compradores interesados cerca de ti.",
      cta: "Empieza a vender ahora",
    },
  },
  filters: {
    title: "Filtrar Inventario",
    brand: "Marca",
    maxPrice: "Precio Máx.",
    year: "Año",
    brandPlaceholder: "p. ej. Tesla",
    maxPricePlaceholder: "p. ej. 50000",
    yearPlaceholder: "p. ej. 2022",
    all: "Todos",
    clear: "Limpiar Filtros",
  },
  inventory: {
    title: "Todos los Vehículos",
    empty: "No se encontraron coches que coincidan con tus criterios.",
    scrollForMore: "Desplázate para ver más...",
  },
  featured: {
    loading: "Cargando inventario destacado...",
    title: "Inventario Destacado",
    badge: "Destacado",
    viewDetails: "Ver Detalles",
  },
  car: {
    viewDetails: "Ver Detalles",
  },
  whyChooseUs: {
    title: "¿Por qué comprar en CarBuy?",
    reason1Title: "Vehículos Certificados",
    reason1Desc:
      "Cada coche de nuestro inventario pasa una rigurosa inspección de 150 puntos.",
    reason2Title: "Financiación Fácil",
    reason2Desc:
      "Obtén una preaprobación en minutos con nuestra red de prestamistas de confianza.",
    reason3Title: "Devolución en 7 días",
    reason3Desc:
      "¿No te enamoraste de tu nuevo coche? Devuélvelo en 7 días y te reembolsamos el importe completo.",
  },
  footer: {
    rights: "© 2026 CarBuy Inc. Todos los derechos reservados.",
    terms: "Términos del Servicio",
    privacy: "Privacidad",
  },
  sell: {
    successTitle: "¡Anuncio enviado!",
    successMessage: "Tu coche se ha publicado correctamente para la venta.",
    sellAnother: "Vender otro coche",
    title: "Vende tu Coche",
    subtitle:
      "Completa el formulario para publicar tu vehículo en CarBuy. Llega a miles de compradores potenciales al instante.",
    makeModel: "Marca y Modelo",
    makeModelPlaceholder: "p. ej. BMW M3",
    year: "Año",
    yearPlaceholder: "2023",
    price: "Precio ($)",
    pricePlaceholder: "45.000",
    mileage: "Kilometraje",
    mileagePlaceholder: "12.000 km",
    description: "Descripción",
    descriptionPlaceholder:
      "Describe el estado, las características y el historial de tu coche...",
    photos: "Fotos",
    uploadFile: "Subir un archivo",
    dragDrop: "o arrástralo aquí",
    fileHint: "PNG, JPG, GIF hasta 10MB",
    submitting: "Publicando...",
    submit: "Publicar mi Coche",
    error: "Algo salió mal. Inténtalo de nuevo.",
  },
  carDetail: {
    back: "← Volver al Inventario",
    year: "Año",
    mileage: "Kilometraje",
    fuelType: "Combustible",
    transmission: "Transmisión",
    exteriorColor: "Color Exterior",
    keyFeatures: "Características Destacadas",
    soldBy: "Vendido por",
    privateSeller: "Vendedor Particular",
    vendorRating: "Valoración del vendedor:",
    na: "N/D",
    yourName: "Tu Nombre",
    yourEmail: "Tu Correo",
    messagePlaceholder: "Estoy interesado en este vehículo...",
    contactVendor: "Contactar Vendedor",
    disclaimer:
      'Al hacer clic en "Contactar Vendedor", aceptas nuestros términos del servicio y política de privacidad.',
  },
  metadata: {
    title: "CarBuy - Encuentra tu Coche Perfecto",
    description:
      "Explora, compra y financia tu próximo vehículo con CarBuy. Coches certificados de calidad a los mejores precios.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };

export function isLocale(value: string | undefined | null): value is Locale {
  return value != null && (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
