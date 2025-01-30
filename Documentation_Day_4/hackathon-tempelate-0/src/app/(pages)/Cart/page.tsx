import React from 'react'
import Navbar from '../../components/Navbar'
import ShopFooterTop from '../../components/ShopFooterTop'
import CartMiddle from '../../components/CartMiddle'
import Hero from '@/app/components/Hero'

export default function Cart() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <CartMiddle/>
        <ShopFooterTop/>
      
    </div>
  )
}
