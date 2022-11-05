import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'


const CategoriesView = () => {
  window.top.document.title = 'Categories | Fixxo.'
  
  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Categories" />
      <ProductGridSection title="Products" />
      <FooterSection />
    </>
  )
}

export default CategoriesView