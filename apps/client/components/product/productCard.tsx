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
            src={product.imageSrc || 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'}
            alt={product.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{product.name}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;