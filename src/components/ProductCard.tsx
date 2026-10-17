"use client";

import { Plus } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  compareAt?: number;
  unit: string;
  image: string;
  stock: number;
}

export default function ProductCard({
  name,
  price,
  compareAt,
  unit,
  image,
  stock,
}: ProductCardProps) {
  const discount =
    compareAt && compareAt > price
      ? Math.round(((compareAt - price) / compareAt) * 100)
      : 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:border-green-200 hover:shadow-md">
      {/* Badge */}
      {discount > 0 && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
          -{discount}%
        </span>
      )}

      {/* Image */}
      <div className="flex h-36 items-center justify-center bg-gradient-to-b from-green-50 to-white text-5xl transition group-hover:scale-105">
        {image}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
          {name}
        </h3>
        <p className="mt-1 text-xs text-gray-500">per {unit}</p>

        <div className="mt-auto flex items-end justify-between pt-3">
          <div>
            <p className="text-lg font-bold text-green-700">
              {formatPrice(price)}
            </p>
            {compareAt && compareAt > price && (
              <p className="text-xs text-gray-400 line-through">
                {formatPrice(compareAt)}
              </p>
            )}
          </div>

          <button
            disabled={stock === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            aria-label="Add to cart"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>

        {stock < 10 && stock > 0 && (
          <p className="mt-2 text-xs text-orange-600">Only {stock} left</p>
        )}
        {stock === 0 && (
          <p className="mt-2 text-xs font-medium text-red-600">Out of stock</p>
        )}
      </div>
    </div>
  );
}
