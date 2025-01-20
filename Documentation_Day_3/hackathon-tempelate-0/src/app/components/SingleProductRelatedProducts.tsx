import Image from "next/image";
import Link from "next/link";

export default function SingleProductRelatedProducts() {
    const products = [
      {
        id: 1,
        image: "/images/Trenton modular sofa_3 1.png",
        title: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
      },
      {
        id: 2,
        image: "/images/Granite dining table with dining chair 1.png",
        title: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
      },
      {
        id: 3,
        image: "/images/Outdoor bar table and stool 1.png",
        title: "Outdoor bar table and stool",
        price: "Rs. 25,000.00",
      },
      {
        id: 4,
        image: "/images/Plain console with teak mirror 1.png",
        title: "Plain console with teak mirror",
        price: "Rs. 25,000.00",
      },
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center my-4">
            Related Products
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="text-center p-4 flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto rounded-md mb-4"
                  width={200}
                  height={200}
                />
                <h3 className="text-lg font-medium">{product.title}</h3>
                <p className="text-sm font-semibold text-gray-700">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
  
          <button className="mt-16 px-6 py-2 font-bold text-xl mx-auto block underline underline-offset-8 text-black">
            <Link href={"/Shop"}>
            View More
            </Link>
          </button>
        </div>
      </section>
    );
  }
  