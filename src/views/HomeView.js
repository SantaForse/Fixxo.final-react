import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'


const HomeView = ({ products = [], items = []}) => {
  window.top.document.title = 'Fixxo.'

  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Featured Products" items={items} />
      <FooterSection />
    </>
  )
}

export default HomeView