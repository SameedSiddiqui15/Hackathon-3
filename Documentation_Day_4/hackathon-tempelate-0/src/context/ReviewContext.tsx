"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { db, Review } from "@/lib/db";

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Review) => Promise<void>;
  editReview: (id: number, updatedReview: Review) => Promise<void>;
  deleteReview: (id: number) => Promise<void>;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const ReviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await db.reviews.toArray();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  const addReview = async (review: Review) => {
    await db.reviews.add(review);
    setReviews(await db.reviews.toArray()); // Refresh UI
  };

  const editReview = async (id: number, updatedReview: Review) => {
    await db.reviews.update(id, updatedReview);
    setReviews(await db.reviews.toArray()); // Refresh UI
  };

  const deleteReview = async (id: number) => {
    await db.reviews.delete(id);
    setReviews(await db.reviews.toArray()); // Refresh UI
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, editReview, deleteReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error("useReviews must be used within a ReviewProvider");
  }
  return context;
};
