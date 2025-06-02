import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/utils/PageHeader';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';
import { Filter, SlidersHorizontal } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = 'Products - Fresh Greens';
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (category !== 'all') {
      result = result.filter(product => product.category === category);
    }
    
    // Sort products
    switch (sortBy) {
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'nameAsc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
      default:
        // Newest is the default order in our data
        break;
    }
    
    setFilteredProducts(result);
  }, [category, sortBy]);

  return (
    <div>
      <PageHeader 
        title={t('products.title')} 
        backgroundImage="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Mobile filter toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-center">
                  <Filter size={18} className="mr-2" />
                  <span>{t('products.filter')}</span>
                </div>
                <SlidersHorizontal size={18} />
              </button>
            </div>
            
            {/* Sidebar filters - visible on larger screens or when toggled on mobile */}
            <div className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:col-span-1`}>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setCategory('all')}
                      className={`w-full text-left py-2 px-3 rounded ${
                        category === 'all' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      {t('products.categories.all')}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCategory('classic')}
                      className={`w-full text-left py-2 px-3 rounded ${
                        category === 'classic' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      {t('products.categories.classic')}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCategory('specialty')}
                      className={`w-full text-left py-2 px-3 rounded ${
                        category === 'specialty' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      {t('products.categories.specialty')}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCategory('seasonal')}
                      className={`w-full text-left py-2 px-3 rounded ${
                        category === 'seasonal' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      {t('products.categories.seasonal')}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Product listing */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
                <div className="flex items-center">
                  <label htmlFor="sort" className="mr-2 text-gray-600">
                    {t('products.sort')}
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="newest">{t('products.sortOptions.newest')}</option>
                    <option value="priceAsc">{t('products.sortOptions.priceAsc')}</option>
                    <option value="priceDesc">{t('products.sortOptions.priceDesc')}</option>
                    <option value="nameAsc">{t('products.sortOptions.nameAsc')}</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="fade-in">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600">No products found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;