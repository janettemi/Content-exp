import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from './Icon';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product; 
}

export default function ProductCard({ product }: ProductCardProps) {
  
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all">

        <div className="relative aspect-square bg-gray-50">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={200}
            className="rounded-md object-cover"
            onError={(e: any) => {
              e.currentTarget.src = "/fallback.png";
            }}
          />
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-black truncate">{product.title}</h3>
          
          {/* F-1: Metadata Fields */}
          <div className="flex items-center gap-4 mt-2">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded capitalize">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <StarIcon className="w-3 h-3 text-amber-400" />
              <span className="text-xs font-medium">{product.rating}</span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-black text-black">${product.price}</span>
            <span className="text-blue-600 text-sm font-bold">Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}