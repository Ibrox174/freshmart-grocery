import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  image: string;
  description?: string;
}

export default function CategoryCard({
  name,
  slug,
  image,
  description,
}: CategoryCardProps) {
  return (
    <Link
      href={`/category/${slug}`}
      className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
    >
      <span className="mb-3 text-4xl transition group-hover:scale-110">
        {image}
      </span>
      <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
        {name}
      </h3>
      {description && (
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      )}
    </Link>
  );
}
