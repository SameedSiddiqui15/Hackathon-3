"use client"
import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useFavourites } from "@/context/FavouritesContext"
import { AiOutlineCheckCircle, AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { FaArrowRightLong } from "react-icons/fa6"

interface Product {
  id: string
  name: string
  price: string
  category: string
  description: string
  image: {
    asset: {
      _ref: string
    }
  }
  discountPercentage: number
}

interface ShopTopPicksProps {
  filter: string
  sort: string
  itemsPerPage: number
}

const ShopTopPicks: React.FC<ShopTopPicksProps> = ({ filter, sort, itemsPerPage }) => {
  const { addToCart } = useCart()
  const { addToFavourites, removeFromFavourites, isInFavourites } = useFavourites()
  const [products, setProducts] = useState<Product[]>([])
  const [showAlert, setShowAlert] = useState(false)
  const [alertProduct, setAlertProduct] = useState<string>("")
  const [currentPage, setCurrentPage] = useState(1)

  const getData = useCallback(async () => {
    let query = `*[_type == "product"`

    if (filter) {
      query += ` && category == "${filter}"`
    }

    query += `]{
      id,
      name,
      description,
      image,
      price,
      discountPercentage,
      category
    }`

    if (sort === "price_asc") {
      query += " | order(price asc)"
    } else if (sort === "price_desc") {
      query += " | order(price desc)"
    }

    const res = await client.fetch(query)
    setProducts(res)
  }, [filter, sort])

  useEffect(() => {
    getData()
  }, [getData])

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 })
    setAlertProduct(product.name)
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 1000)
  }

  const totalPages = Math.ceil(products.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage)

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (!products) {
    return (
      <div className="min-h-[300px] flex items-center justify-center bg-white">
      <div className="loader-elegant">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-text-elegant">Loading...</div>
      </div>
    </div>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col justify-center hover:shadow-xl transition-shadow rounded-lg shadow-md"
            >
              <div className="relative w-full">
                <Link href={`/SingleProduct/${product.id}`}>
                  <img
                    src={urlFor(product.image).url() || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-72 mb-1 object-cover object-center rounded-t-xl"
                  />
                </Link>
                <button
                  onClick={() =>
                    isInFavourites(product.id) ? removeFromFavourites(product.id) : addToFavourites(product)
                  }
                  className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:scale-110 transition-transform duration-200"
                >
                  {isInFavourites(product.id) ? (
                    <AiFillHeart className="w-6 h-6 text-pink-600" />
                  ) : (
                    <AiOutlineHeart className="w-6 h-6 text-gray-900" />
                  )}
                </button>
                {product.discountPercentage > 0 && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-sm font-semibold py-1 px-2 rounded-2xl">
                    {product.discountPercentage}% Off
                  </span>
                )}
              </div>
              <div className="p-4">
                <Link href={`/SingleProduct/${product.id}`}>
                  <h3 className="text-lg md:text-xl font-bold ">{product.name}</h3>
                  <p className="text-sm md:text-base text-slate-600">{product.description}</p>
                  <p className="text-md font-bold text-gray-900 text-end">${product.price}</p>
                </Link>
                <div className="sm:flex sm:space-x-2 justify-between">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-2 w-full bg-[#ffe9a1] text-black py-2 px-4 rounded-lg font-medium hover:bg-amber-200 transition-colors duration-300 hover:shadow-sm"
                  >
                    <AiOutlineShoppingCart className="inline-block sm:hidden w-5 h-5 mr-1" /> Add to Cart
                  </button>
                  <Link href={`/SingleProduct/${product.id}`} className="w-full">
                    <button className="mt-2 w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-950 transition-colors duration-300 hover:shadow-sm">
                      View Details <FaArrowRightLong className="inline-block sm:hidden w-5 h-5 ml-1" size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 justify-center mt-10">
          {currentPage > 1 && (
            <button
              onClick={handlePrev}
              className="bg-amber-100 hover:bg-[#ffe4b3] text-sm font-medium rounded-md py-2 px-3"
            >
              Previous
            </button>
          )}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`bg-amber-100 hover:bg-[#ffe4b3] text-sm font-medium rounded-md py-2 px-3 ${currentPage === i + 1 ? "bg-[#ffd480]" : ""}`}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={handleNext}
              className="bg-amber-100 hover:bg-[#ffe4b3] text-sm font-medium rounded-md py-2 px-3"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm mx-4 transform transition-transform duration-300 ease-in-out scale-100 opacity-100">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                <AiOutlineCheckCircle className="text-green-600 text-2xl" />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-lg">All Set!</p>
                <p className="text-gray-600 text-md">{alertProduct} has been added to your cart.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ShopTopPicks


