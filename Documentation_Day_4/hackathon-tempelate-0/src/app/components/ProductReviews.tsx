"use client";

import React, { useState, useEffect } from "react";
import { db, Review } from "@/lib/db";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function ReviewComponent() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState<Review>({
    name: "",
    comment: "",
    rating: 5,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await db.reviews.toArray();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    if (isEditing && editId !== null) {
      await db.reviews.update(editId, newReview);
      setIsEditing(false);
      setEditId(null);
    } else {
      await db.reviews.add(newReview);
    }

    setNewReview({ name: "", comment: "", rating: 5 });
    setReviews(await db.reviews.toArray());
  };

  const handleEdit = (review: Review) => {
    setNewReview(review);
    setIsEditing(true);
    setEditId(review.id || null);
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this review?");
    if (confirmDelete) {
      await db.reviews.delete(id);
      setReviews(await db.reviews.toArray());
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-amber-100 shadow-lg rounded-lg mt-8">

      <div className="">
        <h3 className="text-lg font-semibold mb-2">{isEditing ? "Edit Your Review" : "Share Your Review"}</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newReview.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md bg-white"
          />
          <textarea
            name="comment"
            placeholder="Your Review"
            value={newReview.comment}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md bg-white"
          />

          {/* Rating Dropdown */}
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md bg-white"
          >
            <option value={1}>⭐ 1</option>
            <option value={2}>⭐⭐ 2</option>
            <option value={3}>⭐⭐⭐ 3</option>
            <option value={4}>⭐⭐⭐⭐ 4</option>
            <option value={5}>⭐⭐⭐⭐⭐ 5</option>
          </select>
          <div className="text-center">  
          <button type="submit" className="bg-black text-white py-2 px-4 rounded-lg  hover:bg-gray-800 transition">
            {isEditing ? "Update Review" : "Submit Review"}
          </button>
          </div>
        </form>
      </div>
            <h2 className="text-2xl font-semibold mb-4 mt-6">User Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded-lg shadow-sm flex justify-between items-center bg-white">
            <div>
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-600">{review.comment}</p>
              <p className="text-yellow-500">⭐ {review.rating} / 5</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(review)} className="text-green-600 hover:text-green-800">
                <AiOutlineEdit className="w-7 h-7" />
              </button>
              <button onClick={() => handleDelete(review.id!)} className="text-red-600 hover:text-red-800">
                <AiOutlineDelete className="w-7 h-7" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
