import { useTranslation } from 'react-i18next';
import { Salad, Package, Truck } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 fade-in">
            {t('home.howItWorks.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center fade-in">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Salad className="text-primary-600 h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-4">
              {t('home.howItWorks.step1')}
            </h3>
            <p className="text-gray-600">
              Browse our selection of fresh salads and build your custom order.
            </p>
          </div>
          
          <div className="text-center fade-in">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="text-primary-600 h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-4">
              {t('home.howItWorks.step2')}
            </h3>
            <p className="text-gray-600">
              We prepare your salad with fresh, locally sourced ingredients.
            </p>
          </div>
          
          <div className="text-center fade-in">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="text-primary-600 h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold font-heading mb-4">
              {t('home.howItWorks.step3')}
            </h3>
            <p className="text-gray-600">
              Enjoy fast delivery to your door or convenient pickup options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;