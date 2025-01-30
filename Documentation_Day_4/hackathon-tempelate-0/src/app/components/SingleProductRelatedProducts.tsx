import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from "@/sanity/lib/image";
import { useFavourites } from '@/context/FavouritesContext';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function SingleProductRelatedProducts({ category }: { category: string }) {
  const { addToFavourites, removeFromFavourites, isInFavourites } = useFavourites();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const query = `*[_type == "product" && category == "${category}"]{
                  id,
                  name,
                  price,
                  description,
                  image,
                  discountPercentage,
                  category,
                  stockLevel,
                }`;
        const products = await client.fetch(query, { category });
        setRelatedProducts(products);
      } catch (err) {
        setError('Failed to fetch related products. Please try again later.');
        console.error(err);
      }
    };

    fetchRelatedProducts();
  }, [category]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-2xl font-semibold text-center my-4">
          Related Products
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/SingleProduct/${relatedProduct.id}`}>
                <div className="border rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <Image
                      src={urlFor(relatedProduct.image).url()}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => isInFavourites(relatedProduct.id) 
                        ? removeFromFavourites(relatedProduct.id)
                        : addToFavourites(relatedProduct)
                      }
                      className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:scale-110 transition-transform duration-200"
                    >
                      {isInFavourites(relatedProduct.id) ? (
                        <AiFillHeart className="w-6 h-6 text-pink-600" />
                      ) : (
                        <AiOutlineHeart className="w-6 h-6 text-gray-900" />
                      )}
                    </button>
                    {relatedProduct.discountPercentage > 0 && (
                      <span className="absolute top-2 left-2 bg-green-500 text-white text-sm font-semibold py-1 px-2 rounded-2xl">
                        {relatedProduct.discountPercentage}% Off
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                    {relatedProduct.description && (
                      <p className="text-sm text-gray-500 mb-2">{relatedProduct.description}</p>
                    )}
                    <p className="text-gray-600 mb-2">{relatedProduct.category}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold">${relatedProduct.price}</p>
                    {relatedProduct.stockLevel !== undefined && (
                      <p className="text-sm mt-2">
                        {relatedProduct.stockLevel > 5 ? `In Stock (${relatedProduct.stockLevel})` : `Low Stock (${relatedProduct.stockLevel})`}
                      </p>
                    )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </section>
  );
}