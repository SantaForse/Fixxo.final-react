import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'


const CategoriesView = ({items = []}) => {
  window.top.document.title = 'Categories | Fixxo.'
  
  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Categories" />
      <ProductGridSection title="Products" items={items} />
      <FooterSection />
    </>
  )
}

export default CategoriesView