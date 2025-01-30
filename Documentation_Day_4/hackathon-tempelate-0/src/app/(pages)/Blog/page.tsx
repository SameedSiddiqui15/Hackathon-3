import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '@/app/components/Hero'
import ShopFooterTop from '../../components/ShopFooterTop'
import BlogMiddle from '../../components/BlogMiddle'

export default function Blog() {
  return (
    <div>
        <Navbar />
        <Hero />
        <BlogMiddle />
        <ShopFooterTop/>
    </div>
  )
}
