import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, ArrowLeft, Heart } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('ingredients');
  const [quantity, setQuantity] = useState(1);
  
  // Find the product by id
  const product = products.find(p => p.id === Number(id));
  
  useEffect(() => {
    if (product) {
      document.title = `${product.name} - Fresh Greens`;
    }
  }, [product]);
  
  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/products" className="text-primary-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <div className="pt-24">
      <div className="container-custom py-12">
        <div className="mb-6">
          <Link to="/products" className="text-gray-600 hover:text-primary-600 transition-colors inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            {t('buttons.backToProducts')}
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="fade-in">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="fade-in">
            <span className="text-sm font-medium text-primary-600 uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold font-heading mt-2 mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-gray-800 mb-6">${product.price.toFixed(2)}</p>
            
            <p className="text-gray-600 mb-8">{product.description}</p>
            
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="mr-6">
                  <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={decrementQuantity}
                      className="bg-gray-200 text-gray-600 hover:bg-gray-300 h-10 w-10 rounded-l flex items-center justify-center"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                      className="h-10 w-16 border-y border-gray-300 text-center focus:outline-none"
                    />
                    <button
                      onClick={incrementQuantity}
                      className="bg-gray-200 text-gray-600 hover:bg-gray-300 h-10 w-10 rounded-r flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary flex items-center">
                  <ShoppingCart size={18} className="mr-2" />
                  {t('buttons.addToCart')}
                </button>
                <button className="btn btn-outline flex items-center">
                  <Heart size={18} className="mr-2" />
                  Wishlist
                </button>
              </div>
            </div>
            
            {/* Product Metadata */}
            <div className="border-t border-gray-200 pt-6">
              <div className="mb-2">
                <span className="font-medium text-gray-700 mr-2">SKU:</span>
                <span className="text-gray-600">{product.sku}</span>
              </div>
              {product.tags && (
                <div>
                  <span className="font-medium text-gray-700 mr-2">Tags:</span>
                  <span className="text-gray-600">{product.tags.join(', ')}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mt-16 fade-in">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`py-4 px-1 font-medium text-sm border-b-2 ${
                  activeTab === 'ingredients'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t('products.productDetails.ingredients')}
              </button>
              <button
                onClick={() => setActiveTab('nutrition')}
                className={`py-4 px-1 font-medium text-sm border-b-2 ${
                  activeTab === 'nutrition'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t('products.productDetails.nutrition')}
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 font-medium text-sm border-b-2 ${
                  activeTab === 'reviews'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t('products.productDetails.reviews')}
              </button>
            </nav>
          </div>
          
          <div className="py-6">
            {activeTab === 'ingredients' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {product.ingredients?.map((ingredient, index) => (
                    <li key={index} className="text-gray-600">{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'nutrition' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Nutrition Information</h3>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Calories</td>
                      <td className="py-3">{product.nutrition?.calories}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Protein</td>
                      <td className="py-3">{product.nutrition?.protein}g</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Carbohydrates</td>
                      <td className="py-3">{product.nutrition?.carbs}g</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Fat</td>
                      <td className="py-3">{product.nutrition?.fat}g</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Fiber</td>
                      <td className="py-3">{product.nutrition?.fiber}g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                <p className="text-gray-600">
                  No reviews yet. Be the first to review this product.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;