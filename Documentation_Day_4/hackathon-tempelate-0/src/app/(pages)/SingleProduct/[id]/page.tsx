"use client"
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import Navbar from '../../../components/Navbar'
import SingleProductAsgaardSofa from '../../../components/SingleProductAsgaardSofa'
import SingleProductDescription from '../../../components/SingleProductDescription'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'


export default function SingleProduct() {
    const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
    const fetchProduct = async () => {
        if (!id) return;
    
        const query = `*[_type == "product" && id == "${id}"]{
          name
        }`;
        const res = await client.fetch(query);
        setProduct(res[0]);
      };
    
      useEffect(() => {
        fetchProduct();
      }, [id]);
    return (
        <div>
            <Navbar />
            <div className="max-w-[1440px] mx-auto py-8 px-4 ">
                <ul className="flex items-center">
                    <li className="mr-1"><Link href="/" className="hover:text-gray-700">Home</Link></li>
                    <FaAngleRight />
                    <li className="mr-1"><Link href="/Shop" className="hover:text-gray-700">Shop</Link></li>
                    <FaAngleRight />
                    <li className="ml-4 border-l-2 px-4 border-[#9F9F9F]">
                        <Link href={`/SingleProduct/${id}`} className="hover:text-gray-700">
                            {product?.name}
                        </Link>
                    </li>
                </ul>
            </div>
            <SingleProductAsgaardSofa/>
            <SingleProductDescription />            
        </div>

        
    )
}
