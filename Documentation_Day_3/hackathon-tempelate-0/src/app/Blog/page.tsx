import React from 'react'
import Navbar from '../components/Navbar'
import BlogHero from '../components/BlogHero'
import ShopFooterTop from '../components/ShopFooterTop'
import BlogMiddle from '../components/BlogMiddle'

export default function Blog() {
  return (
    <div>
        <Navbar />
        <BlogHero />
        <BlogMiddle />

        <ShopFooterTop/>
      
    </div>
  )
}
