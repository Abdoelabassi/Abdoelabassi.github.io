interface Window {
  // dataLayer is typically an array of objects.
  // The first push is usually {'gtm.start': number, event: string}
  // Subsequent pushes can be any object representing an event or configuration.
  dataLayer: Array<Record<string, any>>;
}

interface Product {
  title: string;
  description?: string;
  price: number;
  originalPrice?: number;
  category?: string;
  image?: string;
  gallery?: string[];
  features?: string[];
  inStock: boolean;
  featured: boolean;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: string;
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
    unit: "cm" | "in";
  };
  materials?: string[];
  colors?: string[];
  sizes?: string[];
  rating?: number;
  reviewCount: number;
  publishedAt: Date;
  updatedAt?: Date;
  slug?: string | undefined; // Optional, used for Astro content collections
}
