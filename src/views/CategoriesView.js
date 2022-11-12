import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MainMenuWhiteSection from '../sections/MainMenuWhiteSection'


const CategoriesView = () => {
  window.top.document.title = 'Categories | Fixxo.'
  
  return (
    <>
      <MainMenuWhiteSection />
      <BreadcrumbSection currentPage="Categories" />
      <ProductGridSection title="Products" />
      <FooterSection />
    </>
  )
}

export default CategoriesView