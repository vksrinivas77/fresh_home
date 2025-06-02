import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/utils/PageHeader';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us - Fresh Greens';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your API
    console.log('Form data:', formData);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div>
      <PageHeader 
        title={t('contact.title')} 
        backgroundImage="https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="fade-in">
              <h2 className="text-3xl font-bold font-heading mb-6">
                {t('contact.info.title')}
              </h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Whether you have a question about our products, 
                delivery, or anything else, our team is ready to answer all your questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <MapPin className="text-primary-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {t('contact.info.address')}
                    </h3>
                    <p className="text-gray-600">
                      1234 Salad Street, Fresh City, FC 98765
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Phone className="text-primary-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {t('contact.info.phone')}
                    </h3>
                    <p className="text-gray-600">
                      (123) 456-7890
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Mail className="text-primary-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {t('contact.info.email')}
                    </h3>
                    <p className="text-gray-600">
                      info@freshgreens.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Clock className="text-primary-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {t('contact.info.hours')}
                    </h3>
                    <p className="text-gray-600">
                      {t('contact.info.hoursValue')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="fade-in">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-6">
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-success-100 text-success-700 p-4 rounded-lg animate-fade-in">
                    {t('contact.form.success')}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        {t('contact.form.name')}*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        {t('contact.form.email')}*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        {t('contact.form.subject')}*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        {t('contact.form.message')}*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn btn-primary"
                    >
                      {t('contact.form.submit')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-gray-200 h-[400px] rounded-lg overflow-hidden fade-in">
            {/* This would be replaced with an actual map component */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;