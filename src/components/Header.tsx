"use client";

import Link from "next/link";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🛒</span>
          <span className="text-xl font-bold tracking-tight text-green-700">
            FreshMart
          </span>
        </Link>

        {/* Search - desktop */}
        <div className="hidden flex-1 max-w-xl md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search for groceries, fruits, meat..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100 md:hidden">
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="/account"
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 sm:flex"
          >
            <User className="h-5 w-5" />
            <span>Account</span>
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center gap-1.5 rounded-full bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
