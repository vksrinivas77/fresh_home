import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the email to your API
    setIsSubmitted(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="text-success-600 font-medium animate-fade-in">
          {t('home.newsletter.success')}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('home.newsletter.placeholder')}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
          >
            <Send size={16} className="mr-2" />
            {t('home.newsletter.button')}
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;