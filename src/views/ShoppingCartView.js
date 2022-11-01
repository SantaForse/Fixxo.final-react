import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const ShoppingCartView = () => {
  window.top.document.title = 'Shopping cart | Fixxo.'
  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default ShoppingCartView