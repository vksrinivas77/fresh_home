import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

const FeaturedProducts = () => {
  const { t } = useTranslation();
  // Take first 4 products as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 fade-in">
            {t('home.featuredProducts')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="fade-in">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Link to="/products" className="btn btn-outline">
            {t('navigation.products')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;