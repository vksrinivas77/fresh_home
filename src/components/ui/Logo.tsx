import { Salad } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <Salad className="text-primary-600 h-8 w-8 mr-2" />
      <span className="font-heading font-bold text-xl text-gray-900">Fresh<span className="text-primary-600">Greens</span></span>
    </Link>
  );
};

export default Logo;