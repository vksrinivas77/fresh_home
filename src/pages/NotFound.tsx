import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found - Fresh Greens';
  }, []);

  return (
    <div className="pt-24">
      <div className="container-custom py-20 text-center">
        <h1 className="text-6xl font-bold font-heading mb-6">404</h1>
        <h2 className="text-3xl font-bold font-heading mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;