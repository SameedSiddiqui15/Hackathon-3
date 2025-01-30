import React from 'react'
import Navbar from '../../components/Navbar'
import ShopFooterTop from '../../components/ShopFooterTop'
import CheckoutMiddle from '../../components/CheckoutMiddle'
import Hero from '@/app/components/Hero'

export default function Checkout() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <CheckoutMiddle/>
        <ShopFooterTop/>

    </div>
  )
}

