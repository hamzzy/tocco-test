import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import p from '../public/head.jpg'
import NavBar from "@/components/layouts/header";
import Link from "next/link";






const  Home: React.FC = () =>{
  

  return (
    <>
  

<div className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center" style={{ backgroundImage: 'url(https://dmbxlgvlkelpjnsqoubw.supabase.co/storage/v1/object/public/tocco-aasset/eco-friendly-disposable-utensils-made-bamboo-wood-paper-top-view-concept-saving-planet-rejection-plastic-background.jpg)' }}>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to TOCCO
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover a world of eco-friendly products and join a community dedicated to promoting sustainability and reducing our environmental impact. Explore our curated selection of environmentally conscious items and support businesses that prioritize the planet. Together, we can make a difference.

            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/products/list" className="mt-4 inline-block bg-white text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
              Learn More
            </Link>  
            
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    
    </>
  )
}
export default Home;


