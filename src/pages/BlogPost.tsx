import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  
  // Find the blog post
  const post = blogPosts.find(p => p.id === Number(id));
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Fresh Greens Blog`;
    }
  }, [post]);
  
  if (!post) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link to="/blog" className="text-primary-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-24">
      <div className="container-custom py-12">
        <div className="mb-6">
          <Link to="/blog" className="text-gray-600 hover:text-primary-600 transition-colors inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </div>
        
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 text-sm">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </header>
          
          {/* Featured Image */}
          <div className="mb-8 fade-in">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          
          {/* Content */}
          <div className="prose max-w-none mb-8 fade-in">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            <p className="mb-6 leading-relaxed">
              At Fresh Greens, we believe that healthy eating should never compromise on flavor. Our commitment to sourcing the freshest, locally-grown ingredients ensures that every bite of our salads delivers both nutrition and taste.
            </p>
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">The Benefits of Fresh Ingredients</h2>
            <p className="mb-6 leading-relaxed">
              When ingredients are harvested at peak ripeness and quickly make their way to your plate, they retain more nutrients and flavor. This is why we partner with local farms to ensure our produce travels the shortest distance possible from harvest to your salad bowl.
            </p>
            <p className="mb-6 leading-relaxed">
              Studies have shown that fruits and vegetables begin to lose nutrients as soon as they're harvested. By choosing locally sourced, seasonal ingredients, we're able to maximize the nutritional value of our salads while supporting sustainable farming practices.
            </p>
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">Seasonal Variations</h2>
            <p className="mb-6 leading-relaxed">
              Embracing seasonal eating not only ensures the best flavors but also connects us to the natural cycles of food production. Our menu changes throughout the year to showcase the best seasonal produce, keeping our offerings fresh and exciting.
            </p>
            <p className="mb-6 leading-relaxed">
              Winter brings hearty root vegetables and robust greens, while summer offers an abundance of colorful peppers, tomatoes, and crisp lettuces. Each season has its unique bounty, and we design our salads to celebrate these natural variations.
            </p>
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">Conclusion</h2>
            <p className="mb-6 leading-relaxed">
              The quality of ingredients is the foundation of any great dish. At Fresh Greens, we'll never compromise on this principle. Our commitment to freshness isn't just about taste—it's about providing the most nutritious, environmentally responsible meals possible.
            </p>
            <p className="leading-relaxed">
              We invite you to taste the difference that truly fresh ingredients make. Whether you're a longtime salad enthusiast or just beginning to explore healthier eating options, we're confident that our dedication to quality will shine through in every bite.
            </p>
          </div>
          
          {/* Tags */}
          <div className="mb-8 fade-in">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Share */}
          <div className="border-t border-gray-200 pt-6 mb-8 fade-in">
            <h3 className="text-lg font-bold mb-4">{t('blog.share')}</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-[#1877F2] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-[#1DA1F2] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-[#0A66C2] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Related Posts */}
          <div className="border-t border-gray-200 pt-8 fade-in">
            <h3 className="text-xl font-bold font-heading mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2).map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold mb-2">
                      <Link to={`/blog/${relatedPost.id}`} className="hover:text-primary-600 transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">{relatedPost.date}</p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors"
                    >
                      {t('buttons.readMore')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;