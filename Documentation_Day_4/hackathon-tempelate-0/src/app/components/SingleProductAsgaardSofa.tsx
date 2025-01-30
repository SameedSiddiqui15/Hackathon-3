"use client";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "@/context/CartContext";
import { useFavourites } from '@/context/FavouritesContext';
import PopUpCart from "./PopUpCart";
import SingleProductRelatedProducts from './SingleProductRelatedProducts';
import ProductReviews from './ProductReviews';

export default function SingleProductAsgaardSofa() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isCartOpen, toggleCart } = useCart();
  const { addToFavourites, removeFromFavourites, isInFavourites } = useFavourites();

  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  const fetchProduct = async () => {
    if (!id) return;

    const query = `*[_type == "product" && id == "${id}"]{
      id,
      name,
      price,
      description,
      image,
      discountPercentage,
      category,
      stockLevel,
      isFeaturedProduct,
    }`;

    const res = await client.fetch(query);

    if (res && res.length > 0) {
      setProduct(res[0]);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[300px] flex items-center justify-center bg-white">
      <div className="loader-elegant">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-text-elegant">Loading...</div>
      </div>
    </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:py-8 pb-8 sm:pb-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-row justify-center space-y-4 col-span-1">
          {/* <div className="flex flex-col sm:space-y-8 space-y-2 justify-center sm:justify-start mt-4 lg:mr-10 md:mr-8 sm:mr-5 mr-2">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={urlFor(product.image).width(500).url()}
                alt={product.name}
                className="w-16 h-16 object-contain rounded-lg bg-[#FFF9E5]"
              />
            ))}
          </div> */}
          <div className="aspect-w-1 aspect-h-1 items-center flex sm:block relative">
            <img
              src={urlFor(product.image).width(500).url()}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg bg-[#FFF9E5]"
            />
            <button
              onClick={() => {
                if (isInFavourites(product.id)) {
                  removeFromFavourites(product.id);
                } else {
                  addToFavourites(product);
                }
              }}
              className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:scale-110 transition-transform duration-200"
            >
              {isInFavourites(product.id) ? (
                <AiFillHeart className="w-6 h-6 text-pink-600" />
              ) : (
                <AiOutlineHeart className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
        <div className="space-y-6 max-w-xl lg:max-w-3xl col-span-1">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-xl text-gray-800">${product.price}</p>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                {product.discountPercentage}% OFF
              </span>
              {product.isFeaturedProduct && (
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  Featured Product
                </span>
              )}
            </div>

            <div className="flex items-center">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${product.stockLevel > 10
                ? 'bg-green-100 text-green-600'
                : product.stockLevel > 0
                  ? 'bg-yellow-100 text-yellow-600'
                  : 'bg-red-100 text-red-600'
                }`}>
                {product.stockLevel > 10
                  ? 'In Stock'
                  : product.stockLevel > 0
                    ? `Low Stock (${product.stockLevel} left)`
                    : 'Out of Stock'}
              </div>
            </div>

          </div>

          <div className="text-sm text-gray-600">
            <p>SKU: SS001</p>
            <p>Category: {product.category}</p>
            <p>Tags: Sofa, Chair, table, bed</p>
            <div className="flex items-center space-x-4 gap-2">
              Share:
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(product.name)}`} className="text-black hover:text-gray-950">
                <FaFacebook />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(product.name)}`} className="text-black hover:text-gray-950">
                <FaLinkedin />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(product.name)}`} className="text-black hover:text-gray-950">
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4 pb-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              min={1}
              className="w-16 px-2 py-1 border border-gray-300 rounded-md"
            />
            <button
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  description: product.description,
                  image: urlFor(product.image).width(100).url(),
                  quantity: quantity
                });
                setQuantity(1);
              }}
              className="px-6 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
          {/* <hr /> */}
        </div>
      </div>
      <ProductReviews />
      <PopUpCart />
      {isCartOpen && (
        <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={toggleCart}
        />
      )}
      {product && <SingleProductRelatedProducts category={product.category} />}
    </div>
  );
};





