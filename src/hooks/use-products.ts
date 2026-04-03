import { useQuery } from '@tanstack/react-query';
import { getProducts, searchProducts } from '../lib/api';

export function useProducts(query: string) {
  return useQuery({
    queryKey: ['products', query],
    queryFn: () => (query ? searchProducts(query) : getProducts(20)),
    placeholderData: (previousData) => previousData,
  });
}