
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      {/* Visual Cue: Using a subtle gray circle with an icon */}
      <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
        <span className="text-4xl text-gray-400">🔍</span>
      </div>
      
      <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
        Product Not Found
      </h2>
      
      <p className="text-gray-500 mb-8 max-w-sm leading-relaxed">
        We couldn't find the product you're looking for. It might have been removed or the link is broken.
      </p>

      <Link href="/" passHref>
        <Button
          variant="outline" 
          className="px-8 py-6 rounded-2xl font-bold border-2 hover:bg-gray-50 transition-all"
        >
          Return to Shop
        </Button>
      </Link>
    </div>
  );
}