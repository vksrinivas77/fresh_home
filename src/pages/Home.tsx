import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutSnippet from '../components/home/AboutSnippet';
import HowItWorks from '../components/home/HowItWorks';
import BlogTeaser from '../components/home/BlogTeaser';

const Home = () => {
  useEffect(() => {
    document.title = 'Fresh Greens - Premium Vegetable Salads';
  }, []);

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutSnippet />
      <HowItWorks />
      <BlogTeaser />
    </>
  );
};

export default Home;