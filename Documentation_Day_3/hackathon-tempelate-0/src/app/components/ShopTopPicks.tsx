import Link from "next/link";
import { client } from "@/sanity/lib/client";

const getData = async () => {
  const res = await client.fetch(
    `*[_type == "product"]{
    id,
    name,
    "imageUrl":image.asset->url,
    price
    }`
  )
  return (res)
}


export default async function ShopTopPicks() {
    const products = await getData();

    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product:any) => (
                        <div
                            key={product.id}
                            className="text-center p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-80 rounded-md mb-4 object-cover object-center"
                            />
                            <h3 className="text-lg font-medium">{product.name}</h3>
                            <p className="text-sm font-semibold text-gray-700">
                                ${product.price}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <nav className="flex gap-4">
                        <button className="px-4 py-2  bg-[#FBEBB5] rounded-md hover:bg-gray-100">1</button>
                        <button className="px-4 py-2  rounded-md hover:bg-[#FBEBB5]"><Link href={'/Blog'}>2</Link></button>
                        <button className="px-4 py-2  rounded-md hover:bg-[#FBEBB5]"><Link href={'/Blog'}>3</Link></button>
                        <button className="px-4 py-2  rounded-md hover:bg-[#FBEBB5]"><Link href={'/Blog'}>Next</Link></button>
                    </nav>
                </div>
            </div>
        </section>
    );
}
