"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: string | number;
  category?: string;
  description: string;
  image: any;
}

interface FavouritesContextProps {
  favourites: Product[];
  addToFavourites: (product: Product) => void;
  removeFromFavourites: (id: string) => void;
  isInFavourites: (id: string) => boolean;
}

const FAVOURITES_STORAGE_KEY = 'ecommerce-favourites-items';

const getStoredFavourites = (): Product[] => {
  if (typeof window === 'undefined') return [];
  try {
    const storedFavourites = localStorage.getItem(FAVOURITES_STORAGE_KEY);
    return storedFavourites ? JSON.parse(storedFavourites) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
};

const storeFavourites = (favourites: Product[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(FAVOURITES_STORAGE_KEY, JSON.stringify(favourites));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};

const FavouritesContext = createContext<FavouritesContextProps | undefined>(undefined);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<Product[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize favourites from localStorage
  useEffect(() => {
    const savedFavourites = getStoredFavourites();
    setFavourites(savedFavourites);
    setIsInitialized(true);
  }, []);

  // Save favourites to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      storeFavourites(favourites);
    }
  }, [favourites, isInitialized]);

  const addToFavourites = (product: Product) => {
    setFavourites((prevFavourites) => {
      const existingItem = prevFavourites.find(item => item.id === product.id);
      if (existingItem) {
        return prevFavourites;
      }
      return [...prevFavourites, product];
    });
  };

  const removeFromFavourites = (id: string) => {
    setFavourites((prevFavourites) => prevFavourites.filter((item) => item.id !== id));
  };

  const isInFavourites = (id: string) => {
    return favourites.some(item => item.id === id);
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites, isInFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
};
