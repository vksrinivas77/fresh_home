import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
        }}
      />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {t('home.hero.subtitle')}
          </p>
          <Link
            to="/products"
            className="btn btn-primary inline-flex items-center group"
          >
            {t('buttons.shopNow')}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;