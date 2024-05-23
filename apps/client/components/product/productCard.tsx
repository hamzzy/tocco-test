// ProductCard.tsx
import React from 'react';
import Link from 'next/link';
import { Product } from '../../utils/type';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
          <img
            src={process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/tocco-aasset/" + product.image}
            alt={product.title}
            className="h-100 w-full object-cover object-center lg:h-400 lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h2 className="text-md font-bold tracking-tight text-gray-700">{product.title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;