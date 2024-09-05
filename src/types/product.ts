// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductFilters {
  category: string;
  minPrice: number;
  maxPrice: number;
}