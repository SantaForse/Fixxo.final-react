import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContext } from '../contexts/contexts'


const ProductsView = () => {
  const productContext = useContext(ProductContext)
  window.top.document.title = 'Products | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="All Products" items={productContext.all} />
      <FooterSection />
    </>
  )
}

export default ProductsView