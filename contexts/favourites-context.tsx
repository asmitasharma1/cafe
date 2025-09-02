"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  is_vegetarian?: boolean;
}

interface FavoritesContextType {
  favorites: MenuItem[];
  addToFavorites: (item: MenuItem) => void;
  removeFromFavorites: (itemId: number) => void;
  isFavorite: (itemId: number) => boolean;
  clearFavorites: () => void;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<MenuItem[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("cafe-favorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("cafe-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (item: MenuItem) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === item.id)) {
        return prev; // Already in favorites
      }
      return [...prev, item];
    });
  };

  const removeFromFavorites = (itemId: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== itemId));
  };

  const isFavorite = (itemId: number) => {
    return favorites.some((item) => item.id === itemId);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        clearFavorites,
        favoritesCount: favorites.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}