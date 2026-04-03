'use client';

import { useState } from 'react';
import { useDebounce } from '../hooks/use-debounce';
import { useProducts } from '../hooks/use-products';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

export default function SearchExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);
  const { data, isLoading } = useProducts(debouncedSearch);

  return (
    <div className="space-y-10">
      {/* F-3: Search Bar */}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {/* F-4: Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-80 bg-gray-100 animate-pulse rounded-2xl" />
          ))}
        </div>
      )}

      {/* F-1: Responsive Grid */}
      {!isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* F-4: Empty State */}
      {!isLoading && data?.products.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed rounded-3xl">
          <p className="text-gray-400">No results found for "{debouncedSearch}"</p>
        </div>
      )}
    </div>
  );
}