import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FreshMart – Online Grocery Delivery",
  description:
    "Fresh groceries delivered to your door. Fruits, vegetables, meat, dairy and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-gray-50 font-sans antialiased`}>
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <footer className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-2">
                <span className="text-xl">🛒</span>
                <span className="font-bold text-green-700">FreshMart</span>
              </div>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} FreshMart. Fresh groceries, delivered.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
