import { SearchQuery } from '~/generated/graphql';
import { Link } from '@remix-run/react';
import { Price } from './Price';
import { motion } from 'framer-motion';

export type ProductCardProps = SearchQuery['search']['items'][number];

export function ProductCard({
  productAsset,
  productName,
  slug,
  priceWithTax,
  currencyCode,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="shadow-lg rounded-lg overflow-hidden bg-white"
    >
      <Link
        className="flex flex-col h-full"
        prefetch="intent"
        to={`/products/${slug}`}
      >
        {/* Image Section */}
        <img
          className="rounded-t-lg object-cover aspect-[5/4] transition-all duration-300 ease-in-out"
          alt={productName}
          src={productAsset?.preview + '?w=400&h=300'}
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder.jpg'; // Fallback image
          }}
        />

        {/* Product Information */}
        <div className="p-4 flex flex-col justify-between">
          <div className="text-lg font-semibold text-gray-800 truncate">
            {productName}
          </div>
          <div className="text-md font-medium text-gray-900 mt-2">
            <Price priceWithTax={priceWithTax} currencyCode={currencyCode} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
