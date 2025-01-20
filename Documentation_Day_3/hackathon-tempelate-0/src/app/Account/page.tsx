import React from 'react'
import Navbar from '../components/Navbar'
import AccountHero from '../components/AccountHero'
import AccountForm from '../components/AccountForm'
import ShopFooterTop from '../components/ShopFooterTop'

export default function Account() {
  return (
    <div>
      <Navbar />
      <AccountHero />
      <AccountForm />
      <ShopFooterTop/>
    </div>
  )
}
