import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'

const ShoppingCartView = () => {
  window.top.document.title = 'Shopping cart | Fixxo.'
  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Shopping Cart" />
      <FooterSection />
    </>
  )
}

export default ShoppingCartView