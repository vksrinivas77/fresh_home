import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AboutSnippet = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img
              src="https://images.pexels.com/photos/8105035/pexels-photo-8105035.jpeg?auto=compress&cs=tinysrgb&w=1280"
              alt="Organic vegetables"
              className="rounded-lg shadow-md w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              {t('home.aboutSnippet.title')}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              {t('home.aboutSnippet.content')}
            </p>
            <Link to="/about" className="btn btn-primary">
              {t('home.aboutSnippet.link')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;