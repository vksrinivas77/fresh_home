import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
        aria-label="Change language"
      >
        <Globe size={20} />
        <span className="text-sm font-medium">{i18n.language === 'es' ? 'ES' : 'EN'}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-10">
          <div className="py-1">
            <button
              onClick={() => changeLanguage('en')}
              className={`block px-4 py-2 text-sm w-full text-left ${
                i18n.language === 'en'
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('es')}
              className={`block px-4 py-2 text-sm w-full text-left ${
                i18n.language === 'es'
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Español
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;