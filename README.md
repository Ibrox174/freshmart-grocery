# FreshMart – Online Grocery Store

A modern online grocery e-commerce storefront built with **Next.js 15**, **Prisma**, and **Tailwind CSS**.

## Features (Current)

- Beautiful responsive homepage
- Category browsing
- Product listing with pricing (NGN)
- Add to cart UI (frontend ready)
- Prisma schema for Products, Categories, Customers & Addresses
- Ready for Vercel deployment

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Prisma + PostgreSQL
- Lucide icons

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Add your DATABASE_URL (Neon, Supabase, Railway, etc.)

# Generate Prisma client
npx prisma generate

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repository
4. Add environment variable `DATABASE_URL` (optional for now – mock data works without it)
5. Deploy

Every push to `main` or any branch will create a preview deployment automatically.

## Next Steps

- Connect real database with Prisma
- Add cart state (Zustand or Context)
- Integrate Stripe payments
- Add Medusa.js as commerce backend (optional)
- Delivery slot selection
- Admin dashboard

## Project Structure

```
src/
├── app/              # Pages (App Router)
├── components/       # UI components
└── lib/              # Utilities + mock data
prisma/
└── schema.prisma     # Database models
```
