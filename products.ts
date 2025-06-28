// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  vibe: string[]; // Array of strings for the vibe
  image: string; // Path to the product image
  price: number; // Example price
  gender: 'men' | 'women' | 'unisex';
}

export const products: Product[] = [
  {
    id: 'prime-reign',
    name: 'Prime Reign',
    tagline: 'Sin never smelled so smooth.',
    description: 'Warm spices and smooth woods meet in this bold, magnetic scent.',
    vibe: ['warm spicy', 'sweet', 'amber', 'woody', 'aromatic', 'masculine', 'sensual'],
    image: '/prime-reign.jpg', // You'll need to add this image to your public folder
    price: 65.00,
    gender: 'men'
  },
  {
    id: 'frosted-oud',
    name: 'Frosted Oud',
    tagline: 'Too soft to touch, too deep to forget.',
    description: 'A clean, modern twist on oud. Frosted Oud is soft, mysterious, and lingers like a memory that won\'t fade.',
    vibe: ['woody', 'powdery', 'musky', 'smoky', 'clean', 'soft', 'unisex', 'elegant'],
    image: '/frosted-oud.jpg', // You'll need to add this image to your public folder
    price: 75.00,
     gender: 'men'
  },
  {
    id: 'cr7-blu-parfum',
    name: 'CR7 Blu Parfum',
    tagline: 'Fresh from the top.',
    description: 'Bright, crisp, and full of energy. This is your daily reset - cool, clean, and always composed.',
    vibe: ['citrus', 'fresh spicy', 'aromatic', 'clean', 'light woody', 'casual', 'refreshing'],
    image: '/cr7-blu-parfum.jpg', // You'll need to add this image to your public folder
    price: 55.00,
     gender: 'men'
  },
  {
    id: 'midnight-in-montmartre',
    name: 'Midnight in Montmartre',
    tagline: 'A kiss. A city. A memory in bloom.',
    description: 'Romantic and floral with a musky trail, this scent feels like Paris at midnight-intimate, timeless, unforgettable.',
    vibe: ['fruity', 'floral', 'musky', 'sweet', 'patchouli', 'romantic', 'dreamy', 'elegant'],
    image: '/midnight-in-montmartre.jpg', // You'll need to add this image to your public folder
    price: 70.00,
    gender: 'women'
  },
  {
    id: 'aurora-bloom',
    name: 'Aurora Bloom',
    tagline: 'Light up the room petal by petal.',
    description: 'Fresh florals and citrus blend into a radiant, glowing scent. Aurora Bloom is soft, sunny confidence in a bottle.',
    vibe: ['fresh', 'floral', 'citrusy', 'aquatic', 'fruity', 'radiant', 'light', 'youthful'],
    image: '/aurora-bloom.jpg', // You'll need to add this image to your public folder
    price: 60.00,
    gender: 'women'
  },
  {
    id: 'starlet-charm',
    name: 'Starlet Charm',
    tagline: 'Loud, lush, legendary.',
    description: 'Fruity, flirty, and unforgettable. Starlet Charm is all sparkle, sass, and standout energy.',
    vibe: ['fruity', 'citrus', 'floral', 'bright', 'bubbly', 'sexy', 'confident', 'playful'],
    image: '/starlet-charm.jpg', // You'll need to add this image to your public folder
    price: 58.00,
     gender: 'women'
  },
];