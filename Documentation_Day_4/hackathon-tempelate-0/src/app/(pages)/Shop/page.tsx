"use client"

import { useState } from "react"
import Navbar from "../../components/Navbar"
import ShopFilter from "../../components/ShopFilter"
import ShopFooterTop from "../../components/ShopFooterTop"
import ShopTopPicks from "../../components/ShopTopPicks"
import Hero from "../../components/Hero"

export default function Shop() {
  const [filter, setFilter] = useState("")
  const [sort, setSort] = useState("default")
  const [itemsPerPage, setItemsPerPage] = useState(7)

  return (
    <>
      <Navbar />
      <Hero />
      <ShopFilter onFilterChange={setFilter} onSortChange={setSort} onItemsPerPageChange={setItemsPerPage} />
      <ShopTopPicks filter={filter} sort={sort} itemsPerPage={itemsPerPage} />
      <ShopFooterTop />
    </>
  )
}

