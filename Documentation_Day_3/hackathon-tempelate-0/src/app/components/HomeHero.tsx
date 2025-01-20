import Image from 'next/image';
import Link from 'next/link';

const HomeHero = () => {
    return (
        <section className="flex items-center justify-center py-16 px-8 max-w-[1440px] mx-auto">
            <div className="space-y-4 w-full md:w-1/2 xl:pl-72 lg:pl-50 md:pl-20">
                <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-black">Rocket Single <br />Seater</h2>
                <button className="text-black underline underline-offset-8 font-bold">
                    <Link href={'/Shop'}>
                    Shop Now
                    </Link>
                </button>
            </div>
            <div className="flex items-end justify-center w-full md:w-1/2">
                <div>
                    <Image
                        src={"/images/Rocket single seater 1.png"}  
                        alt="Rocket Single Seater"
                        width={553}
                        height={400}
                        className=""
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeHero;

