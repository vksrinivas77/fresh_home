import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, Trash, ArrowRight, RefreshCw } from 'lucide-react';

const Cart = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'Your Cart - Fresh Greens';
  }, []);

  // For demo purposes, we'll show an empty cart
  const isCartEmpty = true;

  return (
    <div className="pt-24">
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold font-heading mb-8">
          {t('cart.title')}
        </h1>
        
        {isCartEmpty ? (
          <div className="bg-white p-12 rounded-lg shadow-sm text-center">
            <div className="mb-6">
              <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{t('cart.empty')}</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products" className="btn btn-primary inline-flex items-center">
              {t('cart.continueShopping')}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold">{t('cart.product')}</h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {/* This would normally map through cart items */}
                  <div className="p-6 flex flex-col sm:flex-row items-center">
                    <div className="sm:w-24 mb-4 sm:mb-0">
                      <img
                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500"
                        alt="Greek Salad"
                        className="w-20 h-20 object-cover rounded"
                      />
                    </div>
                    <div className="sm:ml-6 sm:flex-1">
                      <h3 className="font-medium">Greek Salad</h3>
                      <p className="text-sm text-gray-600">Classic</p>
                    </div>
                    <div className="sm:w-24 text-center sm:text-right">
                      <span className="font-bold">$9.99</span>
                    </div>
                    <div className="sm:w-32 mt-4 sm:mt-0 sm:ml-4">
                      <div className="flex items-center justify-center sm:justify-end">
                        <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 h-8 w-8 rounded-l flex items-center justify-center">
                          -
                        </button>
                        <input
                          type="number"
                          value="1"
                          min="1"
                          className="h-8 w-12 border-y border-gray-300 text-center focus:outline-none"
                          readOnly
                        />
                        <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 h-8 w-8 rounded-r flex items-center justify-center">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="sm:w-24 sm:ml-4 mt-4 sm:mt-0 text-center sm:text-right">
                      <span className="font-bold">$9.99</span>
                    </div>
                    <div className="sm:w-12 sm:ml-4 mt-4 sm:mt-0 text-center">
                      <button
                        aria-label="Remove item"
                        className="text-gray-500 hover:text-error-600 transition-colors"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-t border-gray-200 flex justify-between items-center">
                  <button className="text-primary-600 hover:text-primary-700 transition-colors inline-flex items-center">
                    <RefreshCw size={16} className="mr-2" />
                    {t('cart.update')}
                  </button>
                  <Link to="/products" className="text-gray-600 hover:text-gray-800 transition-colors">
                    {t('cart.continueShopping')}
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">{t('cart.subtotal')}</h2>
                
                <div className="border-t border-b border-gray-200 py-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span className="font-medium">$9.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                </div>
                
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-bold">{t('cart.total')}</span>
                  <span className="text-lg font-bold">$9.99</span>
                </div>
                
                <Link
                  to="/checkout"
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  {t('cart.checkout')}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;