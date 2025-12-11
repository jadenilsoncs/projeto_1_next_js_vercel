'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCartStore } from '@/components/ui/cartStore';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  slug: string;
  description?: string;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  slug,
  description 
}: ProductCardProps) {
  const { addItem } = useCartStore();
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    
    addItem({
      id,
      name,
      price,
      image,
      category,
    });

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
      <Link href={`/produtos/${slug}`} className="block relative">
        {/* Image */}
        <div className="relative h-72 overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
              className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/80 text-gray-700 hover:bg-white'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Badge de Categoria */}
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          {description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {description}
            </p>
          )}

          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-primary">
                R$ {price.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500">ou 3x de R$ {(price / 3).toFixed(2)}</p>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                ${isAdding 
                  ? 'bg-green-500 text-white' 
                  : 'bg-accent hover:bg-accent-dark text-white'
                }
              `}
            >
              {isAdding ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Adicionado!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  Comprar
                </>
              )}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}