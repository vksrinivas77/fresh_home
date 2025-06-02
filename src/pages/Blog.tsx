import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageHeader from '../components/utils/PageHeader';
import { blogPosts, blogCategories } from '../data/blogPosts';
import { Search } from 'lucide-react';

const Blog = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    document.title = 'Blog - Fresh Greens';
  }, []);

  useEffect(() => {
    let result = [...blogPosts];
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (category !== 'all') {
      result = result.filter(post => post.category === category);
    }
    
    setFilteredPosts(result);
  }, [searchTerm, category]);

  return (
    <div>
      <PageHeader 
        title={t('blog.title')} 
        backgroundImage="https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-8 fade-in">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t('blog.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </div>
              </div>
              
              {/* Blog Posts */}
              <div className="space-y-10">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden fade-in">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-64 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <span className="text-sm text-primary-600 font-medium">
                            {post.category}
                          </span>
                          <h2 className="text-xl font-bold font-heading mt-2 mb-3">
                            <Link to={`/blog/${post.id}`} className="hover:text-primary-600 transition-colors">
                              {post.title}
                            </Link>
                          </h2>
                          <p className="text-gray-600 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">
                              {post.date}
                            </span>
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
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No blog posts found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8 fade-in">
                <h3 className="font-heading font-semibold text-lg mb-4">
                  {t('blog.categories')}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setCategory('all')}
                      className={`w-full text-left py-2 px-3 rounded ${
                        category === 'all' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      All Categories
                    </button>
                  </li>
                  {blogCategories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setCategory(cat)}
                        className={`w-full text-left py-2 px-3 rounded ${
                          category === cat ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-sm fade-in">
                <h3 className="font-heading font-semibold text-lg mb-4">
                  {t('blog.recentPosts')}
                </h3>
                <div className="space-y-6">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex space-x-4">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium hover:text-primary-600 transition-colors">
                          <Link to={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;