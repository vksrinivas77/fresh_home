import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-64 object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Link
            to={`/products/${product.id}`}
            className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-primary-600 hover:text-white transition-colors"
            aria-label={`View ${product.name} details`}
          >
            <Eye size={20} />
          </Link>
          <button
            className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-primary-600 hover:text-white transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        <h3 className="font-medium text-lg mb-2">
          <Link
            to={`/products/${product.id}`}
            className="hover:text-primary-600 transition-colors"
          >
            {product.name}
          </Link>
        </h3>
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-800">${product.price.toFixed(2)}</span>
          <button className="text-sm text-white bg-primary-600 px-3 py-1 rounded hover:bg-primary-700 transition-colors">
            {t('buttons.addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;