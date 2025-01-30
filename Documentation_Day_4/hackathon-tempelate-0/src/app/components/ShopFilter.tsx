"use client"

import { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"

interface ShopFilterProps {
  onFilterChange: (filter: string) => void
  onSortChange: (sort: string) => void
  onItemsPerPageChange: (itemsPerPage: number) => void
}

export default function ShopFilter({ onFilterChange, onSortChange, onItemsPerPageChange }: ShopFilterProps) {
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [sortBy, setSortBy] = useState<string>("default")
  const [itemsPerPage, setItemsPerPage] = useState<number>(7)

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "product"].category`
      const result = await client.fetch(query) as string[]; 
      const uniqueCategories = Array.from(new Set(result));
      setCategories(uniqueCategories);
    }
    fetchCategories()
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onFilterChange(category)
  }

  const handleSortChange = (sort: string) => {
    setSortBy(sort)
    onSortChange(sort)
  }

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items)
    onItemsPerPageChange(items)
  }

  return (
    <div style={{ backgroundColor: "#FAF4F4" }}>
      <div className="max-w-[1440px] mx-auto gap-4 flex flex-col md:flex-row md:justify-between py-4 px-5">
        <div className="flex justify-around sm:justify-center items-center gap-2">
          <select
            className="px-2 py-3 rounded-sm"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <span className="text-sm border-l border-gray-800 py-2 px-4 text-gray-500">
            <span className="hidden sm:inline-block">Showing</span> Filtered Results
          </span>
        </div>
        <div className="flex justify-evenly sm:justify-center items-center gap-3">
          <span className="hidden sm:block">Show</span>
          <select
            className="px-2 py-3 text-gray-500 rounded-sm"
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
          >
            <option value={7}>7</option>
            <option value={14}>14</option>
            <option value={21}>21</option>
          </select>
          <span className="hidden sm:block">Sort by</span>
          <select
            className="px-2 py-3 text-gray-500 rounded-sm"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  )
}
