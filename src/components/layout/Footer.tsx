import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../ui/Logo';
import Newsletter from '../ui/Newsletter';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-600 mt-4">
              Fresh, healthy and delicious salads made with locally sourced ingredients. 
              Order online for delivery or pickup.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-gray-200 hover:bg-primary-500 hover:text-white transition-colors p-2 rounded-full"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gray-200 hover:bg-primary-500 hover:text-white transition-colors p-2 rounded-full"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="bg-gray-200 hover:bg-primary-500 hover:text-white transition-colors p-2 rounded-full"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary-600 transition-colors">
                  {t('navigation.products')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">
                  {t('navigation.blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              {t('home.newsletter.title')}
            </h3>
            <p className="text-gray-600 mb-4">{t('home.newsletter.subtitle')}</p>
            <Newsletter />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;