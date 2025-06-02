import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/utils/PageHeader';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'About Us - Fresh Greens';
  }, []);

  return (
    <div>
      <PageHeader 
        title={t('about.title')} 
        backgroundImage="https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold font-heading mb-6">{t('about.mission.title')}</h2>
              <p className="text-gray-600 mb-6">{t('about.mission.content')}</p>
              <p className="text-gray-600">
                Our promise is simple: to provide you with fresh, nutritious, and delicious salads that support both your health and our planet.
              </p>
            </div>
            <div className="fade-in">
              <img 
                src="https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                alt="Our mission" 
                className="rounded-lg shadow-md w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 fade-in">
              <img 
                src="https://images.pexels.com/photos/3094580/pexels-photo-3094580.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                alt="Our story" 
                className="rounded-lg shadow-md w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2 fade-in">
              <h2 className="text-3xl font-bold font-heading mb-6">{t('about.story.title')}</h2>
              <p className="text-gray-600 mb-6">{t('about.story.content')}</p>
              <p className="text-gray-600">
                Today, we continue to grow, but our commitment to quality, freshness, and sustainability remains unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 fade-in">
              {t('about.values.title')}
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">
                {t('about.values.value1')}
              </h3>
              <p className="text-gray-600">
                {t('about.values.value1Text')}
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">
                {t('about.values.value2')}
              </h3>
              <p className="text-gray-600">
                {t('about.values.value2Text')}
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">
                {t('about.values.value3')}
              </h3>
              <p className="text-gray-600">
                {t('about.values.value3Text')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;