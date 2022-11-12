import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MainMenuWhiteSection from '../sections/MainMenuWhiteSection'

const ShoppingCartView = () => {
  window.top.document.title = 'Shopping cart | Fixxo.'
  return (
    <>
      <MainMenuWhiteSection />
      <BreadcrumbSection currentPage="Shopping Cart" />
      <FooterSection />
    </>
  )
}

export default ShoppingCartView