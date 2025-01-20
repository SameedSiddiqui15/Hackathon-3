import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="mb-6 md:mb-0 flex items-center justify-center md:justify-start px-2 text-center md:text-left">
            <p className="text-sm px-3 md:px-0">
              400 University Drive, Suite 200, Coral Gables,
              <br className="lg:block hidden" />
              FL 33134, USA
            </p>
          </div>
 
          <div className="flex justify-between sm:justify-around gap-8 col-span-1 md:col-span-1">
            
            <div className="text-start">
              <h3 className="text-gray-400 text-lg mb-4">Links</h3>
              <ul>
                <li className="mb-4">
                  <Link href="/" className="hover:text-gray-500">Home</Link>
                </li>
                <li className="mb-4">
                  <Link href="/Shop" className="hover:text-gray-500">Shop</Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:text-gray-500">About</Link>
                </li>
                <li className="mb-4">
                  <Link href="/Contact" className="hover:text-gray-500">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="text-start">
              <h3 className="text-gray-400 text-lg mb-4">Help</h3>
              <ul>
                <li className="mb-4">
                  <Link href="/Checkout" className="hover:text-gray-500">Payment Options</Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:text-gray-500">Returns</Link>
                </li>
                <li className="mb-4">
                  <Link href="/Blog" className="hover:text-gray-500">Privacy Policies</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center md:text-start">
            <h3 className="text-gray-400 text-lg mb-4">Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border-b-2 border-gray-500 bg-transparent py-2 mb-4 w-7/12 md:w-full lg:w-7/12"
              />
              <button className="text-black hover:text-gray-800 border-b-2 border-gray-500 font-bold py-2 ml-4 md:ml-0 lg:ml-4">
                <Link href={"/Account"}>
                SUBSCRIBE
                </Link>
              </button>
            </form>
          </div>
        </div>
        
        {/* Divider Line */}
        <hr className="my-8 border-gray-200" />
        
        {/* Footer Bottom */}
        <div className="text-center md:text-start">
          <p className="text-sm text-black">
            &copy; 2022 Meubel House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
