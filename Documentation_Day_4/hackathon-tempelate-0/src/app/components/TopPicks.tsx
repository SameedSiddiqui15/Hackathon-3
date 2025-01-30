"use client"
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function TopPicks() {
    const [products, setProducts] = useState<Product[]>([]);

    const getData = async () => {
        const query = `
            *[_type == "product"][7..10]{
                id,
                name,
                image,
                price,
            }`;
        const res = await client.fetch(query);
        setProducts(res);
      };
    
      useEffect(() => {
        getData();
      }, []);
  
    return (
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Top Picks For You
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Find a bright idea to suit your taste with our great selection of
            suspension, floor, and table lights.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product:Product) => (
              <div
                key={product.id}
                className="text-center p-4 flex flex-col items-center hover:shadow-md transition-shadow"
              ><Link href={"/Shop"}>
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  className="w-full h-auto rounded-md mb-4"
                  width={200}
                  height={200}
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-sm font-semibold text-gray-700">
                  ${product.price}
                </p>
                </Link>
              </div>
            ))}
          </div>
  
          <button className="mt-4 px-6 py-2 font-bold text-xl mx-auto block underline underline-offset-8 text-black">
          <Link href={'/Shop'}>
            View More
            </Link>
          </button>
        </div>
      </section>
    );
  }
  