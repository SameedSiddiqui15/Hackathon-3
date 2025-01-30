"use client"
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Hero from "@/app/components/Hero";
import { useFavourites } from "@/context/FavouritesContext";
import { useCart } from "@/context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { urlFor } from "@/sanity/lib/image";

export default function FavouritesPage() {
  const { favourites, removeFromFavourites } = useFavourites();
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1 });
    removeFromFavourites(product.id);
  };
  const handleRemoveFromFavourites = (productId: string) => {
    if (window.confirm('Are you sure you want to remove this product from your favourites?')) {
      removeFromFavourites(productId);
    }
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">My Favourites</h1>
        {favourites.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Your favourites list is empty</p>
            <Link href="/Shop">
              <button className="bg-[#ffe9a1] text-black px-6 py-2 rounded-lg font-medium hover:bg-amber-200 transition-colors duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favourites.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative">
                  <Link href={`/SingleProduct/${product.id}`}>
                    <img
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  </Link>
                </div>
                <div className="p-4">
                <Link href={`/SingleProduct/${product.id}`}>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-lg font-bold mb-4">${product.price}</p>
                </Link>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-[#ffe9a1] text-black py-2 px-4 rounded-lg font-medium hover:bg-amber-200 transition-colors duration-300"
                    >
                      <AiOutlineShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={() => handleRemoveFromFavourites(product.id)}
                      className="p-2 text-gray-600 hover:text-slate-950 transition-colors duration-300"
                      aria-label="Remove from favourites"
                    >
                      <FiTrash2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
