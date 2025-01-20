import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import SingleProductAsgaardSofa from '../components/SingleProductAsgaardSofa'
import SingleProductDescription from '../components/SingleProductDescription'
import SingleProductRelatedProducts from '../components/SingleProductRelatedProducts'

export default function SingleProduct() {
    
    return (
        <div>
            <Navbar />
            <div className="max-w-[1440px] mx-auto py-8 px-4 ">
                <ul className="flex items-center">
                    <li className="mr-1"><Link href="/" className="hover:text-gray-700">Home</Link></li>
                    <FaAngleRight />
                    <li className="mr-1"><Link href="/Shop" className="hover:text-gray-700">Shop</Link></li>
                    <FaAngleRight />
                    <li className="ml-4 border-l-2 px-4 border-[#9F9F9F]"><Link href="/SingleProduct" className="hover:text-gray-700">Asgaard sofa</Link></li>
                </ul>
            </div>
            <SingleProductAsgaardSofa />
            <SingleProductDescription />
            <SingleProductRelatedProducts />
            
        </div>

        
    )
}
