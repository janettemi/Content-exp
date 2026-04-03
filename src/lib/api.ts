
import { Product, ProductResponse } from "../types/product";

const BASE_URL = "https://dummyjson.com";

async function fetchData<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    next: { revalidate: 3600 }, // Optimization: Cache for 1 hour
  });

  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
}

// F-1: Listing Page (Paginated)
export async function getProducts(limit: number = 20, skip: number = 0) {
  return fetchData<ProductResponse>(`/products?limit=${limit}&skip=${skip}`);
}

// F-3: Search & Filtering
export async function searchProducts(query: string) {
  return fetchData<ProductResponse>(`/products/search?q=${query}`);
}

// F-2: Detail Page
export async function getProductById(id: string) {
  try {
    return await fetchData<Product>(`/products/${id}`);
  } catch (error) {
    console.error("Product fetch failed:", id);
    return null;
  }
}

// Requirement: "At least one additional filter" (Category)
export async function getCategories() {
  return fetchData<string[]>("/products/categories");
}