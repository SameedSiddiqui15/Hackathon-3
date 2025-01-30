import React from 'react'
import Navbar from '../../components/Navbar'
import AccountForm from '../../components/AccountForm'
import ShopFooterTop from '../../components/ShopFooterTop'
import Hero from '@/app/components/Hero'

export default function Account() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AccountForm />
      <ShopFooterTop/>
    </div>
  )
}
