export const runtime = 'edge'; // Use Edge Runtime for faster response times

import { ArrowLeftIcon } from "@/src/components/Icon";
import { getProductById } from "@/src/lib/api";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>; // In Next.js 15, params is a Promise
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params; 
  const product = await getProductById(id);
  
  if (!product) return { title: "Product Not Found" };

  return { 
    title: `${product.title} | ShopExplorer`,
    description: product.description 
  };
}

export default async function DetailPage({ params }: Props) {
  const { id } = await params; 

  if (!id || id === 'undefined') {
    notFound();
  }

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Link href="/" className="text-blue-600 font-bold mb-8 flex items-center gap-1 inline-flex">
      <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
         <span>Back to Explorer</span> 
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-square bg-gray-50 rounded-3xl">
          <Image src={product.thumbnail} alt={product.title} fill className="object-contain p-8" priority />
        </div>
        <div>
          <h1 className="text-4xl font-black mb-4">{product.title}</h1>
          <p className="text-2xl font-bold mb-6">${product.price}</p>
          <p className=" leading-relaxed">{product.description}</p>
          
          <div className="mt-8 pt-8 border-t flex gap-4">
            <div className="bg-gray-100 p-4 rounded-xl flex-1 text-center">
              <p className="text-xs text-blue-600 uppercase">Brand</p>
              <p className="font-bold text-lg text-blue-600">{product.brand}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl flex-1 text-center">
              <p className="text-xs text-blue-600 uppercase">Stock</p>
              <p className="font-bold text-lg text-blue-600">{product.stock}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

