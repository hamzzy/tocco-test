import React, { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Product } from '@/utils/type';
import ProductCard from "@/components/product/productCard";
import { fetchProducts } from "@/utils/api";

const ProductCatalouge: React.FC = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(['products'], fetchProducts);
  }, [queryClient]);

  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // Keep data fresh for 5 minutes
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Latest Available Products</h2>
        {isLoading && <div>Loading...</div>}
        {error && error instanceof Error && <div>Error: {error.message}</div>}
        {!isLoading && !error && products.length === 0 && <div>No data available.</div>}
        {!isLoading && !error && products.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalouge;
