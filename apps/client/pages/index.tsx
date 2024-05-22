import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import p from '../public/head.jpg'
import NavBar from "@/components/layouts/header";
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/utils/type';
import ProductCard from "@/components/product/productCard";


export const fetchProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};


const  Home: React.FC = () =>{
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
    if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
    <div className="bg-white py-50 sm:py-32 bg-local hover:bg-fixed " id="gg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product Catalog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            find the latest sustainable product  here
          </p>
        </div>
        </div>
        </div>
    <div className="bg-white">
        
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Latest Available product</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
    </>
  )
}
export default Home;