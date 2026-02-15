import Image from 'next/image';
import Button from '../ui/Button';

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  tag?: string;
  description: string;
  image: string;
  onAddToCart?: () => void;
  className?: string;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  tag,
  description,
  image,
  onAddToCart,
  className = '',
}: ProductCardProps) {
  return (
    <div
      className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-md transition-all duration-200 ${className}`}
    >
      {/* Image */}
      <div className="relative aspect-square bg-ghost overflow-hidden">
        {tag && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-accent-green text-white text-xs font-bold uppercase">
            {tag}
          </div>
        )}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-smooth"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-jakarta font-bold text-deep-blue mb-2">
          {name}
        </h3>
        <p className="text-sm text-text-mid mb-4 line-clamp-2">
          {description}
        </p>

        {/* Pricing */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-jakarta font-bold text-ocean">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-lg text-text-light line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Add to cart button */}
        <Button
          variant="primary"
          size="sm"
          className="w-full"
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
