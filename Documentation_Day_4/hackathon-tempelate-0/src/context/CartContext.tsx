"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: string | number;
  category?: string;
  description: string;
  image: any;
  quantity: number;
}

interface CartContextProps {
  cart: Product[];
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleCart: () => void;
  getCartTotal: () => number;
  clearCart: () => void;
}

const CART_STORAGE_KEY = 'ecommerce-cart-items';

const getStoredCart = (): Product[] => {
  if (typeof window === 'undefined') return [];
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
};

const storeCart = (cart: Product[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedCart = getStoredCart();
    setCart(savedCart);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      storeCart(cart);
    }
  }, [cart, isInitialized]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + (product.quantity || 1) }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1 || quantity > 99) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const priceValue = typeof item.price === 'string' 
        ? parseFloat(item.price.replace(/[^0-9.-]+/g, '')) 
        : item.price;
      
      return total + (priceValue * (item.quantity || 1));
    }, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      isCartOpen, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      toggleCart,
      getCartTotal,
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
