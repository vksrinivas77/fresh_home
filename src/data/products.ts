import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Greek Salad',
    description: 'A classic Mediterranean salad with fresh tomatoes, cucumber, red onion, kalamata olives, and feta cheese, dressed with olive oil and oregano.',
    price: 9.99,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'classic',
    sku: 'SAL-GRK-01',
    tags: ['Mediterranean', 'Vegetarian', 'Keto-friendly'],
    ingredients: [
      'Romaine lettuce',
      'Cherry tomatoes',
      'Cucumber',
      'Red onion',
      'Kalamata olives',
      'Feta cheese',
      'Extra virgin olive oil',
      'Dried oregano',
      'Salt',
      'Black pepper'
    ],
    nutrition: {
      calories: 320,
      protein: 8,
      carbs: 12,
      fat: 28,
      fiber: 4
    }
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, shaved parmesan cheese, homemade croutons, and our signature Caesar dressing.',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'classic',
    sku: 'SAL-CAE-01',
    tags: ['Classic', 'Protein'],
    ingredients: [
      'Romaine lettuce',
      'Parmesan cheese',
      'Homemade croutons',
      'Caesar dressing',
      'Black pepper'
    ],
    nutrition: {
      calories: 350,
      protein: 10,
      carbs: 15,
      fat: 30,
      fiber: 3
    }
  },
  {
    id: 3,
    name: 'Quinoa Bowl',
    description: 'Protein-rich quinoa with roasted vegetables, avocado, and a lemon tahini dressing. Perfect for a nutritious meal.',
    price: 11.99,
    image: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'specialty',
    sku: 'BWL-QNO-01',
    tags: ['Vegan', 'Protein', 'Gluten-free'],
    ingredients: [
      'Quinoa',
      'Roasted sweet potato',
      'Roasted red pepper',
      'Avocado',
      'Cherry tomatoes',
      'Cucumber',
      'Mixed greens',
      'Lemon tahini dressing',
      'Pumpkin seeds'
    ],
    nutrition: {
      calories: 420,
      protein: 12,
      carbs: 45,
      fat: 22,
      fiber: 8
    }
  },
  {
    id: 4,
    name: 'Harvest Bowl',
    description: 'Seasonal roasted vegetables, mixed greens, goat cheese, and candied pecans with a maple vinaigrette.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'seasonal',
    sku: 'BWL-HRV-01',
    tags: ['Seasonal', 'Vegetarian'],
    ingredients: [
      'Mixed greens',
      'Roasted butternut squash',
      'Roasted brussels sprouts',
      'Goat cheese',
      'Candied pecans',
      'Dried cranberries',
      'Maple vinaigrette'
    ],
    nutrition: {
      calories: 450,
      protein: 9,
      carbs: 40,
      fat: 25,
      fiber: 6
    }
  },
  {
    id: 5,
    name: 'Cobb Salad',
    description: 'A hearty American classic with grilled chicken, bacon, hard-boiled egg, avocado, blue cheese, and tomatoes.',
    price: 13.99,
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'classic',
    sku: 'SAL-CBB-01',
    tags: ['High-protein', 'Classic'],
    ingredients: [
      'Romaine lettuce',
      'Grilled chicken breast',
      'Bacon',
      'Hard-boiled egg',
      'Avocado',
      'Blue cheese',
      'Cherry tomatoes',
      'Red onion',
      'Ranch dressing'
    ],
    nutrition: {
      calories: 580,
      protein: 35,
      carbs: 14,
      fat: 42,
      fiber: 5
    }
  },
  {
    id: 6,
    name: 'Mediterranean Bowl',
    description: 'Falafel, hummus, tabbouleh, mixed greens, and tzatziki sauce. A vegetarian favorite packed with flavor.',
    price: 10.99,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'specialty',
    sku: 'BWL-MED-01',
    tags: ['Mediterranean', 'Vegetarian'],
    ingredients: [
      'Mixed greens',
      'Falafel',
      'Hummus',
      'Tabbouleh',
      'Cherry tomatoes',
      'Cucumber',
      'Kalamata olives',
      'Tzatziki sauce',
      'Pita chips'
    ],
    nutrition: {
      calories: 480,
      protein: 15,
      carbs: 50,
      fat: 24,
      fiber: 10
    }
  },
  {
    id: 7,
    name: 'Summer Berry Salad',
    description: 'Fresh mixed berries, spinach, goat cheese, and candied walnuts with a raspberry vinaigrette.',
    price: 11.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'seasonal',
    sku: 'SAL-BRY-01',
    tags: ['Seasonal', 'Vegetarian', 'Sweet'],
    ingredients: [
      'Baby spinach',
      'Strawberries',
      'Blueberries',
      'Raspberries',
      'Goat cheese',
      'Candied walnuts',
      'Red onion',
      'Raspberry vinaigrette'
    ],
    nutrition: {
      calories: 380,
      protein: 7,
      carbs: 35,
      fat: 22,
      fiber: 8
    }
  },
  {
    id: 8,
    name: 'Asian Chicken Salad',
    description: 'Grilled chicken, mandarin oranges, almonds, and crispy wonton strips with a sesame ginger dressing.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1280',
    category: 'specialty',
    sku: 'SAL-ASN-01',
    tags: ['Asian-inspired', 'Protein'],
    ingredients: [
      'Mixed greens',
      'Napa cabbage',
      'Grilled chicken breast',
      'Mandarin oranges',
      'Sliced almonds',
      'Crispy wonton strips',
      'Green onions',
      'Cilantro',
      'Sesame ginger dressing'
    ],
    nutrition: {
      calories: 450,
      protein: 30,
      carbs: 32,
      fat: 22,
      fiber: 4
    }
  }
];