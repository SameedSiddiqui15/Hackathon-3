import React from 'react'
import Navbar from '../components/Navbar'
import CheckoutHero from '../components/CheckoutHero'
import ShopFooterTop from '../components/ShopFooterTop'
import CheckoutMiddle from '../components/CheckoutMiddle'

export default function Checkout() {
  return (
    <div>
        <Navbar/>
        <CheckoutHero/>
        <CheckoutMiddle />
        <ShopFooterTop/>
      
    </div>
  )
}
