import React from 'react'
import Navbar from '../components/Navbar'
import CartHero from '../components/CartHero'
import ShopFooterTop from '../components/ShopFooterTop'
import CartMiddle from '../components/CartMiddle'

export default function Cart() {
  return (
    <div>
        <Navbar/>
        <CartHero/>
        <CartMiddle/>
        <ShopFooterTop/>
      
    </div>
  )
}
