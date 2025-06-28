// src/context/AppContext.tsx
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import type { Product, CartItem, WishlistItem, CartAction, WishlistAction, AppContextType } from '../types';


// Define initial state for cart and wishlist
interface AppState {
  cart: CartItem[];
  wishlist: WishlistItem[];
}

const initialState: AppState = {
  cart: [],
  wishlist: [],
};

// Cart Reducer
const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingCartItem = state.find(item => item.id === action.payload.id);
      if (existingCartItem) {
        return state.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ).filter(item => item.quantity > 0); // Remove if quantity becomes 0
    default:
      return state;
  }
};

// Wishlist Reducer
const wishlistReducer = (state: WishlistItem[], action: WishlistAction): WishlistItem[] => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      const existingWishlistItem = state.find(item => item.id === action.payload.id);
      if (!existingWishlistItem) {
        return [...state, action.payload];
      }
      return state; // Item already in wishlist
    case 'REMOVE_FROM_WISHLIST':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

// Create the Context
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the Context Provider Component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage
  const [cart, dispatchCart] = useReducer(cartReducer, initialState.cart, (initial) => {
    try {
      const storedCart = localStorage.getItem('arova_cart');
      return storedCart ? JSON.parse(storedCart) : initial;
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      return initial;
    }
  });

  const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, initialState.wishlist, (initial) => {
    try {
      const storedWishlist = localStorage.getItem('arova_wishlist');
      return storedWishlist ? JSON.parse(storedWishlist) : initial;
    } catch (error) {
      console.error("Failed to parse wishlist from localStorage", error);
      return initial;
    }
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('arova_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('arova_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);


  // Cart Actions
  const addToCart = (product: Product) => dispatchCart({ type: 'ADD_ITEM', payload: product });
  const removeFromCart = (productId: string) => dispatchCart({ type: 'REMOVE_ITEM', payload: productId });
  const increaseQuantity = (productId: string) => dispatchCart({ type: 'INCREASE_QUANTITY', payload: productId });
  const decreaseQuantity = (productId: string) => dispatchCart({ type: 'DECREASE_QUANTITY', payload: productId });

  // Wishlist Actions
  const addToWishlist = (product: Product) => dispatchWishlist({ type: 'ADD_TO_WISHLIST', payload: product });
  const removeFromWishlist = (productId: string) => dispatchWishlist({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  const isItemInWishlist = (productId: string): boolean => wishlist.some(item => item.id === productId);

  const contextValue: AppContextType = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    addToWishlist,
    removeFromWishlist,
    isItemInWishlist,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};