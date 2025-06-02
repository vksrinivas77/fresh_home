import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ShoppingCart, Search, Globe } from 'lucide-react';
import Logo from '../ui/Logo';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="z-10">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium hover:text-primary-600 transition-colors ${
              location.pathname === '/' ? 'text-primary-600' : 'text-gray-800'
            }`}
          >
            {t('navigation.home')}
          </Link>
          <Link
            to="/about"
            className={`font-medium hover:text-primary-600 transition-colors ${
              location.pathname === '/about' ? 'text-primary-600' : 'text-gray-800'
            }`}
          >
            {t('navigation.about')}
          </Link>
          <Link
            to="/products"
            className={`font-medium hover:text-primary-600 transition-colors ${
              location.pathname === '/products' ? 'text-primary-600' : 'text-gray-800'
            }`}
          >
            {t('navigation.products')}
          </Link>
          <Link
            to="/blog"
            className={`font-medium hover:text-primary-600 transition-colors ${
              location.pathname === '/blog' ? 'text-primary-600' : 'text-gray-800'
            }`}
          >
            {t('navigation.blog')}
          </Link>
          <Link
            to="/contact"
            className={`font-medium hover:text-primary-600 transition-colors ${
              location.pathname === '/contact' ? 'text-primary-600' : 'text-gray-800'
            }`}
          >
            {t('navigation.contact')}
          </Link>
        </nav>

        {/* Action Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            aria-label="Search"
            className="text-gray-700 hover:text-primary-600 transition-colors"
          >
            <Search size={20} />
          </button>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-primary-600 transition-colors relative"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link
            to="/cart"
            className="text-gray-700 hover:text-primary-600 transition-colors relative"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
            <Link
              to="/"
              className="text-xl font-medium hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              {t('navigation.home')}
            </Link>
            <Link
              to="/about"
              className="text-xl font-medium hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              {t('navigation.about')}
            </Link>
            <Link
              to="/products"
              className="text-xl font-medium hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              {t('navigation.products')}
            </Link>
            <Link
              to="/blog"
              className="text-xl font-medium hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              {t('navigation.blog')}
            </Link>
            <Link
              to="/contact"
              className="text-xl font-medium hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              {t('navigation.contact')}
            </Link>
            <div className="pt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;