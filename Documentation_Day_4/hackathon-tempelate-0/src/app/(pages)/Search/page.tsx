"use client"
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getProducts } from '@/utils/mock'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { urlFor } from '@/sanity/lib/image'
import { useFavourites } from '@/context/FavouritesContext'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Hero from '@/app/components/Hero'
import ShopFilter from '../../components/ShopFilter' // Import the ShopFilter component

export default function SearchPage() {
  const searchParams = useSearchParams()
  const { addToFavourites, removeFromFavourites, isInFavourites } = useFavourites()
  const query = searchParams.get('q')
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [filteredResults, setFilteredResults] = useState<Product[]>([]) // Filtered products state
  const [loading, setLoading] = useState(false)

  const [filterCategory, setFilterCategory] = useState<string>("")
  const [sortOrder, setSortOrder] = useState<string>("default")
  const [itemsPerPage, setItemsPerPage] = useState<number>(7)

  // Fetch products based on search query and filter logic
  useEffect(() => {
    async function fetchAndFilterProducts() {
      if (query) {
        setLoading(true)
        try {
          const allProducts = await getProducts()
          const filteredProducts = allProducts.filter(product => {
            const searchTerm = query.toLowerCase()
            const name = product.name.toLowerCase()
            const category = product.category?.toLowerCase() || ''
            const description = product.description?.toLowerCase() || ''

            return name.includes(searchTerm) || 
                   category.includes(searchTerm) || 
                   description.includes(searchTerm)
          })
          setSearchResults(filteredProducts)
        } catch (error) {
          console.error('Error fetching products:', error)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchAndFilterProducts()
  }, [query])

  // Handle filter changes from ShopFilter
  const handleFilterChange = (category: string) => {
    setFilterCategory(category)
  }

  const handleSortChange = (sort: string) => {
    setSortOrder(sort)
  }

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items)
  }

  // Apply the filters after the data has been fetched
  useEffect(() => {
    let filtered = [...searchResults]

    // Apply category filter
    if (filterCategory) {
      filtered = filtered.filter(product => product.category === filterCategory)
    }

    // Apply sorting
    if (sortOrder === 'price_asc') {
      filtered = filtered.sort((a, b) => Number(a.price) - Number(b.price))
    } else if (sortOrder === 'price_desc') {
      filtered = filtered.sort((a, b) => Number(b.price) - Number(a.price))
    }

    // Set filtered results
    setFilteredResults(filtered.slice(0, itemsPerPage))
  }, [searchResults, filterCategory, sortOrder, itemsPerPage])

  if (!query) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-700">Please enter a search term</h2>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center bg-white">
        <div className="loader-elegant">
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <div className="loader-text-elegant">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <ShopFilter 
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Search Results for: {query}</h1>
        {filteredResults.length === 0 ? (
          <p className="text-gray-600">No products found matching your search. Please try a different search According to the Furniture.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResults.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-64">
                  <Link href={`/SingleProduct/${product.id}`}>
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </Link>
                    <button
                      onClick={() => isInFavourites(product.id)
                        ? removeFromFavourites(product.id)
                        : addToFavourites(product)
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
                  <Link href={`/SingleProduct/${product.id}`}>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    {product.description && (
                      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                    )}
                    <p className="text-gray-600 mb-2">{product.category}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold">${product.price}</p>
                      {product.stockLevel !== undefined && (
                        <p className="text-sm mt-2">
                          {product.stockLevel > 5 ? `In Stock (${product.stockLevel})` : `Low Stock (${product.stockLevel})`}
                        </p>
                      )}
                    </div>
                  </div>
                  </Link>
                </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
