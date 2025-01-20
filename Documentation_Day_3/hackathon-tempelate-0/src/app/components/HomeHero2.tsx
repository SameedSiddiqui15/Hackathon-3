import Image from 'next/image';
import Link from 'next/link';

const HomeHero2 = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">

        <div className="items-center py-6 sm:p-6 sm:py-0">
          <div className="w-full mb-4">
            <Image
              src="/images/Granite square side table 1.png" 
              alt="Side Table"
              width={300}
              height={200}
              className="object-cover rounded-md mx-auto"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Side Table</h3>
          <button className="mt-4 text-black underline underline-offset-8">
            <Link href={'/Shop'}>
            View More
            </Link>
          </button>
        </div>

        <div className="items-center py-6 sm:p-6 sm:py-0">
          <div className="w-full mb-4">
            <Image
              src="/images/Cloud sofa three seater + ottoman_3 1.png"
              alt="Side Chair"
              width={300}
              height={200}
              className="object-cover rounded-md mx-auto"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-8">Side Chair</h3>
          <button className="mt-4 text-black underline underline-offset-8">
            <Link href={'/Shop'}>
            View More
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero2;
