import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

const BlogTeaser = () => {
  const { t } = useTranslation();
  // Get the latest 2 blog posts
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 fade-in">
            {t('home.blog.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden fade-in">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-primary-600 font-medium">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold font-heading mt-2 mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center"
                >
                  {t('buttons.readMore')}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Link to="/blog" className="btn btn-outline">
            {t('home.blog.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;