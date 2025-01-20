import Link from "next/link";

export default function NewArrival() {
    return (
      <section className="py-12">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      
          <div className="lg:w-3/4 md:w-2/3 ">
            <img
              src="/images/Asgaard sofa 1.png"
              alt="Asgaard Sofa"
              className="w-full h-auto"
            />
          </div>
  
          <div className="lg:w-1/4 md:w-1/3 text-center mt-8 lg:mt-0">
            <p className="text-lg font-semibold mb-2">New Arrivals</p>
            <h1 className="text-4xl font-extrabold mb-6">Asgaard sofa</h1>
            <button className="px-16 py-3 border border-gray-800 text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition">
              <Link href={"/SingleProduct"}>
              Order Now
              </Link>
            </button>
          </div>
        </div>
      </section>
    );
  }
  