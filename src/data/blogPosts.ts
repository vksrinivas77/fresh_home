import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Benefits of Fresh Ingredients',
    excerpt: 'Discover why fresh, locally-sourced ingredients make all the difference in nutrition and taste.',
    image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1280',
    date: 'June 15, 2025',
    author: 'Sarah Johnson',
    category: 'Nutrition',
    tags: ['Fresh', 'Local', 'Nutrition']
  },
  {
    id: 2,
    title: 'Seasonal Salads: Spring Edition',
    excerpt: 'Explore our favorite salad combinations featuring the best spring produce.',
    image: 'https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=1280',
    date: 'May 22, 2025',
    author: 'Michael Chen',
    category: 'Seasonal',
    tags: ['Seasonal', 'Spring', 'Recipes']
  },
  {
    id: 3,
    title: 'The Art of Salad Dressing',
    excerpt: 'Learn how to create delicious, balanced dressings that elevate any salad.',
    image: 'https://images.pexels.com/photos/3094580/pexels-photo-3094580.jpeg?auto=compress&cs=tinysrgb&w=1280',
    date: 'April 10, 2025',
    author: 'Emma Wilson',
    category: 'Recipes',
    tags: ['Dressing', 'Homemade', 'Tips']
  },
  {
    id: 4,
    title: 'Superfoods to Add to Your Salad',
    excerpt: 'Discover nutrient-dense ingredients that can turn your salad into a superfood powerhouse.',
    image: 'https://images.pexels.com/photos/2262294/pexels-photo-2262294.jpeg?auto=compress&cs=tinysrgb&w=1280',
    date: 'March 28, 2025',
    author: 'David Rivera',
    category: 'Nutrition',
    tags: ['Superfoods', 'Health', 'Nutrition']
  },
  {
    id: 5,
    title: 'Meal Prep: Salads for the Week',
    excerpt: 'Tips and tricks for preparing fresh, delicious salads that stay crisp all week long.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1280',
    date: 'February 15, 2025',
    author: 'Lisa Martinez',
    category: 'Lifestyle',
    tags: ['Meal Prep', 'Time-saving', 'Organization']
  },
  {
    id: 6,
    title: 'The History of Salad: From Ancient Rome to Modern Day',
    excerpt: 'A fascinating journey through time exploring how salads have evolved across cultures.',
    image: 'https://images.pexels.com/photos/806457/pexels-photo-806457.jpeg?auto=compress&cs=tinysrgb&w=1280',
    date: 'January 30, 2025',
    author: 'Robert Thompson',
    category: 'Culture',
    tags: ['History', 'Culture', 'Food Origins']
  }
];

export const blogCategories = [
  'Nutrition',
  'Seasonal',
  'Recipes',
  'Lifestyle',
  'Culture'
];