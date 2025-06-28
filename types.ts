// src/types.ts

// IMPORTANT: Updated Product interface to include 'gender'
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  vibe: string[]; // Array of strings for the vibe
  image: string; // Path to the product image
  price: number; // Example price
  gender: 'men' | 'women' | 'unisex'; // Added gender property
}

export interface CartItem extends Product {
  quantity: number;
}

export interface WishlistItem extends Product {
  // You might add specific wishlist properties here if needed,
  // but for now, it's just the product itself.
}

// Define action types for the reducer
export type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string } // payload is product id
  | { type: 'INCREASE_QUANTITY'; payload: string } // payload is product id
  | { type: 'DECREASE_QUANTITY'; payload: string }; // payload is product id

export type WishlistAction =
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }; // payload is product id

// Context types
export interface AppContextType { // <--- THIS MUST BE PRESENT AND EXPORTED
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isItemInWishlist: (productId: string) => boolean;
}