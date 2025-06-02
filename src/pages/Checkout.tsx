import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const Checkout = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    document.title = 'Checkout - Fresh Greens';
  }, []);

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      // Place order
      setOrderPlaced(true);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  if (orderPlaced) {
    return (
      <div className="pt-24">
        <div className="container-custom py-16">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-success-500 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold font-heading mb-4">
              {t('checkout.success.title')}
            </h1>
            <p className="text-gray-600 mb-8">
              {t('checkout.success.message')}
            </p>
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium mb-2">{t('checkout.success.orderNumber')}: #FG12345</p>
              <p className="text-sm text-gray-600">
                You will receive a confirmation email shortly with order details.
              </p>
            </div>
            <Link to="/" className="btn btn-primary">
              {t('checkout.success.back')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="container-custom py-12">
        <div className="mb-6">
          <Link to="/cart" className="text-gray-600 hover:text-primary-600 transition-colors inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Cart
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold font-heading mb-8">
          {t('checkout.title')}
        </h1>
        
        {/* Checkout Steps */}
        <div className="mb-12">
          <div className="flex items-center">
            <div className={`relative flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
              <div className={`absolute w-full h-1 top-1/2 left-full ${
                currentStep > 1 ? 'bg-primary-600' : 'bg-gray-200'
              }`} style={{ width: 'calc(100% - 2.5rem)' }}></div>
            </div>
            <div className="flex-1"></div>
            <div className={`relative flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
              <div className={`absolute w-full h-1 top-1/2 left-full ${
                currentStep > 2 ? 'bg-primary-600' : 'bg-gray-200'
              }`} style={{ width: 'calc(100% - 2.5rem)' }}></div>
            </div>
            <div className="flex-1"></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep >= 3 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              3
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-center w-20">
              <span className={`text-sm font-medium ${
                currentStep >= 1 ? 'text-primary-600' : 'text-gray-600'
              }`}>
                {t('checkout.steps.shipping')}
              </span>
            </div>
            <div className="text-center w-20">
              <span className={`text-sm font-medium ${
                currentStep >= 2 ? 'text-primary-600' : 'text-gray-600'
              }`}>
                {t('checkout.steps.payment')}
              </span>
            </div>
            <div className="text-center w-20">
              <span className={`text-sm font-medium ${
                currentStep >= 3 ? 'text-primary-600' : 'text-gray-600'
              }`}>
                {t('checkout.steps.review')}
              </span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">{t('checkout.steps.shipping')}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                        {t('checkout.form.firstName')}*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                        {t('checkout.form.lastName')}*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                        {t('checkout.form.address')}*
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                        {t('checkout.form.city')}*
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">
                        {t('checkout.form.zipCode')}*
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                        {t('checkout.form.country')}*
                      </label>
                      <select
                        id="country"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="MX">Mexico</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        {t('checkout.form.phone')}*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">{t('checkout.steps.payment')}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">
                        {t('checkout.form.cardNumber')}*
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="nameOnCard" className="block text-gray-700 font-medium mb-2">
                        {t('checkout.form.nameOnCard')}*
                      </label>
                      <input
                        type="text"
                        id="nameOnCard"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="expiration" className="block text-gray-700 font-medium mb-2">
                          {t('checkout.form.expiration')}*
                        </label>
                        <input
                          type="text"
                          id="expiration"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
                          {t('checkout.form.cvv')}*
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          placeholder="123"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 3: Review Order */}
              {currentStep === 3 && (
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">{t('checkout.steps.review')}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Shipping Information</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p>John Doe</p>
                        <p>123 Main St</p>
                        <p>New York, NY 10001</p>
                        <p>United States</p>
                        <p>(123) 456-7890</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Payment Method</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p>Credit Card ending in 4242</p>
                        <p>Expires 12/25</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Order Items</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <div className="flex">
                            <div className="w-16 h-16 mr-4">
                              <img
                                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300"
                                alt="Greek Salad"
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                            <div>
                              <p className="font-medium">Greek Salad</p>
                              <p className="text-sm text-gray-600">Qty: 1</p>
                            </div>
                          </div>
                          <span className="font-medium">$9.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="p-6 border-t border-gray-200 flex justify-between">
                {currentStep > 1 && (
                  <button
                    onClick={handlePreviousStep}
                    className="btn btn-outline"
                  >
                    Back
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    onClick={handleNextStep}
                    className="btn btn-primary ml-auto"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleNextStep}
                    className="btn btn-primary ml-auto"
                  >
                    {t('checkout.placeOrder')}
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">{t('checkout.orderSummary')}</h2>
              
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span className="font-medium">$9.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="font-medium">$0.80</span>
                </div>
              </div>
              
              <div className="flex justify-between mb-6">
                <span className="text-lg font-bold">{t('cart.total')}</span>
                <span className="text-lg font-bold">$10.79</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;